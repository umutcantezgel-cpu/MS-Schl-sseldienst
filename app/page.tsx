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
import EmergencyCTA from "@/components/EmergencyCTA";
import HeroCTA from "@/components/HeroCTA";
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
import WordReveal from "@/components/animations/WordReveal";
import ScrollProgressTracker from "@/components/motion/ScrollProgressTracker";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-section" aria-label="Notfall-Hilfe" className="relative bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
        <ScrollProgressTracker fadeOnScroll parallaxOnScroll>
          <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
            <h1
              className="font-[800] text-[var(--color-text-primary)] mb-[var(--space-4)]"
              style={{
                fontSize: 'var(--text-hero)',
                lineHeight: 'var(--leading-hero)',
                letterSpacing: 'var(--tracking-hero)',
              }}
            >
              <WordReveal text="Wieder entspannt" />{" "}
              <span className="text-[var(--color-brand)]"><WordReveal text="in Ihrem Zuhause." delay={150} /></span>{" "}
            </h1>
            <p
              className="mx-auto text-[var(--color-text-body)] font-[400] text-center mb-[var(--space-7)]"
              style={{
                fontSize: 'var(--text-lead)',
                lineHeight: 'var(--leading-lead)',
                letterSpacing: 'var(--tracking-normal)',
                maxWidth: 'var(--prose-narrow)',
              }}
            >
              Wir öffnen Ihre Tür in Wetzlar beschädigungsfrei in unter 25 Minuten – zum transparenten Festpreis.
            </p>
            <TrustBadges />
            <HeroCTA />
          </div>
        </ScrollProgressTracker>
      </section>

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
          <StaggerReveal className="mt-[var(--space-9)] grid gap-[var(--space-7)] sm:grid-cols-2 max-w-4xl mx-auto" animation={entryAnimations.slideUpFade}>
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
      <section aria-label="Unsere Leistungen" className="bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
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
              Unsere <span className="text-[var(--color-brand)]">Leistungen</span>
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
              Professionelle Hilfe für jedes Schloss-Problem.
            </p>
          </div>
          <div className="mt-[var(--space-9)] grid gap-[var(--space-7)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: DoorOpen, title: "Türöffnung", desc: "Zerstörungsfreie Öffnung von Haus- und Wohnungstüren in 99% der Fälle.", href: "/leistungen/turoeffnung", linkText: "Türöffnung im Detail" },
              { icon: Car, title: "Autoöffnung", desc: "Schonende Öffnung von Fahrzeugen aller Marken ohne Lackschäden.", href: "/leistungen/autooeffnung", linkText: "Autoöffnung im Detail" },
              { icon: Lock, title: "Tresoröffnung", desc: "Diskrete und professionelle Öffnung von Tresoren und Wertgelassen.", href: "/leistungen/schliessanlagen", linkText: "Tresoröffnung im Detail" },
              { icon: ShieldCheck, title: "Sicherheitstechnik", desc: "Beratung und Einbau von Schließanlagen und Einbruchschutz.", href: "/leistungen/sicherheitstechnik", linkText: "Sicherheitstechnik im Detail" },
            ].map((service) => (
              <Card
                key={service.title}
                className="group relative flex flex-col items-start p-[var(--space-7)] hover-lift hover:bg-[var(--color-surface-primary)] hover:border-[var(--color-card-border-hover)] h-full"
              >
                <div className="rounded-[var(--space-3)] bg-[var(--color-brand-light)] p-[var(--space-4)] text-[var(--color-brand)]">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3
                  className="mt-[var(--space-6)] font-[700] text-[var(--color-text-primary)]"
                  style={{
                    fontSize: 'var(--text-h4)',
                    lineHeight: 'var(--leading-subh)',
                    letterSpacing: 'var(--tracking-heading)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-[var(--space-2)] text-[var(--color-text-body)] font-[400]"
                  style={{
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--leading-body)',
                  }}
                >
                  {service.desc}
                </p>
                <div className="mt-auto pt-[var(--space-6)] flex w-full">
                  <Link
                    href={service.href}
                    className="flex items-center gap-[var(--space-2)] font-[600] text-[var(--color-brand)] link-underline transition-colors group-hover:text-[var(--color-brand-hover)]"
                    style={{ fontSize: 'var(--text-small)' }}
                  >
                    {service.linkText} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            ))}
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
        <EmergencyCTA />
      </aside>
    </>
  );
}
