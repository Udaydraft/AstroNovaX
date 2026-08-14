# AstraNovaX — premium science/AI landing page

React + TypeScript + Vite + Tailwind CSS + Framer Motion. No backend.

> Brand: **AstraNovaX** — "Innovating Beyond Limits." Logo, colors, loader,
> and background watermark all come from the brand assets provided (see
> `public/images/astranovax-logo.png`).

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build   # type-checks with tsc, then builds with Vite
npm run preview
```

This project was scaffolded and hand-reviewed in a sandbox without internet
access, so `npm install` / `npm run build` could not be executed here to
confirm a clean install. Please run `npm install && npm run build` yourself
as a first step and report back any dependency-version issues.

## What's brand-specific here

- **Theme system** — `src/styles/index.css` defines CSS variables for both
  light and dark themes (`--bg`, `--ink`, `--tint-purple`, `--tint-amber`,
  `--accent-1`, `--accent-2`, …), switched by `data-theme` on `<html>`.
  `tailwind.config.js` maps the existing utility classes (`text-navy`,
  `bg-skyblue`, `bg-mint`, `text-cyan`, `text-leaf`) onto those variables, so
  the whole site is the purple → magenta → orange AstraNovaX gradient
  instead of a generic blue/green palette, in both themes. A fixed `deep`
  token exists for surfaces that should stay dark regardless of theme (the
  AI & Data section, decorative fills).
- **Dark mode** — `src/context/ThemeContext.tsx` + a no-flash inline script
  in `index.html` (sets `data-theme` before first paint) + a sun/moon toggle
  in the Navbar. Persists to `localStorage` under `anx-theme`.
- **Loader** — `src/components/Loader.tsx` + `LogoGlowMark.tsx`: a glossy,
  glowing 3D rendition of the ANX mark (drop shadow, ambient glow, glass
  sheen, an animated diagonal light sweep, twinkling sparkles), shown as a
  splash screen for ~2.6s on load. Ported from the AstraNovaX Next.js site.
- **Background watermark** — `src/components/LogoWatermark.tsx` renders the
  full logo lockup (`public/images/astranovax-logo.png`) fixed behind all
  content at ~5–8% opacity. It only shows through on sections that don't
  have their own solid/gradient background (Intro, Solutions, Impact, and
  partially through the tinted Agriculture/About sections) — sections with
  opaque backgrounds naturally cover it, which is intentional.
- **Full-bleed background videos** — the Hero and all three domain sections
  (Animal Science, Agriculture, Healthcare) now use their video as a full
  section background via `src/components/BgVideo.tsx`, with a scrim
  gradient (opaque near the text, fading out so the video reads clearly on
  the open side) layered on top for contrast. `BgVideo` takes an `eager`
  prop: only the hero passes it, so it autoplays immediately; the three
  domain-section videos instead start playing only once their section
  actually scrolls into view (`useInView`) and pause again once it scrolls
  out — so several full-bleed videos down the page don't all decode at once.
  On narrow screens the directional gradient collapses to a flatter, more
  opaque wash (`sm:` breakpoint) since content spans the full width there
  and needs more contrast margin.
- `src/components/HeroCarousel.tsx`, `HeroVideo.tsx`, `SectionVideo.tsx`,
  and `data/carousel.ts` are earlier iterations (an image-coverflow hero
  carousel, a single hero video, and card-style embedded section videos)
  kept in the project but no longer wired into any page — swap them back in
  if you'd rather go a different visual direction for a given section.

## Videos

| File | Used as | Constant (`src/data/site.ts`) |
|---|---|---|
| `videos/hero-carousel.mp4` | **Hero** full-bleed background (autoplays immediately) | `HERO_CAROUSEL_VIDEO_SRC` |
| `videos/animal-science.mp4` | Animal Science section background (plays on scroll into view) | `ANIMAL_SCIENCE_VIDEO_SRC` |
| `videos/agriculture.mp4` | Agriculture section background (plays on scroll into view) | `AGRICULTURE_VIDEO_SRC` |
| `videos/healthcare.mp4` | Healthcare section background (plays on scroll into view) | `HEALTHCARE_VIDEO_SRC` |

`videos/hero-carousel.mp4` is the real 3D "carousel" clip — a rotating
plant, a chick + fish, and an anatomical figure, all already rendered in the
brand's purple-to-orange palette — used as-is rather than cut into stills.

The AI & Data section keeps its bespoke SVG node-network animation (now in
the brand's purple/orange, not blue) rather than reusing video footage.

## Project structure

```
src/
  components/          Navbar, Hero, BgVideo, HeroCarousel*, HeroVideo*,
                        SectionVideo*, Loader, LogoGlowMark, LogoWatermark,
                        IntroSection, Solutions, Ecosystem, AnimalScience,
                        Agriculture, Healthcare, AISection, Impact, About,
                        CTA, Footer   (*unused, kept for reference)
  components/ui/       Button, SectionHeading, AnimatedCard
  context/ThemeContext.tsx   light/dark theme state + localStorage persistence
  pages/Home.tsx        composes all sections in order
  hooks/useScrollAnimation.ts   shared Framer Motion variants, respects
                                 prefers-reduced-motion
  data/site.ts           SITE_NAME, SITE_TAGLINE, video/image path constants
  data/solutions.ts       the four "Areas of Impact" cards
  data/carousel.ts        unused* — slides for the retired image carousel
  styles/index.css        Tailwind entry + CSS variable theme definitions
```

## Accessibility & motion

- Every interactive element uses the shared `.focus-ring` utility.
- `useScrollAnimation()` and the carousel both strip movement and shorten/
  remove animation when `prefers-reduced-motion` is set; a global CSS
  fallback in `index.css` also collapses animation/transition durations
  site-wide as a backstop.
- Headings follow a single `h1 → h2` hierarchy.
- All background videos are muted and purely decorative — no content is
  conveyed only through video, so screen-reader users lose nothing.

## Known placeholders to replace before launch

- `mailto:hello@example.com` in `CTA.tsx` and `Footer.tsx`
- Social links (`#`) in `Footer.tsx`
- Copyright year is static `2026` text per the original brief
