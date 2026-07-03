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

src/models/navLinks.js`
