import { FONTS } from "../models/theme.js";

/**
 * VIEW — Pied de page.
 */
export default function Footer({ theme }) {
  const t = theme;

  return (
    <footer style={{ backgroundColor: t.surfaceContainerLow, borderTop: `2px solid ${t.outlineVariant}4d` }}>
      <div
        className="pf-footer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 1280,
          margin: "0 auto",
          gap: 16,
          textAlign: "center",
        }}
      >
        <div>
          <div style={{ fontFamily: FONTS.display, fontSize: 24, fontWeight: 600, color: t.secondary, marginBottom: 8 }}>
            Roumaissa
          </div>
          <p style={{ color: t.onSurfaceVariant, margin: 0 }}>
            © 2026 Nemiche Roumaissa. Grown with love and digital seeds.
          </p>
        </div>
      </div>
    </footer>
  );
}
