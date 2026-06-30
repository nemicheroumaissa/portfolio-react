import { Leaf } from "lucide-react";
import { SKILLS } from "../models/skills.js";
import { FONTS } from "../models/theme.js";

/**
 * VIEW — Grille des compétences techniques.
 */
export default function Skills({ theme, darkMode, skillsRef }) {
  const t = theme;

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="pf-section"
      style={{ backgroundColor: t.surfaceContainerLow, position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, padding: 40, opacity: 0.1 }}>
        <Leaf size={200} color={t.onSurface} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontFamily: FONTS.display, fontSize: 32, fontWeight: 700, color: t.primary, marginBottom: 8 }}>
            Seeds of Knowledge
          </h2>
          <p style={{ color: t.onSurfaceVariant }}>Technologies I've nurtured and mastered over the years.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            const accent = t[skill.color];
            const accentContainer = t[`${skill.color}Container`];

            return (
              <div
                key={skill.name}
                className="pf-card pf-skill"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 32,
                  backgroundColor: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 24,
                  border: "2px solid currentColor",
                  color: accent,
                }}
              >
                <div
                  className="pf-icon-circle"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "9999px",
                    backgroundColor: `${accentContainer}4d`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon size={36} color={accent} />
                </div>
                <h3 style={{ fontFamily: FONTS.display, fontSize: 24, fontWeight: 600, color: accent }}>{skill.name}</h3>
                <p style={{ fontSize: 14, fontWeight: 600, color: t.onSurfaceVariant }}>{skill.tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
