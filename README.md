# Roumaissa Portfolio — React (Vite)

A garden-themed developer portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── models/
│   ├── projects/          ← all project data (one file per project)
│   │   ├── index.js       ← list of projects + helpers
│   │   ├── constants.js   ← PROJECTS_INITIAL_COUNT (default: 3)
│   │   ├── projectTemplate.js
│   │   └── ry-performance.js
│   ├── skills.js
│   ├── navLinks.js
│   ├── socialLinks.js
│   ├── theme.js
│   └── ui.js              ← shared English UI strings
├── pages/
│   ├── Home.jsx
│   └── CaseStudy.jsx
└── components/
```

## Managing projects

### Add a new project

1. Copy `src/models/projects/projectTemplate.js` → `src/models/projects/my-project.js`
2. Fill in the fields (see comments in the template)
3. Import it in `src/models/projects/index.js` and add it to the `PROJECTS` array

### Edit an existing project

Open its file (e.g. `src/models/projects/ry-performance.js`) and update any field.

### Change images

| What | Where |
|------|--------|
| Card cover | `img` in the project file |
| Case study screenshots | `caseStudy.gallery` |
| Mockups | `caseStudy.mockups[].img` |

Place local images in `public/projects/` and reference them as `/projects/filename.jpg`.

### Add a live demo

Set `demoUrl: "https://your-app.vercel.app"` — the **Demo** button appears automatically.

### Case study page

Fill in the `caseStudy` object in the project file. All fields are optional. The page is available at `/#/projects/your-slug`.

### Show more button

The first **3** projects are shown by default. Change `PROJECTS_INITIAL_COUNT` in `src/models/projects/constants.js`.

## Other content

- **Skills** → `src/models/skills.js`
- **Social links** → `src/models/socialLinks.js`
- **Colors (light/dark)** → `src/models/theme.js`
- **Navigation labels** → `src/models/navLinks.js`
