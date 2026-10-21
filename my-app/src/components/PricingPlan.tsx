
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

type Plan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  businesses: number;
  providers: number;
  customers: number;
  users: number;
  icon: "send" | "calendar" | "diamond";
  accent: "blue" | "green" | "yellow";
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    businesses: 5,
    providers: 5,
    customers: 5,
    users: 5,
    icon: "send",
    accent: "blue",
  },
  {
    name: "Basic",
    monthlyPrice: 10,
    yearlyPrice: 10,
    businesses: 10,
    providers: 10,
    customers: 10,
    users: 10,
    icon: "calendar",
    accent: "green",
  },
  {
    name: "Standard",
    monthlyPrice: 20,
    yearlyPrice: 20,
    businesses: 15,
    providers: 15,
    customers: 15,
    users: 15,
    icon: "calendar",
    accent: "blue",
    popular: true,
  },
  {
    name: "Premium",
    monthlyPrice: 40,
    yearlyPrice: 40,
    businesses: 20,
    providers: 20,
    customers: 20,
    users: 20,
    icon: "diamond",
    accent: "yellow",
  },
];

function PlanIcon({ type }: { type: Plan["icon"] }) {
  const common =
    "h-7 w-7 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round";

  if (type === "send") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="m21 3-7.5 18-3.8-7.7L2 9.5 21 3Z" />
        <path d="m9.7 13.3 5.5-5.5" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
        <path d="M7.5 3v5M16.5 3v5M3.5 10h17M8 14h2m4 0h2m-8 3h2m4 0h2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="m12 2 9 7-9 13L3 9l9-7Z" />
      <path d="m3 9 18 0M9 2l-2 7 5 13 5-13-5-7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="m6 10 2.5 2.5L14 7"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PricingPlan() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const { isDark } = useTheme();

  const featureLabels = [
    "No. of Businesses",
    "No. of Service Providers",
    "No. of Customers",
    "No. of Users",
  ];

  const lightAccentStyles = {
    blue: {
      icon: "bg-blue-100/80 text-blue-500",
      check: "text-blue-500",
      button: "border-blue-400 text-blue-600 hover:bg-blue-50",
    },
    green: {
      icon: "bg-emerald-100/80 text-emerald-500",
      check: "text-emerald-500",
      button: "border-emerald-400 text-emerald-500 hover:bg-emerald-50",
    },
    yellow: {
      icon: "bg-amber-100/80 text-amber-500",
      check: "text-amber-400",
      button: "border-amber-400 text-amber-500 hover:bg-amber-50",
    },
  };

  const darkAccentStyles = {
    blue: {
      icon: "bg-blue-900/40 text-blue-400",
      check: "text-blue-400",
      button: "border-blue-600 text-blue-400 hover:bg-blue-900/30",
    },
    green: {
      icon: "bg-emerald-900/40 text-emerald-400",
      check: "text-emerald-400",
      button: "border-emerald-600 text-emerald-400 hover:bg-emerald-900/30",
    },
    yellow: {
      icon: "bg-amber-900/40 text-amber-400",
      check: "text-amber-400",
      button: "border-amber-600 text-amber-400 hover:bg-amber-900/30",
    },
  };

  const accentStyles = isDark ? darkAccentStyles : lightAccentStyles;

  return (
    <section
      id="pricing-plan"
      className={`relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-14 transition-colors duration-300 ${
        isDark
          ? "bg-[linear-gradient(115deg,#080c1a_0%,#0b1020_36%,#0d1428_58%,#0a0e1c_100%)]"
          : "bg-[linear-gradient(115deg,#EDF3FF_0%,#F9FAFF_36%,#FFFFFF_58%,#FFF8E9_100%)]"
      }`}
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-20 top-28 -z-10 h-52 w-52 rounded-full blur-[1px] sm:h-64 sm:w-64 ${
          isDark ? "bg-blue-900/20" : "bg-blue-200/65"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 top-36 -z-10 h-56 w-56 rounded-full blur-2xl sm:h-64 sm:w-64 ${
          isDark ? "bg-amber-900/15" : "bg-amber-100/70"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-28 left-1/3 -z-10 h-72 w-72 rounded-full blur-3xl ${
          isDark ? "bg-blue-900/15" : "bg-blue-100/60"
        }`}
      />

      {/* Heading */}
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className={`h-px w-10 ${isDark ? "bg-blue-700" : "bg-blue-300"}`} />
          <span className={`rounded-full px-6 py-2 text-xs font-bold tracking-[0.12em] sm:text-sm ${
            isDark ? "bg-blue-900/50 text-blue-400" : "bg-blue-100/80 text-blue-600"
          }`}>
            PRICING PLAN
          </span>
          <span className={`h-px w-10 ${isDark ? "bg-blue-700" : "bg-blue-300"}`} />
        </div>

        <h2 className={`font-poppins text-3xl font-bold leading-tight tracking-[-1.2px] sm:text-4xl md:text-5xl lg:text-[52px] ${
          isDark ? "text-white" : "text-[#0C204B]"
        }`}>
          Simple,{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Transparent
          </span>{" "}
          Pricing
        </h2>

        <p className={`mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 ${
          isDark ? "text-slate-400" : "text-[#7184A9]"
        }`}>
          We believe that all should be accessible to all customers, no matter
          the size.
        </p>

        {/* Billing toggle */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className={`inline-flex items-center rounded-full border p-1 shadow-[0_4px_15px_rgba(47,91,180,0.06)] ${
            isDark ? "border-slate-700 bg-slate-800/80" : "border-blue-100/80 bg-white/90"
          }`}>
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`min-w-[120px] rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-[#FFD705] text-[#191C26] shadow-[0_4px_12px_rgba(255,213,0,0.25)]"
                  : isDark
                    ? "text-slate-300 hover:bg-slate-700"
                    : "text-[#253D67] hover:bg-blue-50"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`min-w-[120px] rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${
                billing === "yearly"
                  ? "bg-[#FFD705] text-[#191C26] shadow-[0_4px_12px_rgba(255,213,0,0.25)]"
                  : isDark
                    ? "text-slate-300 hover:bg-slate-700"
                    : "text-[#253D67] hover:bg-blue-50"
              }`}
            >
              Yearly
            </button>
          </div>

          <span className="hidden -rotate-6 text-sm font-medium italic text-blue-500 sm:inline-block">
            Save up to 20% ↙
          </span>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="relative mx-auto mt-10 grid max-w-[1410px] grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:mt-10 xl:grid-cols-4 xl:gap-6">
        {plans.map((plan) => {
          const popular = Boolean(plan.popular);
          const accent = accentStyles[plan.accent];
          const price =
            billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <article
              key={plan.name}
              className={`relative flex min-w-0 flex-col overflow-hidden rounded-[27px] border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                popular
                  ? "border-[#F0CA00] bg-[#FFD705] text-[#191C26] shadow-[0_20px_45px_rgba(240,202,0,0.25)] xl:scale-[1.02]"
                  : isDark
                    ? "border-slate-700/60 bg-[#111827] text-white shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:border-blue-700 hover:shadow-[0_16px_40px_rgba(49,91,174,0.15)]"
                    : "border-[#DFE8FF] bg-white/90 text-[#102750] shadow-[0_10px_35px_rgba(49,91,174,0.045)] backdrop-blur-sm hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(49,91,174,0.09)]"
              }`}
            >
              {/* Popular badge */}
              {popular && (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 top-14 h-28 w-20 rotate-45 rounded-full bg-white/10"
                  />
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-blue-600/70 px-3.5 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-sm sm:right-4 sm:top-4">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="m10 1.5 2.5 5.1 5.6.8-4.05 3.95.96 5.58L10 14.3l-5.01 2.63.96-5.58L1.9 7.4l5.6-.8L10 1.5Z" />
                    </svg>
                    Most Popular
                  </div>
                </>
              )}

              {/* Plan icon */}
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${
                  popular
                    ? "bg-white/95 text-blue-500 shadow-sm"
                    : accent.icon
                }`}
              >
                <PlanIcon type={plan.icon} />
              </div>

              {/* Plan name and price */}
              <h3
                className={`text-2xl font-bold tracking-tight sm:text-[26px] ${
                  popular ? "text-white" : isDark ? "text-white" : "text-[#102750]"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
                <span
                  className={`text-[38px] font-bold leading-none tracking-[-1.5px] sm:text-[42px] ${
                    popular ? "text-white" : isDark ? "text-white" : "text-[#102750]"
                  }`}
                >
                  £{price}
                </span>
                <span
                  className={`text-base ${
                    popular ? "text-blue-50" : isDark ? "text-slate-400" : "text-[#8295B7]"
                  }`}
                >
                  /month
                </span>
              </div>

              <p
                className={`mt-3 min-h-6 text-sm leading-6 ${
                  popular ? "text-blue-50" : isDark ? "text-slate-400" : "text-[#7184A9]"
                }`}
              >
                Perfect for Individual Session
              </p>

              {/* Feature divider */}
              <div
                className={`mt-5 h-px w-full ${
                  popular ? "bg-white/20" : isDark ? "bg-slate-700" : "bg-[#E9EFFB]"
                }`}
              />

              {/* Features */}
              <ul className="mt-4 flex flex-1 flex-col">
                {[
                  plan.businesses,
                  plan.providers,
                  plan.customers,
                  plan.users,
                ].map((value, index) => (
                  <li
                    key={featureLabels[index]}
                    className={`flex min-h-[37px] items-center gap-3 text-[13px] sm:text-sm ${
                      popular ? "text-white" : isDark ? "text-slate-400" : "text-[#7184A9]"
                    }`}
                  >
                    <span
                      className={
                        popular ? "text-white" : accent.check
                      }
                    >
                      <CheckIcon />
                    </span>

                    <span className="min-w-0 flex-1 leading-5">
                      {featureLabels[index]}
                    </span>

                    <span
                      className={`shrink-0 pl-2 font-medium ${
                        popular ? "text-white" : isDark ? "text-slate-300" : "text-[#61789F]"
                      }`}
                    >
                      {value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom divider */}
              <div
                className={`mt-4 h-px w-full ${
                  popular ? "bg-white/20" : isDark ? "bg-slate-700" : "bg-[#E9EFFB]"
                }`}
              />

              {/* CTA */}
              <button
                type="button"
                onClick={() => {
                  // Connect this button to your signup/checkout flow.
                }}
                className={`mt-5 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full border px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 ${
                  popular
                    ? "border-white bg-white text-blue-600 shadow-[0_6px_20px_rgba(12,53,150,0.12)] hover:bg-blue-50"
                    : `${accent.button} ${isDark ? "bg-transparent" : "bg-white/70"}`
                }`}
              >
                {popular ? "Choose Plan" : "Get Started"}
                <ArrowIcon />
              </button>
            </article>
          );
        })}
      </div>

      {/* Decorative footer */}
      <div className="relative mx-auto mt-10 max-w-sm text-center">
        <div className="flex items-center justify-center gap-5">
          <span className={`h-px flex-1 ${isDark ? "bg-blue-800" : "bg-blue-200"}`} />
          <div className={`flex h-10 w-10 items-center justify-center rounded-full border text-blue-500 shadow-sm ${
            isDark ? "border-blue-800 bg-slate-800/80" : "border-blue-100 bg-white/80"
          }`}>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
              aria-hidden="true"
            >
              <path d="M13.5 1.5 5 13h5.5l-1 9.5L19 9.5h-5.7l.2-8Z" />
            </svg>
          </div>
          <span className={`h-px flex-1 ${isDark ? "bg-blue-800" : "bg-blue-200"}`} />
        </div>

        <p className={`mt-4 text-[10px] font-semibold tracking-[0.2em] sm:text-[11px] ${isDark ? "text-slate-500" : "text-[#91A5CC]"}`}>
          BUILT FOR GROWTH <span className="mx-2">•</span> SECURE
          <span className="mx-2">•</span> SCALABLE
        </p>
      </div>
    </section>
  );
}

export default PricingPlan;
