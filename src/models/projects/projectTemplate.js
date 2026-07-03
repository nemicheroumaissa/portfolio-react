/**
 * Copy this object, save it as `src/models/projects/my-project.js`,
 * then import and add it to the array in `src/models/projects/index.js`.
 *
 * CARD FIELDS (Projects section)
 * ───────────────────────────────
 * slug         → URL id (e.g. "my-app" → /#/projects/my-app). Lowercase, numbers, hyphens only.
 * title        → Project name
 * desc         → Short description (1–2 sentences)
 * detailedDesc → Long description (optional, expandable on the card)
 * tags         → Technologies, e.g. ["React", "Node.js"]
 * img          → Cover image: "/projects/photo.jpg" (file in public/projects/) or "https://..."
 * demoUrl      → Live demo URL, or "" to show "Demo coming soon"
 * githubUrl    → GitHub repo URL, or "" to hide the button
 * videoUrl     → Demo video URL (YouTube, Loom, etc.), or ""
 * featured     → true = "Featured" badge on the card
 *
 * CASE STUDY FIELDS (optional — /#/projects/your-slug)
 * ───────────────────────────────────────────────────
 * All fields inside `caseStudy` are optional. Add only what you need.
 *
 * role, duration, year     → Meta info at the top of the case study page
 * problem                  → The problem / need (string)
 * goals                    → Objectives (array of strings)
 * mockups                  → [{ label, url?, img? }] — Figma links or screenshots
 * challenges, solutions      → Arrays of strings (pair them when possible)
 * results, learnings         → Arrays of strings
 * gallery                    → Screenshot paths/URLs (array of strings)
 */
export const PROJECT_TEMPLATE = {
  slug: "my-project",
  title: "My Project",
  desc: "Short description shown on the project card.",
  detailedDesc: "Full description shown when clicking 'Detailed description' on the card.",
  tags: ["React", "Node.js"],
  img: "/projects/my-project.jpg",
  demoUrl: "https://my-project.vercel.app",
  githubUrl: "https://github.com/your-username/my-project",
  videoUrl: "",
  featured: false,

  caseStudy: {
    role: "Full Stack Developer (solo)",
    duration: "4 weeks",
    year: "2026",
    problem: "Describe the problem this project solves.",
    goals: ["Goal 1", "Goal 2"],
    mockups: [{ label: "Home wireframe", url: "https://figma.com/...", img: "" }],
    challenges: ["Challenge 1"],
    solutions: ["Solution 1"],
    results: ["Result 1"],
    learnings: ["Learning 1"],
    gallery: ["/projects/my-project-screen-1.jpg"],
  },
};
