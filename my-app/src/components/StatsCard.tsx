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
  { value: "25%", description: "Decrease expense more than 25%/mo" },
  { value: "60%", description: "Business revenue increase significantly." },
];

const BLUE = "#3B82F6";
const FONT = "'Poppins', system-ui, sans-serif";

// Alignment per position. Classes are written out in full so Tailwind can detect them.
// Everything is left-aligned on mobile; first/middle/last alignment applies from `sm` up.
const ALIGN = {
  first: { col: "sm:items-start", text: "sm:text-left", rail: "sm:justify-start" },
  middle: { col: "sm:items-center", text: "sm:text-center", rail: "sm:justify-center" },
  last: { col: "sm:items-end", text: "sm:text-right", rail: "sm:justify-end" },
} as const;

export default function StatsLine({
  title = "Calendex is best ERP system for any Business",
  stats = defaultStats,
}: StatsLineProps) {
  const { isDark } = useTheme();

  const bg = isDark ? "#0d1630" : "#F8FAFF";
  const titleColor = isDark ? "#e2e8f0" : "#1A1A1A";
  const descColor = isDark ? "#94a3b8" : "#3A3A4A";
  const lineColor = isDark ? "#1e3a6e" : "#CFDAF5";

  const lastIndex = stats.length - 1;

  return (
    <section
      aria-labelledby="stats-line-title"
      style={{
        width: "100%",
        boxSizing: "border-box",
        background: bg,
        fontFamily: FONT,
        transition: "background 0.3s ease",
      }}
      className="px-4 py-12 sm:px-8 sm:py-16 lg:px-[6.7vw] lg:py-20"
    >
      {/* Google font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      />

      <div className="mx-auto flex max-w-full flex-col gap-10 sm:gap-14 lg:gap-16">
        <h2
          id="stats-line-title"
          style={{
            margin: 0,
            maxWidth: 760,
            fontFamily: FONT,
            fontWeight: 700,
            lineHeight: 1.2,
            color: titleColor,
            transition: "color 0.3s ease",
          }}
          className="text-[26px] sm:text-[32px] lg:text-[clamp(30px,3.1vw,44px)]"
        >
          {title}
        </h2>

        {/* Stats grid: 1 col on mobile, 3 columns from sm up (no gap, so the line joins up) */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, i) => {
            const isFirst = i === 0;
            const isLast = i === lastIndex;
            const pos = isFirst ? "first" : isLast ? "last" : "middle";
            const a = ALIGN[pos];

            return (
              <div
                key={stat.value}
                className={`flex min-w-0 flex-col items-start gap-4 ${a.col}`}
                style={{ fontFamily: FONT }}
              >
                {/* Value */}
                <p
                  style={{ margin: 0, fontWeight: 700, lineHeight: 1, color: BLUE }}
                  className="text-[52px] sm:text-[60px] lg:text-[clamp(52px,5vw,72px)]"
                >
                  {stat.value}
                </p>

                {/* Dot sits under the stat; the line runs from dot centre to the column edge(s) */}
                <div
                  aria-hidden="true"
                  className={`relative flex w-full items-center justify-start ${a.rail}`}
                >
                  {/* Line segment: starts at the dot (first), spans fully (middle), ends at the dot (last) */}
                  {pos === "first" && stats.length > 1 && (
                    <span
                      className="absolute left-2 right-0 top-1/2 hidden h-[2px] -translate-y-1/2 sm:block"
                      style={{ background: lineColor }}
                    />
                  )}
                  {pos === "middle" && (
                    <span
                      className="absolute left-0 right-0 top-1/2 hidden h-[2px] -translate-y-1/2 sm:block"
                      style={{ background: lineColor }}
                    />
                  )}
                  {pos === "last" && !isFirst && (
                    <span
                      className="absolute left-0 right-2 top-1/2 hidden h-[2px] -translate-y-1/2 sm:block"
                      style={{ background: lineColor }}
                    />
                  )}

                  <span
                    className="relative z-10 h-4 w-4 shrink-0 rounded-full"
                    style={{ background: BLUE }}
                  />
                </div>

                {/* Description */}
                <p
                  className={`text-left ${a.text}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}