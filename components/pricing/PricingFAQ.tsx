import FAQAccordion from"@/components/ui/FAQAccordion";

interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question:"Gibt es versteckte Kosten?",
    answer:"Nein. Wir kommunizieren alle Preise vor Ort transparent, bevor wir mit der Arbeit beginnen. Die Anfahrtspreise und Grundkosten stehen fest. Sollten Zusatzarbeiten (wie z. B. der Einbau eines neuen Zylinders) nötig sein, besprechen wir das im Voraus.",
  },
  {
    question:"Wie kann ich bezahlen?",
    answer:"Sie können bei uns bequem in bar oder mit EC-Karte/Girocard beim Monteur vor Ort bezahlen. Sie erhalten selbstverständlich eine ordentliche Rechnung.",
  },
  {
    question:"Was bedeutet 'ab' bei den Preisen?",
    answer:"Der 'ab'-Preis bezieht sich auf eine einfach zugefallene, unverschlossene Standardtür. Bei Sicherheitstüren, Doppelfalz-Türen oder wenn die Tür abgeschlossen ist, erhöht sich der Aufwand. Den exakten Preis nennt Ihnen der Monteur immer verbindlich vor der Öffnung.",
  },
  {
    question:"Zahlen auch Rüstzeiten zur Arbeitszeit?",
    answer:"Bei uns zahlen Sie keine versteckten Rüstzeiten. Berechnet wird nur die reine Arbeitszeit vor Ort plus die vereinbarte Anfahrt.",
  },
];

export default function PricingFAQ() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[var(--border-subtle)]">
      <h2 className="typo-h2 text-[var(--text-primary)]">
        Häufige Fragen zu unseren Preisen
      </h2>
      <div className="space-y-6 border-t border-[var(--border-subtle)] pt-6">
        {faqs.map((faq, index) => (
          <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
