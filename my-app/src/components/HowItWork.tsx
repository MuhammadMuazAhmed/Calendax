import type { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

export type HowItWorksFeature = {
  title: string;
  description: string;
  icon: ReactNode;
  tone?: "blue" | "red" | "teal";
};

export type HowItWorksProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: { src: string; alt: string };
  features?: HowItWorksFeature[];
  className?: string;
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const CalendarIcon = (
  <svg {...iconProps}>
    <rect x="4" y="5" width="16" height="15" rx="3" />
    <path d="M8 3v4M16 3v4M4 10h16" />
  </svg>
);
const BoltIcon = (
  <svg {...iconProps}>
    <path d="M13 3L5 14h6l-1 7 8-11h-6z" />
  </svg>
);
const BotIcon = (
  <svg {...iconProps}>
    <rect x="5" y="8" width="14" height="11" rx="3" />
    <path d="M12 4v4" />
    <circle cx="9.5" cy="13.5" r="1" />
    <circle cx="14.5" cy="13.5" r="1" />
  </svg>
);

const defaultFeatures: HowItWorksFeature[] = [
  {
    title: "AI Scheduler",
    description: "AI bot scans your calendar, offers notifications, & books discounted appointments to fill empty slots.",
    icon: CalendarIcon,
    tone: "blue",
  },
  {
    title: "Power Automation",
    description: "Maximize booking efficiency, improve customer engagement, & optimize revenue generation smoothly.",
    icon: BoltIcon,
    tone: "red",
  },
  {
    title: "AI-Driven Bookings",
    description: "Improve scheduling process, increase bookings & minimize revenue loss due to empty slots.",
    icon: BotIcon,
    tone: "teal",
  },
];

const lightToneClasses = {
  blue: "bg-[#E8EFFF] text-[#3B82F6]",
  red:  "bg-[#FFEDEE] text-[#F0555A]",
  teal: "bg-[#DFF7F8] text-[#17C3CE]",
};
const darkToneClasses = {
  blue: "bg-blue-900/40 text-blue-400",
  red:  "bg-red-900/40 text-red-400",
  teal: "bg-teal-900/40 text-teal-400",
};

export default function HowItWorks({
  eyebrow = "How it works",
  title = "AI Powered System",
  description = "Our AI sends email & messages to your customers about the available time slots for bookings following the matching criteria.",
  image = { src: "/assets/ai-powered-image.png", alt: "How it works" },
  features = defaultFeatures,
  className = "",
}: HowItWorksProps) {
  const { isDark } = useTheme();
  const toneClasses = isDark ? darkToneClasses : lightToneClasses;

  return (
    <section
      id="ai-system"
      aria-labelledby="how-it-works-title"
      className={`px-4 py-12 font-[Poppins,system-ui,sans-serif] sm:px-8 sm:py-16 md:px-10 md:py-[60px] lg:px-16 lg:py-20 xl:px-24 xl:py-24 transition-colors duration-300 ${
        isDark ? "bg-[#0a0f20]" : "bg-[#F8FAFF]"
      } ${className}`}
    >
      <div className="mx-auto flex max-w-[1248px] flex-col items-center gap-8 sm:gap-10">

        {/* Header */}
        <header className="w-full max-w-[760px] text-center">
          <p className={`text-sm font-medium uppercase tracking-[0.12em] sm:text-base ${
            isDark ? "text-[#60a5fa]" : "text-[#0A8CFF]"
          }`}>
            {eyebrow}
          </p>
          <h2
            id="how-it-works-title"
            className={`mb-3 mt-2 text-[28px] font-bold leading-[1.15] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] ${
              isDark ? "text-white" : "text-[#0F1020]"
            }`}
          >
            {title}
          </h2>
          <p className={`text-sm leading-[1.65] sm:text-base lg:text-lg ${
            isDark ? "text-slate-400" : "text-[#3F4357]"
          }`}>
            {description}
          </p>
        </header>

        {/* Image + Cards */}
        <div className="w-full">
          {/* Banner image */}
          <div
            className="h-[200px] w-full overflow-hidden rounded-2xl bg-[linear-gradient(160deg,#0E1015_0%,#2A2F3C_55%,#DDE2EE_100%)] sm:h-[280px] md:h-[360px] md:rounded-[36px] lg:h-[420px]"
          >
            {image && (
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Feature cards: below the image */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:mt-8 lg:gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className={`flex flex-col gap-3 rounded-2xl p-5 transition-colors duration-300 sm:rounded-3xl lg:p-7 ${
                  isDark
                    ? "bg-[#111827] shadow-[0_4px_24px_rgba(0,0,0,0.4)] border border-slate-700/50"
                    : "bg-white shadow-[0_4px_24px_rgba(20,30,80,0.07)]"
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl ${toneClasses[f.tone ?? "blue"]}`}>
                  {f.icon}
                </div>
                <h3 className={`text-[18px] font-semibold sm:text-[20px] lg:text-[22px] ${isDark ? "text-white" : "text-[#0F1020]"}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-[1.6] sm:text-base ${isDark ? "text-slate-400" : "text-[#3F4357]"}`}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}