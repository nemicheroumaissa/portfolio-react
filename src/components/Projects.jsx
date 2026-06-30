import { useState } from "react";
import { ExternalLink, Github, Sprout, ChevronDown, ChevronUp } from "lucide-react";
import { PROJECTS, PROJECTS_INITIAL_COUNT } from "../models/projects.js";
import { FONTS } from "../models/theme.js";

function ProjectCard({ project, theme, darkMode }) {
  const t = theme;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="pf-card"
      style={{
        backgroundColor: t.surfaceContainerLowest,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        border: "2px solid currentColor",
        color: darkMode ? t.outlineVariant : "rgba(0,0,0,0.06)",
        padding: 12,
      }}
    >
      <div style={{ position: "relative", height: 256, overflow: "hidden", borderRadius: 16, backgroundColor: t.surfaceContainerLow }}>
        {project.img ? (
          <img className="pf-img" src={project.img} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: `linear-gradient(135deg, ${t.tertiaryContainer}55, ${t.primaryContainer}55)`,
            }}
          >
            <Sprout size={48} color={t.tertiary} />
            <span style={{ fontSize: 12, color: t.onSurfaceVariant, fontWeight: 600 }}>Aperçu à venir</span>
          </div>
        )}
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: t.tertiary,
              color: t.onTertiary,
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Featured
          </div>
        )}
      </div>

      <div style={{ padding: 24, color: t.onSurface }}>
        <h3 style={{ fontFamily: FONTS.display, fontSize: 24, fontWeight: 600, color: t.primary, marginBottom: 8 }}>
          {project.title}
        </h3>
        <p style={{ color: t.onSurfaceVariant, marginBottom: 16 }}>{project.desc}</p>

        {project.detailedDesc && (
          <div style={{ marginBottom: 16 }}>
            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              className="pf-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: t.secondary,
                fontWeight: 700,
                fontSize: 14,
                padding: 0,
                fontFamily: FONTS.body,
              }}
            >
              Description détaillée {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showDetails && (
              <p
                style={{
                  color: t.onSurfaceVariant,
                  marginTop: 12,
                  fontSize: 15,
                  lineHeight: 1.7,
                  padding: 16,
                  backgroundColor: t.surfaceContainerLow,
                  borderRadius: 12,
                }}
              >
                {project.detailedDesc}
              </p>
            )}
          </div>
        )}

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 12px",
                backgroundColor: t.surfaceContainerLow,
                borderRadius: "9999px",
                fontSize: 12,
                fontWeight: 600,
                color: t.secondary,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="pf-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: t.onPrimary,
                backgroundColor: t.primary,
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Démo <ExternalLink size={14} />
            </a>
          ) : (
            <span
              title="Ajoute demoUrl dans src/models/projects.js pour activer le lien"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: t.onSurfaceVariant,
                backgroundColor: t.surfaceContainerLow,
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: 14,
                fontWeight: 600,
                opacity: 0.7,
              }}
            >
              Démo bientôt disponible
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="pf-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: t.primary,
                border: `2px solid ${t.primary}`,
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              GitHub <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * VIEW — Grille des projets (3 visibles, puis « Afficher plus »).
 */
export default function Projects({ theme, darkMode, projectsRef }) {
  const t = theme;
  const [showAll, setShowAll] = useState(false);

  const hasMore = PROJECTS.length > PROJECTS_INITIAL_COUNT;
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, PROJECTS_INITIAL_COUNT);
  const hiddenCount = PROJECTS.length - PROJECTS_INITIAL_COUNT;

  return (
    <section ref={projectsRef} id="projects" className="pf-section" style={{ backgroundColor: t.surface }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: FONTS.display, fontSize: 32, fontWeight: 700, color: t.primary }}>The Digital Harvest</h2>
          <p style={{ color: t.onSurfaceVariant }}>Selected works from my personal greenhouse.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} theme={theme} darkMode={darkMode} />
          ))}
        </div>

        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="pf-btn"
              style={{
                backgroundColor: showAll ? "transparent" : t.primary,
                color: showAll ? t.primary : t.onPrimary,
                border: `2px solid ${t.primary}`,
                padding: "14px 36px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                fontFamily: FONTS.body,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {showAll ? (
                <>
                  Afficher moins <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Afficher plus ({hiddenCount} autre{hiddenCount > 1 ? "s" : ""}) <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
