
import React from "react";
import { useTheme } from "../context/ThemeContext";

const benefits = [
  {
    icon: "♟",
    title: "Increased User satisfaction and engagement",
    description: "Keeps your customers happy and coming back.",
    lightIconBg: "bg-blue-100",
    lightIconColor: "text-blue-600",
    darkIconBg: "bg-blue-900/40",
    darkIconColor: "text-blue-400",
  },
  {
    icon: "☏",
    title: "Improved communication with providers",
    description: "Faster, clearer and more reliable communication.",
    lightIconBg: "bg-emerald-100",
    lightIconColor: "text-emerald-500",
    darkIconBg: "bg-emerald-900/40",
    darkIconColor: "text-emerald-400",
  },
  {
    icon: "⚖",
    title: "Improved compliance with labor laws and regulations",
    description: "Stay compliant, avoid risks, operate with confidence.",
    lightIconBg: "bg-purple-100",
    lightIconColor: "text-purple-600",
    darkIconBg: "bg-purple-900/40",
    darkIconColor: "text-purple-400",
  },
  {
    icon: "◷",
    title: "Simplified booking management",
    description: "Less manual work, more automation.",
    lightIconBg: "bg-amber-100",
    lightIconColor: "text-amber-500",
    darkIconBg: "bg-amber-900/40",
    darkIconColor: "text-amber-400",
  },
  {
    icon: "!",
    title: "Reduced errors and time spent on manual tasks",
    description: "Save time, reduce mistakes, focus on what matters.",
    lightIconBg: "bg-rose-100",
    lightIconColor: "text-rose-500",
    darkIconBg: "bg-rose-900/40",
    darkIconColor: "text-rose-400",
  },
];

const Benefits: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="benefits"
      className={`relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-[4.6%] lg:py-24 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#080c1a] via-[#0a0f20] to-[#080e1c]"
          : "bg-gradient-to-br from-[#F8FAFF] via-white to-[#FFFCF3]"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        {/* Left content */}
        <div className="relative z-10">
          <div className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-[0.16em] ${
            isDark ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-[#1688FF]"
          }`}>
            <span className="text-lg tracking-normal">✦</span>
            BENEFITS
          </div>

          <h2 className={`max-w-[700px] font-poppins text-4xl font-bold leading-[1.12] tracking-[-1.3px] sm:text-5xl lg:text-[54px] ${
            isDark ? "text-white" : "text-[#17213B]"
          }`}>
            Benefits of Using Our{" "}
            <span className="bg-gradient-to-r from-[#087DFF] to-[#48A0FF] bg-clip-text text-transparent">
              AI Powered System
            </span>
          </h2>

          <p className={`mt-6 max-w-[690px] text-base leading-7 sm:text-lg sm:leading-[1.7] ${
            isDark ? "text-slate-400" : "text-[#70819F]"
          }`}>
            Our AI sends email &amp; messages to your customers about the
            available time slots for bookings following the matching criteria.
          </p>

          {/* Benefit list */}
          <div className="mt-7 space-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-center gap-4 rounded-2xl py-1.5 transition-transform duration-200 hover:translate-x-1"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                    isDark ? `${benefit.darkIconBg} ${benefit.darkIconColor}` : `${benefit.lightIconBg} ${benefit.lightIconColor}`
                  }`}
                >
                  <span className="text-2xl font-bold">{benefit.icon}</span>
                </div>

                <div>
                  <h3 className={`text-[15px] font-semibold leading-6 sm:text-base ${isDark ? "text-white" : "text-[#17213B]"}`}>
                    {benefit.title}
                  </h3>
                  <p className={`mt-1 text-sm leading-5 sm:text-[15px] ${isDark ? "text-slate-500" : "text-[#8290AA]"}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Yellow CTA */}
          <a
            href="#contact"
            className="mt-7 inline-flex min-h-[58px] min-w-[220px] items-center justify-center gap-4 rounded-full bg-[#FFD705] px-8 text-base font-semibold text-[#171923] shadow-[0_10px_25px_rgba(255,213,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F3CA00] hover:shadow-[0_14px_30px_rgba(255,213,0,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1688FF]"
          >
            Get Started
            <span aria-hidden="true" className="text-xl">
              →
            </span>
          </a>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto flex min-h-[420px] w-full max-w-[760px] items-center justify-center sm:min-h-[580px] lg:min-h-[680px]">
          {/* Decorative glow — adapts in dark */}
          <div className={`absolute left-[12%] top-[5%] h-[80%] w-[80%] rounded-full blur-3xl ${
            isDark ? "bg-[#1e3a6e]/50" : "bg-[#DCEAFF]/80"
          }`} />
          <div className={`absolute right-[3%] top-[8%] h-[72%] w-[75%] rounded-full opacity-80 ${
            isDark
              ? "bg-gradient-to-br from-[#1e2d50] to-[#2a1e40]"
              : "bg-gradient-to-br from-[#E8F1FF] to-[#FFF3CF]"
          }`} />

          {/* Phone mockups image */}
          <img
            src="/assets/benfits-of-ai.png"
            alt="Plexaar mobile booking and calendar interfaces"
            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_35px_rgba(32,65,120,0.16)]"
            loading="lazy"
          />

          {/* Engagement stat */}
          <div className={`absolute left-0 top-[12%] z-20 flex -rotate-[7deg] items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_15px_40px_rgba(35,67,115,0.12)] sm:left-[1%] sm:px-5 ${
            isDark ? "border-slate-700 bg-slate-800/95" : "border-white/80 bg-white/95"
          }`}>
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${
              isDark ? "bg-blue-900/50 text-blue-400" : "bg-blue-100 text-blue-600"
            }`}>
              ↗
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? "text-white" : "text-[#17213B]"}`}>+68%</p>
              <p className={`whitespace-nowrap text-xs ${isDark ? "text-slate-400" : "text-[#70819F]"}`}>
                User Engagement
              </p>
            </div>
          </div>

          {/* Message delivery stat */}
          <div className={`absolute right-0 top-[15%] z-20 flex rotate-[5deg] items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_15px_40px_rgba(35,67,115,0.12)] sm:right-0 sm:px-5 ${
            isDark ? "border-slate-700 bg-slate-800/95" : "border-white/80 bg-white/95"
          }`}>
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${
              isDark ? "bg-emerald-900/50 text-emerald-400" : "bg-emerald-100 text-emerald-600"
            }`}>
              ☏
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? "text-white" : "text-[#17213B]"}`}>98%</p>
              <p className={`whitespace-nowrap text-xs ${isDark ? "text-slate-400" : "text-[#70819F]"}`}>
                Message Delivery Rate
              </p>
            </div>
          </div>

          {/* Booking speed stat */}
          <div className={`absolute bottom-[15%] left-0 z-20 flex -rotate-[4deg] items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_15px_40px_rgba(35,67,115,0.12)] sm:left-[1%] sm:px-5 ${
            isDark ? "border-slate-700 bg-slate-800/95" : "border-white/80 bg-white/95"
          }`}>
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${
              isDark ? "bg-amber-900/50 text-amber-400" : "bg-amber-100 text-amber-500"
            }`}>
              ◷
            </div>
            <div>
              <p className={`text-xl font-bold ${isDark ? "text-white" : "text-[#17213B]"}`}>2.5x</p>
              <p className={`whitespace-nowrap text-xs ${isDark ? "text-slate-400" : "text-[#70819F]"}`}>
                Faster Booking Process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
