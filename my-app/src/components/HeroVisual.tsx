
import React from "react";
import { useTheme } from "../context/ThemeContext";

const dashboardImages = [
  { id: 1, src: "/assets/carasoul33.svg", alt: "Appointment booking dashboard" },
  { id: 2, src: "/assets/carasoul22.svg", alt: "Invoice management dashboard" },
  { id: 3, src: "/assets/carasoul11.svg", alt: "Sales analytics dashboard" },
  { id: 4, src: "/assets/carasoul44.svg", alt: "Service management dashboard" },
  { id: 5, src: "/assets/carasoul55.svg", alt: "Booking dashboard" },
];

interface HeroVisualProps {
  /** When true, renders a compact horizontal strip for mobile */
  compact?: boolean;
}

const HeroVisual: React.FC<HeroVisualProps> = ({ compact = false }) => {
  const { isDark } = useTheme();
  const scrollingImages = [...dashboardImages, ...dashboardImages];

  if (compact) {
    // Mobile: horizontal scrolling strip
    return (
      <div className="relative w-full overflow-hidden">
        {/* Glow */}
        <div
          className={`pointer-events-none absolute inset-[5%] -z-10 rounded-full blur-3xl ${
            isDark ? "bg-[#1e3a6e]/40" : "bg-[#DCE7FF]/60"
          }`}
        />
        <div className="flex gap-4 animate-scroll-up-h hover:[animation-play-state:paused] px-4">
          {scrollingImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={`shrink-0 w-[260px] sm:w-[320px] overflow-hidden rounded-xl ${
                isDark ? "brightness-90" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="block h-auto w-full object-contain"
                loading={index < dashboardImages.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        {/* Side fades */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r to-transparent ${
            isDark ? "from-[#0d1630]/90" : "from-[#E8EDFF]/90"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l to-transparent ${
            isDark ? "from-[#131a2e]/90" : "from-[#FFF3DC]/90"
          }`}
        />
      </div>
    );
  }

  // Desktop: vertical scrolling column
  return (
    <div className="relative isolate h-full min-h-[500px] w-full overflow-visible">
      {/* Background glow */}
      <div
        className={`pointer-events-none absolute inset-[10%] -z-10 rounded-full blur-3xl ${
          isDark ? "bg-[#1e3a6e]/60" : "bg-[#DCE7FF]/70"
        }`}
      />

      {/* Scrolling dashboard images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex flex-col gap-5 animate-scroll-up hover:[animation-play-state:paused]">
          {scrollingImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={`shrink-0 overflow-hidden rounded-2xl ${
                isDark ? "brightness-90 contrast-105" : "bg-transparent"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="block h-auto w-full object-contain"
                loading={index < dashboardImages.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Top and bottom fades */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b to-transparent ${
          isDark ? "from-[#0d1630]/90" : "from-[#F7F7FF]/80"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t to-transparent ${
          isDark ? "from-[#131a2e]/90" : "from-[#FFF3DC]/70"
        }`}
      />
    </div>
  );
};

export default HeroVisual;
