import HeroVisual from "./HeroVisual";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  const industries = ["Clinics", "Salons", "Gyms", "Studios"];
  return (
    <section className={`relative min-h-[700px] overflow-hidden transition-colors duration-300 ${
      isDark
        ? "bg-[linear-gradient(110deg,#0a0f24_0%,#0d1630_42%,#131a2e_100%)]"
        : "bg-[linear-gradient(110deg,#E8EDFF_0%,#F7F7FF_42%,#FFF3DC_100%)]"
    }`}>
      <div className="mx-auto grid min-h-[700px] max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-[5.55%] lg:py-12">

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start">

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${
            isDark ? "bg-[#1a2a4a] text-[#60a5fa]" : "bg-[#E7EEFF] text-[#2875FF]"
          }`}>
            <img
              src="/assets/next-gen-icon.png"
              alt=""
              className={`h-4 w-4 shrink-0 object-contain ${isDark ? "brightness-0 invert opacity-70" : ""}`}
            />
            <span className="whitespace-nowrap text-sm font-medium sm:text-base">
              Next-gen ERP Ecosystem
            </span>
          </div>

          {/* Heading */}
          <h1 className={`mt-7 max-w-[620px] font-poppins text-[38px] font-bold leading-[1.13] tracking-[-1.5px] sm:text-[48px] lg:text-[54px] ${
            isDark ? "text-white" : "text-[#191C26]"
          }`}>
            AI-Powered Booking System for All Businesses
          </h1>

          {/* Description */}
          <p className={`mt-5 max-w-[590px] text-base leading-[1.8] sm:text-lg ${
            isDark ? "text-slate-400" : "text-[#566078]"
          }`}>
            Bookings, payments, clients and reports in one place, with
            AI handling the busywork so your team can focus on customers.
          </p>

          {/* CTA Buttons */}
          <div className={`mt-8 flex flex-wrap items-center gap-2 rounded-full p-1.5 sm:gap-5 ${
            isDark
              ? "bg-[#1a2235] shadow-[0_12px_35px_rgba(0,0,0,0.4)]"
              : "bg-white shadow-[0_12px_35px_rgba(25,28,38,0.08)]"
          }`}>

            <button
              type="button"
              className="inline-flex min-h-[64px] min-w-[205px] items-center justify-center rounded-full bg-[#FFD705] px-2 font-[550] text-[#171923] transition-colors duration-200 hover:bg-[#F0CA00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2875FF]"
            >
              Get Started
            </button>

            <a
              href="#pricing-plan"
              className={`inline-flex min-h-[60px] items-center justify-center gap-3 rounded-full px-2 text-base font-medium no-underline transition-colors sm:text-lg ${
                isDark
                  ? "text-slate-200 hover:bg-slate-700/50"
                  : "text-[#191C26] hover:bg-gray-50"
              }`}
            >
              View Our Pricing

              <img
                src="/assets/pricing-icon.png"
                alt=""
                className={`h-3.5 w-3.5 shrink-0 object-contain ${isDark ? "brightness-0 invert opacity-60" : ""}`}
              />
            </a>
          </div>

          {/* Industries */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className={`mr-1 text-sm sm:text-base ${isDark ? "text-slate-400" : "text-[#566078]"}`}>
              Built for
            </span>

            {industries.map((industry) => (
              <span
                key={industry}
                className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 text-sm font-medium sm:px-[18px] ${
                  isDark
                    ? "border-slate-600 bg-slate-800 text-slate-200"
                    : "border-[#E6EAF5] bg-white text-[#191C26]"
                }`}
              >
                {industry}
              </span>
            ))}

            <span className={`inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold sm:px-[18px] ${
              isDark ? "bg-yellow-900/40 text-yellow-300" : "bg-[#FFF2BF] text-[#191C26]"
            }`}>
              + more
            </span>
          </div>
        </div>

        {/* Right Side: Dashboard images */}
        <div className="relative z-20 min-h-[350px] w-full overflow-visible bg-transparent sm:min-h-[420px] lg:min-h-[500px]">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
};

export default Hero;
