@AGENTS.md

# Shoaib Khan Portfolio — "Director's Cut"

Cinematic, **mobile-first** single-page portfolio for Shoaib Khan (Content Creator, Director, Writer, Video Editor & Co-Founder of Hyderabad Hustlers). A ground-up redesign of the legacy site in `../Old/`; **every string, asset, link and brand colour is copied verbatim** from that original — only the design and the tech stack changed.

- **Live domain:** `https://beingashoaib.com`
- **Repo:** `github.com/HyderabadHustlersTech/Shoaib-Khan-s-Portfolio`
- **Hosting:** Vercel (auto-deploys on push to the default branch)

---

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — tokens live in `@theme` inside `globals.css` (no `tailwind.config`)
- **Lenis** — smooth scroll, driven from the GSAP ticker
- **GSAP** + ScrollTrigger + `@gsap/react` — all scroll-driven motion
- Fonts: **Cabinet Grotesk** (Fontshare `<link>`, display) · **Urbanist** (`next/font`, body + labels)

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build (also typechecks)
npm run start    # serve the production build
npm run lint     # eslint — keep this clean
```

---

## Architecture

```
src/
  app/
    layout.tsx            # fonts, metadata, JSON-LD (@graph), providers, Fontshare <link>
    page.tsx              # section assembly
    globals.css           # design system: @theme tokens, grain, marquee, perforations, utilities
    opengraph-image.tsx   # dynamic 1200×630 link-preview card (next/og) — features the signature
    twitter-image.tsx     # re-exports opengraph-image
  components/
    Intro.tsx             # ~7s filmic "leader" intro (counter + role liners → wipe). Skipped under reduced-motion.
    Navbar.tsx            # signature wordmark, scroll-spy, mobile full-screen overlay menu
    Footer.tsx            # split-colour wordmark, socials, centered dev credit, back-to-top
    Grain.tsx  Reveal.tsx
    providers/SmoothScroll.tsx   # Lenis <-> GSAP ticker + ScrollTrigger sync
    sections/             # Hero, About, Journey, Experience, Contact
    journey/              # MilestoneCard, MilestoneMedia, ImpactStats
    ui/                   # SectionHeader, HighlightedText, Marquee, Icons, SignatureMark
  lib/
    content.ts            # ALL copy / links / data — verbatim from the original site
    og-signature.ts       # auto-generated base64 of the padding-trimmed signature (for the OG card)
    youtube.ts  gsap.ts  lenis.ts
public/assets/            # brand assets — ALL WebP (except esportsphase.mp4)
```

## Design system (globals.css `@theme`)

- Colour tokens are **kebab names → Tailwind utilities**: `ink` / `ink-deep` (warm near-black surfaces), `cream` / `cream-dim` / `cream-faint` (warm off-whites), `gold` / `gold-bright` / `gold-deep` / `gold-soft` (brand `#febd59`), `surface`, `line`.
  - ⚠️ **Do NOT name a colour token after a Tailwind scale key** (e.g. `base`). `text-base` collides with the font-size utility — that's why the dark surface is `ink`, not `base`.
- Fonts: `font-display` (Cabinet Grotesk), `font-body` / `font-mono` (both Urbanist — the "mono" name is historical; the eyebrow labels are Urbanist, uppercase + tracked).
- Motion helpers: `.film-grain`, `.animate-marquee` (no hover-pause), `.perf-*` (the animated filmstrip perforation strips), `[data-reveal]` reveal transition.

## Motion

- `SmoothScroll` runs one RAF loop (`gsap.ticker`) that drives `lenis.raf` and calls `ScrollTrigger.update` — everything stays in sync. **Fully disabled under `prefers-reduced-motion`; native touch scroll on mobile.**
- `lib/lenis.ts` exposes the Lenis singleton + `scrollToSection()` for anchor nav.
- **Journey reel** (`sections/Journey.tsx`): desktop uses `gsap.matchMedia("(min-width:1024px)…")` to pin the section and translate the reel horizontally on scroll; mobile is a plain vertical filmstrip. Any horizontal-pin logic must stay behind that matchMedia.
- Above-the-fold (Hero) uses `gsap.from`/`gsap.set` so content is SSR-visible if JS fails; below-the-fold uses the `Reveal` IntersectionObserver primitive.

## Content

- **All copy/data is in `src/lib/content.ts`** — edit there, never hardcode in components. Journey milestones are a discriminated union (`video` / `side-by-side` / `image` / `video-file` / `placeholder`).
- Assets are absolute paths under `/assets`. **Keep everything WebP.** Avoid `&` in asset filenames (Next static serving 404s on it — spaces are fine).
- The signature (`SignatureMark`) is a padding-heavy square PNG→WebP cropped via CSS `object-cover`. If you replace the asset, re-run the trim to regenerate `lib/og-signature.ts` for the OG card.

## SEO / AEO

- `layout.tsx` metadata: title, description, keywords, canonical, robots, OpenGraph + Twitter (images come from the `opengraph-image.tsx` / `twitter-image.tsx` routes), theme-color.
- **JSON-LD `@graph`** (WebSite + Person + ProfilePage) with `knowsAbout`, `sameAs`, `worksFor`, address — strong for search + answer engines.
- `public/robots.txt` + `public/sitemap.xml` point at `beingashoaib.com`.
- Content is server-rendered (present without JS) so crawlers/answer engines read it.

---

## Deployment rule (IMPORTANT)

The repo is connected to **Vercel**, which **only builds commits authored by the repo owner** (`HyderabadHustlersTech`) — collaborator pushes are ignored. So the **last commit on the default branch must be authored by the owner**.

Convention used here:
1. Feature/work commits authored by the dev account (`DevShoaib78`).
2. A final commit authored by the owner (`HyderabadHustlersTech`) so Vercel builds it.
3. **No `Co-Authored-By` trailers** (no Claude / no bots) — keep the contributor list clean.

Set authorship per commit with `git -c user.name=… -c user.email=…` (use each account's GitHub `noreply` email so GitHub attributes it correctly).
