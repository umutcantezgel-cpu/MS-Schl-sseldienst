import {
  Phone,
  Check,
  DoorOpen,
  Car,
  Lock,
  ShieldCheck,
  ArrowRight,
  Euro,
  MapPin,
  Key,
  Shield,
  Clock,
  ChevronRight,
  Star,
  Home,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/trust/TrustBadges";
import { Card } from "@/components/ui/card";
import PriceCard from "@/components/pricing/PriceCard";
import TrustStrip from "@/components/trust/TrustStrip";
import ProcessSteps from "@/components/trust/ProcessSteps";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/components/reviews/reviews.data";
import { getHomepageFAQs } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/faqSchema";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import FinalCTA from "@/components/ui/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <aside aria-label="Google-Bewertungen" className="relative -mt-[var(--space-7)] mb-[var(--space-9)] flex justify-center z-10 w-full px-[var(--space-4)]">
        <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
      </aside>

      <TrustStrip />

      {/* Pricing Section */}
      <section
        id="preise"
        aria-label="Transparente Festpreise"
        className="bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2
              className="font-[700] text-[var(--color-text-primary)] mb-[var(--space-2)]"
              style={{
                fontSize: 'var(--text-h2)',
                lineHeight: 'var(--leading-h)',
                letterSpacing: 'var(--tracking-heading)',
              }}
            >
              Unsere transparenten <span className="text-[var(--color-brand)]">Festpreise</span>
            </h2>
            <div className="mx-auto mt-[var(--space-2)] h-[3px] w-[80px] rounded-[2px] bg-[var(--color-brand)]"></div>
            <p
              className="mt-[var(--space-6)] text-[var(--color-text-body)] font-[400] mx-auto mb-[var(--space-7)]"
              style={{
                fontSize: 'var(--text-lead)',
                lineHeight: 'var(--leading-lead)',
                maxWidth: 'var(--prose-width)',
              }}
            >
              Garantierte Preise für Türöffnungen ohne versteckte Kosten.
            </p>
          </div>
          {/* 4.1 Festpreis-Vertrauens-Einleitung (Garantie-Leiste) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-4)] mb-[var(--space-12)] max-w-5xl mx-auto">
            <div className="flex items-center gap-[var(--space-3)] bg-[var(--color-brand-light)] text-[var(--color-brand)] p-[var(--space-4)] rounded-[var(--radius-12)]">
              <ShieldCheck className="w-8 h-8 shrink-0" aria-hidden="true" />
              <div>
                <div className="font-bold text-[var(--font-size-16)] text-[var(--color-text-primary)]">Keine versteckten Kosten</div>
                <div className="text-[var(--font-size-14)] text-[var(--color-text-body)]">Verbindlicher Festpreis vor Ort</div>
              </div>
            </div>
            <div className="flex items-center gap-[var(--space-3)] bg-[var(--color-brand-light)] text-[var(--color-brand)] p-[var(--space-4)] rounded-[var(--radius-12)]">
              <DoorOpen className="w-8 h-8 shrink-0" aria-hidden="true" />
              <div>
                <div className="font-bold text-[var(--font-size-16)] text-[var(--color-text-primary)]">99% Zerstörungsfrei</div>
                <div className="text-[var(--font-size-14)] text-[var(--color-text-body)]">Schonende Türöffnungstechnik</div>
              </div>
            </div>
            <div className="flex items-center gap-[var(--space-3)] bg-[var(--color-brand-light)] text-[var(--color-brand)] p-[var(--space-4)] rounded-[var(--radius-12)]">
              <Clock className="w-8 h-8 shrink-0" aria-hidden="true" />
              <div>
                <div className="font-bold text-[var(--font-size-16)] text-[var(--color-text-primary)]">Schnell vor Ort</div>
                <div className="text-[var(--font-size-14)] text-[var(--color-text-body)]">In ca. 15-30 Min in Wetzlar</div>
              </div>
            </div>
          </div>

          <StaggerReveal className="grid gap-[var(--space-7)] sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" animation={entryAnimations.slideUpFade}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <PriceCard
                title="Tür zugefallen"
                price={50}
                description="Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen."
                features={[
                  "Werktags 08-18 Uhr",
                  "Zerstörungsfreie Öffnung (99%)",
                  "Festpreis vor Ort",
                ]}
              />
            </StaggerItem>
            {/* Decoy-Zusatzpaket (Mittlere Karte) */}
            <StaggerItem animation={entryAnimations.slideUpFade} className="transform lg:-translate-y-4">
              <PriceCard
                title="Sorglos Paket"
                price={70}
                description="Unsere Empfehlung: Türöffnung inklusive Sicherheits-Check."
                features={[
                  "Werktags 08-18 Uhr",
                  "Zerstörungsfreie Öffnung",
                  "Prüfung der Schließsicherheit",
                ]}
                isPopular={true}
              />
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
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
            </StaggerItem>
          </StaggerReveal>
          <div className="mt-[var(--space-9)] text-center">
            <Link
              href="/preise"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "rounded-full px-[var(--space-6)]")}
              style={{ fontSize: 'var(--text-small)', letterSpacing: 'var(--tracking-cta)' }}
            >
              Interaktiven Preisrechner öffnen <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section aria-label="Unsere Leistungen" className="bg-[var(--color-surface-subtle)] px-[var(--space-4)] md:px-[var(--space-8)] py-[var(--space-16)]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-[var(--space-12)]">
            <h2
              className="font-[700] text-[var(--color-text-primary)] mb-[var(--space-2)]"
              style={{
                fontSize: 'var(--text-h2)',
                lineHeight: 'var(--leading-h)',
                letterSpacing: 'var(--tracking-heading)',
              }}
            >
              Unsere <span className="text-[var(--color-brand)]">Sofort-Hilfe</span>
            </h2>
            <div className="mx-auto mt-[var(--space-2)] h-[3px] w-[80px] rounded-[2px] bg-[var(--color-brand)]"></div>
            <p
              className="mt-[var(--space-6)] text-[var(--color-text-body)] font-[400] mx-auto"
              style={{
                fontSize: 'var(--text-lead)',
                lineHeight: 'var(--leading-lead)',
                maxWidth: 'var(--prose-width)',
              }}
            >
              Kompetente und schnelle Lösungen für Ihre individuelle Notsituation.
            </p>
          </div>

          <div className="grid gap-[var(--space-6)] md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: DoorOpen, title: "Ausgesperrt? Haus- & Wohnungstüren", desc: "Zerstörungsfreie Öffnung in 99% der Fälle. Egal ob zugefallen oder abgeschlossen.", href: "/leistungen/turoeffnung", linkText: "Details zur Türöffnung" },
              { icon: Car, title: "Schlüssel steckt? Fahrzeug-Öffnung", desc: "Schonende Autoöffnung für alle Marken – garantiert ohne Kratzer oder Lackschäden.", href: "/leistungen/autooeffnung", linkText: "Details zur Autoöffnung" },
              { icon: Lock, title: "Tresor blockiert? Diskrete Öffnung", desc: "Beschädigungsfreie Experten-Öffnung für Heimsafes und professionelle Wertgelasse.", href: "/leistungen/tresoroeffnung", linkText: "Details zur Tresoröffnung" },
              { icon: ShieldCheck, title: "Einbruchschutz & Schließanlagen", desc: "Sicherung Ihrer Immobilien nach neuesten Standards und Einbau hochwertiger Zylinder.", href: "/leistungen/sicherheitstechnik", linkText: "Mehr zu Sicherheitstechnik" },
            ].map((service) => (
              <Card
                key={service.title}
                className="group relative flex flex-col items-start p-[var(--space-7)] hover-lift hover:bg-[var(--color-surface-primary)] hover:border-[var(--color-card-border-hover)] bg-[var(--color-surface-default)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-300)] h-full rounded-[var(--radius-16)] overflow-hidden"
              >
                <div className="rounded-[var(--radius-12)] bg-[var(--color-surface-subtle)] border border-[var(--color-border)] p-[var(--space-4)] text-[var(--color-brand)] group-hover:scale-110 group-hover:bg-[var(--color-brand)] group-hover:text-white transition-all duration-[var(--duration-300)]">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3
                  className="mt-[var(--space-6)] font-[700] text-[var(--color-text-primary)]"
                  style={{
                    fontSize: 'var(--font-size-20)',
                    lineHeight: 'tight',
                    letterSpacing: 'var(--tracking-heading)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-[var(--space-3)] text-[var(--color-text-body)] font-[400]"
                  style={{
                    fontSize: 'var(--font-size-16)',
                    lineHeight: 'relaxed',
                  }}
                >
                  {service.desc}
                </p>
                <div className="mt-auto pt-[var(--space-6)] flex w-full">
                  <Link
                    href={service.href}
                    className="flex items-center gap-[var(--space-2)] font-[600] text-[var(--color-brand)] link-underline transition-colors group-hover:text-[var(--color-brand-hover)]"
                    style={{ fontSize: 'var(--font-size-15)' }}
                  >
                    {service.linkText} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            ))}

            {/* Persönlichkeits-Element (Prompt 3.2) */}
            <div className="relative flex flex-col items-start p-[var(--space-7)] bg-[var(--color-stone-900)] text-white shadow-[var(--shadow-lg)] h-full lg:col-span-2 rounded-[var(--radius-16)] overflow-hidden">
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10 bg-[url('/img/pattern-dark.png')] bg-cover mix-blend-overlay"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--color-brand)]/20 blur-[80px] rounded-full"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-[var(--space-6)] items-center md:items-start w-full h-full">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-[var(--color-stone-800)] rounded-full border-4 border-[var(--color-stone-700)] overflow-hidden shadow-inner flex items-center justify-center text-3xl font-bold text-[var(--color-stone-500)]">
                  {/* Placeholder für echtes Portrait */}
                  US
                </div>
                <div className="flex flex-col flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <h3 className="text-[var(--font-size-24)] font-bold mb-2">Chef-Monteur vor Ort</h3>
                  <p className="text-[var(--color-stone-300)] text-[var(--font-size-16)] leading-relaxed italic mb-4">
                    "Ihre Tür ist mein Handwerk. Ich verspreche Ihnen eine ehrliche Beratung, keine verdeckten Kosten und eine schnelle Lösung Ihres Problems."
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-[var(--color-brand)]/20 text-[var(--color-brand)] font-bold tracking-wider uppercase text-[var(--font-size-12)] rounded">
                      Geschäftsführer & Techniker
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section aria-label="Warum Schlüsseldienst Wetzlar" className="bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2
              className="font-[700] text-[var(--color-text-primary)] mb-[var(--space-2)]"
              style={{
                fontSize: 'var(--text-h2)',
                lineHeight: 'var(--leading-h)',
                letterSpacing: 'var(--tracking-heading)',
              }}
            >
              Warum <span className="text-[var(--color-brand)]">Schlüsseldienst Wetzlar</span>?
            </h2>
            <div className="mx-auto mt-[var(--space-2)] h-[3px] w-[80px] rounded-[2px] bg-[var(--color-brand)]"></div>
          </div>
          <div className="mt-[var(--space-10)] grid gap-[var(--space-9)] sm:grid-cols-3">
            {[
              { icon: Euro, title: "Transparente Festpreise", desc: "Wir nennen Ihnen den Preis vorab am Telefon. Keine bösen Überraschungen vor Ort." },
              { icon: MapPin, title: "Lokaler Anbieter", desc: "Wir sind echte Handwerker aus Wetzlar, kein anonymes Callcenter aus dem Ausland." },
              { icon: Key, title: "Zerstörungsfreie Öffnung", desc: "Mit Spezialwerkzeug öffnen wir zugefallene Türen in der Regel ohne jeden Schaden." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-[var(--space-10)] w-[var(--space-10)] items-center justify-center rounded-full bg-white ring-1 ring-[var(--color-border)] text-[var(--color-brand)] elevation-1">
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3
                  className="mt-[var(--space-6)] font-[700] text-[var(--color-text-primary)]"
                  style={{
                    fontSize: 'var(--text-h4)',
                    lineHeight: 'var(--leading-subh)',
                    letterSpacing: 'var(--tracking-heading)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-[var(--space-4)] text-[var(--color-text-body)] font-[400]"
                  style={{
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--leading-body)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <ProcessSteps />

      {/* Testimonials */}
      <ReviewsSection />

      {/* FAQ Section */}
      <section aria-label="Häufig gestellte Fragen" className="bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema(getHomepageFAQs())),
          }}
        />
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-[var(--space-9)]">
            <h2
              className="font-[700] text-[var(--color-text-primary)] mb-[var(--space-2)]"
              style={{
                fontSize: 'var(--text-h2)',
                lineHeight: 'var(--leading-h)',
                letterSpacing: 'var(--tracking-heading)',
              }}
            >
              Häufig gestellte <span className="text-[var(--color-brand)]">Fragen</span>
            </h2>
            <div className="mx-auto mt-[var(--space-2)] h-[3px] w-[80px] rounded-[2px] bg-[var(--color-brand)]"></div>
            <p
              className="mt-[var(--space-6)] text-[var(--color-text-body)] font-[400] mx-auto mb-[var(--space-7)]"
              style={{
                fontSize: 'var(--text-lead)',
                lineHeight: 'var(--leading-lead)',
                maxWidth: 'var(--prose-width)',
              }}
            >
              Schlüsseldienst Wetzlar beantwortet Ihre wichtigsten Fragen — ehrlich und transparent.
            </p>
          </div>
          <div className="space-y-[var(--space-6)]">
            {getHomepageFAQs().map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-[var(--space-8)] text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-[var(--space-2)] text-[var(--color-brand)] font-[600] link-underline"
              style={{ fontSize: 'var(--text-body)' }}
            >
              Alle Fragen & Antworten anzeigen
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <aside aria-label="Notfall-Kontakt">
        <FinalCTA />
      </aside>
    </>
  );
}
