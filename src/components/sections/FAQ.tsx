import { faqs } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/Reveal";
import { Close } from "@/components/ui/Icons";

/**
 * Native <details> accordion — answers are in the server HTML (crawlable,
 * works without JS). The same data is emitted as FAQPage JSON-LD (lib/schema.ts → app/page.tsx).
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader>
        Quick <span className="text-gold">Answers</span>
      </SectionHeader>

      <div className="mt-14 border-t border-line lg:mt-20">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 70}>
            <details className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 sm:py-8 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[clamp(1.35rem,4vw,2.25rem)] font-bold leading-tight tracking-tight text-cream transition-colors duration-300 group-open:text-gold">
                  {faq.question}
                </h3>
                <Close className="h-5 w-5 shrink-0 rotate-45 text-cream-faint transition-transform duration-300 group-open:rotate-0 group-open:text-gold" />
              </summary>
              <p className="max-w-3xl pb-8 text-base leading-relaxed text-cream-dim sm:text-lg">
                {faq.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
