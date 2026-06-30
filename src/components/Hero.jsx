import { Flower2, Sprout } from "lucide-react";
import { FONTS } from "../models/theme.js";
import { useHeroScroll } from "../controllers/useHeroScroll.js";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDhZmoKuidI8oCDtCzALrx18vzFkTZhKthwE-eRwdkjfw_zRI1VlMe-plTFVHbLiX6xZzJ7mSgjfYXTZnkMwdhc6yFZJ2aoXeBvkLOPQ7KL8ahHL8iUsNnupRbkLXfZYiWuva4LoLo16hEG05rkRooqwpuf_wj3nV7hx1u9RQWlE6GioRNLj7jOAifFM90RQ_CEebXfsbypJCwWaDt_dDzjjS77QAVIJh8TXwq5Fhbxrc0ev8B3xNVb5przNCFpEN1aNQF_4F2PvEQ";

/**
 * VIEW — Section d'accueil avec animations au scroll (parallaxe + fondu).
 */
export default function Hero({ theme, heroRef, scrollTo }) {
  const t = theme;
  const scrollProgress = useHeroScroll(heroRef);

  const contentOpacity = 1 - scrollProgress * 0.9;
  const contentY = scrollProgress * 80;
  const contentScale = 1 - scrollProgress * 0.08;
  const bgScale = 1 + scrollProgress * 0.12;
  const bgY = scrollProgress * 60;

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "64px 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transform: `translateY(${bgY}px) scale(${bgScale})`,
          willChange: "transform",
        }}
      >
        <img
          alt="Hero Garden Background"
          src={HERO_IMG}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, transparent, ${t.background}33, ${t.background})`,
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 900,
          padding: "0 16px",
          opacity: contentOpacity,
          transform: `translateY(${contentY}px) scale(${contentScale})`,
          willChange: "transform, opacity",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(8px)",
            padding: "4px 16px",
            borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
            color: t.primary,
            fontFamily: FONTS.hand,
            fontSize: 20,
            marginBottom: 24,
            border: "2px solid currentColor",
          }}
        >
          Hello, traveler! 🌸
        </div>

        <h1
          className="pf-hero-title"
          style={{
            fontFamily: FONTS.script,
            color: t.primary,
            marginBottom: 32,
            lineHeight: 1.2,
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
          }}
        >
          Roumaissa's Digital Portfolio
        </h1>

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 18,
            lineHeight: 1.6,
            color: t.onSurfaceVariant,
            marginBottom: 40,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            background: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(4px)",
            padding: 16,
            borderRadius: 16,
          }}
        >
          A Full Stack Developer cultivating elegant solutions and growing digital experiences from the ground up.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
            className="pf-btn"
            style={{
              backgroundColor: t.primary,
              color: t.onPrimary,
              padding: "16px 32px",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            View The Harvest
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="pf-btn"
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              color: t.primary,
              padding: "16px 32px",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: `2px solid ${t.primary}1a`,
            }}
          >
            Plant a Seed
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          width: 96,
          height: 96,
          opacity: 0.6 * contentOpacity,
          transform: `translateY(${scrollProgress * -40}px) rotate(${scrollProgress * 12}deg)`,
          willChange: "transform, opacity",
        }}
      >
        <Flower2 size={64} color={t.tertiary} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 160,
          right: 80,
          width: 64,
          height: 64,
          opacity: 0.4 * contentOpacity,
          transform: `translateY(${scrollProgress * -60}px)`,
          willChange: "transform, opacity",
        }}
      >
        <Sprout size={40} color={t.primary} />
      </div>
    </section>
  );
}
