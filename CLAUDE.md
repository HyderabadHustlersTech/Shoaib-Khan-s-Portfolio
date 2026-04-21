# Shoaib Khan Portfolio

Single-page portfolio site for Shoaib Khan (content creator / entrepreneur, co-founder of HH). Vite + React 18 + TypeScript + Tailwind. Deployed on Vercel (`vercel.json` rewrites all paths to `/` for SPA routing).

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build (terser, drops `console` / `debugger`)
- `npm run preview` — preview the built bundle
- `npm run lint` — ESLint with `--max-warnings 0` (strict; zero warnings tolerated)

## Architecture

- `src/main.tsx` wraps `App` in `BrowserRouter` and `HelmetProvider`.
- `src/App.tsx` shows a 9.5s `SplashScreen`, then renders routes inside an `ErrorBoundary`. Only one route exists: `/` → `pages/Home.tsx`. Initializes Lenis smooth scrolling via `useLenis`.
- `src/pages/Home.tsx` is the single page. `Navbar` + `HeroSection` load eagerly; `AboutSection`, `JourneySection`, `ExperienceSection`, `ContactSection` are `React.lazy` behind `Suspense` with a spinner fallback.
- SEO meta (title / description / OG / Twitter) lives in `App.tsx` via `react-helmet-async`. Canonical host: `shoaibkhan.in`.

## Key modules

- `src/constants/config.ts` — centralized timings, animation tuning (particle counts per breakpoint, blur), breakpoints, brand colors (`#FEBD59` primary + orange palette), and `NAV_SECTIONS` (`hero` / `about` / `journey` / `experience` / `contact`). Prefer editing here over hardcoding.
- `src/hooks/` — `useLenis` (smooth scroll), `useActiveSection` (scroll-spy for navbar highlighting), `useScrollPosition` / `useIsAtTop` (navbar width morph).
- `src/data/journeyData.ts` — typed content data for Journey section. Milestones are a discriminated union: `video`, `side-by-side`, `image`, etc. Add new milestones here, not in components.
- `src/utils/youtube.ts` — YouTube URL helpers for embedded milestones.
- `src/components/LazyImage.tsx` / `YouTubeVideo.tsx` — media primitives used by sections.

## Styling

- Tailwind (`tailwind.config.js`) extends theme with brand colors, fonts (`display`: Cabinet Grotesk, `body`: Urbanist, `accent`: Karla), and custom keyframes (`fade-in`, `slide-up`, `scale-in`, `float`, `typewriter`).
- `src/styles/variables.scss` is auto-injected into every `.scss` file via `vite.config.ts` (`additionalData`). SCSS is used sparingly alongside Tailwind.
- Framer Motion drives entrance / transition animations throughout.

## Assets

Static assets in `public/assets/` are referenced by absolute path (e.g. `/assets/skpic.webp`). Prefer `.webp` for images.

## Conventions

- Components are function components in `.tsx`, default-exported, co-located with no index files.
- Reuse constants from `constants/config.ts` (e.g. `TIMING.MENU_CLOSE_DELAY`, `NAV_SECTIONS`) instead of re-declaring values.
- Use existing hooks (`useActiveSection`, `useIsAtTop`, `useLenis`) rather than ad-hoc scroll listeners.
- Keep below-the-fold sections lazy-loaded to preserve initial-load performance.
- ESLint is zero-warning; fix lint before committing.

## Notes

- `darkveil.md` is a standalone snippet (WebGL shader background via `ogl`) provided as reference — `ogl` is **not** in `package.json` and the component is not yet integrated. If wiring it up, install `ogl` and drop the component under `src/components/`.
- `git_push.bat` is a Windows convenience script (the repo itself is not initialized as git here per platform info).
