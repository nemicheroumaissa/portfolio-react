/**
 * PROJECTS — single source of truth for all portfolio projects.
 *
 * HOW TO ADD A NEW PROJECT
 * ────────────────────────
 * 1. Copy `projectTemplate.js` → save as `my-project.js` in this folder.
 * 2. Fill in the fields (see comments in projectTemplate.js).
 * 3. Import it below and add it to the PROJECTS array.
 *
 * HOW TO EDIT AN EXISTING PROJECT
 * ───────────────────────────────
 * Open the matching file (e.g. `ry-performance.js`) and update any field.
 *
 * HOW TO CHANGE IMAGES
 * ────────────────────
 * • Card cover     → edit `img` in the project file
 * • Case study     → edit `caseStudy.gallery` and `caseStudy.mockups[].img`
 * • Local images   → place files in `public/projects/` then use "/projects/filename.jpg"
 *
 * Re-exports
 * ──────────
 * PROJECTS              → all projects (order = display order on the site)
 * PROJECTS_INITIAL_COUNT → how many cards show before "Show more"
 * getProjectBySlug(slug) → find one project by its slug
 */
import { PROJECTS_INITIAL_COUNT } from "./constants.js";
import ryPerformance from "./ry-performance.js";
// import myProject from "./my-project.js";

export { PROJECTS_INITIAL_COUNT };

export const PROJECTS = [
  ryPerformance,
  // myProject,
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
