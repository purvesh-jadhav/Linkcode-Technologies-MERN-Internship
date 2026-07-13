# Purvesh Jadhav — Portfolio

A personal developer portfolio built with **React + Vite** and **plain CSS**
(no Tailwind, no UI kit) — a warm cream / forest-green theme with smooth
scroll-reveal animations, an animated skills showcase, and case-study style
project cards.

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project Structure

```
src/
  components/
    Navbar.jsx / .css     Sticky nav with mobile menu
    Hero.jsx / .css       Intro section with animated blob + floating badges
    About.jsx / .css      Bio + highlight cards
    Skills.jsx / .css     Tabbed, animated skills grid
    Projects.jsx / .css   Case-study style project cards
    Contact.jsx / .css    Contact form (opens the visitor's email client)
    Footer.jsx / .css
  hooks/
    useReveal.js           IntersectionObserver-based scroll-reveal hook
  index.css                 Design tokens (colors, type, spacing) + globals
  App.jsx
  main.jsx
```

## Customizing

- **Colors / theme** — everything lives in CSS variables at the top of
  `src/index.css` (`--cream`, `--forest`, `--clay`, `--sky`, etc.). Change
  these once and the whole site updates.
- **Content** — edit the arrays/text directly inside each component
  (e.g. `PROJECTS` in `Projects.jsx`, `CATEGORIES` in `Skills.jsx`).
- **Profile photo** — the hero currently shows your initials ("PJ") inside
  a gradient blob. Drop a photo into `src/assets/`, import it in `Hero.jsx`,
  and swap the `<span className="hero__initials">` for an `<img>`.
- **Contact form** — currently opens a `mailto:` link with the message
  pre-filled. Swap `handleSubmit` in `Contact.jsx` for a real API call
  (e.g. Formspree, EmailJS) when you're ready to collect submissions
  without opening the visitor's mail app.

## Deploying

The project builds to static files (`npm run build` → `dist/`), so it can be
deployed directly to **Netlify**, **Vercel**, or **GitHub Pages** the same
way as your other projects.
