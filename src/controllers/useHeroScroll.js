import { useEffect, useState } from "react";

/**
 * CONTROLLER — calcule la progression du scroll dans la section hero
 * pour animer parallaxe, fondu et légère mise à l'échelle.
 */
export function useHeroScroll(heroRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = heroRef?.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const max = rect.height * 0.85;
      setProgress(Math.min(scrolled / max, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroRef]);

  return progress;
}
