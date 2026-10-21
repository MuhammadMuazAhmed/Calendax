
import React from "react";
import { useTheme } from "../context/ThemeContext";

const dashboardImages = [
  {
    id: 1,
    src: "/assets/carasoul33.svg",
    alt: "Appointment booking dashboard",
  },
  {
    id: 2,
    src: "/assets/carasoul22.svg",
    alt: "Invoice management dashboard",
  },
  {
    id: 3,
    src: "/assets/carasoul11.svg",
    alt: "Sales analytics dashboard",
  },
  {
    id: 4,
    src: "/assets/carasoul44.svg",
    alt: "Service management dashboard",
  },
  {
    id: 5,
    src: "/assets/carasoul55.svg",
    alt: "Booking dashboard",
  },
];

const HeroVisual = () => {
  const { isDark } = useTheme();
  const scrollingImages = [...dashboardImages, ...dashboardImages];

  return (
    <div className="relative isolate min-h-[350px] w-full overflow-visible sm:min-h-[420px] lg:min-h-[500px]">

      {/* Background glow — adapts in dark mode */}
      <div className={`pointer-events-none absolute inset-[10%] -z-10 rounded-full blur-3xl ${
        isDark ? "bg-[#1e3a6e]/60" : "bg-[#DCE7FF]/70"
      }`} />

      {/* Scrolling dashboard images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex flex-col gap-5 animate-scroll-up hover:[animation-play-state:paused]">
          {scrollingImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={`shrink-0 overflow-hidden rounded-2xl ${isDark ? "brightness-90 contrast-105" : "bg-transparent"}`}
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

      {/* Top and bottom fades — use matching dark bg colors */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-12 bg-gradient-to-b to-transparent ${
        isDark ? "from-[#0d1630]/90" : "from-[#F7F7FF]/80"
      }`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t to-transparent ${
        isDark ? "from-[#131a2e]/90" : "from-[#FFF3DC]/70"
      }`} />

    </div>
  );
};

export default HeroVisual;
