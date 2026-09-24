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
    layout.tsx            # fonts, site-wide metadata + JSON-LD (siteSchema), providers, Fontshare <link>
    page.tsx              # landing: Intro → Hero → Experience → Contact → FAQ (+ homeSchema)
    journey/page.tsx      # "My Journey" — a film in scenes: Opening → Statement → Timeline → ImpactStats (+ journeySchema, own metadata/OG)
    globals.css           # design system: @theme tokens, grain, marquee, perforations, utilities
    opengraph-image.tsx   # dynamic 1200×630 link-preview card (next/og) — features the signature
    twitter-image.tsx     # re-exports opengraph-image
    sitemap.ts            # /sitemap.xml — canonical URL + image entries, lastmod = build time
  components/
    Intro.tsx             # ~7s filmic "leader" intro (counter + role liners → wipe). Landing page only. **Must play on every full load / refresh** (owner's requirement — don't add once-per-session skipping); skipped only under reduced-motion or on an in-site navigation back to `/`.
    Navbar.tsx            # route-aware: `/#id` items smooth-scroll on the landing page, else navigate; scroll-spy on / only
    JsonLd.tsx            # renders a lib/schema.ts graph
    Footer.tsx            # split-colour wordmark, socials, centered dev credit, back-to-top
    Grain.tsx  Reveal.tsx
    providers/SmoothScroll.tsx   # Lenis <-> GSAP ticker + ScrollTrigger sync
    sections/             # landing page: Hero, Experience, Contact, FAQ
    story/                # /journey scenes: Opening (framed portrait opens to full-bleed), Statement (About; words light up on scroll),
                          #   Timeline (sticky rolling year "odometer" + year index, media opens out of a frame), "and ongoing…"
    journey/              # MilestoneMedia (YouTube / image / mp4 renderer), ImpactStats
    ui/                   # SectionHeader, HighlightedText, Marquee, Icons, SignatureMark
  lib/
    content.ts            # ALL copy / links / data (navItems, journeyPage, faqs, …)
    schema.ts             # JSON-LD: siteSchema (layout) · homeSchema (/) · journeySchema (/journey)
    og-signature.ts       # auto-generated base64 of the padding-trimmed signature (for the OG card)
    youtube.ts  gsap.ts  lenis.ts
public/assets/            # brand assets — ALL WebP (except esportsphase.mp4)
```

## Design system (globals.css `@theme`)

- Colour tokens are **kebab names → Tailwind utilities**: `ink` / `ink-deep` (warm near-black surfaces), `cream` / `cream-dim` / `cream-faint` (warm off-whites), `gold` / `gold-bright` / `gold-deep` / `gold-soft` (brand `#febd59`), `surface`, `line`.
  - ⚠️ **Do NOT name a colour token after a Tailwind scale key** (e.g. `base`). `text-base` collides with the font-size utility — that's why the dark surface is `ink`, not `base`.
- Fonts: `font-display` (Cabinet Grotesk), `font-body` / `font-mono` (both Urbanist — the "mono" name is historical; the eyebrow labels are Urbanist, uppercase + tracked).
- Motion helpers: `.film-grain`, `.animate-marquee` (no hover-pause), `[data-reveal]` reveal transition, `.cta-sheen` / `.cta-ember` (hero "Explore My Journey" pill), `.odo-in` / `.odo-out` (Timeline year counter).

## Motion

- `SmoothScroll` runs one RAF loop (`gsap.ticker`) that drives `lenis.raf` and calls `ScrollTrigger.update` — everything stays in sync. **Fully disabled under `prefers-reduced-motion`; native touch scroll on mobile.**
- `lib/lenis.ts` exposes the Lenis singleton + `scrollToSection()` / `scrollToTop()`. `SmoothScroll` also handles client route changes (reset to top or to the `#hash`, then `ScrollTrigger.refresh()`).
- **/journey scenes** (`components/story/`) use **CSS `position: sticky` + scrubbed ScrollTriggers — no GSAP pins** — so they work with native touch scroll on mobile. Scroll-driven effects sit behind `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`; the SSR / no-JS / reduced-motion state is always a complete static layout (e.g. `motion-reduce:h-auto` on the Opening's tall scroll track).
- Timeline progress is written to a CSS variable (`--tl-p`) from ScrollTrigger, not React state; only the active chapter index is state (drives the odometer).
- Above-the-fold (Hero) uses `gsap.from`/`gsap.set` so content is SSR-visible if JS fails; below-the-fold uses the `Reveal` IntersectionObserver primitive.

## Content

- **All copy/data is in `src/lib/content.ts`** — edit there, never hardcode in components. Journey milestones are a discriminated union (`video` / `side-by-side` / `image` / `video-file` / `placeholder`).
- Assets are absolute paths under `/assets`. **Keep everything WebP**, and strip EXIF/XMP metadata before adding photos (phone photos carry GPS). Photos are sized to ~2–3× their display width (1200–1600px, q92); the full-bleed /journey opener ships `skback.webp` (2400w) + `skback-1200.webp` via `srcSet`.
- Local videos (`video-file` milestones) load lazily: no `src` until near the viewport, a `poster` frame until then — keep a poster for any new clip. Avoid `&` in asset filenames (Next static serving 404s on it — spaces are fine).
- The signature (`SignatureMark`) is a padding-heavy square PNG→WebP cropped via CSS `object-cover`. If you replace the asset, re-run the trim to regenerate `lib/og-signature.ts` for the OG card.

## SEO / AEO

- `layout.tsx` metadata: title, description, keywords, canonical, robots, OpenGraph + Twitter (images come from the `opengraph-image.tsx` / `twitter-image.tsx` routes), theme-color.
- **JSON-LD** (`lib/schema.ts`): site-wide WebSite + Person + Organization[Hyderabad Hustlers] on every page; `/` adds ProfilePage + FAQPage; `/journey` adds AboutPage + BreadcrumbList. FAQPage is generated from `faqs` in `content.ts`, the same data the visible FAQ renders — only ship it on the page where the FAQ is visible.
- Every page with its own `openGraph` metadata needs its own `opengraph-image.tsx` / `twitter-image.tsx` (re-export the root ones) — metadata merges shallowly, so the parent's images are dropped otherwise.
- `public/robots.txt` + `app/sitemap.ts` point at `beingashoaib.com`. `public/llms.txt` is a plain-text summary for AI crawlers — update it when bio/experience changes.
- Content is server-rendered (present without JS) so crawlers/answer engines read it.

---

## Deployment rule (IMPORTANT)

The repo is connected to **Vercel**, which **only builds commits authored by the repo owner** (`HyderabadHustlersTech`) — collaborator pushes are ignored. So the **last commit on the default branch must be authored by the owner**.

Convention used here:
1. Feature/work commits authored by the dev account (`DevShoaib78`).
2. A final commit authored by the owner (`HyderabadHustlersTech`) so Vercel builds it.
3. **No `Co-Authored-By` trailers** (no Claude / no bots) — keep the contributor list clean.

Set authorship per commit with `git -c user.name=… -c user.email=…` (use each account's GitHub `noreply` email so GitHub attributes it correctly).
