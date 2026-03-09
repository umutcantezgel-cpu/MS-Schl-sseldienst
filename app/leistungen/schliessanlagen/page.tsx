import { Key, Building, ShieldCheck, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import ProcessSteps from "@/components/trust/ProcessSteps";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import PriceCard from "@/components/pricing/PriceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function SchliessanlagenPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans">
      <Breadcrumb currentSlug="/leistungen/schliessanlagen" currentTitle="Schließanlagen" />

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
            Kostenfreie Beratung in Wetzlar anfragen
          </Badge>
          <h1 className="text-[var(--font-size-48)] font-extrabold tracking-tight text-white mb-[var(--space-6)] shadow-sm leading-tight text-balance">
            Volle Kontrolle, <br /><span className="text-[var(--color-brand)]">minimaler Aufwand.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--font-size-20)] text-white/80 leading-relaxed">
            Intelligente Schließanlagen für Ihr Objekt. Wir planen und installieren passgenaue Systeme für maximalen Komfort und kompromisslose Sicherheit.
          </p>
        </div>
      </section>

      {/* 2. Trust-Bar */}
      <TrustStrip />

      {/* 3. Problem-Analyse */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Komfort und Sicherheit</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Eine Schließanlage organisiert Zugangsberechtigungen effizient. Ein Hauptschlüssel öffnet alle Türen, während individuelle Schlüssel nur für spezifische Bereiche berechtigt sind. Ideal für komplexe Gebäudestrukturen.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Für Gewerbe & Verwaltung</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Sichere und verwaltbare Systeme für Mehrfamilienhäuser, Bürogebäude und Produktionsstätten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Key className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Weniger Schlüssel</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Reduzieren Sie den Schlüsselbund auf ein Minimum. Ein einziger Schlüssel reicht für alle autorisierten Zugänge.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">In 4 Schritten zu Ihrer Schließanlage</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Erstberatung:</strong> Analyse Ihrer Anforderungen vor Ort in Wetzlar.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Schließplan:</strong> Erstellung eines detaillierten Berechtigungskonzepts.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Fertigung:</strong> Maßgenaue Produktion durch unsere Markenpartner.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>4. Installation:</strong> Fachgerechter Einbau und Schlüsselübergabe.</span>
              </li>
            </ul>
          </div>

          {/* 4. Lösung & Preis-Teaser */}
          <div className="mt-16 pt-16 border-t border-[var(--color-border-subtle)]">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
              Kalkulation & Richtpreise
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              <PriceCard
                title="Mechanische Systeme"
                price={"Individuell"}
                description="Klassische Zentralschloss- oder Hauptschlüsselanlagen."
                features={[
                  "Kopierschutzmechanismen",
                  "Bewährte Sicherheitstechnik",
                  "Langlebig und robust",
                ]}
                isPopular={true}
              />
              <PriceCard
                title="Elektronische Systeme"
                price={"Auf Anfrage"}
                description="Moderne Zugangskontrolle mit Transpondern oder Smartphone."
                features={[
                  "Verlorene Chips sperren",
                  "Berechtigungen jederzeit ändern",
                  "Historie der Zutritte möglich",
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

      {/* 6. FAQ (Spezifisch für Schließanlagen) */}
      <section className="bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
            Häufige Fragen zu Schließanlagen
          </h2>
          <div className="space-y-4">
            <FAQAccordion question="Ist eine Anlage auch für Einfamilienhäuser sinnvoll?" answer="Ja, wir bieten Gleichschließungen an. Das bedeutet: Mit nur einem Schlüssel können Sie Haustür, Garage, Kellertür und Briefkasten öffnen." />
            <FAQAccordion question="Was passiert bei einem Schlüsselverlust?" answer="Bei elektronischen Anlagen wird der betreffende Transponder einfach im System gesperrt. Eine mechanische Anlage erfordert unter Umständen den Austausch des Zylinders, wobei wir durch Sicherungskarten vor unbefugten Kopien schützen." />
            <FAQAccordion question="Können bestehende Anlagen erweitert werden?" answer="Oftmals ja. Wir prüfen Ihre bestehende Anlage mit Sicherungskarte und bestellen bei Bedarf passende Erweiterungszylinder direkt vom Hersteller nach." />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <RelatedServices currentServiceId="schliessanlagen" />
      <FinalCTA />
    </div>
  );
}
