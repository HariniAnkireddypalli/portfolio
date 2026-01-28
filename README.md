# Premium Animated Portfolio

A production-ready personal portfolio built with React 18, Vite, Tailwind CSS, and Framer Motion. Optimized for GitHub Pages deployment.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** + custom CSS animations
- **Framer Motion** for scroll and hover animations
- **Lucide React** for icons
- **react-type-animation** for typewriter effects
- **yet-another-react-lightbox** for the image gallery
- **react-intersection-observer** (used via native IntersectionObserver in Nav)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & Preview

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo is set up for **RamanaReddy0M/portfolio-react**. To deploy:

1. **Commit and push your code** (if you haven’t yet):

   ```bash
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git push -u origin main
   ```

2. **Deploy**:

   ```bash
   npm run deploy
   ```

This runs `vite build` and publishes the `dist` folder to the `gh-pages` branch.

3. **Turn on GitHub Pages** in the repo:
   - GitHub → **portfolio-react** → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**
   - **Branch**: `gh-pages` → `/ (root)` → **Save**

Your site will be at **https://RamanaReddy0M.github.io/portfolio-react** (may take 1–2 minutes after the first deploy).

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx   # Sticky glassmorphism nav, active section, mobile menu
│   ├── Hero.jsx        # Full-screen hero, typewriter, floating shapes, CTA
│   ├── About.jsx       # Bio, avatar, animated stat cards
│   ├── Gallery.jsx     # Masonry grid, category filter, lightbox
│   ├── Skills.jsx      # Animated skill bars
│   ├── Achievements.jsx # Timeline / milestone cards
│   ├── Contact.jsx     # Social links, email
│   └── Footer.jsx      # Copyright, back-to-top
├── hooks/
│   ├── useScrollPosition.js
│   └── useMousePosition.js
├── utils/
│   └── animations.js   # Framer Motion variants
├── App.jsx
└── index.css           # Design system, CSS variables
```

## Customization

- **Colors & theme**: Edit CSS variables in `src/index.css` (`:root` and `[data-theme="light"]`).
- **Content**: Update copy, links, and images in each component (Hero, About, Gallery, Contact, etc.).
- **Repo name**: Change `base` in `vite.config.js` and `homepage` in `package.json` to match your GitHub repo.

## Checklist Before Going Live

- [ ] Replace "Your Name" and placeholder content
- [ ] Add real images (Hero, About, Gallery) and optimize (e.g. WebP)
- [ ] Set correct `base` and `homepage` for your repo
- [ ] Update meta tags and title in `index.html`
- [ ] Test on mobile and run a Lighthouse audit
