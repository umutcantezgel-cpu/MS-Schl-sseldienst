import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import ProcessSteps from "@/components/trust/ProcessSteps";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import PriceCard from "@/components/pricing/PriceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function SchluesselNachmachenPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans">
      <Breadcrumb currentSlug="/leistungen/schluessel-nachmachen" currentTitle="Schlüssel nachmachen" />

      {/* 1. Situativer Hero */}
      <section className="relative bg-[var(--color-stone-900)] px-[var(--section-px)] py-[var(--space-16)] lg:py-[var(--space-24)] overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-stone-900)] to-transparent opacity-80 z-0"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="hero" className="mb-[var(--space-6)] border-white/20 text-white pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Sofort-Service im Ladenlokal
          </Badge>
          <h1 className="text-[var(--font-size-48)] font-extrabold tracking-tight text-white mb-[var(--space-6)] shadow-sm leading-tight text-balance">
            Der perfekte Ersatzschlüssel <br /><span className="text-[var(--color-brand)]">in Rekordzeit.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--font-size-20)] text-white/80 leading-relaxed">
            Vom einfachen Haustürschlüssel bis zum Autoschlüssel: Wir fertigen Ihr passgenaues Duplikat direkt vor Ort. Sparen Sie Zeit und Nerven mit unserem Präzisionsservice.
          </p>
        </div>
      </section>

      {/* 2. Trust-Bar */}
      <TrustStrip />

      {/* 3. Problem-Analyse */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">So einfach geht's bei uns</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Wir bieten Ihnen eine schnelle und präzise Anfertigung von Ersatzschlüsseln für fast alle Schlosstypen mit modernsten Fräsmaschinen. Kommen Sie einfach in unserem Geschäft vorbei.
            </p>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Der Ablauf vor Ort</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Bringen Sie Ihr Original:</strong> Kommen Sie einfach während der Öffnungszeiten mit dem zu kopierenden Schlüssel vorbei.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Warten Sie kurz:</strong> Die meisten Standard-Schlüssel fräsen wir direkt vor Ihren Augen in wenigen Minuten.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Fertiges Duplikat:</strong> Sie erhalten Ihren passgenauen Ersatzschlüssel zu fairen und transparenten Preisen.</span>
              </li>
            </ul>
          </div>

          {/* 4. Lösung & Preis-Teaser */}
          <div className="mt-16 pt-16 border-t border-[var(--color-border-subtle)]">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
              Welche Schlüssel wir nachmachen
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <PriceCard
                title="Standard-Schlüssel"
                price={8.5}
                description="Zimmer-, Briefkasten- und normale Haustürschlüssel."
                features={[
                  "Sofort-Mitnahme",
                  "Präzise Kopie",
                  "Passgenauigkeit",
                ]}
                isPopular={true}
              />
              <PriceCard
                title="Fahrzeugschlüssel"
                price={45}
                description="Ersatzschlüssel für Autos und Motorräder."
                features={[
                  "Moderne Transponder",
                  "Auch mit Wegfahrsperre",
                  "Schneller als Autohaus",
                ]}
              />
              <PriceCard
                title="Sicherheits-Schlüssel"
                price={"Auf Anfrage"}
                description="Geschützte Schließanlagen und Sicherheitsschlösser."
                features={[
                  "Sicherungskarte nötig",
                  "Bestellung beim Hersteller",
                  "Höchste Sicherheit",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf & Trust (Process) */}
      <ProcessSteps />

      {/* 5. Proof (Bewertungen) */}
      <ReviewsSection />

      {/* 6. FAQ (Spezifisch für Schlüssel nachmachen) */}
      <section className="bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            <FAQAccordion question="Wie lange dauert das Nachmachen eines Schlüssels?" answer="Die meisten Standard-Schlüssel werden direkt vor Ort in wenigen Minuten gefräst. Sie können darauf warten und sie sofort mitnehmen." />
            <FAQAccordion question="Was benötige ich für Sicherheitsschlüssel?" answer="Für Schlüssel, die zu einer geschützten Schließanlage gehören, benötigen wir zwingend die entsprechende Sicherungskarte im Original. Ohne diese dürfen wir das Duplikat gesetzlich nicht anfertigen." />
            <FAQAccordion question="Können Sie abgebrochene Schlüssel nachmachen?" answer="Oft ja, wenn beide Teile vorhanden sind. Wir können ein Profil auslesen und oft erfolgreich eine Kopie erstellen, auch wenn der Originalschlüssel in zwei Teilen ist." />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <RelatedServices currentServiceId="schluessel-nachmachen" />
      <FinalCTA />
    </div>
  );
}
