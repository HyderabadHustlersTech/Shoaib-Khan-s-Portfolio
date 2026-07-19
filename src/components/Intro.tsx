"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { introWords, hhLogo } from "@/lib/content";
import SignatureMark from "@/components/ui/SignatureMark";

/**
 * Filmic "leader" intro. Each role liner holds long enough to read, all three
 * complete (the last paired with the Hyderabad Hustlers logo), then the panel
 * wipes up. Content lives beneath in the DOM the whole time (SEO-safe); skipped
 * instantly under reduced-motion.
 */
export default function Intro() {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);
  const [done, setDone] = useState(false);
  const isLast = word === introWords.length - 1;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const id = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(id);
    }

    document.documentElement.style.overflow = "hidden";
    getLenis()?.stop();

    // ~1.5s per liner + 1.5s extra so every liner reads comfortably.
    const total = 1.5 * introWords.length + 1.5;
    const last = introWords.length - 1;

    const obj = { v: 0 };
    const tl = gsap.timeline();
    tl.to(obj, {
      v: 100,
      duration: total,
      ease: "none",
      onUpdate: () => {
        const v = Math.round(obj.v);
        setCount(v);
        setWord(Math.min(last, Math.floor((v / 100) * introWords.length)));
      },
    });
    tl.to(root.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "+=0.4");
    tl.add(() => {
      document.documentElement.style.overflow = "";
      getLenis()?.start();
      setDone(true);
      window.dispatchEvent(new Event("intro-done"));
    });

    const failsafe = window.setTimeout(() => {
      document.documentElement.style.overflow = "";
      getLenis()?.start();
      setDone(true);
    }, 11000);

    return () => {
      tl.kill();
      window.clearTimeout(failsafe);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[120] flex flex-col justify-between bg-ink-deep px-6 py-7 sm:px-10 sm:py-9"
    >
      <SignatureMark className="h-16 self-start sm:h-24" />

      <div className="flex flex-1 items-center">
        <div key={word} className="intro-word flex flex-wrap items-center gap-x-5 gap-y-1">
          <p className="max-w-3xl font-display text-[clamp(1.9rem,6.5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-cream">
            {introWords[word]}
          </p>
          {isLast && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hhLogo}
              alt="Hyderabad Hustlers"
              className="h-[clamp(5.5rem,18vw,12.5rem)] w-auto"
            />
          )}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream-faint">
            2017 — Now
          </span>
          <span className="font-display text-[clamp(4rem,20vw,11rem)] font-extrabold leading-none tracking-tighter text-cream tabular-nums">
            {String(count).padStart(2, "0")}
            <span className="text-gold">%</span>
          </span>
        </div>
        <div className="h-px w-full bg-line">
          <div
            className="h-px bg-gold transition-[width] duration-100 ease-linear"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </div>
  );
}
