import { DoorOpen, Check, Clock, ShieldCheck, Phone, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import ProcessSteps from "@/components/trust/ProcessSteps";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import PriceCard from "@/components/pricing/PriceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateHowToSchema } from "@/lib/schema";
import { getFAQSchema } from "@/lib/faqSchema";

export default function TuroeffnungPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema(
            "Türöffnung in Wetzlar — So funktioniert der Ablauf",
            "Schlüsseldienst Wetzlar öffnet zugefallene und abgesperrte Türen in Wetzlar und Umgebung zum Festpreis — zerstörungsfrei in 99% der Fälle, innerhalb von 15–30 Minuten."
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema([
            { question: "Was kostet eine Türöffnung in Wetzlar?", answer: "Schlüsseldienst Wetzlar öffnet zugefallene Türen ab 50 Euro und abgesperrte Türen ab 80 Euro zum Festpreis — ohne versteckte Kosten und ohne Anfahrtsgebühren." },
            { question: "Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?", answer: "Schlüsseldienst Wetzlar ist in 15–30 Minuten bei Ihnen — 24/7, auch nachts, an Wochenenden und Feiertagen." },
            { question: "Wird die Tür bei der Öffnung beschädigt?", answer: "In 99% der Fälle öffnet Schlüsseldienst Wetzlar Ihre Tür zerstörungsfrei mit Spezialwerkzeug." },
          ])),
        }}
      />

      <Breadcrumb currentSlug="/leistungen/turoeffnung" currentTitle="Türöffnung" />

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
            Notdienst Wetzlar jetzt im Einsatz
          </Badge>
          <h1 className="text-[var(--font-size-48)] font-extrabold tracking-tight text-white mb-[var(--space-6)] shadow-sm leading-tight text-balance">
            Schnell wieder <span className="text-[var(--color-brand)]">im Warmen.</span> <br />Türöffnung in Wetzlar.
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--font-size-20)] text-white/80 leading-relaxed">
            Wir bringen Sie sicher und beschädigungsfrei in unter 25 Minuten zurück in Ihre Wohnung. Ehrliche Festpreise ab 50 € – garantiert ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* 2. Trust-Bar (Ehemals 3) */}
      <TrustStrip />

      {/* 3. Problem-Analyse */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Ausgesperrt? Keine Panik!
            </h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Es passiert schneller, als man denkt: Ein kurzer Moment der
              Unachtsamkeit, ein Windstoß, und die Tür fällt ins Schloss. Der
              Schlüssel steckt von innen oder liegt noch auf dem Küchentisch. In
              solchen Momenten brauchen Sie einen zuverlässigen Partner, der
              schnell vor Ort ist und das Problem professionell löst.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <DoorOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                    Zugefallene Türen
                  </h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Eine nur ins Schloss gefallene Tür öffnen wir mit
                    Spezialwerkzeug in der Regel innerhalb weniger Minuten und
                    zu 99% ohne jegliche Beschädigung an Schloss oder Zylinder.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                    Verschlossene Türen
                  </h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Auch wenn die Tür abgeschlossen ist oder der Schlüssel
                    abgebrochen ist, helfen wir kompetent. Hierbei muss der
                    Zylinder oft aufgebohrt werden, wir haben jedoch immer
                    passenden Ersatz dabei.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-[var(--color-surface-subtle)] p-8 ring-1 ring-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Was tun, wenn die Tür zu ist?
              </h3>
              <ol className="mt-4 list-decimal pl-5 space-y-2 text-[var(--color-text-body)]">
                <li>Bewahren Sie Ruhe. Versuchen Sie nicht, die Tür gewaltsam zu öffnen.</li>
                <li>Prüfen Sie, ob ein Fenster offen steht oder ein Zweitschlüssel bei Nachbarn hinterlegt ist.</li>
                <li>Rufen Sie uns an: <a href="tel:06441123456" className="font-semibold text-[var(--color-brand)] hover:underline">06441 / 123 456</a></li>
                <li>Wir nennen Ihnen einen verbindlichen Festpreis und machen uns sofort auf den Weg.</li>
              </ol>
            </div>
          </div>

          {/* 4. Lösung & Preis-Teaser */}
          <div className="mt-16 pt-16 border-t border-[var(--color-border-subtle)]">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
              Unsere fairen Festpreise
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              <PriceCard
                title="Tür zugefallen"
                price={50}
                description="Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen."
                features={[
                  "Werktags 08-18 Uhr",
                  "Zerstörungsfreie Öffnung (99%)",
                  "Festpreis vor Ort",
                ]}
                isPopular={true}
              />
              <PriceCard
                title="Tür abgeschlossen"
                price={80}
                description="Schlüssel verloren oder doppelt abgeschlossen."
                features={[
                  "Werktags 08-18 Uhr",
                  "Profi-Werkzeug Einsatz",
                  "Ersatzzylinder zubuchbar (ab 25€)",
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

      {/* 6. FAQ (Spezifisch für Türöffnung) */}
      <section className="bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
            Häufige Fragen zur Türöffnung
          </h2>
          <div className="space-y-4">
            <FAQAccordion question="Was kostet eine Türöffnung in Wetzlar?" answer="Schlüsseldienst Wetzlar öffnet zugefallene Türen ab 50 Euro und abgesperrte Türen ab 80 Euro zum Festpreis — ohne versteckte Kosten und ohne Anfahrtsgebühren." />
            <FAQAccordion question="Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?" answer="Wir sind in der Regel in 15–30 Minuten bei Ihnen vor Ort in Wetzlar und Umgebung." />
            <FAQAccordion question="Wird die Tür bei der Öffnung beschädigt?" answer="In 99% der Fälle öffnet Schlüsseldienst Wetzlar Ihre Tür zerstörungsfrei mit Spezialwerkzeug." />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <RelatedServices currentServiceId="turoeffnung" />
      <FinalCTA />
    </div>
  );
}
