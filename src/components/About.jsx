import { StickyNote } from "lucide-react";
import SketchCard from "./SketchCard.jsx";
import { FONTS } from "../models/theme.js";

/**
 * VIEW — Section "Ma Story".
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
            Ma Story
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 18, lineHeight: 1.6, color: t.onSurfaceVariant }}>
            <p>
              Tout a commencé par une simple curiosité pour le développement web. Ce qui n'était au départ qu'une
              envie de comprendre comment les sites prennent vie est rapidement devenu une véritable passion.
            </p>
            <p>
              Aujourd'hui, je conçois des expériences web où design et développement travaillent ensemble. J'aime
              transformer une idée en un produit fonctionnel, en créant des interfaces modernes, intuitives et
              agréables à utiliser, tout en construisant un backend fiable et performant.
            </p>
            <p>
              Chaque projet est pour moi une occasion d'apprendre, d'expérimenter et de faire grandir mes
              compétences. J'accorde une grande importance aux détails, à l'esthétique et à la qualité du code, car
              je crois que les meilleures expériences naissent de l'équilibre entre créativité et technique.
            </p>
            <p>
              Mon parcours continue d'évoluer, un projet après l'autre, avec la même envie : créer des solutions
              numériques utiles, élégantes et durables.
            </p>
            <p style={{ fontFamily: FONTS.hand, fontSize: 24, color: t.secondary, paddingTop: 16 }}>— Roumaissa</p>
          </div>
        </SketchCard>
      </div>
    </section>
  );
}
