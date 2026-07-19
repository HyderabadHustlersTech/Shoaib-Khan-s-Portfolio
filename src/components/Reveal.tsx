"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms delay after entering the viewport — use for stagger */
  delay?: number;
  /** re-trigger every time it enters (default: once) */
  repeat?: boolean;
};

/**
 * Lightweight scroll-reveal built on IntersectionObserver (no GSAP dependency).
 * Pairs with the [data-reveal] / [data-reveal="in"] transition in globals.css.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = window.setTimeout(() => el.setAttribute("data-reveal", "in"), delay);
          if (!repeat) io.disconnect();
          return () => window.clearTimeout(t);
        } else if (repeat) {
          el.setAttribute("data-reveal", "");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, repeat]);

  return (
    <Tag ref={ref} data-reveal="" className={className}>
      {children}
    </Tag>
  );
}
