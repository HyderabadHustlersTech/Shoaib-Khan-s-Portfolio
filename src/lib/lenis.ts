import type Lenis from "lenis";

/**
 * Module singleton for the active Lenis instance so any component
 * (e.g. the navbar) can drive smooth anchor scrolling without prop-drilling.
 */
let instance: Lenis | null = null;

export function setLenis(next: Lenis | null) {
  instance = next;
}

export function getLenis() {
  return instance;
}

/** Smooth-scroll to a section by CSS selector, with a graceful native fallback. */
export function scrollToSection(target: string) {
  if (instance) {
    instance.scrollTo(target, { offset: -8, duration: 1.4 });
  } else if (typeof document !== "undefined") {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
