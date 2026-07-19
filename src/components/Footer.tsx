"use client";

import { socials, developerCredit } from "@/lib/content";
import { scrollToSection } from "@/lib/lenis";
import { LinkedIn, Instagram, ArrowDown } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-deep">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        {/* Giant wordmark */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="group block w-full text-left"
          aria-label="Back to top"
        >
          <span className="block font-display text-[clamp(3rem,16vw,12rem)] font-extrabold uppercase leading-[0.8] tracking-tighter">
            <span className="text-cream">Shoaib</span>{" "}
            <span className="text-gold">Khan</span>
          </span>
        </button>

        <div className="mt-12 flex flex-col gap-10 border-t border-line pt-8">
          {/* socials + copyright */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-cursor-hover
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <LinkedIn className="h-5 w-5" />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-cursor-hover
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-cream-faint">
              © {new Date().getFullYear()} Shoaib Khan — Hyderabad, India
            </p>
          </div>

          {/* centered developer credit */}
          <p className="text-center text-base text-cream-dim sm:text-lg">
            {developerCredit.prefix}{" "}
            <a
              href={developerCredit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold transition-colors hover:text-gold-bright"
            >
              {developerCredit.name}
            </a>
          </p>

          {/* back to top — lowered */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("#hero")}
              data-cursor-hover
              className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cream-dim transition-colors hover:text-gold"
            >
              Back to top
              <ArrowDown className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
