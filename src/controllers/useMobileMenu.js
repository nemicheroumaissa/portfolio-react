import { useState } from "react";

/**
 * CONTROLLER — ouverture/fermeture du menu mobile (hamburger).
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((o) => !o);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
}
