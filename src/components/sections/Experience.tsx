import { experiences } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader index="03" label="Credits">
        My <span className="text-gold">Experience</span>
      </SectionHeader>

      <div className="mt-14 border-t border-line lg:mt-20">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 70}>
            <div className="group relative flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-9">
              {/* gold wash on hover */}
              <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gold/5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

              <div className="relative flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-xs text-cream-faint transition-colors group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[clamp(1.9rem,6vw,3.4rem)] font-bold leading-none tracking-tight text-cream transition-colors duration-300 group-hover:text-gold">
                  {exp.company}
                </h3>
              </div>

              <div className="relative flex items-center gap-5 pl-8 sm:justify-end sm:pl-0">
                {exp.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={exp.logo}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className={`hidden w-auto object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100 sm:block ${
                      exp.company === "Hyderabad Hustlers" || exp.company === "EdVenture Park"
                        ? "h-20 max-w-[14rem] lg:h-24"
                        : "h-14 max-w-[11rem] lg:h-16"
                    }`}
                  />
                )}
                <span className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-cream-dim sm:text-right">
                  {exp.role}
                </span>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-cream-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold sm:block" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
