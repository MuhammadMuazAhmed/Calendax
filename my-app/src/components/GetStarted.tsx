
import { useState, type FormEvent } from "react";
import { useTheme } from "../context/ThemeContext";

const GetStarted = () => {
  const [email, setEmail] = useState("");
  const { isDark } = useTheme();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect this to your backend/API when the endpoint is ready.
    console.log("Submitted work email:", email);
  };

  return (
    <section
      id="get-started"
      className={`relative isolate mx-auto my-10 w-full overflow-hidden rounded-[32px] px-5 py-20 sm:px-10 sm:py-24 lg:my-16 lg:px-16 lg:py-28 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#0b1022] via-[#0d1428] to-[#080c18]"
          : "bg-gradient-to-br from-[#FFFCF3] via-[#FFFDF9] to-[#FFFFFF]"
      }`}
    >
      {/* Decorative background shapes */}
      <div className={`pointer-events-none absolute -left-32 bottom-[-190px] -z-10 h-[400px] w-[400px] rounded-full ${
        isDark ? "bg-yellow-900/15" : "bg-[#FFF0B8]/70"
      }`} />

      <div className={`pointer-events-none absolute -right-20 -top-28 -z-10 h-[280px] w-[280px] rounded-full ${
        isDark ? "bg-yellow-900/10" : "bg-[#FFF3C5]/65"
      }`} />

      {/* Left dotted pattern */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] hidden grid-cols-5 gap-4 opacity-60 sm:grid">
        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className={`h-[6px] w-[6px] rounded-full ${isDark ? "bg-blue-800" : "bg-[#A9C9F8]"}`}
          />
        ))}
      </div>

      {/* Right dotted pattern */}
      <div className="pointer-events-none absolute bottom-[23%] right-[7%] hidden grid-cols-5 gap-4 opacity-60 sm:grid">
        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className={`h-[6px] w-[6px] rounded-full ${isDark ? "bg-blue-800" : "bg-[#A9C9F8]"}`}
          />
        ))}
      </div>

      {/* Decorative yellow curved arrow */}
      <svg
        aria-hidden="true"
        viewBox="0 0 190 115"
        fill="none"
        className="pointer-events-none absolute left-[15%] top-[39%] hidden w-36 text-[#FFD400] lg:block xl:w-48"
      >
        <path
          d="M25 10 C-5 35 25 75 63 65 C100 55 66 15 48 42 C25 80 83 110 130 79"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M112 63 L132 79 L112 91"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Decorative paper plane and flight path */}
      <div className="pointer-events-none absolute right-[10%] top-[27%] hidden lg:block">
        <svg
          aria-hidden="true"
          viewBox="0 0 260 210"
          fill="none"
          className="w-40 xl:w-56"
        >
          <path
            d="M15 115 C60 185 115 165 130 120 S185 85 166 132 S215 130 236 58"
            stroke={isDark ? "#2a4a7a" : "#B8CBEA"}
            strokeWidth="3"
            strokeDasharray="8 10"
            strokeLinecap="round"
          />
          <path
            d="M145 35 L245 3 L202 87 L184 55 Z"
            fill="#4A8DFF"
          />
          <path
            d="M145 35 L184 55 L245 3"
            fill="#76ABFF"
          />
          <path
            d="M184 55 L202 87 L214 38"
            fill={isDark ? "#1a3060" : "#DCEAFF"}
          />
          <path
            d="M184 55 L202 87 L245 3"
            stroke={isDark ? "#3a6aaa" : "#A8C8FF"}
            strokeWidth="1.5"
          />
          <path
            d="M105 10 L111 22 M119 3 L123 17 M92 22 L105 26"
            stroke="#FFD400"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-4xl text-center">
        <div className={`mb-7 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.12em] sm:text-base ${
          isDark ? "bg-blue-900/40 text-blue-400" : "bg-[#EAF2FF] text-[#287BFF]"
        }`}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M22 2 2 10.2l7.1 2.7L12 21l3.5-6.2L22 2Zm-11.5 9.7 7.3-5.1-5.3 6.6-.5 3.2-1.5-4.7Z" />
          </svg>
          <span>GET STARTED</span>
        </div>

        <h2 className={`font-poppins text-3xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[54px] ${
          isDark ? "text-white" : "text-[#14213D]"
        }`}>
          Ditch Long Process &amp; Grow
          <br className="hidden md:block" /> your Business to the{" "}
          <span className="bg-gradient-to-r from-[#2583FF] to-[#5597FF] bg-clip-text text-transparent">
            Next Level
          </span>
        </h2>

        <p className={`mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-9 ${
          isDark ? "text-slate-400" : "text-[#60708B]"
        }`}>
          Join thousands of businesses already using our AI-powered system to
          reach more customers, save time, and scale faster.
        </p>

        {/* Email signup form */}
        <form
          onSubmit={handleSubmit}
          className={`mx-auto mt-10 flex w-full max-w-[875px] flex-col gap-3 rounded-[32px] p-2.5 shadow-[0_18px_45px_rgba(40,85,150,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:rounded-full sm:pl-9 sm:pr-2.5 ${
            isDark ? "bg-[#111827]" : "bg-white"
          }`}
        >
          <div className="flex min-w-0 flex-1 items-center gap-4 px-3 sm:px-0">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-6 w-6 shrink-0 ${isDark ? "text-slate-500" : "text-[#94A3B8]"}`}
            >
              <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 8L3.5 7h17L12 13Z" />
            </svg>

            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your work email"
              aria-label="Your work email"
              className={`h-16 min-w-0 flex-1 border-0 bg-transparent text-base outline-none placeholder:text-[#94A3B8] focus:ring-0 sm:text-lg ${
                isDark ? "text-white" : "text-[#14213D]"
              }`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-[60px] shrink-0 items-center justify-center gap-4 rounded-full bg-[#FFD705] px-8 text-base font-semibold text-[#171923] transition-colors duration-200 hover:bg-[#F0CA00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287BFF] sm:min-w-[244px] sm:text-lg"
          >
            Get Started

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                d="M4 12h15m-7-7 7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetStarted;
