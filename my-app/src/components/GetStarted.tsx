
import { useState, type FormEvent } from "react";
import { useTheme } from "../context/ThemeContext";

const GetStarted = () => {
  const [email, setEmail] = useState("");
  const { isDark } = useTheme();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted work email:", email);
  };

  return (
    <section
      id="get-started"
      className={`relative isolate overflow-hidden rounded-[24px] mx-3 my-8 px-4 py-14 sm:mx-4 sm:my-10 sm:rounded-[32px] sm:px-8 sm:py-20 lg:mx-6 lg:my-14 lg:px-14 lg:py-24 xl:mx-8 xl:px-16 xl:py-28 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#0b1022] via-[#0d1428] to-[#080c18]"
          : "bg-gradient-to-br from-[#FFFCF3] via-[#FFFDF9] to-[#FFFFFF]"
      }`}
    >
      {/* Blobs */}
      <div className={`pointer-events-none absolute -left-24 bottom-[-120px] -z-10 h-[300px] w-[300px] rounded-full sm:h-[400px] sm:w-[400px] ${isDark ? "bg-yellow-900/15" : "bg-[#FFF0B8]/70"}`} />
      <div className={`pointer-events-none absolute -right-16 -top-20 -z-10 h-[200px] w-[200px] rounded-full sm:h-[280px] sm:w-[280px] ${isDark ? "bg-yellow-900/10" : "bg-[#FFF3C5]/65"}`} />

      {/* Dot patterns — hidden on xs */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] hidden grid-cols-5 gap-3 opacity-60 sm:grid">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className={`h-[5px] w-[5px] rounded-full ${isDark ? "bg-blue-800" : "bg-[#A9C9F8]"}`} />
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-[23%] right-[7%] hidden grid-cols-5 gap-3 opacity-60 sm:grid">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className={`h-[5px] w-[5px] rounded-full ${isDark ? "bg-blue-800" : "bg-[#A9C9F8]"}`} />
        ))}
      </div>

      {/* Decorative arrow — only on lg */}
      <svg aria-hidden="true" viewBox="0 0 190 115" fill="none" className="pointer-events-none absolute left-[15%] top-[39%] hidden w-32 text-[#FFD400] lg:block xl:w-44">
        <path d="M25 10 C-5 35 25 75 63 65 C100 55 66 15 48 42 C25 80 83 110 130 79" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M112 63 L132 79 L112 91" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Paper plane — only on lg */}
      <div className="pointer-events-none absolute right-[10%] top-[27%] hidden lg:block">
        <svg aria-hidden="true" viewBox="0 0 260 210" fill="none" className="w-36 xl:w-52">
          <path d="M15 115 C60 185 115 165 130 120 S185 85 166 132 S215 130 236 58" stroke={isDark ? "#2a4a7a" : "#B8CBEA"} strokeWidth="3" strokeDasharray="8 10" strokeLinecap="round" />
          <path d="M145 35 L245 3 L202 87 L184 55 Z" fill="#4A8DFF" />
          <path d="M145 35 L184 55 L245 3" fill="#76ABFF" />
          <path d="M184 55 L202 87 L214 38" fill={isDark ? "#1a3060" : "#DCEAFF"} />
          <path d="M105 10 L111 22 M119 3 L123 17 M92 22 L105 26" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-4xl text-center">
        <div className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-[0.12em] sm:mb-7 sm:gap-3 sm:px-5 sm:py-3 sm:text-sm ${isDark ? "bg-blue-900/40 text-blue-400" : "bg-[#EAF2FF] text-[#287BFF]"}`}>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
            <path d="M22 2 2 10.2l7.1 2.7L12 21l3.5-6.2L22 2Zm-11.5 9.7 7.3-5.1-5.3 6.6-.5 3.2-1.5-4.7Z" />
          </svg>
          <span>GET STARTED</span>
        </div>

        <h2 className={`font-poppins text-[26px] font-bold leading-[1.18] tracking-[-0.03em] sm:text-[38px] sm:leading-[1.15] md:text-[46px] lg:text-[52px] xl:text-[54px] ${isDark ? "text-white" : "text-[#14213D]"}`}>
          Ditch Long Process &amp; Grow
          <br className="hidden sm:block" /> your Business to the{" "}
          <span className="bg-gradient-to-r from-[#2583FF] to-[#5597FF] bg-clip-text text-transparent">Next Level</span>
        </h2>

        <p className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg lg:leading-9 ${isDark ? "text-slate-400" : "text-[#60708B]"}`}>
          Join thousands of businesses already using our AI-powered system to reach more customers, save time, and scale faster.
        </p>

        {/* Email signup form */}
        <form
          onSubmit={handleSubmit}
          className={`mx-auto mt-8 flex w-full max-w-[875px] flex-col gap-3 rounded-2xl p-3 shadow-[0_18px_45px_rgba(40,85,150,0.12)] sm:mt-10 sm:rounded-[32px] sm:p-2.5 lg:flex-row lg:items-center lg:gap-4 lg:rounded-full lg:pl-9 lg:pr-2.5 ${isDark ? "bg-[#111827]" : "bg-white"}`}
        >
          <div className="flex min-w-0 flex-1 items-center gap-3 px-2 sm:gap-4 sm:px-2 lg:px-0">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 shrink-0 sm:h-6 sm:w-6 ${isDark ? "text-slate-500" : "text-[#94A3B8]"}`}>
              <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 8L3.5 7h17L12 13Z" />
            </svg>
            <input
              type="email" name="email" autoComplete="email" required
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              aria-label="Your work email"
              className={`h-12 min-w-0 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-[#94A3B8] focus:ring-0 sm:h-16 sm:text-base lg:text-lg ${isDark ? "text-white" : "text-[#14213D]"}`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#FFD705] px-6 text-sm font-semibold text-[#171923] transition-colors duration-200 hover:bg-[#F0CA00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287BFF] sm:h-14 sm:gap-4 sm:px-8 sm:text-base lg:h-[60px] lg:min-w-[220px] lg:rounded-full lg:text-lg"
          >
            Get Started
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M4 12h15m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetStarted;
