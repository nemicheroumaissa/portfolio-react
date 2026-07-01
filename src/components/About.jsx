import { StickyNote } from "lucide-react";
import SketchCard from "./SketchCard.jsx";
import { FONTS } from "../models/theme.js";

/**
 * VIEW — Section "My Story".
 */
export default function About({ theme, darkMode, aboutRef }) {
  const t = theme;

  return (
    <section ref={aboutRef} id="about" className="pf-section" style={{ backgroundColor: t.surface }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SketchCard
          className="pf-sketch-card"
          style={{
            borderRadius: 24,
            position: "relative",
            backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)",
            backdropFilter: "blur(20px)",
            border: `2px solid ${darkMode ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.8)"}`,
            color: t.primary,
          }}
        >
          <div style={{ position: "absolute", top: -24, left: -24, transform: "rotate(12deg)" }}>
            <StickyNote size={36} color={t.tertiary} />
          </div>

          <h2 style={{ fontFamily: FONTS.display, fontSize: 32, fontWeight: 700, color: t.primary, marginBottom: 24 }}>
            My Story
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 18, lineHeight: 1.6, color: t.onSurfaceVariant }}>
            <p>
              It all started with a simple curiosity about web development. What began as a desire to understand how
              websites come to life quickly became a true passion.
            </p>
            <p>
              Today, I design web experiences where design and development work hand in hand. I love turning an idea
              into a functional product by creating modern, intuitive, and enjoyable interfaces, while building a
              reliable and performant backend.
            </p>
            <p>
              Every project is an opportunity for me to learn, experiment, and grow my skills. I place great importance
              on details, aesthetics, and code quality, because I believe the best experiences come from the balance
              between creativity and technical skill.
            </p>
            <p>
              My journey continues to evolve, one project at a time, with the same drive: creating digital solutions
              that are useful, elegant, and built to last.
            </p>
            <p style={{ fontFamily: FONTS.hand, fontSize: 24, color: t.secondary, paddingTop: 16 }}>— Roumaissa</p>
          </div>
        </SketchCard>
      </div>
    </section>
  );
}
