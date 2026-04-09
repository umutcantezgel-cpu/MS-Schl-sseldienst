import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getHomepageFAQs } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/schema";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RevealSection from "@/components/motion/RevealSection";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";

export default function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="bg-[var(--color-charcoal-50)]/40 relative px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32">
      {/* Subtler Glass-Background for FAQ readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]"></div>
      <JsonLd data={getFAQSchema(getHomepageFAQs())} />
      <RevealSection className="mx-auto max-w-4xl">
        <SectionHeader
          pill="FAQ"
          headingId="faq-heading"
          title={<>Häufig gestellte <span className="text-[var(--color-red-500)]">Fragen</span></>}
          description="Schlüssel Schmiede Wetzlar beantwortet Ihre wichtigsten Fragen und ehrlich und transparent."
        />
        <div className="space-y-[var(--space-6)]">
          {getHomepageFAQs().map((faq, i) => (
            <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="mt-[var(--space-8)] text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-[var(--space-2)] text-[var(--color-red-500)] font-[600] link-underline"
            style={{ fontSize: 'var(--text-body)' }}
          >
            Alle Fragen & Antworten anzeigen
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </RevealSection>
    </section>
  );
}
