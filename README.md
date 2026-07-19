# Shoaib Khan — Portfolio ("Director's Cut")

A cinematic, mobile-first rebuild of Shoaib Khan's portfolio (Content Creator, Director, Video Editor & Co-Founder of Hyderabad Hustlers). All copy, assets, brand colours and links are carried over verbatim from the original site; the design and stack are entirely new.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (`@theme` design tokens)
- **Lenis** — smooth scroll
- **GSAP** + ScrollTrigger + `@gsap/react` — scroll-driven motion
- Fonts: **Cabinet Grotesk** (Fontshare, display) · **Urbanist** (body) · **Space Mono** (technical labels)

## Scripts

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## The design

A film-about-him treatment: oversized editorial typography, a warm near-black + gold palette, a moving film-grain overlay, and a custom desktop cursor. The **Journey** is the centrepiece — a pinned, horizontally-scrolling film reel on desktop that reflows to a vertical filmstrip on mobile.

Deliberately avoids the original's anti-patterns (gradient-clipped text, glassmorphism-everywhere, identical card grids) per the `impeccable` design guidance.

## Structure

```
src/
  app/
    layout.tsx        # fonts, metadata, JSON-LD, provider stack
    page.tsx          # section assembly
    globals.css       # design tokens (@theme), grain, utilities
  components/
    Intro.tsx         # fast ~2.4s "leader" intro (replaces the old 9.5s splash)
    Navbar.tsx        # scroll-spy + mobile overlay menu
    Footer.tsx
    Cursor.tsx  Grain.tsx  Reveal.tsx
    providers/SmoothScroll.tsx    # Lenis <-> GSAP ticker sync
    sections/         # Hero, About, Journey, Experience, Contact
    journey/          # MilestoneCard, MilestoneMedia, ImpactStats
    ui/               # SectionHeader, HighlightedText, Marquee, Icons
  lib/
    content.ts        # ALL copy/links/data — verbatim from the original site
    youtube.ts  gsap.ts  lenis.ts
public/assets/        # brand assets copied from the original site
```

## Accessibility & performance

- Fully honours `prefers-reduced-motion` (intro skipped, Lenis + GSAP disabled, reveals shown).
- Native touch scrolling on mobile (Lenis smooths the wheel only).
- Content is server-rendered and present without JS (motion is progressive enhancement).

## Deploy

App Router app — deploy to Vercel (or any Node host). Canonical host: `beingashoaib.com`.
