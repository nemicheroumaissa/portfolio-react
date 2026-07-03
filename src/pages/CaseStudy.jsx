import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  PlayCircle,
  Target,
  AlertTriangle,
  Lightbulb,
  Trophy,
  GraduationCap,
  Figma as FigmaIcon,
  Sprout,
} from "lucide-react";
import { getProjectBySlug } from "../models/projects/index.js";
import { UI } from "../models/ui.js";
import { FONTS } from "../models/theme.js";
import { useScrollToTop } from "../controllers/useScrollOnNavigate.js";
import ViewOtherProjectsLink from "../components/ViewOtherProjectsLink.jsx";
import { Chip, MetaItem, CaseStudyBlock, BulletList } from "../components/case-study/CaseStudyBlocks.jsx";

function ProjectLinks({ project, theme }) {
  const t = theme;
  const linkStyle = (variant) =>
    variant === "primary"
      ? {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          color: t.onPrimary,
          backgroundColor: t.primary,
          padding: "10px 18px",
          borderRadius: "9999px",
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "none",
        }
      : {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          color: variant === "secondary" ? t.secondary : t.primary,
          border: `2px solid ${variant === "secondary" ? t.secondary : t.primary}`,
          padding: "10px 18px",
          borderRadius: "9999px",
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "none",
        };

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noreferrer" style={linkStyle("primary")}>
          {UI.demo} <ExternalLink size={14} />
        </a>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" style={linkStyle("outline")}>
          GitHub <Github size={14} />
        </a>
      )}
      {project.videoUrl && (
        <a href={project.videoUrl} target="_blank" rel="noreferrer" style={linkStyle("secondary")}>
          {UI.video} <PlayCircle size={14} />
        </a>
      )}
    </div>
  );
}

/**
 * PAGE — Project case study (/projects/:slug)
 */
export default function CaseStudy({ theme, darkMode }) {
  const t = theme;
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useScrollToTop([slug]);

  if (!project) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
        <Sprout size={48} color={t.tertiary} style={{ marginBottom: 16 }} />
        <h1 style={{ fontFamily: FONTS.display, fontSize: 28, color: t.primary, marginBottom: 12 }}>{UI.projectNotFound}</h1>
        <p style={{ color: t.onSurfaceVariant, marginBottom: 24 }}>{UI.projectNotFoundDesc}</p>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: t.onPrimary,
            backgroundColor: t.primary,
            padding: "10px 20px",
            borderRadius: "9999px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={16} /> {UI.backToPortfolio}
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy || {};
  const hasFullCaseStudy =
    cs.problem ||
    (cs.goals?.length > 0) ||
    (cs.challenges?.length > 0) ||
    (cs.results?.length > 0);

  return (
    <div style={{ backgroundColor: t.surface, minHeight: "100vh" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px 96px" }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: t.secondary,
            fontWeight: 700,
            fontSize: 14,
            textDecoration: "none",
            marginBottom: 32,
          }}
        >
          <ArrowLeft size={16} /> {UI.backToPortfolio}
        </Link>

        <header style={{ marginBottom: 40 }}>
          {project.featured && (
            <div
              style={{
                display: "inline-block",
                backgroundColor: t.tertiary,
                color: t.onTertiary,
                padding: "4px 12px",
                borderRadius: "9999px",
                fontSize: 12,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Featured
            </div>
          )}
          <h1 style={{ fontFamily: FONTS.display, fontSize: 40, fontWeight: 800, color: t.primary, marginBottom: 12, lineHeight: 1.1 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: 18, color: t.onSurfaceVariant, lineHeight: 1.6, marginBottom: 24 }}>{project.desc}</p>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {project.tags.map((tag) => (
              <Chip key={tag} theme={t}>
                {tag}
              </Chip>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              padding: "16px 20px",
              backgroundColor: t.surfaceContainerLow,
              borderRadius: 16,
              marginBottom: 24,
            }}
          >
            <MetaItem label={UI.role} value={cs.role} theme={t} />
            <MetaItem label={UI.duration} value={cs.duration} theme={t} />
            <MetaItem label={UI.year} value={cs.year} theme={t} />
          </div>

          <ProjectLinks project={project} theme={t} />
        </header>

        <div
          style={{
            height: 340,
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 48,
            backgroundColor: t.surfaceContainerLow,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {project.img ? (
            <img src={project.img} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Sprout size={40} color={t.tertiary} />
              <span style={{ fontSize: 13, color: t.onSurfaceVariant, fontWeight: 600 }}>{UI.previewComingSoon}</span>
            </div>
          )}
        </div>

        {!hasFullCaseStudy && (
          <div
            style={{
              padding: 20,
              borderRadius: 16,
              backgroundColor: t.surfaceContainerLow,
              color: t.onSurfaceVariant,
              marginBottom: 48,
              fontSize: 15,
            }}
          >
            {UI.caseStudyComingSoon}
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>{project.detailedDesc || project.desc}</p>
          </div>
        )}

        {cs.problem && (
          <CaseStudyBlock icon={AlertTriangle} title={UI.theProblem} theme={t}>
            <p style={{ color: t.onSurfaceVariant, fontSize: 16, lineHeight: 1.7, margin: 0 }}>{cs.problem}</p>
          </CaseStudyBlock>
        )}

        {cs.goals?.length > 0 && (
          <CaseStudyBlock icon={Target} title={UI.goals} theme={t}>
            <BulletList items={cs.goals} theme={t} />
          </CaseStudyBlock>
        )}

        {cs.mockups?.length > 0 && (
          <CaseStudyBlock icon={FigmaIcon} title={UI.mockups} theme={t}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {cs.mockups.map((m, i) => (
                <a
                  key={i}
                  href={m.url || undefined}
                  target={m.url ? "_blank" : undefined}
                  rel={m.url ? "noreferrer" : undefined}
                  style={{
                    display: "block",
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: t.surfaceContainerLow,
                    textDecoration: "none",
                    border: `1px solid ${t.outlineVariant}`,
                    cursor: m.url ? "pointer" : "default",
                  }}
                >
                  {m.img ? (
                    <img src={m.img} alt={m.label} style={{ width: "100%", height: 160, objectFit: "cover" }} />
                  ) : (
                    <div style={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <FigmaIcon size={28} color={t.tertiary} />
                    </div>
                  )}
                  <div style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: t.onSurface }}>{m.label}</div>
                </a>
              ))}
            </div>
          </CaseStudyBlock>
        )}

        {cs.challenges?.length > 0 && (
          <CaseStudyBlock icon={AlertTriangle} title={UI.challenges} theme={t}>
            <BulletList items={cs.challenges} theme={t} />
          </CaseStudyBlock>
        )}

        {cs.solutions?.length > 0 && (
          <CaseStudyBlock icon={Lightbulb} title={UI.solutions} theme={t}>
            <BulletList items={cs.solutions} theme={t} />
          </CaseStudyBlock>
        )}

        {cs.gallery?.length > 0 && (
          <CaseStudyBlock icon={Sprout} title={UI.screenshots} theme={t}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {cs.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} — screenshot ${i + 1}`}
                  style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 16 }}
                />
              ))}
            </div>
          </CaseStudyBlock>
        )}

        {cs.results?.length > 0 && (
          <CaseStudyBlock icon={Trophy} title={UI.results} theme={t}>
            <BulletList items={cs.results} theme={t} />
          </CaseStudyBlock>
        )}

        {cs.learnings?.length > 0 && (
          <CaseStudyBlock icon={GraduationCap} title={UI.learnings} theme={t}>
            <BulletList items={cs.learnings} theme={t} />
          </CaseStudyBlock>
        )}

        <div
          style={{
            marginTop: 40,
            paddingTop: 32,
            borderTop: `2px solid ${t.outlineVariant}55`,
          }}
        >
          <ViewOtherProjectsLink theme={t}>{UI.viewOtherProjects}</ViewOtherProjectsLink>
        </div>
      </div>
    </div>
  );
}
