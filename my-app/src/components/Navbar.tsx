
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How it Works", href: "#ai-system" },
  { label: "Pricing", href: "#pricing-plan" },
  { label: "About", href: "#benefits" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const { isDark, toggleTheme } = useTheme();

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const handleSignUp = () => {
    window.location.href = "/signup";
  };

  return (
    <nav
      className={`absolute left-0 top-0 z-50 w-full transition-colors duration-300 ${
        isDark ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 sm:h-[80px] sm:px-6 lg:h-[92px] lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="flex shrink-0 items-center"
          aria-label="Plexaar Home"
        >
          <img
            src="/assets/plexaar-logo-landing.png"
            alt="Plexaar"
            className={`h-auto w-[100px] object-contain sm:w-[110px] lg:w-[130px] ${
              isDark ? "brightness-0 invert" : ""
            }`}
          />
        </a>

        {/* Desktop navigation — only at lg+ */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`block whitespace-nowrap font-['Poppins',sans-serif] text-sm font-[550] leading-6 transition-colors duration-200 xl:text-base ${
                    activeLink === link.href
                      ? "text-[#008cff]"
                      : isDark
                        ? "text-slate-200 hover:text-[#008cff]"
                        : "text-[#04194a] hover:text-[#008cff]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          {/* Dark mode toggle */}
          <button
            id="theme-toggle-desktop"
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="theme-toggle text-sm"
          >
            {isDark ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3a1 1 0 0 0 1-1V1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1Zm0 18a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm9-9h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2ZM4 12a1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm15.07-7.07a1 1 0 0 0-1.41 0l-.71.71a1 1 0 0 0 1.41 1.41l.71-.71a1 1 0 0 0 0-1.41ZM5.64 18.36a1 1 0 0 0-1.41 0l-.71.71a1 1 0 0 0 1.41 1.41l.71-.71a1 1 0 0 0 0-1.41Zm12.73 1.41.71.71a1 1 0 1 0 1.41-1.41l-.71-.71a1 1 0 0 0-1.41 1.41ZM4.93 5.64l-.71-.71a1 1 0 0 0-1.41 1.41l.71.71a1 1 0 0 0 1.41-1.41ZM12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z" />
                </svg>
                <span>Light</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Z" />
                </svg>
                <span>Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleSignUp}
            className="rounded-full bg-[#FFD705] px-5 py-2.5 text-sm font-[550] text-[#171923] shadow-[0_6px_18px_rgba(0,0,0,0.10)] transition-all duration-200 hover:bg-[#F0CA00] focus:outline-none focus:ring-2 focus:ring-[#ffcc00] focus:ring-offset-2 xl:px-6 xl:py-3 xl:text-base"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile/tablet right: theme toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="theme-toggle-mobile-top"
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-slate-800/80"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg transition ${
              isDark ? "hover:bg-slate-700" : "hover:bg-gray-100"
            }`}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`h-[2px] w-5 transition-transform duration-200 ${isDark ? "bg-slate-200" : "bg-[#080b24]"} ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 transition-opacity duration-200 ${isDark ? "bg-slate-200" : "bg-[#080b24]"} ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 transition-transform duration-200 ${isDark ? "bg-slate-200" : "bg-[#080b24]"} ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full overflow-hidden shadow-lg transition-all duration-300 lg:hidden ${
          isDark ? "bg-[#0d1629]" : "bg-white"
        } ${isMenuOpen ? "visible max-h-[520px] opacity-100" : "invisible max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-5 pb-5 pt-2">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`border-b last:border-0 ${isDark ? "border-slate-700" : "border-gray-100"}`}
            >
              <a
                href={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`block py-3.5 text-base font-medium transition-colors ${
                  activeLink === link.href
                    ? "text-[#008cff]"
                    : isDark
                      ? "text-slate-200 hover:text-[#008cff]"
                      : "text-[#080b24] hover:text-[#008cff]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <button
              type="button"
              onClick={handleSignUp}
              className="w-full rounded-full bg-[#ffcc00] px-6 py-3 text-base font-semibold text-[#875500] transition hover:bg-[#f5c400]"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
