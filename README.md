# Portfolio Roumaissa — React (Vite)

Portfolio converti depuis le HTML/Tailwind original, structuré en **MVC** :

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # point d'entrée React
    ├── App.jsx                # assemble les Views avec les Controllers
    ├── models/                 # M — données (couleurs, skills, projets, liens)
    │   ├── theme.js
    │   ├── navLinks.js
    │   ├── skills.js
    │   ├── projects.js
    │   └── socialLinks.js
    ├── controllers/             # C — état et logique (hooks React)
    │   ├── useTheme.js          # mode clair/sombre
    │   ├── useScrollNav.js      # scroll fluide vers les sections
    │   └── useMobileMenu.js     # menu hamburger mobile
    ├── components/               # V — composants visuels (UI pure)
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── SketchCard.jsx
    └── styles/
        └── global.css          # animations + media queries responsive
```

## Comment l'exécuter en local

Il te faut **Node.js** installé (version 18 ou plus — télécharge-le sur [nodejs.org](https://nodejs.org) si besoin).

1. **Dézippe** ce dossier, puis ouvre un terminal dedans (`cd portfolio-react`).
2. **Installe les dépendances** :
   ```bash
   npm install
   ```
3. **Lance le serveur de développement** :
   ```bash
   npm run dev
   ```
4. Ouvre l'URL affichée dans le terminal (en général **http://localhost:5173**) dans ton navigateur.

Le site se recharge automatiquement à chaque modification d'un fichier.

## Construire la version de production

```bash
npm run build
```

Cela génère un dossier `dist/` prêt à être déployé (Vercel, Netlify, GitHub Pages, etc.).
Pour prévisualiser ce build localement :

```bash
npm run preview
```

## Modifier le contenu

Tu n'as **pas besoin de toucher aux composants** pour changer le contenu — tout est dans `src/models/` :

- **Compétences** → `src/models/skills.js`
- **Projets** → `src/models/projects.js` (voir section ci-dessous)
- **Liens sociaux** → `src/models/socialLinks.js` (GitHub, LinkedIn, Instagram, TikTok)
- **Couleurs (clair/sombre)** → `src/models/theme.js`

## Gérer les projets (photo, démo, en ajouter)

Tout se passe dans **`src/models/projects.js`**.

### Ajouter une photo

1. Place ton image dans `public/projects/` (ex. `ry-performance.jpg`)
2. Dans le projet, mets : `img: "/projects/ry-performance.jpg"`

Tu peux aussi utiliser une URL externe : `img: "https://..."`

### Ajouter une démo en ligne

1. Déploie ton projet (Vercel, Netlify, Render…)
2. Colle l'URL dans `demoUrl` : `demoUrl: "https://mon-site.vercel.app"`
3. Le bouton **Démo** apparaît automatiquement

### Ajouter un nouveau projet

Copie le bloc exemple en bas de `projects.js`, décommente-le, remplis les champs, et sauvegarde.

### Affichage « Afficher plus »

Les **3 premiers** projets s'affichent par défaut. Au-delà, un bouton **Afficher plus** apparaît. Tu peux changer ce nombre via `PROJECTS_INITIAL_COUNT` dans le même fichier.

### Modifier les liens sociaux (Contact)

Dans `src/models/socialLinks.js`, mets `enabled: true` et ton vrai `href` pour GitHub, LinkedIn, Instagram et TikTok.
