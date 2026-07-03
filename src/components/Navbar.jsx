import { Sun, Moon, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../models/navLinks.js";
import { UI } from "../models/ui.js";
import { FONTS } from "../models/theme.js";

function navLinkStyle(link, activeSection, t) {
  const isActive = link.ref === activeSection;
  return {
    color: isActive ? t.primary : t.onSurfaceVariant,
    fontWeight: isActive ? 700 : 400,
    textDecoration: "none",
    borderBottom: isActive ? `2px solid ${t.primary}` : "2px solid transparent",
    paddingBottom: 4,
  };
}

/**
 * VIEW — Navbar fixe avec scroll fluide, toggle thème, et menu hamburger mobile.
 */
export default function Navbar({ theme, darkMode, toggleTheme, scrollTo, mobileMenu, activeSection }) {
  const t = theme;
  const location = useLocation();
  const navigate = useNavigate();

  // Depuis une page d'étude de cas, un clic sur un lien doit d'abord
  // ramener à l'accueil avant de scroller vers la section visée.
  const goToSection = (key) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: key } });
    } else {
      scrollTo(key);
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: darkMode ? "rgba(21,18,15,0.8)" : "rgba(251,249,244,0.8)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <nav
        className="pf-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          height: "80px",
        }}
      >
        <div
          onClick={() => (location.pathname !== "/" ? navigate("/") : scrollTo("hero"))}
          style={{
            fontFamily: FONTS.display,
            fontSize: 28,
            fontWeight: 800,
            color: t.primary,
            letterSpacing: "-0.02em",
            cursor: "pointer",
          }}
        >
          Roumaissa<span style={{ color: t.tertiary }}>.</span>
        </div>

        <div className="pf-nav-desktop">
          {NAV_LINKS.map((link) => {
            const isActive = link.ref === activeSection;
            return (
              <a
                key={link.ref}
                href={`#${link.ref}`}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(link.ref);
                }}
                className="pf-nav-link"
                style={navLinkStyle(link, activeSection, t)}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = t.primary;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = t.onSurfaceVariant;
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <button
            onClick={toggleTheme}
            className="pf-btn"
            aria-label={UI.toggleDarkMode}
            style={{
              padding: 8,
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {darkMode ? <Moon size={22} color={t.primary} /> : <Sun size={22} color={t.primary} />}
          </button>

          <button
            onClick={mobileMenu.toggle}
            className="pf-btn pf-nav-burger"
            aria-label={UI.openMenu}
            style={{
              padding: 8,
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenu.isOpen ? <X size={22} color={t.primary} /> : <Menu size={22} color={t.primary} />}
          </button>
        </div>
      </nav>

      <div
        className={`pf-mobile-menu${mobileMenu.isOpen ? " pf-open" : ""}`}
        style={{
          flexDirection: "column",
          backgroundColor: darkMode ? "rgba(21,18,15,0.97)" : "rgba(251,249,244,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: `1px solid ${t.outlineVariant}55`,
          padding: "16px 20px 24px",
          gap: 4,
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = link.ref === activeSection;
          return (
            <a
              key={link.ref}
              href={`#${link.ref}`}
              onClick={(e) => {
                e.preventDefault();
                mobileMenu.close();
                goToSection(link.ref);
              }}
              style={{
                color: isActive ? t.primary : t.onSurfaceVariant,
                fontWeight: isActive ? 700 : 500,
                textDecoration: "none",
                padding: "12px 4px",
                fontSize: 17,
                borderBottom: `1px solid ${t.outlineVariant}33`,
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}
