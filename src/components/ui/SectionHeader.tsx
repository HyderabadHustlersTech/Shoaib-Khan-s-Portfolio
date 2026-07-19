import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/**
 * Cinematic section header: a mono "reel slate" (index + label) above an
 * oversized display title. Titles are passed as children so each section
 * can mix solid + outlined + gold words freely.
 */
export default function SectionHeader({
  index,
  label,
  children,
  align = "left",
  id,
}: {
  index: string;
  label: string;
  children: ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <header
      id={id}
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      <Reveal className="flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:gap-4 sm:text-base">
        <span className="tabular-nums">R.{index}</span>
        <span className="h-px w-10 bg-gold/60 sm:w-16" />
        <span className="text-cream">{label}</span>
      </Reveal>
      <Reveal
        as="h2"
        delay={80}
        className="font-display text-[clamp(2.75rem,11vw,7.5rem)] font-extrabold leading-[0.86] tracking-[-0.04em]"
      >
        {children}
      </Reveal>
    </header>
  );
}
