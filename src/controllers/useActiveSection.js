import { useEffect, useState } from "react";
import { NAV_LINKS } from "../models/navLinks.js";

/**
 * CONTROLLER — suit la section visible au scroll pour mettre à jour
 * l'état actif de la navbar (au lieu d'un lien figé sur "about").
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.ref)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
