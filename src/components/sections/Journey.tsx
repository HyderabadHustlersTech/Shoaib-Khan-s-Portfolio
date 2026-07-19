"use client";

import { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { journeyData, journeyIntro, ongoing, type Milestone } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/Reveal";
import MilestoneCard from "@/components/journey/MilestoneCard";
import ImpactStats from "@/components/journey/ImpactStats";

const isWide = (m: Milestone) => m.type === "side-by-side";

/** Sprocket-hole strip with a travelling gold pulse of lit dots. */
function Perforations({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      aria-hidden
      className={`perf pointer-events-none absolute inset-x-0 h-6 ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
    >
      <div className="perf-layer perf-base" />
      <div
        className={`perf-layer perf-glow ${
          position === "top" ? "perf-glow--ltr" : "perf-glow--rtl"
        }`}
      />
    </div>
  );
}

function YearSlate({ year }: { year: string }) {
  return (
    <div className="flex shrink-0 items-center px-2">
      <span className="whitespace-nowrap font-display text-[7rem] font-extrabold leading-none tracking-tighter text-gold">
        {year}
      </span>
    </div>
  );
}

export default function Journey() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current!;
        const amount = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, { x: () => -amount(), ease: "none" });

        ScrollTrigger.create({
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${amount()}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
          },
        });
      });
      return () => mm.revert();
    },
    { scope: pinRef }
  );

  return (
    <section id="journey" className="relative scroll-mt-20">
      {/* Header */}
      <div className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionHeader index="02" label="The Reel">
          The <span className="text-gold">Journey</span>
        </SectionHeader>
        <Reveal
          as="p"
          delay={120}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg"
        >
          {journeyIntro}
        </Reveal>
      </div>

      {/* Desktop: pinned horizontal reel */}
      <div
        ref={pinRef}
        className="relative mt-16 hidden h-[100svh] overflow-hidden lg:flex lg:items-center"
      >
        {/* Centered film band — perforations frame the cards, clear of the navbar */}
        <div className="relative w-full py-10">
          <Perforations position="top" />

          <div ref={trackRef} className="flex items-center gap-8 px-[8vw] will-change-transform">
            {journeyData.map((yd) => (
              <Fragment key={yd.year}>
                <YearSlate year={yd.year} />
                {yd.milestones.map((m, i) => (
                  <div
                    key={i}
                    className={isWide(m) ? "w-[44rem] shrink-0" : "w-[26rem] shrink-0"}
                  >
                    <MilestoneCard
                      milestone={m}
                      frame={`${yd.year} · ${String(i + 1).padStart(2, "0")}`}
                    />
                  </div>
                ))}
              </Fragment>
            ))}

            {/* Ongoing */}
            <div className="flex min-w-[22rem] shrink-0 flex-col justify-center pl-4">
              <span className="font-display text-5xl font-extrabold italic text-gold">
                {ongoing.headline}
              </span>
              <span className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-cream-faint">
                {ongoing.sub}
              </span>
            </div>
          </div>

          <Perforations position="bottom" />
        </div>

        {/* Scrub progress */}
        <div className="absolute inset-x-[8vw] bottom-12 h-px bg-line">
          <div
            ref={progressRef}
            className="h-px origin-left scale-x-0 bg-gold"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Mobile: vertical filmstrip */}
      <div className="mt-14 space-y-14 px-5 sm:px-8 lg:hidden">
        {journeyData.map((yd) => (
          <div key={yd.year} className="relative border-l border-line pl-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="absolute -left-[7px] h-3 w-3 rounded-full border-2 border-gold bg-ink" />
              <span className="font-display text-5xl font-extrabold tracking-tight text-gold">
                {yd.year}
              </span>
            </div>
            <div className="space-y-6">
              {yd.milestones.map((m, i) => (
                <Reveal key={i} delay={i * 60}>
                  <MilestoneCard
                    milestone={m}
                    frame={`${yd.year} · ${String(i + 1).padStart(2, "0")}`}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <div className="relative border-l border-line pl-6">
          <span className="absolute -left-[7px] top-1 h-3 w-3 animate-pulse rounded-full bg-gold" />
          <p className="font-display text-3xl font-extrabold italic text-gold">{ongoing.headline}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-cream-faint">
            {ongoing.sub}
          </p>
        </div>
      </div>

      {/* Impact */}
      <div className="mt-24">
        <ImpactStats />
      </div>
    </section>
  );
}
