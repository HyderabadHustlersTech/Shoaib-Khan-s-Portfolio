"use client";

import { useRef, useState, type CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { journeyData, journeyIntro, ongoing } from "@/lib/content";
import { scrollToSection } from "@/lib/lenis";
import MilestoneMedia from "@/components/journey/MilestoneMedia";

const slug = (year: string) => `y-${year.replace(/\D+/g, "-")}`;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Reel-counter year: each digit rolls independently, so 2017 → 2018 turns only
 * the last digit. Unchanged digits keep their React key (no re-animation);
 * a changed digit remounts and rolls in while the old one rolls out.
 */
function Odometer({ value, prev, dir, className = "" }: {
  value: string;
  prev: string | null;
  dir: 1 | -1;
  className?: string;
}) {
  const vars = { "--from": dir > 0 ? "105%" : "-105%", "--to": dir > 0 ? "-105%" : "105%" } as CSSProperties;
  return (
    <span aria-hidden className={`inline-flex overflow-hidden ${className}`} style={vars}>
      {value.split("").map((c, i) => {
        const was = prev?.[i];
        return (
          <span key={i} className="relative inline-block">
            {was !== undefined && was !== c && (
              <span key={`out-${value}`} className="odo-out absolute inset-0">
                {was}
              </span>
            )}
            <span key={c} className="odo-in inline-block">
              {c}
            </span>
          </span>
        );
      })}
    </span>
  );
}

/**
 * Scene 3 — the reel. A sticky gold year counter (left on desktop, a top bar on
 * mobile) rolls to each chapter's year as you read; a year index doubles as
 * navigation and progress. Each moment's media opens out of a frame on entry.
 */
export default function Timeline() {
  const scope = useRef<HTMLElement>(null);
  const [state, setState] = useState<{ i: number; prev: number | null }>({ i: 0, prev: null });

  const years = journeyData.map((y) => y.year.slice(0, 4)); // "2021–2022" rolls to 2021
  const dir: 1 | -1 = state.prev === null || state.i > state.prev ? 1 : -1;
  const prevYear = state.prev === null ? null : years[state.prev];

  useGSAP(
    () => {
      const root = scope.current!;

      // Active chapter → counter. Runs on every breakpoint (desktop + mobile bar).
      gsap.utils.toArray<HTMLElement>(".tl-chapter").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) setState((s) => (s.i === i ? s : { i, prev: s.i }));
          },
        });
      });

      // Reading progress through the whole reel, as a CSS variable (no re-renders).
      ScrollTrigger.create({
        trigger: ".tl-chapters",
        start: "top 55%",
        end: "bottom 55%",
        onUpdate: (self) => root.style.setProperty("--tl-p", self.progress.toFixed(4)),
      });

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".tl-media").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(12% 10% 12% 10% round 24px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 12px)",
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 92%", end: "top 45%", scrub: 0.5 },
            }
          );
        });

        gsap.fromTo(
          ".tl-ongoing",
          { letterSpacing: () => (window.innerWidth < 640 ? "0.06em" : "0.25em"), opacity: 0.2 },
          {
            letterSpacing: "-0.03em",
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: ".tl-ongoing", start: "top 95%", end: "center 55%", scrub: true },
          }
        );
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="journey"
      aria-labelledby="journey-title"
      className="relative scroll-mt-20"
      style={{ "--tl-p": 0 } as CSSProperties}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2
          id="journey-title"
          className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-cream"
        >
          The Journey
        </h2>
        <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-cream-dim sm:text-xl">
          {journeyIntro}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] px-5 sm:px-8 lg:mt-0 lg:grid-cols-12 lg:gap-12">
        {/* Mobile: sticky counter bar */}
        <div className="sticky top-[4.5rem] z-20 -mx-5 flex items-end justify-between border-b border-line bg-ink/85 px-5 pb-3 pt-2 backdrop-blur-md sm:-mx-8 sm:px-8 lg:hidden">
          <Odometer
            value={years[state.i]}
            prev={prevYear}
            dir={dir}
            className="font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.04em] text-gold"
          />
          <div className="flex w-24 flex-col items-end gap-2 pb-1">
            <span className="text-sm tabular-nums text-cream-dim">
              {pad(state.i + 1)} / {pad(journeyData.length)}
            </span>
            <span className="relative h-px w-full bg-line">
              <span className="absolute inset-0 origin-left scale-x-[var(--tl-p)] bg-gold" />
            </span>
          </div>
        </div>

        {/* Desktop: sticky counter + year index */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-0 flex h-svh flex-col justify-center">
            <Odometer
              value={years[state.i]}
              prev={prevYear}
              dir={dir}
              className="font-display text-[clamp(7rem,12.5vw,13rem)] font-extrabold leading-[0.85] tracking-[-0.05em] text-gold"
            />

            <nav aria-label="Jump to a year" className="relative mt-12 pl-6">
              <span className="absolute inset-y-1 left-0 w-px bg-line">
                <span className="absolute inset-0 origin-top scale-y-[var(--tl-p)] bg-gold" />
              </span>
              <ol className="space-y-1">
                {journeyData.map((yd, i) => (
                  <li key={yd.year}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(`#${slug(yd.year)}`)}
                      aria-current={state.i === i ? "step" : undefined}
                      data-cursor-hover
                      className={`group flex items-center gap-3 py-1 text-lg tabular-nums transition-colors duration-300 ${
                        state.i === i ? "text-cream" : "text-cream-faint hover:text-cream-dim"
                      }`}
                    >
                      <span
                        className={`h-px bg-gold transition-all duration-500 ${
                          state.i === i ? "w-8" : "w-0 group-hover:w-3"
                        }`}
                      />
                      {yd.year}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        {/* Chapters */}
        <div className="tl-chapters lg:col-span-7">
          {journeyData.map((yd) => (
            <section
              key={yd.year}
              id={slug(yd.year)}
              aria-labelledby={`${slug(yd.year)}-h`}
              className="tl-chapter scroll-mt-32 py-[12svh] first:pt-[8svh] lg:py-[20svh] lg:first:pt-[45svh]"
            >
              <h3 id={`${slug(yd.year)}-h`} className="sr-only">
                {yd.year}
              </h3>
              {yd.milestones.map((m, j) => (
                <article key={j} className="[&+article]:mt-24 lg:[&+article]:mt-36">
                  <div className="tl-media">
                    <MilestoneMedia milestone={m} />
                  </div>
                  <h4 className="mt-7 max-w-[24ch] font-display text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.02em] text-cream">
                    {m.title}
                  </h4>
                  {m.description ? (
                    <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-cream-dim sm:text-lg">
                      {m.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* Scene 4 — the reel doesn't end */}
      <div className="flex flex-col items-center overflow-hidden px-5 pb-24 pt-[16svh] text-center sm:pb-32">
        <p className="tl-ongoing whitespace-nowrap font-display text-[clamp(3rem,11vw,10rem)] font-extrabold italic leading-none tracking-[-0.03em] text-gold">
          {ongoing.headline}
        </p>
        <p className="mt-6 text-lg text-cream-dim sm:text-xl">{ongoing.sub}</p>
      </div>
    </section>
  );
}
