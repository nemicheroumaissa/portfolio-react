import { Github, Linkedin, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "../models/socialLinks.js";
import TikTokIcon from "./TikTokIcon.jsx";

const LINK_STYLE = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  fontWeight: 600,
};

/**
 * VIEW — Barre de liens sociaux (contact, etc.).
 */
export default function SocialLinksBar({ color }) {
  const items = [
    { key: "github", label: "GitHub", icon: Github, enabled: SOCIAL_LINKS.github.enabled, href: SOCIAL_LINKS.github.href },
    { key: "linkedin", label: "LinkedIn", icon: Linkedin, enabled: SOCIAL_LINKS.linkedin.enabled, href: SOCIAL_LINKS.linkedin.href },
    { key: "instagram", label: "Instagram", icon: Instagram, enabled: SOCIAL_LINKS.instagram.enabled, href: SOCIAL_LINKS.instagram.href },
    { key: "tiktok", label: "TikTok", icon: TikTokIcon, enabled: SOCIAL_LINKS.tiktok?.enabled, href: SOCIAL_LINKS.tiktok?.href },
  ].filter((item) => item.enabled);

  if (!items.length) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
      {items.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          style={{ ...LINK_STYLE, color }}
        >
          {key === "tiktok" ? <Icon size={20} color={color} /> : <Icon size={22} />}
          {label}
        </a>
      ))}
    </div>
  );
}
