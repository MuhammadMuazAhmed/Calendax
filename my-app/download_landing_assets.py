#!/usr/bin/env python3
"""
Download assets referenced by a single rendered landing page.

Usage (run from your React project root):
    python download_landing_assets.py
    python download_landing_assets.py https://calendex-preprod.plexaar.com/
    python download_landing_assets.py https://calendex-preprod.plexaar.com/ public/assets

Install dependencies:
    pip install playwright requests
    python -m playwright install chromium

The script visits only the supplied page (it does not crawl links to other pages).
It collects rendered image/video/source URLs, CSS background images, linked stylesheets,
font files, and assets requested by the page while it loads/scrolls. Assets may still be
missed if they require authentication or a specific user interaction.
"""

from __future__ import annotations

import hashlib
import json
import mimetypes
import re
import sys
import time
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse, urldefrag

import requests
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

DEFAULT_URL = "https://calendex-preprod.plexaar.com/"
DEFAULT_OUTPUT = Path("public") / "assets"
ASSET_EXTENSIONS = {
    ".avif", ".bmp", ".css", ".eot", ".gif", ".ico", ".jpeg", ".jpg", ".js",
    ".m4v", ".mov", ".mp3", ".mp4", ".ogg", ".otf", ".png", ".svg", ".ttf",
    ".wav", ".webm", ".webp", ".woff", ".woff2",
}
SKIP_SCHEMES = ("data:", "blob:", "javascript:", "mailto:", "tel:")


def clean_url(value: str, base: str) -> str | None:
    if not value:
        return None
    value = value.strip().strip("\"'")
    if not value or value.startswith(SKIP_SCHEMES):
        return None
    full = urldefrag(urljoin(base, value))[0]
    parsed = urlparse(full)
    if parsed.scheme not in ("http", "https") or not parsed.netloc:
        return None
    return full


def urls_in_css(css_text: str, css_url: str) -> set[str]:
    found = set()
    # url(...) references, including quoted/unquoted forms
    for match in re.findall(r"url\(\s*(['\"]?)(.*?)\1\s*\)", css_text, flags=re.I | re.S):
        url = clean_url(match[1], css_url)
        if url:
            found.add(url)
    # CSS @import references
    for match in re.findall(r"@import\s+(?:url\()?['\"]([^'\"]+)['\"]", css_text, flags=re.I):
        url = clean_url(match, css_url)
        if url:
            found.add(url)
    return found


def looks_like_asset(url: str, content_type: str = "") -> bool:
    path = urlparse(url).path.lower()
    ext = Path(path).suffix
    ctype = (content_type or "").lower()
    return ext in ASSET_EXTENSIONS or ctype.startswith((
        "image/", "video/", "audio/", "font/"
    )) or "font-woff" in ctype


def filename_for(url: str, content_type: str = "") -> str:
    parsed = urlparse(url)
    name = unquote(Path(parsed.path).name)
    if not name or name in (".", "/") or "." not in name:
        ext = mimetypes.guess_extension((content_type or "").split(";")[0].strip()) or ".bin"
        name = "asset" + ext
    # Remove characters invalid on Windows and limit length.
    name = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", name).strip(" .")
    if len(name) > 120:
        stem, suffix = Path(name).stem, Path(name).suffix
        name = stem[:100] + suffix[:15]
    return name or "asset.bin"


def main() -> int:
    url = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_URL
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else DEFAULT_OUTPUT
    output.mkdir(parents=True, exist_ok=True)

    print(f"Page:   {url}")
    print(f"Output: {output.resolve()}")
    print("Opening page and discovering assets...")

    discovered: set[str] = set()
    stylesheet_urls: set[str] = set()
    request_failures: list[dict] = []
    page_title = ""

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(
            viewport={"width": 1440, "height": 1000},
            device_scale_factor=1,
            ignore_https_errors=True,
        )

        def on_request(request):
            req_url = clean_url(request.url, url)
            if req_url and request.resource_type in {
                "image", "media", "font", "stylesheet"
            }:
                discovered.add(req_url)
                if request.resource_type == "stylesheet":
                    stylesheet_urls.add(req_url)

        def on_failed_request(request):
            failure = request.failure
            if failure:
                request_failures.append({"url": request.url, "error": failure})

        page.on("request", on_request)
        page.on("requestfailed", on_failed_request)

        try:
            page.goto(url, wait_until="networkidle", timeout=60000)
        except PlaywrightTimeoutError:
            print("Page did not become network-idle in time; continuing with loaded content.")
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=30000)
            except PlaywrightTimeoutError:
                pass

        page_title = page.title()
        page.wait_for_timeout(2500)

        # Scroll through the page to trigger lazy loading and carousel images.
        try:
            page.evaluate("""async () => {
                const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
                const step = Math.max(500, Math.floor(window.innerHeight * 0.75));
                for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
                    window.scrollTo(0, y);
                    await pause(350);
                }
                window.scrollTo(0, 0);
                await pause(800);
            }""")
        except Exception:
            pass

        # Collect current DOM assets, srcset, inline styles, and linked stylesheets.
        try:
            data = page.evaluate("""() => {
                const out = { urls: [], stylesheets: [], inlineCss: [] };
                const add = v => { if (v) out.urls.push(v); };
                document.querySelectorAll('img, source, video, audio, track, input[type="image"]').forEach(el => {
                    ['src', 'poster'].forEach(a => add(el.getAttribute(a)));
                    ['srcset', 'imagesrcset'].forEach(a => {
                        const value = el.getAttribute(a);
                        if (value) value.split(',').forEach(part => add(part.trim().split(/\\\\s+/)[0]));
                    });
                });
                document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"], link[rel="preload"], link[rel="stylesheet"]').forEach(el => {
                    add(el.href);
                    if (el.rel === 'stylesheet' && el.href) out.stylesheets.push(el.href);
                });
                document.querySelectorAll('*').forEach(el => {
                    const style = el.getAttribute('style');
                    if (style) out.inlineCss.push(style);
                    const bg = getComputedStyle(el).backgroundImage;
                    if (bg && bg !== 'none') out.inlineCss.push(bg);
                });
                out.inlineCss.push(...Array.from(document.querySelectorAll('style')).map(el => el.textContent || ''));
                return out;
            }""")
            for item in data.get("urls", []):
                found = clean_url(item, page.url)
                if found:
                    discovered.add(found)
            for item in data.get("stylesheets", []):
                found = clean_url(item, page.url)
                if found:
                    stylesheet_urls.add(found)
                    discovered.add(found)
            for css in data.get("inlineCss", []):
                discovered.update(urls_in_css(css, page.url))
        except Exception as exc:
            print(f"DOM scan warning: {exc}")

        browser.close()

    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                      "(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        "Referer": url,
    })

    # Fetch stylesheet text and discover referenced images/fonts/imports.
    css_queue = list(stylesheet_urls)
    seen_css: set[str] = set()
    while css_queue:
        css_url = css_queue.pop(0)
        if css_url in seen_css:
            continue
        seen_css.add(css_url)
        try:
            response = session.get(css_url, timeout=25)
            response.raise_for_status()
            if "text/css" in response.headers.get("Content-Type", "") or urlparse(css_url).path.lower().endswith(".css"):
                css_assets = urls_in_css(response.text, response.url)
                for asset in css_assets:
                    if asset not in discovered:
                        discovered.add(asset)
                    if urlparse(asset).path.lower().endswith(".css") and asset not in seen_css:
                        css_queue.append(asset)
        except requests.RequestException as exc:
            request_failures.append({"url": css_url, "error": str(exc)})

    # Download each unique URL. Save with a stable prefix if filenames collide.
    manifest = {
        "page_url": url,
        "page_title": page_title,
        "output_directory": str(output),
        "downloaded": [],
        "failed": request_failures,
        "skipped": [],
    }
    used_names: dict[str, str] = {}
    candidates = sorted(discovered)
    print(f"Found {len(candidates)} unique candidate URLs. Downloading...")

    for index, asset_url in enumerate(candidates, start=1):
        try:
            response = session.get(asset_url, timeout=40, stream=True)
            response.raise_for_status()
            content_type = response.headers.get("Content-Type", "").split(";")[0].strip().lower()
            if not looks_like_asset(response.url, content_type):
                manifest["skipped"].append({"url": asset_url, "reason": f"not an asset ({content_type})"})
                response.close()
                continue

            filename = filename_for(response.url, content_type)
            prior = used_names.get(filename.lower())
            if prior and prior != asset_url:
                digest = hashlib.sha1(asset_url.encode("utf-8")).hexdigest()[:8]
                filename = f"{Path(filename).stem}_{digest}{Path(filename).suffix}"
            used_names[filename.lower()] = asset_url
            destination = output / filename

            # Write streamed response to disk.
            size = 0
            with destination.open("wb") as file_handle:
                for chunk in response.iter_content(chunk_size=1024 * 128):
                    if chunk:
                        file_handle.write(chunk)
                        size += len(chunk)
            response.close()

            manifest["downloaded"].append({
                "url": asset_url,
                "file": str(destination),
                "bytes": size,
                "content_type": content_type,
            })
            print(f"[{index}/{len(candidates)}] OK  {filename} ({size:,} bytes)")
        except Exception as exc:
            manifest["failed"].append({"url": asset_url, "error": str(exc)})
            print(f"[{index}/{len(candidates)}] ERR {asset_url} :: {exc}")

    manifest_path = output / "assets-manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print("\nFinished.")
    print(f"Downloaded: {len(manifest['downloaded'])}")
    print(f"Failed:     {len(manifest['failed'])}")
    print(f"Manifest:   {manifest_path.resolve()}")
    print("\nNote: this downloads assets referenced by the rendered page; assets behind login,")
    print("interaction-only states, or inaccessible API calls may require manual inspection.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
