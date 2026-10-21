
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ContactSection = () => {
  const { isDark } = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your backend/API here.
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Contact form submission:", data);
  };

  return (
    <section
      id="contact"
      className={`relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-[5.2%] lg:py-28 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#080c1a] via-[#0a0f20] to-[#07090e]"
          : "bg-gradient-to-br from-[#F7FAFF] via-white to-[#FFF9E8]"
      }`}
    >
      {/* Background decorations */}
      <div className={`pointer-events-none absolute -right-32 top-16 -z-10 h-[440px] w-[440px] rounded-full blur-3xl ${
        isDark ? "bg-[#1a2a4a]/50" : "bg-[#E5EFFF]/60"
      }`} />
      <div className={`pointer-events-none absolute -bottom-64 right-[-8%] -z-10 h-[440px] w-[700px] rounded-full blur-3xl ${
        isDark ? "bg-[#1a180a]/50" : "bg-[#FFF0B8]/60"
      }`} />

      <div className="mx-auto grid max-w-[1600px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        {/* Left: Contact form */}
        <div className="relative z-10">
          <div className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-semibold tracking-wide ${
            isDark ? "border-blue-800 bg-blue-900/40 text-blue-400" : "border-blue-100 bg-blue-50 text-[#2785FF]"
          }`}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 3V6a2 2 0 0 1 2-2Zm3 6h2V8H7v2Zm4 0h2V8h-2v2Zm4 0h2V8h-2v2Z" />
            </svg>
            GET IN TOUCH
          </div>

          <h2 className={`font-poppins text-5xl font-bold leading-[1.08] tracking-[-2px] sm:text-6xl lg:text-[76px] ${
            isDark ? "text-white" : "text-[#101C3B]"
          }`}>
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-[#2187FF] to-[#1760EA] bg-clip-text text-transparent">
              talk
            </span>
          </h2>

          <p className={`mt-5 max-w-[700px] text-base leading-8 sm:text-lg ${
            isDark ? "text-slate-400" : "text-[#637393]"
          }`}>
            To request a quote or start the next up for coffee, contact us
            directly or fill out the form and we will get back to you promptly.
          </p>

          <form
            onSubmit={handleSubmit}
            className={`mt-9 rounded-[28px] border p-5 shadow-[0_20px_65px_rgba(49,112,210,0.10)] backdrop-blur-xl sm:p-7 ${
              isDark
                ? "border-slate-700/60 bg-slate-800/70"
                : "border-white/90 bg-white/80"
            }`}
          >
            {/* Name and email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className={`flex min-w-0 items-center gap-3 rounded-[18px] border p-3 transition focus-within:ring-4 ${
                isDark
                  ? "border-slate-600 bg-slate-900/60 focus-within:border-blue-500 focus-within:ring-blue-500/20"
                  : "border-[#DFE8FA] bg-white/80 focus-within:border-[#5B9DFF] focus-within:ring-blue-100/70"
              }`}>
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                  isDark ? "bg-blue-900/50 text-blue-400" : "bg-[#E7F0FF] text-[#2585FF]"
                }`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5Z" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-sm font-medium ${isDark ? "text-slate-400" : "text-[#607397]"}`}>
                    Your Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name..."
                    required
                    className={`mt-1 w-full min-w-0 border-0 bg-transparent p-0 text-sm outline-none placeholder:text-[#8190AF] ${
                      isDark ? "text-white" : "text-[#142343]"
                    }`}
                  />
                </span>
              </label>

              <label className={`flex min-w-0 items-center gap-3 rounded-[18px] border p-3 transition focus-within:ring-4 ${
                isDark
                  ? "border-slate-600 bg-slate-900/60 focus-within:border-blue-500 focus-within:ring-blue-500/20"
                  : "border-[#DFE8FA] bg-white/80 focus-within:border-[#5B9DFF] focus-within:ring-blue-100/70"
              }`}>
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                  isDark ? "bg-blue-900/50 text-blue-400" : "bg-[#E7F0FF] text-[#2585FF]"
                }`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 8L3 7v2l9 6 9-6V7l-9 6Z" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-sm font-medium ${isDark ? "text-slate-400" : "text-[#607397]"}`}>
                    Your Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email..."
                    required
                    className={`mt-1 w-full min-w-0 border-0 bg-transparent p-0 text-sm outline-none placeholder:text-[#8190AF] ${
                      isDark ? "text-white" : "text-[#142343]"
                    }`}
                  />
                </span>
              </label>
            </div>

            {/* Message */}
            <label className={`mt-5 flex min-h-[128px] items-start gap-3 rounded-[18px] border p-3 transition focus-within:ring-4 ${
              isDark
                ? "border-slate-600 bg-slate-900/60 focus-within:border-blue-500 focus-within:ring-blue-500/20"
                : "border-[#DFE8FA] bg-white/80 focus-within:border-[#5B9DFF] focus-within:ring-blue-100/70"
            }`}>
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                isDark ? "bg-blue-900/50 text-blue-400" : "bg-[#E7F0FF] text-[#2585FF]"
              }`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M4 5h16v13H9l-5 3V5Z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block text-sm font-medium ${isDark ? "text-slate-400" : "text-[#607397]"}`}>
                  Your Message
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Type your message here..."
                  required
                  className={`mt-2 w-full resize-y border-0 bg-transparent p-0 text-sm leading-6 outline-none placeholder:text-[#8190AF] ${
                    isDark ? "text-white" : "text-[#142343]"
                  }`}
                />
              </span>
            </label>

            <button
              type="submit"
              className="group mt-5 inline-flex min-h-[62px] items-center justify-center gap-4 rounded-full bg-[#FFD705] px-9 text-base font-semibold text-[#171923] shadow-[0_12px_24px_rgba(255,212,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F5CB00] hover:shadow-[0_16px_30px_rgba(255,212,0,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2585FF]"
            >
              Send Message
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right: Envelope illustration */}
        <div className="relative mx-auto flex min-h-[430px] w-full max-w-[650px] items-center justify-center sm:min-h-[540px]">
          {/* Main soft circle */}
          <div className={`absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[430px] sm:w-[430px] ${
            isDark
              ? "bg-gradient-to-br from-[#1a2a4a] via-[#152040] to-[#1e3050]"
              : "bg-gradient-to-br from-[#E7F1FF] via-[#D7E8FF] to-[#EDF5FF]"
          }`} />
          <div className={`absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-[490px] sm:w-[490px] ${
            isDark ? "border-blue-800/40" : "border-blue-100/70"
          }`} />

          {/* Dashed paper-plane route */}
          <svg
            viewBox="0 0 600 480"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M65 295 C45 220 150 190 220 250 S360 340 410 245 S505 185 535 155"
              stroke={isDark ? "#2a5a9e" : "#7BB4FF"}
              strokeWidth="2.5"
              strokeDasharray="8 9"
              strokeLinecap="round"
            />
          </svg>

          {/* Envelope illustration */}
          <div className="relative z-10 w-[74%] max-w-[420px] -rotate-3 drop-shadow-[0_35px_35px_rgba(43,103,218,0.23)]">
            <svg
              viewBox="0 0 420 330"
              className="h-auto w-full"
              role="img"
              aria-label="A letter in a blue envelope"
            >
              <defs>
                <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={isDark ? "#1e2d45" : "#FFFFFF"} />
                  <stop offset="100%" stopColor={isDark ? "#152035" : "#EDF3FF"} />
                </linearGradient>
                <linearGradient id="envelopeBack" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8CC1FF" />
                  <stop offset="100%" stopColor="#397BF1" />
                </linearGradient>
                <linearGradient id="envelopeFront" x1="0" y1="0" x2="0.9" y2="1">
                  <stop offset="0%" stopColor="#5CA1FF" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>

              {/* Letter */}
              <rect
                x="110"
                y="25"
                width="205"
                height="225"
                rx="24"
                fill="url(#paper)"
                stroke={isDark ? "#2a4a7a" : "#E3EDFF"}
                strokeWidth="2"
              />
              <rect x="147" y="83" width="130" height="15" rx="7.5" fill={isDark ? "#2a4a7a" : "#A4C3FF"} />
              <rect x="147" y="116" width="135" height="15" rx="7.5" fill={isDark ? "#2a4a7a" : "#A4C3FF"} />
              <rect x="147" y="149" width="85" height="15" rx="7.5" fill={isDark ? "#2a4a7a" : "#A4C3FF"} />

              {/* Envelope body */}
              <path
                d="M40 150 Q40 135 57 135 H363 Q380 135 380 153 V270 Q380 290 360 290 H60 Q40 290 40 270Z"
                fill="url(#envelopeBack)"
              />
              <path d="M43 148 L210 255 L377 148" fill="#8DBDFF" />
              <path
                d="M42 160 L164 233 L42 280 Q40 278 40 266 V165Z"
                fill="#6CA8FF"
              />
              <path
                d="M378 160 L256 233 L378 280 Q380 277 380 266 V165Z"
                fill="#397AF0"
              />
              <path
                d="M42 280 L175 202 L210 225 L245 202 L378 280 Q373 290 360 290 H60 Q47 290 42 280Z"
                fill="url(#envelopeFront)"
              />
            </svg>
          </div>

          {/* Floating paper plane */}
          <div className="absolute right-[5%] top-[27%] z-20 rotate-[-12deg] text-[#2785FF]">
            <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-16 sm:w-16" fill="currentColor" aria-hidden="true">
              <path d="M5 28 57 5 39 59 28 37 5 28Zm26 5 8 16 9-31-17 15Z" />
            </svg>
          </div>

          {/* Floating purple message icon */}
          <div className="absolute left-[8%] top-[15%] flex h-[66px] w-[66px] rotate-[-12deg] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#9A54FF] to-[#6538E9] text-white shadow-[0_15px_30px_rgba(123,66,238,0.24)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
              <path d="M2.5 11.2 21 3l-6.4 18-4.1-7-8-2.8Zm8.8 1.2 2.4 4.1 3.7-10.1-6.1 6Z" />
            </svg>
          </div>

          {/* Quick reply badge */}
          <div className={`absolute right-0 top-[10%] z-20 flex rotate-[5deg] items-center gap-3 rounded-[22px] border px-4 py-3 shadow-[0_15px_35px_rgba(65,119,211,0.13)] backdrop-blur-md sm:px-5 ${
            isDark ? "border-slate-700 bg-slate-800/90" : "border-white/80 bg-white/90"
          }`}>
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              isDark ? "bg-emerald-900/50 text-emerald-400" : "bg-[#E1F8EE] text-[#21B783]"
            }`}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M13 2 4 13h6l-1 9 9-12h-6l1-8Z" />
              </svg>
            </span>
            <span>
              <span className={`block whitespace-nowrap text-sm font-semibold ${isDark ? "text-white" : "text-[#172D58]"}`}>
                We reply quickly
              </span>
              <span className={`mt-1 block whitespace-nowrap text-xs ${isDark ? "text-slate-400" : "text-[#7888A8]"}`}>
                Usually within 24 hours
              </span>
            </span>
          </div>

          {/* Security badge */}
          <div className={`absolute bottom-[13%] left-[1%] z-20 flex -rotate-[7deg] items-center gap-3 rounded-[22px] border px-4 py-3 shadow-[0_15px_35px_rgba(65,119,211,0.13)] sm:left-[2%] sm:px-5 ${
            isDark ? "border-slate-700 bg-slate-800/95" : "border-white/80 bg-white/95"
          }`}>
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              isDark ? "bg-blue-900/50 text-blue-400" : "bg-[#E4F0FF] text-[#2785FF]"
            }`}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M12 2 4 5v6c0 5.2 3.4 8.8 8 11 4.6-2.2 8-5.8 8-11V5l-8-3Zm-1 13-3-3 1.4-1.4L11 12.2l3.6-3.6L16 10l-5 5Z" />
              </svg>
            </span>
            <span className={`max-w-[145px] text-sm font-semibold leading-5 ${isDark ? "text-white" : "text-[#24406F]"}`}>
              Your information
              <span className={`block font-normal ${isDark ? "text-slate-400" : "text-[#7182A4]"}`}>
                is safe with us
              </span>
            </span>
          </div>

          {/* Yellow support icon */}
          <div className="absolute right-[2%] top-[57%] flex h-[68px] w-[68px] rotate-[8deg] items-center justify-center rounded-[22px] border-4 border-white/70 bg-[#FFD72F] text-[#17376C] shadow-[0_15px_30px_rgba(255,211,36,0.25)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8" aria-hidden="true">
              <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
              <rect x="3" y="12" width="4" height="7" rx="2" />
              <rect x="17" y="12" width="4" height="7" rx="2" />
              <path d="M19 19c0 2-2 3-5 3h-2" />
            </svg>
          </div>

          {/* Small decorative shapes */}
          <span className="absolute left-[4%] top-[48%] h-3 w-3 rounded-full bg-[#FFD72F]" />
          <span className={`absolute right-[20%] bottom-[7%] h-7 w-7 rounded-full border-[5px] ${isDark ? "border-purple-600" : "border-[#B980FF]"}`} />
          <span className={`absolute left-[28%] bottom-[2%] h-8 w-8 rounded-full border-[5px] ${isDark ? "border-blue-600" : "border-[#4A99FF]"}`} />
          <span className={`absolute right-[4%] bottom-[15%] h-14 w-14 opacity-70 ${isDark ? "[background-image:radial-gradient(#2a5aaa_2px,transparent_2px)]" : "[background-image:radial-gradient(#8DBAFF_2px,transparent_2px)]"} [background-size:15px_15px]`} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
