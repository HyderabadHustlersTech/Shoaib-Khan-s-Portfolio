"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { about } from "@/lib/content";
import HighlightedText, { findHighlights } from "@/components/ui/HighlightedText";
import SignatureMark from "@/components/ui/SignatureMark";
import Reveal from "@/components/Reveal";

/** Split text into words, flagging those inside a highlight phrase (kept gold). */
function toWords(text: string) {
  const hl = findHighlights(text, about.highlightTerms);
  return Array.from(text.matchAll(/\S+\s*/g), (m) => ({
    word: m[0],
    gold: hl.some((h) => m.index >= h.start && m.index < h.end),
  }));
}

/**
 * Scene 2 — the statement. His opening paragraph is set large and "narrated":
 * words light up from dim to full as it scrolls through. The rest of the story
 * follows in a quiet offset reading column, closing on the mission.
 */
export default function Statement() {
  const scope = useRef<HTMLElement>(null);
  const lead = about.paragraphs[0];
  const body = about.paragraphs.slice(1, -1);
  const closer = about.paragraphs.at(-1); // "Today, I continue … a clear purpose:" leads into the mission

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".st-word",
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".st-lead",
              start: "top 78%",
              end: "bottom 42%",
              scrub: true,
            },
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
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-32 sm:px-8 sm:py-44"
    >
      <h2 id="about-title" className="sr-only">
        About Shoaib Khan
      </h2>

      <p className="st-lead max-w-5xl font-display text-[clamp(1.75rem,4.2vw,3.6rem)] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
        {toWords(lead).map((w, i) => (
          <span key={i} className={`st-word${w.gold ? " text-gold" : ""}`}>
            {w.word}
          </span>
        ))}
      </p>

      <div className="mt-24 grid lg:mt-32 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7 lg:col-start-6">
          {body.map((text, i) => (
            <Reveal key={i} as="p" className="max-w-[62ch] text-lg leading-[1.7] text-cream/85 sm:text-xl">
              <HighlightedText text={text} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* The mission — the line everything above leads to */}
      <figure className="mt-32 flex flex-col items-center text-center sm:mt-44">
        {closer && (
          <Reveal as="p" className="max-w-[46ch] text-base leading-relaxed text-cream-dim sm:text-lg">
            {closer}
          </Reveal>
        )}
        <Reveal
          as="blockquote"
          delay={100}
          className="mt-8 max-w-[18ch] font-display text-[clamp(2.1rem,6vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-cream"
        >
          {about.mission.charAt(0).toUpperCase() + about.mission.slice(1)}
        </Reveal>
        <Reveal delay={220} className="mt-10">
          <SignatureMark className="h-16 sm:h-20" />
        </Reveal>
      </figure>
    </section>
  );
}
