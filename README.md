# AstraNovaX — Next.js site

Applied AI/ML marketing site for Agriculture, Fishery, Healthcare, and Poultry.
Built with Next.js (App Router) + Tailwind CSS. No backend/database — fully static/client.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

Deploys as-is to Vercel, Netlify, or any Node host. To export a fully static
site instead, add `output: "export"` to `next.config.js` and run `next build`.

## Before you go live

Update the two placeholders in `components/Footer.jsx`:

```js
const WHATSAPP_NUMBER = "910000000000"; // country code + digits, no + or spaces
const EMAIL = "hello@astranovax.com";
```

And update the domain in `app/layout.js`, `app/robots.js`, `app/sitemap.js`
(currently `https://www.astranovax.com`) to your real domain.

## Project structure

```
app/
  layout.js      # metadata, fonts, JSON-LD (SEO + AEO), theme init script
  page.js         # composes all sections
  globals.css     # design tokens (light/dark), glassmorphism, loader animation
  robots.js       # robots.txt
  sitemap.js      # sitemap.xml
components/       # Navbar, Hero, Domains, Approach, Process, FAQ, CTA, Footer, Loader, Mark, icons
context/
  ThemeContext.jsx  # light/dark theme state + localStorage persistence
data/
  content.js      # domains, tech pillars, process steps, FAQ copy
```

## Theming

Light and dark themes are CSS variables in `app/globals.css`, switched via
`data-theme` on `<html>`. Toggle lives in the navbar; choice persists in
`localStorage` and respects the OS preference on first visit.

## Design

Creamy-white light theme / deep violet-black dark theme, both using only the
brand's purple → magenta → orange gradient as an accent (no black). Glassmorphic
cards throughout, minimal layout, and a loader that draws the ANX mark itself.
