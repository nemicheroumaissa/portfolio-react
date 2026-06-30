/**
 * MODEL — Design tokens (couleurs)
 * Portés 1:1 depuis le tailwind.config original.
 * Le mode sombre est construit à partir des tokens M3 "fixed" / "inverse"
 * qui étaient déjà définis dans la config source mais inutilisés.
 */

export const LIGHT = {
  primary: "#864e5a",
  onPrimary: "#ffffff",
  primaryContainer: "#ffb7c5",
  onPrimaryContainer: "#7b4551",
  secondary: "#356668",
  onSecondary: "#ffffff",
  secondaryContainer: "#b9ecee",
  onSecondaryContainer: "#3c6c6e",
  tertiary: "#406922",
  onTertiary: "#ffffff",
  tertiaryContainer: "#a9d884",
  onTertiaryContainer: "#375f1a",
  background: "#fbf9f4",
  onBackground: "#1b1c19",
  surface: "#fbf9f4",
  onSurface: "#1b1c19",
  surfaceVariant: "#e4e2dd",
  onSurfaceVariant: "#514345",
  outline: "#837375",
  outlineVariant: "#d6c2c4",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f5f3ee",
  surfaceContainer: "#f0eee9",
  surfaceContainerHigh: "#eae8e3",
  surfaceContainerHighest: "#e4e2dd",
};

export const DARK = {
  primary: "#fbb3c1",
  onPrimary: "#4c1828",
  primaryContainer: "#6b3743",
  onPrimaryContainer: "#ffd9df",
  secondary: "#9ecfd1",
  onSecondary: "#003738",
  secondaryContainer: "#1a4e50",
  onSecondaryContainer: "#b9ecee",
  tertiary: "#a5d480",
  onTertiary: "#14290a",
  tertiaryContainer: "#29500b",
  onTertiaryContainer: "#c0f19a",
  background: "#15120f",
  onBackground: "#e9e6e0",
  surface: "#15120f",
  onSurface: "#e9e6e0",
  surfaceVariant: "#4a3f41",
  onSurfaceVariant: "#d6c2c4",
  outline: "#9c8c8e",
  outlineVariant: "#514345",
  surfaceContainerLowest: "#100d0a",
  surfaceContainerLow: "#1c1815",
  surfaceContainer: "#201c19",
  surfaceContainerHigh: "#2b2623",
  surfaceContainerHighest: "#36302d",
};

export const FONTS = {
  display: "'Bricolage Grotesque', sans-serif",
  body: "'Plus Jakarta Sans', sans-serif",
  hand: "'Indie Flower', cursive",
  script: "'Dancing Script', cursive",
};
