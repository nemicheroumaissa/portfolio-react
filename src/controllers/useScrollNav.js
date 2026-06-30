import { useRef } from "react";
import { NAV_LINKS } from "../models/navLinks.js";

/**
 * CONTROLLER — crée une ref par section et expose une fonction
 * `scrollTo(key)` pour le scroll fluide depuis la navbar.
 */
export function useScrollNav() {
  const refs = {};
  NAV_LINKS.forEach((link) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    refs[link.ref] = useRef(null);
  });

  const scrollTo = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { refs, scrollTo };
}
