import { useState } from "react";
import { LIGHT, DARK } from "../models/theme.js";

/**
 * CONTROLLER — gère l'état du thème clair/sombre
 * et renvoie l'objet de couleurs actif à utiliser par les Views.
 */
export function useTheme() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? DARK : LIGHT;
  const toggleTheme = () => setDarkMode((d) => !d);

  return { darkMode, theme, toggleTheme };
}
