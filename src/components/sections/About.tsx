"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { about } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import HighlightedText from "@/components/ui/HighlightedText";
import Reveal from "@/components/Reveal";
import SignatureMark from "@/components/ui/SignatureMark";

export default function About() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;
      const img = scope.current?.querySelector(".about-img");
      if (img) {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: ".about-portrait",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="about"
      className="relative mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader index="01" label="The Story">
        About <span className="text-gold">Me</span>
      </SectionHeader>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        {/* Story */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="space-y-6">
            {about.paragraphs.map((text, i) => (
              <Reveal
                key={i}
                as="p"
                delay={i * 90}
                className="text-lg leading-relaxed text-cream/90 sm:text-xl"
              >
                <HighlightedText text={text} />
              </Reveal>
            ))}
          </div>

          {/* Mission pull-quote */}
          <Reveal delay={120} className="mt-12">
            <figure className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface/40 p-8 pb-24 sm:p-10 sm:pb-28">
              <blockquote className="font-display text-2xl font-medium italic leading-tight text-cream sm:text-4xl">
                {about.mission}
              </blockquote>
              <div className="absolute bottom-4 right-6 flex items-center gap-2 opacity-90">
                <span className="font-display text-3xl leading-none text-cream-dim sm:text-4xl">~</span>
                <SignatureMark className="h-12 sm:h-16" />
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="about-portrait relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.portrait}
                alt="Shoaib Khan — Content Creator and Entrepreneur"
                loading="lazy"
                className="about-img absolute inset-0 h-[116%] w-full object-cover"
                style={{ filter: "brightness(0.95) contrast(1.05)" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            <div className="mt-5 flex flex-col gap-1 font-mono text-sm uppercase tracking-[0.15em] sm:flex-row sm:items-center sm:justify-between sm:text-base">
              <span className="text-cream-dim">Hyderabad · India</span>
              <span className="text-gold">A decade of storytelling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
