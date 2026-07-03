# GitHub repository setup

After pushing, update the **About** section on the right side of your GitHub repo page.

## Option A — GitHub website (manual)

1. Open https://github.com/nemicheroumaissa/portfolio-react
2. Click the **gear** next to "About"
3. Fill in:

**Description**
```
Modern personal portfolio built with React and Vite.
```

**Website**
```
https://nemicheroumaissa.github.io/portfolio-react/
```

**Topics** (add each one)
```
react
portfolio
vite
frontend
javascript
tailwindcss
responsive
web-development
developer-portfolio
```

## Option B — GitHub CLI

```bash
gh repo edit nemicheroumaissa/portfolio-react \
  --description "Modern personal portfolio built with React and Vite." \
  --homepage "https://nemicheroumaissa.github.io/portfolio-react/" \
  --add-topic react --add-topic portfolio --add-topic vite \
  --add-topic frontend --add-topic javascript --add-topic tailwindcss \
  --add-topic responsive --add-topic web-development --add-topic developer-portfolio
```

## Screenshots for README

Capture your site and save PNG files in `docs/screenshots/`:

- `preview.png` — main hero / home view
- `home.png`, `about.png`, `skills.png`, `projects.png`, `contact.png`
- `mobile.png` — mobile viewport

See [screenshots/README.md](screenshots/README.md) for details.
