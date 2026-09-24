"use client";

import { useRef, type CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { hero, socials, journeyPage } from "@/lib/content";
import { LinkedIn, Instagram } from "@/components/ui/Icons";

/**
 * Ember particles for the "Explore My Journey" pill: each starts on the pill's
 * outline and drifts outward (slightly upward) while fading — see .cta-ember.
 * Deterministic (no Math.random) so server and client markup match.
 */
const EMBERS = Array.from({ length: 11 }, (_, i) => {
  const a = (i / 11) * Math.PI * 2 + 0.35;
  const dist = 18 + (i % 3) * 8;
  const r = (n: number) => Math.round(n * 10) / 10;
  return {
    "--x": `${r(50 + 48 * Math.cos(a))}%`,
    "--y": `${r(50 + 44 * Math.sin(a))}%`,
    "--dx": `${r(Math.cos(a) * dist)}px`,
    "--dy": `${r(Math.sin(a) * dist * 0.7 - 10)}px`,
    "--size": `${2 + (i % 3) * 0.75}px`,
    "--dur": `${3.2 + (i % 4) * 0.6}s`,
    "--delay": `${r((i * 0.73) % 3.6)}s`,
  } as CSSProperties;
});

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const q = gsap.utils.selector(scope);
      gsap.set(q(".line-inner"), { yPercent: 115 });
      gsap.set(q(".hero-fade"), { opacity: 0, y: 24 });
      gsap.set(q(".hero-portrait"), { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(q(".hero-portrait-img"), { scale: 1.25 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
      tl.to(q(".hero-portrait"), { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1 })
        .to(q(".hero-portrait-img"), { scale: 1, duration: 1.4 }, 0)
        .to(q(".line-inner"), { yPercent: 0, duration: 1, stagger: 0.12 }, 0.2)
        .to(q(".hero-fade"), { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 0.6);

      let started = false;
      const play = () => {
        if (!started) {
          started = true;
          tl.play();
        }
      };
      window.addEventListener("intro-done", play, { once: true });
      const fb = window.setTimeout(play, 8000);

      // Subtle parallax on the portrait
      gsap.to(q(".hero-portrait-img"), {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
      });

      return () => {
        window.removeEventListener("intro-done", play);
        window.clearTimeout(fb);
      };
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(254,189,89,0.12), transparent 65%)" }}
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 pt-24 sm:px-8 sm:pt-28">
        {/* Meta row */}
        <div className="hero-fade flex items-center justify-between border-b border-line pb-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream-dim sm:text-xs">
          <span>Hyderabad, India</span>
          <span className="hidden sm:inline">Content · Film · Startups</span>
          <span>Since 2003</span>
        </div>

        {/* Main composition */}
        <div className="grid flex-1 grid-cols-1 items-center gap-8 py-10 lg:grid-cols-12 lg:gap-6 lg:py-6">
          {/* Name + copy */}
          <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
            <h1 className="font-display font-extrabold leading-[0.82] tracking-[-0.045em]">
              <span className="block overflow-hidden">
                <span className="line-inner block text-[clamp(3.5rem,17vw,12rem)] uppercase text-cream">
                  Shoaib
                </span>
              </span>{" "}
              <span className="block overflow-hidden">
                <span className="line-inner block text-[clamp(3.5rem,17vw,12rem)] uppercase text-gold">
                  Khan
                </span>
              </span>
            </h1>

            <p className="hero-fade mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-display text-lg font-bold uppercase tracking-tight text-cream sm:text-2xl lg:justify-start">
              {hero.roles.map((r, i) => (
                <span key={r} className="flex items-center gap-4">
                  {i > 0 && (
                    <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-gold sm:h-2.5 sm:w-2.5" />
                  )}
                  {r}
                </span>
              ))}
            </p>

            {/* Let's Connect + Explore My Journey */}
            <div className="hero-fade mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="inline-flex items-center gap-4 rounded-full border border-gold/50 bg-ink/40 px-6 py-3 backdrop-blur-sm">
                <span className="font-body text-sm font-semibold text-cream sm:text-base">
                  {hero.connectLabel}
                </span>
                <span className="h-5 w-px bg-line" />
                <div className="flex items-center gap-2">
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Shoaib Khan on LinkedIn"
                    data-cursor-hover
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
                  >
                    <LinkedIn className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Shoaib Khan on Instagram"
                    data-cursor-hover
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
                  >
                    <Instagram className="h-[18px] w-[18px]" />
                  </a>
                </div>
              </div>
              {/* Explore My Journey — the landing page's door to /journey */}
              <Link
                href={journeyPage.path}
                data-cursor-hover
                className="group relative inline-flex transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
              >
                {/* embers drifting off the pill's edge */}
                <span aria-hidden className="pointer-events-none absolute inset-0">
                  {EMBERS.map((e, i) => (
                    <span key={i} className="cta-ember" style={e} />
                  ))}
                </span>
                <span className="cta-sheen relative flex h-16 items-center overflow-hidden rounded-full bg-gold px-8 font-body text-sm font-bold text-ink shadow-[0_0_40px_-10px_rgba(254,189,89,0.6)] transition-shadow duration-300 group-hover:shadow-[0_0_60px_-6px_rgba(254,189,89,0.85)] sm:text-base">
                  {hero.journeyLabel}
                </span>
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="hero-portrait relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-[1.5rem] border border-gold/25 sm:w-72 lg:ml-auto lg:mr-0 lg:w-full lg:max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.portrait}
                alt="Shoaib Khan"
                fetchPriority="high"
                className="hero-portrait-img h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
