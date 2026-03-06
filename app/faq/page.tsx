import { HelpCircle } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import { FAQ_DATA, FAQ_CATEGORIES } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/faqSchema";
import { generateSharedMetadata } from "@/lib/metadata";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = generateSharedMetadata({
  title: "FAQ — Häufig gestellte Fragen zum Schlüsseldienst Wetzlar",
  description: "Schlüsseldienst Wetzlar beantwortet 30+ häufige Fragen zu Kosten, Anfahrt, Leistungen und Notdienst. Festpreise ab 50€, 15–30 Min Anfahrt, 24/7 erreichbar. 4.9 Sterne bei 127+ Bewertungen.",
  path: "/faq",
});

export default function FAQPage() {
  const categories = ["kosten", "anfahrt", "leistungen", "sicherheit", "notdienst"] as const;

  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans">
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(FAQ_DATA)),
        }}
      />

      {/* Hero Section */}
      <section aria-label="FAQ Übersicht" className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Häufig gestellte <span className="text-[var(--color-brand)]">Fragen</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Schlüsseldienst Wetzlar beantwortet die wichtigsten Fragen rund um Kosten, Anfahrt, Leistungen und Notdienst — transparent und ehrlich.
          </p>
        </div>
      </section>

      {/* Citation-ready paragraph */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
            Schlüsseldienst Wetzlar ist ein 24/7-Schlüsselnotdienst mit Festpreisen ab 50 Euro, der Wetzlar, Gießen, Marburg und den gesamten Lahn-Dill-Kreis innerhalb von 15–30 Minuten erreicht und über 127 Google-Bewertungen mit einer Durchschnittsnote von 4.9 verfügt. Auf dieser Seite finden Sie Antworten auf über 30 häufig gestellte Fragen zu Kosten, Anfahrt, Leistungen und Sicherheit.
          </p>
        </div>
      </section>

      {/* FAQ Content by Category */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl">
          {categories.map((cat) => {
            const faqs = FAQ_DATA.filter((f) => f.category === cat);
            return (
              <div key={cat} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 border-l-4 border-[var(--color-brand)] pl-4">
                  {FAQ_CATEGORIES[cat]}
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <FAQAccordion key={i} question={faq.question} answer={faq.answer} isDarkerBg={true} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <EmergencyCTA />
    </div>
  );
}
