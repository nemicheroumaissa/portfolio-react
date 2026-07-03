import { FONTS } from "../../models/theme.js";

export function Chip({ children, theme }) {
  const t = theme;
  return (
    <span
      style={{
        padding: "4px 12px",
        backgroundColor: t.surfaceContainerLow,
        borderRadius: "9999px",
        fontSize: 12,
        fontWeight: 600,
        color: t.secondary,
      }}
    >
      {children}
    </span>
  );
}

export function MetaItem({ label, value, theme }) {
  if (!value) return null;
  const t = theme;
  return (
    <div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: t.onSurfaceVariant,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: t.onSurface }}>{value}</div>
    </div>
  );
}

export function CaseStudyBlock({ icon: Icon, title, theme, children }) {
  const t = theme;
  return (
    <section style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: t.tertiaryContainer,
            flexShrink: 0,
          }}
        >
          <Icon size={18} color={t.onTertiaryContainer} />
        </div>
        <h2 style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 700, color: t.primary, margin: 0 }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function BulletList({ items, theme }) {
  const t = theme;
  return (
    <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: 12,
            color: t.onSurfaceVariant,
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: t.tertiary, fontWeight: 800, flexShrink: 0 }}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
