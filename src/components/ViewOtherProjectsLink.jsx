import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Link that returns to the home page and scrolls to the Projects section.
 */
export default function ViewOtherProjectsLink({ theme, children }) {
  const navigate = useNavigate();
  const t = theme;

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: t.primary,
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      <ArrowLeft size={16} />
      {children ?? "View Other Projects"}
    </Link>
  );
}
