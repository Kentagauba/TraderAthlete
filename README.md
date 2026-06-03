# TraderAthlete

Static marketing site for TraderAthlete — built with React + Vite. Deploys free to Cloudflare Pages. All payments and member access happen on Whop; this site is purely the marketing front-end.

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build to ./dist
```

## Editing your links and pricing

Open `src/config.js`. This is the only file you need to edit for normal updates:

```js
export const LINKS = {
  whopJoin:      'https://whop.com/traderathlete',         // your Whop storefront
  memberLogin:   'https://whop.com/orders',                // where MEMBER LOGIN goes
  coachingBook:  'https://cal.com/traderathlete/1-on-1',   // your booking link
  instagram:     'https://instagram.com/traderathlete',
  tiktok:        'https://tiktok.com/@traderathlete',
}

export const TIER = {
  current:  47,    // current price
  next:     67,    // next-tier price
  capacity: 100,   // members in current tier
  filled:   33,    // ← bump this number as people join
}
```

When you cross 100 members, change to `{ current: 67, next: 97, capacity: 500, filled: 100 }` and so on.

## Editing copy

- **Home page** — `src/pages/Home.jsx` (all sections in one file: Hero, StatsStrip, Testimonials, Pricing, FAQ, FinalCTA)
- **Coaching page** — `src/pages/Coaching.jsx`
- **Nav and footer** — `src/components/Layout.jsx`
- **Logo** — `src/components/Logo.jsx` (SVG, edit colors or shapes there)

## Replacing the hero image

Right now the hero uses an SVG illustration (tropical sunset + laptop). To swap in a real photo:

1. Drop your image into `public/` (e.g. `public/founder.jpg`). Keep it under 1MB ideally.
2. In `src/pages/Home.jsx`, find the `<svg viewBox="0 0 400 500"...>` block inside the Hero component and replace the whole `<svg>...</svg>` with:
   ```jsx
   <img src="/founder.jpg" alt="Kenta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
   ```

## Deployment — Cloudflare Pages

### 1. Push to GitHub
You already have the repo at `github.com/Kentagauba/TraderAthlete`. Replace its contents with this project:

```bash
cd /path/to/this/project
git init
git remote add origin https://github.com/Kentagauba/TraderAthlete.git
git add .
git commit -m "rebuild as static site"
git push --force origin main
```

(Force-push because we're replacing the old full-stack code with this clean static version.)

### 2. Connect to Cloudflare Pages
- Go to Cloudflare Dashboard → Workers & Pages → **Create application** → **Pages** → **Connect to Git**
- Pick the `TraderAthlete` repo
- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** (leave blank)
- Click **Save and Deploy**

First build takes ~2 minutes. After that, every `git push` auto-deploys.

### 3. Connect your domain
- Pages project → Custom domains → Set up custom domain → `traderathlete.com`
- Cloudflare handles the DNS automatically since your domain is already managed there.

**Important:** First disconnect `traderathlete.com` from the old broken Worker project before connecting it here.

## Project structure

```
traderathlete/
├── index.html              # entry, Google Fonts links, meta tags
├── package.json
├── vite.config.js
├── public/
│   ├── _redirects          # SPA fallback for Cloudflare Pages
│   └── favicon.svg
└── src/
    ├── main.jsx            # router setup
    ├── index.css           # design tokens (colors, fonts, base styles)
    ├── config.js           # ← edit links and pricing here
    ├── components/
    │   ├── Layout.jsx      # nav + footer
    │   └── Logo.jsx
    └── pages/
        ├── Home.jsx
        └── Coaching.jsx
```

## Stack

- **React 19** + **Vite 8** — fast builds, hot reload
- **React Router** — clean URLs (`/`, `/coaching`)
- **Lucide React** — icons
- **No CSS framework** — hand-rolled CSS with custom properties (design tokens in `index.css`). Lean, no Tailwind bloat.
- **Google Fonts:** Anton (display) + DM Sans (body)

## Notes

- The site is fully static. No backend, no database, no auth. Whop handles all of that.
- Whop checkout links open in a new tab via `target="_blank"`.
- The progress bar is hard-coded via `TIER.filled` in config.js. When you want it live-synced to actual Whop member count, that's a Phase 2 upgrade (Whop API integration).
