import { Car, ShieldCheck, Clock, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import ProcessSteps from "@/components/trust/ProcessSteps";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import PriceCard from "@/components/pricing/PriceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
export default function AutooeffnungPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans ">
      <Breadcrumb currentSlug="/leistungen/autooeffnung" currentTitle="Autoöffnung" />
      {/* 1. Situativer Hero */}
      <section className="relative bg-[var(--color-stone-900)] px-[var(--section-px)] py-[var(--space-16)] lg:py-[var(--space-24)] overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1549317661-bc66bdca7395?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-stone-900)] to-transparent opacity-80 z-0"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="hero" className="mb-[var(--space-6)] border-white/20 text-white pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Notdienst Wetzlar jetzt im Einsatz
          </Badge>
          <h1 className="text-[var(--font-size-48)] font-extrabold tracking-tight text-white mb-[var(--space-6)] shadow-sm leading-tight text-balance">
            Sofort wieder <span className="text-[var(--color-brand)]">mobil.</span> <br />Zerstörungsfreie Autoöffnung.
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--font-size-20)] text-white/80 leading-relaxed">
            Ihr Autoschlüssel ist eingeschlossen? Wir öffnen Ihr Fahrzeug schnell, professionell und garantiert ohne Lackkratzer – zum fairen Festpreis ab 80 €.
          </p>
        </div>
      </section>

      {/* 2. Trust-Bar */}
      <TrustStrip />

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Schlüssel im Auto vergessen?</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Ein kurzer Moment der Unachtsamkeit und schon ist es passiert: Der Autoschlüssel liegt im Fahrzeug und die Türen sind verriegelt. Oder die Zentralverriegelung streikt plötzlich. In solchen Fällen sind wir Ihr zuverlässiger Partner in Wetzlar und Umgebung.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Alle Marken & Modelle</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Egal ob VW, Audi, BMW, Mercedes oder andere Marken – wir haben das Know-how und das Spezialwerkzeug für nahezu jedes Fahrzeug.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">100% Zerstörungsfrei</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Wir öffnen Ihr Auto garantiert ohne Beschädigung an Lack, Elektronik oder Schloss. Wir verwenden Luftkissen und spezielle kunststoffummantelte Werkzeuge.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Der Ablauf</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Anruf:</strong> Schildern Sie uns Ihr Problem sowie Marke und Modell.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Festpreis:</strong> Wir nennen Ihnen am Telefon einen garantierten Festpreis.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Anfahrt:</strong> Wir sind in der Regel innerhalb von 20-30 Minuten bei Ihnen vor Ort in Wetzlar.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>4. Öffnung:</strong> Wir öffnen Ihr Auto professionell, zügig und ohne Beschädigung.</span>
              </li>
            </ul>
          </div>

          {/* 4. Lösung & Preis-Teaser */}
          <div className="mt-16 pt-16 border-t border-[var(--color-border-subtle)]">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
              Unsere fairen Festpreise
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              <PriceCard
                title="Einfache Autoöffnung"
                price={80}
                description="Für gängige Modelle ohne Doppelverriegelung."
                features={[
                  "Werktags 08-18 Uhr",
                  "100% Zerstörungsfrei",
                  "Festpreis vor Ort",
                ]}
                isPopular={true}
              />
              <PriceCard
                title="Premium/Luxus Modelle"
                price={120}
                description="Moderne Fahrzeuge mit Deadlock-Funktion (Safe-Sicherung)."
                features={[
                  "Werktags 08-18 Uhr",
                  "Spezialwerkzeug Einsatz",
                  "Keine Lack- oder Elektronikschäden",
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

      {/* 6. FAQ (Spezifisch für Autoöffnung) */}
      <section className="bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
            Häufige Fragen zur Autoöffnung
          </h2>
          <div className="space-y-4">
            <FAQAccordion question="Können Sie jede Automarke öffnen?" answer="Ja, wir haben Spezialwerkzeuge und das Know-how für nahezu alle gängigen Marken, einschließlich moderner Fahrzeuge mit Deadlock-Systemen." />
            <FAQAccordion question="Entstehen bei der Öffnung Kratzer am Auto?" answer="Nein, wir garantieren eine hundertprozentig zerstörungsfreie Öffnung ohne Schäden an Lack, Dichtungen oder Elektronik." />
            <FAQAccordion question="Was kostet die Autoöffnung?" answer="Eine einfache Autoöffnung bieten wir ab 80 Euro an. Bei modernen Fahrzeugen mit spezieller Diebstahlsicherung (Safe-Sicherung) starten die Preise ab 120 Euro." />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <RelatedServices currentServiceId="autooeffnung" />
      <FinalCTA />
    </div>
  );
}
