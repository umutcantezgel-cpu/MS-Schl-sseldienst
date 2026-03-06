import { ShieldCheck } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import dynamic from "next/dynamic";

const PricingCalculator = dynamic(() => import("@/components/pricing/PricingCalculator"), {
  loading: () => (
    <div className="w-full max-w-2xl mx-auto h-[600px] bg-white rounded-3xl elevation-1 border border-[var(--color-border)] animate-pulse flex items-center justify-center p-8 mt-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[var(--color-surface-divider)]"></div>
        <div className="h-6 w-48 bg-[var(--color-surface-divider)] rounded-full"></div>
        <div className="h-4 w-32 bg-[var(--color-surface-divider)] rounded-full mt-2"></div>
      </div>
    </div>
  )
});
import PricingFAQ, { faqs } from "@/components/pricing/PricingFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateSharedMetadata } from "@/lib/metadata";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/faqSchema";

const mainServicesSchema = [
  generateServiceSchema({ title: "Türöffnung", description: "Zerstörungsfreie Türöffnung ab 50€", url: "/leistungen/turoeffnung", price: 50 }),
  generateServiceSchema({ title: "Autoöffnung", description: "Schonende Autoöffnung", url: "/leistungen/autooeffnung", price: 80 })
];
export const metadata = generateSharedMetadata({
  title: "Preise | Festpreise ab 50€ | Ohne versteckte Kosten",
  description: "Transparente Festpreise für Türöffnungen in Wetzlar. Keine versteckten Kosten. Berechnen Sie Ihren Preis sofort online.",
  path: "/preise",
});

export default function PreisePage() {
  const breadcrumbs = [
    { name: "Preise", href: "/preise" }
  ];

  return (
    <div className="bg-[var(--color-surface-subtle)] text-[var(--color-text-primary)] font-sans  pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainServicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative px-[var(--section-px)] py-[var(--section-py)] bg-white border-b border-[var(--color-border-subtle)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Ehrliche <span className="text-[var(--color-brand)]">Festpreise</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Wir hassen versteckte Kosten genauso wie Sie. Deshalb garantieren wir volle Transparenz vor der Türöffnung.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)] -mt-12 relative z-10">
        <PricingCalculator />
      </section>

      {/* Additional Guarantees / Trust */}
      <section className="px-[var(--section-px)] py-[var(--section-py)] bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-[var(--color-brand)] mb-6" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
            Ihre Sicherheit: Unsere Festpreisgarantie
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-body)]">
            Der Preis, den Ihnen der Monteur vor Ort nach der Besichtigung der Tür nennt, ist ein verbindlicher Festpreis. Es kommen keine Fantasie-Gebühren für &quot;Spezialwerkzeuge&quot; oder &quot;Erschwerniszulagen&quot; im Nachhinein dazu.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)] bg-[var(--color-surface-subtle)]">
        <PricingFAQ />
      </section>

      <EmergencyCTA />
    </div>
  );
}
