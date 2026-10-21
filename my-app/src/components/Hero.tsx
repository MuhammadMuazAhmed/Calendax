import HeroVisual from "./HeroVisual";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  const industries = ["Clinics", "Salons", "Gyms", "Studios"];

  return (
    <section
      className={`relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[linear-gradient(110deg,#0a0f24_0%,#0d1630_42%,#131a2e_100%)]"
          : "bg-[linear-gradient(110deg,#E8EDFF_0%,#F7F7FF_42%,#FFF3DC_100%)]"
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-4 pb-0 pt-24 sm:px-8 sm:pt-28 md:gap-10 md:px-10 md:pt-28 lg:grid-cols-2 lg:gap-12 lg:px-[5.55%] lg:pb-12 lg:pt-32 xl:grid-cols-[0.95fr_1.05fr]">

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start pb-8 lg:pb-0">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium sm:px-4 sm:py-2 sm:text-base ${
              isDark ? "bg-[#1a2a4a] text-[#60a5fa]" : "bg-[#E7EEFF] text-[#2875FF]"
            }`}
          >
            <img
              src="/assets/next-gen-icon.png"
              alt=""
              className={`h-3.5 w-3.5 shrink-0 object-contain sm:h-4 sm:w-4 ${isDark ? "brightness-0 invert opacity-70" : ""}`}
            />
            <span className="whitespace-nowrap">Next-gen ERP Ecosystem</span>
          </div>

          {/* Heading */}
          <h1
            className={`mt-5 max-w-[620px] font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] sm:mt-7 sm:text-[42px] sm:tracking-[-1.5px] lg:text-[48px] xl:text-[54px] ${
              isDark ? "text-white" : "text-[#191C26]"
            }`}
          >
            AI-Powered Booking System for All Businesses
          </h1>

          {/* Description */}
          <p
            className={`mt-4 max-w-[590px] text-[15px] leading-[1.75] sm:mt-5 sm:text-base sm:leading-[1.8] lg:text-lg ${
              isDark ? "text-slate-400" : "text-[#566078]"
            }`}
          >
            Bookings, payments, clients and reports in one place, with AI
            handling the busywork so your team can focus on customers.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-6 flex w-full max-w-[520px] flex-col items-stretch gap-2 rounded-2xl p-2 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-3 sm:rounded-full sm:p-1.5 ${
              isDark
                ? "bg-[#1a2235] shadow-[0_12px_35px_rgba(0,0,0,0.4)]"
                : "bg-white shadow-[0_12px_35px_rgba(25,28,38,0.08)]"
            }`}
          >
            <button
              type="button"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#FFD705] px-6 font-[550] text-[#171923] transition-colors duration-200 hover:bg-[#F0CA00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2875FF] sm:min-h-[58px] sm:min-w-[180px] sm:rounded-full"
            >
              Get Started
            </button>

            <a
              href="#pricing-plan"
              className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-4 text-[15px] font-medium no-underline transition-colors sm:min-h-[56px] sm:w-auto sm:rounded-full sm:text-base lg:text-lg ${
                isDark
                  ? "text-slate-200 hover:bg-slate-700/50"
                  : "text-[#191C26] hover:bg-gray-50"
              }`}
            >
              View Our Pricing
              <img
                src="/assets/pricing-icon.png"
                alt=""
                className={`h-3 w-3 shrink-0 object-contain sm:h-3.5 sm:w-3.5 ${isDark ? "brightness-0 invert opacity-60" : ""}`}
              />
            </a>
          </div>

          {/* Industries */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-2.5 lg:gap-3">
            <span
              className={`mr-1 text-sm sm:text-base ${isDark ? "text-slate-400" : "text-[#566078]"}`}
            >
              Built for
            </span>

            {industries.map((industry) => (
              <span
                key={industry}
                className={`inline-flex min-h-9 items-center justify-center rounded-full border px-3 text-sm font-medium sm:min-h-10 sm:px-[18px] ${
                  isDark
                    ? "border-slate-600 bg-slate-800 text-slate-200"
                    : "border-[#E6EAF5] bg-white text-[#191C26]"
                }`}
              >
                {industry}
              </span>
            ))}

            <span
              className={`inline-flex min-h-9 items-center justify-center rounded-full px-3 text-sm font-semibold sm:min-h-11 sm:px-[18px] ${
                isDark
                  ? "bg-yellow-900/40 text-yellow-300"
                  : "bg-[#FFF2BF] text-[#191C26]"
              }`}
            >
              + more
            </span>
          </div>
        </div>

        {/* Right Side: Dashboard images — hidden on mobile, shown from lg */}
        <div className="relative z-20 hidden w-full overflow-visible bg-transparent lg:block lg:min-h-[500px] xl:min-h-[560px]">
          <HeroVisual />
        </div>
      </div>

      {/* Mobile/tablet dashboard preview — shown below content on small screens */}
      <div className="relative z-20 mt-2 h-[280px] w-full overflow-hidden sm:h-[340px] lg:hidden">
        <HeroVisual compact />
      </div>
    </section>
  );
};

export default Hero;
