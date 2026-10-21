import type { CSSProperties } from "react";
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
const font = "'Poppins', system-ui, sans-serif";

export default function StatsLine({
  title = "Calendex is best ERP system for any Business",
  stats = defaultStats,
}: StatsLineProps) {
  const { isDark } = useTheme();

  const styles: Record<string, CSSProperties> = {
    section: {
      width: "100%",
      boxSizing: "border-box",
      background: isDark ? "#0d1630" : "#F8FAFF",
      fontFamily: font,
      padding: "80px clamp(24px, 6.7vw, 96px)",
      transition: "background 0.3s ease",
    },
    inner: {
      maxWidth: 1248,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 64,
    },
    title: {
      margin: 0,
      maxWidth: 760,
      fontFamily: font,
      fontSize: "clamp(30px, 3.1vw, 44px)",
      fontWeight: 700,
      lineHeight: 1.2,
      color: isDark ? "#e2e8f0" : "#1A1A1A",
      transition: "color 0.3s ease",
    },
    list: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: "40px 0",
    },
    item: {
      flex: "1 1 260px",
      display: "flex",
      flexDirection: "column",
      gap: 18,
    },
    value: {
      margin: 0,
      fontFamily: font,
      fontSize: "clamp(52px, 5vw, 72px)",
      fontWeight: 700,
      lineHeight: 1,
      color: BLUE,
    },
    rail: { display: "flex", alignItems: "center" },
    dot: { width: 16, height: 16, flex: "none", borderRadius: "50%", background: BLUE },
    line: { flex: 1, height: 2, background: isDark ? "#1e3a6e" : "#CFDAF5" },
    description: {
      margin: 0,
      maxWidth: 300,
      fontFamily: font,
      fontSize: 17,
      lineHeight: 1.6,
      color: isDark ? "#94a3b8" : "#3A3A4A",
      transition: "color 0.3s ease",
    },
  };

  return (
    <section aria-labelledby="stats-line-title" style={styles.section}>
      {/* Loads Poppins. Remove this line if your app already loads it. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      />

      <div style={styles.inner}>
        <h2 id="stats-line-title" style={styles.title}>
          {title}
        </h2>

        <ul style={styles.list}>
          {stats.map((stat, i) => (
            <li key={stat.value} style={styles.item}>
              <p style={styles.value}>{stat.value}</p>

              <div aria-hidden="true" style={styles.rail}>
                <span style={styles.dot} />
                {i < stats.length - 1 && <span style={styles.line} />}
              </div>

              <p style={styles.description}>{stat.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}