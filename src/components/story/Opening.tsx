"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { about, journeyPage } from "@/lib/content";

/**
 * Scene 1, the opening shot. "MY JOURNEY" sits over a small framed portrait
 * (the whole photo, head to jacket logo); scrolling grows the frame itself to
 * full-bleed while the two words drift apart, then the intro line settles over
 * the darkened image. Growing the box (not clipping a full-bleed image) keeps the
 * subject in frame at every viewport shape.
 *
 * Built on CSS sticky (no GSAP pin) so it behaves with native touch scroll.
 * The SSR/no-JS/reduced-motion state is the first frame: title + framed portrait.
 */

/** Framed-portrait geometry, shared by the CSS start state and the GSAP tween. */
const frameHeight = (vw: number, vh: number) => Math.min(vh * (vw < 640 ? 0.5 : 0.6), vw * 1.1);

export default function Opening() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(scope);
        const stage = () => q(".op-stage")[0] as HTMLElement;
        const startH = () => frameHeight(stage().clientWidth, stage().clientHeight);

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          q(".op-frame"),
          { width: () => startH() * 0.8, height: startH, borderRadius: 20 },
          {
            width: () => stage().clientWidth,
            height: () => stage().clientHeight,
            borderRadius: 0,
            duration: 0.6,
            ease: "power2.inOut",
          },
          0
        )
          .fromTo(q(".op-img"), { scale: 1.08 }, { scale: 1, duration: 0.7 }, 0)
          .to(q(".op-my"), { yPercent: -120, opacity: 0, duration: 0.45 }, 0)
          .to(q(".op-journey"), { yPercent: 120, opacity: 0, duration: 0.45 }, 0)
          .to(q(".op-shade"), { opacity: 1, duration: 0.3 }, 0.45)
          .fromTo(q(".op-intro"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25 }, 0.55)
          .to({}, { duration: 0.2 }); // hold the final frame before release
      });
      return () => mm.revert();
    },
    { scope }
  );

  const [first, ...rest] = journeyPage.title.split(" ");

  return (
    <section
      ref={scope}
      id="top"
      className="relative h-[260svh] motion-reduce:h-auto"
    >
      <div className="op-stage sticky top-0 h-svh overflow-hidden motion-reduce:relative">
        {/* The frame: a centred 4:5 portrait card at rest, grown to full-bleed on scroll */}
        <div className="op-frame absolute left-1/2 top-1/2 h-[var(--fh)] w-[calc(var(--fh)*0.8)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px] [--fh:min(50svh,110vw)] sm:[--fh:min(60svh,110vw)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={about.portrait}
            srcSet={`${about.portraitSmall} 1200w, ${about.portrait} 2400w`}
            sizes="100vw"
            alt="Shoaib Khan in his Hyderabad Hustlers jacket, looking ahead"
            fetchPriority="high"
            className="op-img h-full w-full object-cover object-[50%_30%]"
          />
          <div className="op-shade absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30 opacity-0" />
        </div>

        {/* Title — split so the words can part as the frame opens */}
        <h1 className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-display font-extrabold uppercase leading-[0.8] tracking-[-0.05em] text-cream">
          <span className="op-my block text-[clamp(4.5rem,20vw,16rem)]">{first}</span>{" "}
          <span className="op-journey block text-[clamp(3.25rem,15vw,13rem)] text-gold">
            {rest.join(" ")}
          </span>
        </h1>

        <p className="op-intro absolute inset-x-0 bottom-[14svh] mx-auto max-w-[22ch] px-5 text-center font-display text-[clamp(1.6rem,4vw,3rem)] font-bold leading-[1.08] tracking-tight text-cream opacity-0 motion-reduce:opacity-100">
          {journeyPage.intro}
        </p>
      </div>
    </section>
  );
}
