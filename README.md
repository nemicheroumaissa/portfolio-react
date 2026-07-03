# 🌸 Portfolio React

A modern, responsive personal portfolio built with **React** and **Vite** to showcase my projects, technical skills, and journey as a **Full-Stack Developer**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Portfolio-864e5a?style=for-the-badge&logo=googlechrome&logoColor=white)](https://nemicheroumaissa.github.io/portfolio-react/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## ✨ Preview

> Add a screenshot or GIF at `docs/screenshots/preview.png` to show the live look of the site.

![Portfolio preview](docs/screenshots/preview.svg)

*Add `docs/screenshots/preview.png` for a real capture — see [docs/screenshots/README.md](docs/screenshots/README.md).*

---

## 🚀 Live Demo

**👉 [https://nemicheroumaissa.github.io/portfolio-react/](https://nemicheroumaissa.github.io/portfolio-react/)**

---

## 📖 Overview

This portfolio presents my work, skills, and background in a clean, interactive way. It includes:

- A garden-inspired UI with light/dark themes
- Project cards with **case study** pages (`/#/projects/:slug`)
- Smooth section scrolling and scroll-based hero animations
- A contact form (mailto) and social links
- Fully responsive layout (desktop + mobile)

The codebase is organized so content (projects, skills, links) can be updated **without touching UI components**.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Adapts to mobile, tablet, and desktop |
| **Dark / Light Mode** | Theme toggle with smooth color transitions |
| **Animated UI** | Hero parallax, card hovers, scroll animations |
| **Project Case Studies** | Dedicated page per project with problem, goals, results |
| **Contact Section** | Mailto form + GitHub, LinkedIn, Instagram, TikTok |
| **Smooth Scrolling** | Section navigation from the navbar |
| **Modern Navigation** | Active section highlight + mobile hamburger menu |
| **Easy Content Management** | One file per project in `src/models/projects/` |

---

## 🛠 Tech Stack

### Frontend

- React 18
- Vite 5
- React Router (HashRouter — GitHub Pages compatible)
- JavaScript (ES modules)
- HTML5 & CSS3
- Lucide React (icons)
- Custom design tokens (Material-inspired palette)

### Tools

- Git & GitHub
- VS Code
- gh-pages (deployment)
- npm

### Also used in my projects

- Tailwind CSS
- Node.js & Express.js
- Firebase & MongoDB

---

## 📂 Project Structure

```
portfolio-react/
├── public/
│   ├── favicon.svg
│   ├── projects/              # Project cover images
│   └── screenshots/           # Optional assets
├── docs/
│   └── screenshots/           # README screenshots (add yours here)
├── src/
│   ├── components/              # UI (Navbar, Hero, Projects, Contact…)
│   │   └── case-study/        # Case study building blocks
│   ├── controllers/             # Hooks (theme, scroll, contact form…)
│   ├── models/                  # Data & config
│   │   ├── projects/            # ⭐ One file per project
│   │   ├── skills.js
│   │   ├── theme.js
│   │   ├── navLinks.js
│   │   ├── socialLinks.js
│   │   └── ui.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CaseStudy.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/nemicheroumaissa/portfolio-react.git

# Enter the project folder
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build & deploy

```bash
npm run build      # Production build → dist/
npm run preview    # Preview the build locally
npm run deploy     # Deploy to GitHub Pages (gh-pages)
```

---

## 📸 Screenshots

Add images to `docs/screenshots/` (see [guide](docs/screenshots/README.md)).

| Section | File |
|---------|------|
| Home | `docs/screenshots/home.png` |
| About | `docs/screenshots/about.png` |
| Skills | `docs/screenshots/skills.png` |
| Projects | `docs/screenshots/projects.png` |
| Contact | `docs/screenshots/contact.png` |
| Mobile | `docs/screenshots/mobile.png` |

<table>
  <tr>
    <td align="center"><b>Home</b><br/><sub>Add <code>home.png</code></sub></td>
    <td align="center"><b>Projects</b><br/><sub>Add <code>projects.png</code></sub></td>
  </tr>
  <tr>
    <td align="center"><b>Skills</b><br/><sub>Add <code>skills.png</code></sub></td>
    <td align="center"><b>Mobile</b><br/><sub>Add <code>mobile.png</code></sub></td>
  </tr>
</table>

Once added, replace the cells above with:

```markdown
<img src="docs/screenshots/home.png" width="400" alt="Home section"/>
```

---

## 📝 Managing Content

### Add a new project

1. Copy `src/models/projects/projectTemplate.js` → `src/models/projects/my-project.js`
2. Fill in title, description, tags, links, and optional `caseStudy`
3. Import it in `src/models/projects/index.js` and add to the `PROJECTS` array

### Edit a project

Open its file (e.g. `src/models/projects/ry-performance.js`).

### Project images

| Image | Field |
|-------|--------|
| Card cover | `img: "/projects/cover.jpg"` |
| Case study gallery | `caseStudy.gallery: ["/projects/screen-1.jpg"]` |

Place files in `public/projects/`.

### Other content

| What | File |
|------|------|
| Skills | `src/models/skills.js` |
| Social links | `src/models/socialLinks.js` |
| Colors / fonts | `src/models/theme.js` |
| Nav labels | `src/models/navLinks.js` |

---

## 🎯 Future Improvements

- [ ] Firebase integration (contact form backend)
- [ ] Blog section
- [ ] Multi-language support (FR / EN)
- [ ] Admin dashboard for content
- [ ] Enhanced page transitions
- [ ] Automated screenshot updates in CI

---

## 👩‍💻 Author

**Roumaissa Nemiche**

- Bachelor's Degree in Information Systems and Software Engineering
- University of Science and Technology of Oran Mohamed Boudiaf (USTO-MB)

| | |
|---|---|
| **Portfolio** | [nemicheroumaissa.github.io/portfolio-react](https://nemicheroumaissa.github.io/portfolio-react/) |
| **GitHub** | [@nemicheroumaissa](https://github.com/nemicheroumaissa) |
| **LinkedIn** | [nemicheroumaissa](https://www.linkedin.com/in/nemicheroumaissa) |
| **Email** | nemicheroumaissa7@gmail.com |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with care 🌸 — <i>Grown with love and digital seeds.</i>
</p>
