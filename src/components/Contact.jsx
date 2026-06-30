import { Mail, Send } from "lucide-react";
import { FONTS } from "../models/theme.js";
import { useContactForm } from "../controllers/useContactForm.js";
import SocialLinksBar from "./SocialLinksBar.jsx";

/**
 * VIEW — Section contact avec formulaire mailto et liens sociaux avant le formulaire.
 */
export default function Contact({ theme, darkMode, contactRef }) {
  const t = theme;
  const { form, status, update, submit } = useContactForm();

  return (
    <section
      ref={contactRef}
      id="contact"
      className="pf-section"
      style={{ backgroundColor: t.surfaceContainer, position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: -96,
          left: -96,
          width: 384,
          height: 384,
          backgroundColor: `${t.primaryContainer}33`,
          borderRadius: "9999px",
          filter: "blur(64px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -96,
          right: -96,
          width: 384,
          height: 384,
          backgroundColor: `${t.tertiaryContainer}33`,
          borderRadius: "9999px",
          filter: "blur(64px)",
        }}
      />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              backgroundColor: t.primary,
              borderRadius: "9999px",
              marginBottom: 24,
              color: t.onPrimary,
            }}
          >
            <Mail size={28} />
          </div>
          <h2 style={{ fontFamily: FONTS.display, fontSize: 32, fontWeight: 700, color: t.primary, marginBottom: 8 }}>
            Plant a Seed
          </h2>
          <p style={{ color: t.onSurfaceVariant, margin: 0 }}>
            Have an idea? Let's grow something amazing together.
          </p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <SocialLinksBar color={t.primary} />
        </div>

        <form
          onSubmit={submit}
          className="pf-sketch-card"
          style={{
            backgroundColor: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.6)",
            backdropFilter: "blur(20px)",
            borderRadius: 24,
            border: "2px solid currentColor",
            color: t.primary,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <div>
              <label htmlFor="contact-name" style={{ fontSize: 14, fontWeight: 600, color: t.primary, display: "block", marginBottom: 8 }}>
                Your Name
              </label>
              <input
                id="contact-name"
                className="pf-input"
                style={{ color: t.onSurface, borderColor: t.outlineVariant }}
                placeholder="Rose Tyler"
                type="text"
                value={form.name}
                onChange={update("name")}
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email" style={{ fontSize: 14, fontWeight: 600, color: t.primary, display: "block", marginBottom: 8 }}>
                Email Address
              </label>
              <input
                id="contact-email"
                className="pf-input"
                style={{ color: t.onSurface, borderColor: t.outlineVariant }}
                placeholder="rose@garden.com"
                type="email"
                value={form.email}
                onChange={update("email")}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" style={{ fontSize: 14, fontWeight: 600, color: t.primary, display: "block", marginBottom: 8 }}>
              What's Growing in Your Mind?
            </label>
            <textarea
              id="contact-message"
              className="pf-input"
              style={{ color: t.onSurface, borderColor: t.outlineVariant, resize: "vertical" }}
              placeholder="Tell me about your project..."
              rows={4}
              value={form.message}
              onChange={update("message")}
              required
            />
          </div>

          {status === "error" && (
            <p style={{ color: "#c62828", fontSize: 14, textAlign: "center", margin: 0 }}>
              Merci de remplir tous les champs avant d'envoyer.
            </p>
          )}

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="pf-btn"
              style={{
                backgroundColor: t.primary,
                color: t.onPrimary,
                padding: "16px 48px",
                borderRadius: "9999px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Send Message <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
