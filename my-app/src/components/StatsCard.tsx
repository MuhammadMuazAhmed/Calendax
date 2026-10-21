import { useTheme } from "../context/ThemeContext";

export type Stat = {
  value: string;
  description: string;
};

export type StatsLineProps = {
  title?: string;
  stats?: Stat[];
};

const defaultStats: Stat[] = [
  { value: "15K+", description: "15k+ users used Dash for their business today." },
  { value: "25%",  description: "Decrease expense more than 25%/mo" },
  { value: "60%",  description: "Business revenue increase significantly." },
];

const BLUE = "#3B82F6";

export default function StatsLine({
  title = "Calendex is best ERP system for any Business",
  stats = defaultStats,
}: StatsLineProps) {
  const { isDark } = useTheme();

  const bg   = isDark ? "#0d1630" : "#F8FAFF";
  const titleColor = isDark ? "#e2e8f0" : "#1A1A1A";
  const descColor  = isDark ? "#94a3b8" : "#3A3A4A";
  const lineColor  = isDark ? "#1e3a6e" : "#CFDAF5";

  return (
    <section
      aria-labelledby="stats-line-title"
      style={{
        width: "100%",
        boxSizing: "border-box",
        background: bg,
        fontFamily: "'Poppins', system-ui, sans-serif",
        transition: "background 0.3s ease",
      }}
      className="px-4 py-12 sm:px-8 sm:py-16 lg:px-[6.7vw] lg:py-20"
    >
      {/* Google font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      />

      <div className="mx-auto flex max-w-[1248px] flex-col gap-10 sm:gap-14 lg:gap-16">
        <h2
          id="stats-line-title"
          style={{
            margin: 0,
            maxWidth: 760,
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontWeight: 700,
            lineHeight: 1.2,
            color: titleColor,
            transition: "color 0.3s ease",
          }}
          className="text-[26px] sm:text-[32px] lg:text-[clamp(30px,3.1vw,44px)]"
        >
          {title}
        </h2>

        {/* Stats grid — 1 col mobile, 3 col md+ */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className="flex flex-col gap-4"
              style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
            >
              {/* Value */}
              <p
                style={{ margin: 0, fontWeight: 700, lineHeight: 1, color: BLUE }}
                className="text-[52px] sm:text-[60px] lg:text-[clamp(52px,5vw,72px)]"
              >
                {stat.value}
              </p>

              {/* Rail — dot + line (line hidden on last item & mobile) */}
              <div
                aria-hidden="true"
                className="flex items-center"
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: BLUE,
                    flexShrink: 0,
                  }}
                />
                {/* Line only between items on md+ */}
                {i < stats.length - 1 && (
                  <span
                    className="hidden sm:block"
                    style={{ flex: 1, height: 2, background: lineColor }}
                  />
                )}
              </div>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  maxWidth: 300,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: descColor,
                  transition: "color 0.3s ease",
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}