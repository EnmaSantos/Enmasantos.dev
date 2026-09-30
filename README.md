# Enmanuel De Los Santos — portfolio

The source for [enmasantos.dev](https://enmasantos.dev/), a React and TypeScript portfolio focused on web applications, operational tools, and software engineering work. The site is a static Vite app deployed through GitHub Pages.

## Run locally

Use Node.js 24, then:

```bash
npm ci
npm run dev
```

Before publishing:

```bash
npm run build
npm run lint
```

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The custom domain is set in `public/CNAME`.

## Content maintenance

- Project descriptions, status labels, and links are in `src/App.tsx`.
- Featured images are in `public/project-media/`. The VitalityVista dashboard uses representative demo data. The Kairo recording screen is a screenshot from its public repository. The VibeMatch graphic is an illustration of its interface, not a screenshot.
- The social preview is `public/og-card.png`.
- The downloadable PDF is `public/Enmanuel_De_Los_Santos_Resume.pdf`.
- See `CONTENT_EVIDENCE.md` for source revisions, verified facts, and open verification items.

When updating a project, check its current branch and implementation before changing its public claims. Keep production Coaching Audits details separate from the sanitized CoachLens repository.
