import { contactMethods, contactCta } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/Reveal";
import { Phone, Mail, Instagram, ArrowUpRight } from "@/components/ui/Icons";

const ICON = { phone: Phone, email: Mail, instagram: Instagram };

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(254,189,89,0.1), transparent 65%)" }}
      />

      <SectionHeader index="04" label="Say Hello">
        Get In <span className="text-gold">Touch</span>
      </SectionHeader>

      <Reveal
        as="p"
        delay={100}
        className="mt-8 font-display text-[clamp(2.5rem,9vw,5.5rem)] font-extrabold leading-[0.9] tracking-tight text-cream"
      >
        Let&rsquo;s Connect<span className="text-gold">.</span>
      </Reveal>

      <div className="mt-12 border-t border-line lg:mt-16">
        {contactMethods.map((m, i) => {
          const Icon = ICON[m.kind];
          const external = m.href.startsWith("http");
          return (
            <Reveal key={m.kind} delay={i * 80}>
              <a
                href={m.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                data-cursor-hover
                className="group flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-9"
              >
                {/* Left — enlarged label */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="font-display text-2xl font-bold text-cream transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                    {m.label}
                  </span>
                </div>
                {/* Right — details pushed to the side */}
                <div className="flex items-center justify-between gap-4 pl-16 sm:justify-end sm:pl-0">
                  <span className="break-words font-body text-base text-cream-dim sm:text-right sm:text-xl">
                    {m.value}
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-cream-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal as="p" delay={120} className="mt-10 text-sm text-cream-dim sm:text-base">
        {contactCta.prefix}{" "}
        <a
          href={contactCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
        >
          {contactCta.linkText}
        </a>
      </Reveal>
    </section>
  );
}
