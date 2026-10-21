
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const usefulLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Team", href: "#team" },
];

const documentLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Terms of Use", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    type: "image",
    icon: "/assets/facebook-icon.png",
  },
  {
    label: "X",
    href: "https://x.com",
    type: "lucide",
    icon: ArrowUpRight,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    type: "image",
    icon: "/assets/instagram-icon.png",
  },
];

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`relative isolate overflow-hidden transition-colors duration-300 ${
      isDark
        ? "bg-gradient-to-br from-[#050810] via-[#060a14] to-[#04070f] text-slate-200"
        : "bg-gradient-to-br from-[#F8FBFF] via-[#F3F8FF] to-[#EAF3FF] text-[#102751]"
    }`}>
      {/* Decorative background shapes */}
      <div className={`pointer-events-none absolute -left-20 -top-24 -z-10 h-64 w-64 rounded-full blur-[1px] ${
        isDark ? "bg-blue-900/20" : "bg-[#D8E9FF]/70"
      }`} />
      <div className={`pointer-events-none absolute -bottom-48 -right-28 -z-10 h-[390px] w-[390px] rounded-full border-[70px] ${
        isDark ? "border-blue-900/20" : "border-[#D6E8FF]/70"
      }`} />

      {/* Decorative dots */}
      <div className="pointer-events-none absolute right-8 top-12 hidden grid-cols-4 gap-4 opacity-60 sm:grid">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-blue-800" : "bg-[#75AEFF]"}`}
          />
        ))}
      </div>

      <div className="mx-auto max-w-[1500px] px-6 pb-8 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_0.8fr_0.9fr_1fr] lg:gap-14">
          {/* Brand column */}
          <div>
            <a
              href="/"
              aria-label="Plexaar home"
              className="mb-8 inline-flex items-center"
            >
              <img
                src="/assets/plexaar-logo-landing.png"
                alt="Plexaar"
                className={`h-auto w-[230px] max-w-full object-contain ${isDark ? "brightness-0 invert" : ""}`}
              />
            </a>

            <p className={`max-w-[390px] text-base leading-7 sm:text-lg sm:leading-[1.8] ${isDark ? "text-slate-400" : "text-[#647DA7]"}`}>
              Empower Your Business With Modern ERP System – Your
              Ultimate Business Companion
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, type, icon: Icon }) => (
  <a
    key={label}
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:bg-[#168EFF] hover:text-white ${
      isDark ? "bg-blue-900/40 text-blue-400" : "bg-[#E4F0FF] text-[#3988F5]"
    }`}
  >
    {type === "image" ? (
      <img
        src={Icon as string}
        alt=""
        className={`h-5 w-5 object-contain ${isDark ? "brightness-0 invert opacity-80" : ""}`}
      />
    ) : (
      <Icon size={21} strokeWidth={2} />
    )}
  </a>
))}
            </div>
          </div>

          {/* Useful links */}
          <div>
            <h2 className={`flex items-center gap-3 text-lg font-bold sm:text-xl ${isDark ? "text-white" : "text-[#102751]"}`}>
              <span className="h-3 w-3 rounded-full bg-[#FFD500]" />
              Useful Link
            </h2>

            <div className="mb-7 ml-6 mt-5 h-0.5 w-12 bg-[#FFD500]" />

            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-base transition-colors hover:text-[#168EFF] sm:text-lg ${isDark ? "text-slate-400" : "text-[#647DA7]"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h2 className={`flex items-center gap-3 text-lg font-bold sm:text-xl ${isDark ? "text-white" : "text-[#102751]"}`}>
              <span className="h-3 w-3 rounded-full bg-[#FFD500]" />
              Document
            </h2>

            <div className="mb-7 ml-6 mt-5 h-0.5 w-12 bg-[#FFD500]" />

            <ul className="space-y-4">
              {documentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-base transition-colors hover:text-[#168EFF] sm:text-lg ${isDark ? "text-slate-400" : "text-[#647DA7]"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h2 className={`flex items-center gap-3 text-lg font-bold sm:text-xl ${isDark ? "text-white" : "text-[#102751]"}`}>
              <span className="h-3 w-3 rounded-full bg-[#FFD500]" />
              Address
            </h2>

            <div className="mb-6 ml-6 mt-5 h-0.5 w-12 bg-[#FFD500]" />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                  isDark ? "bg-blue-900/40 text-blue-400" : "bg-[#E1EEFF] text-[#3988F5]"
                }`}>
                  <MapPin size={21} />
                </span>
                <p className={`pt-0.5 text-base leading-7 sm:text-lg ${isDark ? "text-slate-400" : "text-[#647DA7]"}`}>
                  Plexaar,
                  <br />
                  34 Sweet Street,
                  <br />
                  London, UK
                </p>
              </div>

              <a
                href="tel:+6282637849485"
                className="group flex items-start gap-4"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:bg-[#168EFF] group-hover:text-white ${
                  isDark ? "bg-blue-900/40 text-blue-400" : "bg-[#E1EEFF] text-[#3988F5]"
                }`}>
                  <Phone size={21} />
                </span>
                <span className={`pt-1 text-base leading-7 transition-colors group-hover:text-[#168EFF] sm:text-lg ${isDark ? "text-slate-400" : "text-[#647DA7]"}`}>
                  +6282 63784
                  <br />
                  9485
                </span>
              </a>

              <a
                href="mailto:info@plexaar.net"
                className="group flex items-start gap-4"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:bg-[#168EFF] group-hover:text-white ${
                  isDark ? "bg-blue-900/40 text-blue-400" : "bg-[#E1EEFF] text-[#3988F5]"
                }`}>
                  <Mail size={21} />
                </span>
                <span className={`break-all pt-2 text-base transition-colors group-hover:text-[#168EFF] sm:text-lg ${isDark ? "text-slate-400" : "text-[#647DA7]"}`}>
                  info@plexaar.net
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and legal links */}
        <div className={`mt-14 border-t pt-6 sm:mt-16 sm:pt-8 ${isDark ? "border-slate-800" : "border-[#D6E3F5]"}`}>
          <div className={`flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between ${isDark ? "text-slate-500" : "text-[#647DA7]"}`}>
            <p>© {new Date().getFullYear()} Plexaar. All rights reserved.</p>

            <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <a
                href="#privacy"
                className="transition-colors hover:text-[#168EFF]"
              >
                Privacy Policy
              </a>
              <span className={`hidden sm:inline ${isDark ? "text-slate-700" : "text-[#A0B5D3]"}`}>|</span>
              <a
                href="#terms"
                className="transition-colors hover:text-[#168EFF]"
              >
                Terms of Service
              </a>
              <span className={`hidden sm:inline ${isDark ? "text-slate-700" : "text-[#A0B5D3]"}`}>|</span>
              <a
                href="#support"
                className="transition-colors hover:text-[#168EFF]"
              >
                Support
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
