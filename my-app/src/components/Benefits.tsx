
import React from "react";
import { useTheme } from "../context/ThemeContext";

const benefits = [
  { icon: "♟", title: "Increased User satisfaction and engagement",      description: "Keeps your customers happy and coming back.",               lightIconBg: "bg-blue-100",    lightIconColor: "text-blue-600",   darkIconBg: "bg-blue-900/40",   darkIconColor: "text-blue-400" },
  { icon: "☏", title: "Improved communication with providers",            description: "Faster, clearer and more reliable communication.",          lightIconBg: "bg-emerald-100", lightIconColor: "text-emerald-500",darkIconBg: "bg-emerald-900/40",darkIconColor: "text-emerald-400" },
  { icon: "⚖", title: "Improved compliance with labor laws",              description: "Stay compliant, avoid risks, operate with confidence.",     lightIconBg: "bg-purple-100",  lightIconColor: "text-purple-600", darkIconBg: "bg-purple-900/40", darkIconColor: "text-purple-400" },
  { icon: "◷", title: "Simplified booking management",                    description: "Less manual work, more automation.",                        lightIconBg: "bg-amber-100",   lightIconColor: "text-amber-500",  darkIconBg: "bg-amber-900/40",  darkIconColor: "text-amber-400" },
  { icon: "!",  title: "Reduced errors and time spent on manual tasks",   description: "Save time, reduce mistakes, focus on what matters.",        lightIconBg: "bg-rose-100",    lightIconColor: "text-rose-500",   darkIconBg: "bg-rose-900/40",   darkIconColor: "text-rose-400" },
];

const statBadges = [
  { emoji: "↗", value: "+68%", label: "User Engagement",       rotate: "-rotate-[7deg]",  pos: "top-[8%] left-0",        lightBg: "bg-blue-100 text-blue-600",    darkBg: "bg-blue-900/50 text-blue-400" },
  { emoji: "☏", value: "98%",  label: "Message Delivery Rate", rotate: "rotate-[5deg]",   pos: "top-[18%] right-0",      lightBg: "bg-emerald-100 text-emerald-600", darkBg: "bg-emerald-900/50 text-emerald-400" },
  { emoji: "◷", value: "2.5x", label: "Faster Booking",        rotate: "-rotate-[4deg]",  pos: "bottom-[12%] left-0",    lightBg: "bg-amber-100 text-amber-500",  darkBg: "bg-amber-900/50 text-amber-400" },
];

const Benefits: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="benefits"
      className={`relative overflow-hidden px-4 py-12 sm:px-8 sm:py-16 lg:px-[4.6%] lg:py-20 xl:py-24 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#080c1a] via-[#0a0f20] to-[#080e1c]"
          : "bg-gradient-to-br from-[#F8FAFF] via-white to-[#FFFCF3]"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">

        {/* Left content */}
        <div className="relative z-10">
          {/* Badge */}
          <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-[0.16em] ${
            isDark ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-[#1688FF]"
          }`}>
            <span className="text-lg">✦</span>
            BENEFITS
          </div>

          {/* Heading */}
          <h2 className={`max-w-[700px] font-poppins text-[28px] font-bold leading-[1.12] tracking-[-1px] sm:text-[38px] sm:tracking-[-1.3px] lg:text-[46px] xl:text-[54px] ${isDark ? "text-white" : "text-[#17213B]"}`}>
            Benefits of Using Our{" "}
            <span className="bg-gradient-to-r from-[#087DFF] to-[#48A0FF] bg-clip-text text-transparent">
              AI Powered System
            </span>
          </h2>

          {/* Description */}
          <p className={`mt-4 max-w-[690px] text-sm leading-7 sm:mt-6 sm:text-base sm:leading-[1.7] lg:text-lg ${isDark ? "text-slate-400" : "text-[#70819F]"}`}>
            Our AI sends email &amp; messages to your customers about the available time slots for bookings following the matching criteria.
          </p>

          {/* Benefit list */}
          {/* Benefit list: zigzag + bordered */}
<div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:gap-4">
  {benefits.map((b, i) => (
    <div
      key={b.title}
      className={`flex w-full items-center gap-3 rounded-2xl border p-3 transition-all duration-200 hover:-translate-y-0.5 sm:w-[calc(100%-2.5rem)] sm:gap-4 sm:p-4 lg:w-[calc(100%-4rem)] ${
        i % 2 === 0 ? "sm:self-start" : "sm:self-end"
      } ${
        isDark
          ? "border-slate-700/60 bg-slate-900/40 hover:border-blue-700"
          : "border-[#DFE8FF] bg-white/80 shadow-[0_6px_20px_rgba(49,91,174,0.04)] hover:border-blue-300"
      }`}
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl ${
        isDark ? `${b.darkIconBg} ${b.darkIconColor}` : `${b.lightIconBg} ${b.lightIconColor}`
      }`}>
        <span className="text-xl font-bold sm:text-2xl">{b.icon}</span>
      </div>
      <div>
        <h3 className={`text-sm font-semibold leading-5 sm:text-[15px] sm:leading-6 ${isDark ? "text-white" : "text-[#17213B]"}`}>{b.title}</h3>
        <p className={`mt-0.5 text-xs leading-5 sm:mt-1 sm:text-sm ${isDark ? "text-slate-500" : "text-[#8290AA]"}`}>{b.description}</p>
      </div>
    </div>
  ))}
</div>

          {/* CTA */}
          <a
            href="#contact"
            className="mt-6 inline-flex min-h-[52px] min-w-[200px] items-center justify-center gap-3 rounded-full bg-[#FFD705] px-6 text-sm font-semibold text-[#171923] shadow-[0_10px_25px_rgba(255,213,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F3CA00] hover:shadow-[0_14px_30px_rgba(255,213,0,0.3)] sm:mt-7 sm:min-h-[58px] sm:min-w-[220px] sm:px-8 sm:text-base"
          >
            Get Started
            <span aria-hidden="true" className="text-lg">→</span>
          </a>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto flex min-h-[320px] w-full max-w-[760px] items-center justify-center sm:min-h-[460px] lg:min-h-[600px] xl:min-h-[680px]">
          {/* Glow orbs */}
          <div className={`absolute left-[12%] top-[5%] h-[75%] w-[75%] rounded-full blur-3xl ${isDark ? "bg-[#1e3a6e]/50" : "bg-[#DCEAFF]/80"}`} />
          <div className={`absolute right-[3%] top-[8%] h-[65%] w-[70%] rounded-full opacity-80 ${isDark ? "bg-gradient-to-br from-[#1e2d50] to-[#2a1e40]" : "bg-gradient-to-br from-[#E8F1FF] to-[#FFF3CF]"}`} />

          {/* Phone mockups */}
          <img
            src="/assets/benfits-of-ai.png"
            alt="Plexaar mobile booking and calendar interfaces"
            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_35px_rgba(32,65,120,0.16)]"
            loading="lazy"
          />

          {/* Stat badges — hidden on mobile, shown on sm+ */}
          {statBadges.map((badge) => (
            <div
              key={badge.label}
              className={`absolute z-20 hidden sm:flex ${badge.pos} ${badge.rotate} items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_15px_40px_rgba(35,67,115,0.12)] sm:px-5 ${
                isDark ? "border-slate-700 bg-slate-800/95" : "border-white/80 bg-white/95"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl sm:h-11 sm:w-11 sm:text-2xl ${
                isDark ? badge.darkBg : badge.lightBg
              }`}>
                {badge.emoji}
              </div>
              <div>
                <p className={`text-lg font-bold sm:text-xl ${isDark ? "text-white" : "text-[#17213B]"}`}>{badge.value}</p>
                <p className={`whitespace-nowrap text-[11px] sm:text-xs ${isDark ? "text-slate-400" : "text-[#70819F]"}`}>{badge.label}</p>
              </div>
            </div>
          ))}

          {/* Mobile stat row — shows only on xs */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-around sm:hidden">
            {statBadges.map((badge) => (
              <div key={badge.label} className={`flex flex-col items-center gap-1 rounded-xl border px-3 py-2 text-center ${isDark ? "border-slate-700 bg-slate-800/95" : "border-white/80 bg-white/95"}`}>
                <p className={`text-base font-bold ${isDark ? "text-white" : "text-[#17213B]"}`}>{badge.value}</p>
                <p className={`text-[10px] leading-tight ${isDark ? "text-slate-400" : "text-[#70819F]"}`}>{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
