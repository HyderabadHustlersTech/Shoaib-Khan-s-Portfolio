import { impactStats, collaboratedBrands } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/ui/Marquee";

export default function ImpactStats() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-8 sm:px-8 sm:pb-10">
      {/* Editorial stat band */}
      <Reveal className="flex items-baseline gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Impact</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream-faint">
          So Far
        </span>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {impactStats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 100}
            className="flex flex-col items-center gap-1 py-8 text-center md:px-8 md:py-10"
          >
            <span className="font-display text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-none tracking-tight text-gold">
              {stat.value}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream-dim">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>

      {/* Collaborations */}
      <div className="mt-16">
        <div className="mb-10 flex items-center gap-5">
          <span className="h-px flex-1 bg-line" />
          <span className="font-display text-2xl font-bold uppercase tracking-wide text-cream sm:text-3xl">
            Collaborations
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="group/marquee relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />
          <Marquee duration={32}>
            {collaboratedBrands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center px-8 sm:px-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                  style={{ height: brand.name === "Edventure Park" ? "64px" : "48px" }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
