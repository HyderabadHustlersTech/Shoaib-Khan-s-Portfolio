"use client";

import { useEffect, useState } from "react";
import { navSections, socials } from "@/lib/content";
import { scrollToSection, getLenis } from "@/lib/lenis";
import { LinkedIn, Instagram, Menu, Close, ArrowUpRight } from "@/components/ui/Icons";
import SignatureMark from "@/components/ui/SignatureMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  // Bar tint after leaving the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = ["hero", ...navSections.map((s) => s.id)];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    if (open) {
      getLenis()?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      getLenis()?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // let the menu begin closing before scroll starts
    setTimeout(() => scrollToSection(`#${id}`), 80);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled ? "bg-ink/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <button
            onClick={() => go("hero")}
            className="group flex items-center"
            aria-label="Shoaib Khan — back to top"
          >
            <SignatureMark className="h-10 transition-opacity duration-300 group-hover:opacity-75 sm:h-12" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navSections.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className="group relative px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors"
                  data-cursor-hover
                >
                  <span className={isActive ? "text-gold" : "text-cream/85 group-hover:text-cream"}>
                    <span className={isActive ? "text-gold/70" : "text-cream/55"}>{s.index}</span> {s.label}
                  </span>
                  <span
                    className={`absolute inset-x-4 bottom-1 h-px origin-left bg-gold transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
            <a
              href={`mailto:shoaib@hyderabadhustlers.com`}
              className="ml-3 flex items-center gap-1 rounded-full border border-gold/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-ink"
              data-cursor-hover
            >
              Connect <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[99] flex flex-col bg-ink-deep px-6 pb-10 pt-24 transition-[opacity,transform] duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col justify-center gap-2">
          {navSections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className="group flex items-baseline gap-4 border-b border-line/60 py-4 text-left"
              style={{ transitionDelay: `${open ? i * 60 + 120 : 0}ms` }}
            >
              <span className="font-mono text-xs text-gold">{s.index}</span>
              <span className="font-display text-5xl font-extrabold tracking-tight text-cream transition-colors group-hover:text-gold">
                {s.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-cream"
            >
              <LinkedIn className="h-5 w-5" />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-cream"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream-faint">
            Hyderabad, IN
          </span>
        </div>
      </div>
    </>
  );
}
