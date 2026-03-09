import { ShieldCheck, Lock, Bell, Video, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import ProcessSteps from "@/components/trust/ProcessSteps";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import PriceCard from "@/components/pricing/PriceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function SicherheitstechnikPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans">
      <Breadcrumb currentSlug="/leistungen/sicherheitstechnik" currentTitle="Sicherheitstechnik" />

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
            Kostenfreie Beratung in Wetzlar verfügbar
          </Badge>
          <h1 className="text-[var(--font-size-48)] font-extrabold tracking-tight text-white mb-[var(--space-6)] shadow-sm leading-tight text-balance">
            Ruhig schlafen, <br /><span className="text-[var(--color-brand)]">sicher leben.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--font-size-20)] text-white/80 leading-relaxed">
            Schützen Sie, was Ihnen am wichtigsten ist. Wir analysieren Schwachstellen und sichern Ihr Zuhause mit modernster Technik – für ein unerschütterliches Sicherheitsgefühl.
          </p>
        </div>
      </section>

      {/* 2. Trust-Bar */}
      <TrustStrip />

      {/* 3. Problem-Analyse */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Unsere Leistungen im Überblick</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Wir bieten maßgeschneiderte Lösungen für jeden Sicherheitsbedarf. Von einfachen mechanischen Sicherungen bis hin zu komplexen elektronischen Systemen.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Schließzylinder & Anlagen</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Hochsichere Profilzylinder mit Kopierschutz und komplexe Schließanlagen für Gebäude jeder Größe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Alarmanlagen</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Intelligente Einbruchmeldeanlagen, verkabelt oder als Funklösung für Bestandsbauten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Videoüberwachung</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Hochauflösende Kamerasysteme mit Fernzugriff und intelligenter Bewegungserkennung.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Fenster- & Türsicherung</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Mechanischer Zusatzschutz zur effektiven Erschwerung von Aufbruchversuchen.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Unser Beratungsprozess</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Termin vereinbaren:</strong> Kontaktieren Sie uns für ein unverbindliches Erstgespräch.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Kostenlose Begehung:</strong> Wir analysieren die Sicherheitslage direkt bei Ihnen vor Ort.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Konzept & Angebot:</strong> Sie erhalten ein maßgeschneidertes Sicherheitskonzept.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>4. Fachgerechte Installation:</strong> Unsere Experten montieren die Technik sauber und zuverlässig.</span>
              </li>
            </ul>
          </div>

          {/* 4. Lösung & Preis-Teaser */}
          <div className="mt-16 pt-16 border-t border-[var(--color-border-subtle)]">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
              Kalkulation & Richtpreise
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <PriceCard
                title="Sicherheits-Check"
                price={0}
                description="Schwachstellenanalyse Ihres Objekts durch unsere Experten vor Ort."
                features={[
                  "Kostenlos & unverbindlich",
                  "Direkt in Wetzlar & Umgebung",
                  "Individuelle Handlungsempfehlung",
                ]}
                isPopular={true}
              />
              <PriceCard
                title="Grundschutz Paket"
                price={199}
                description="Umfasst mechanische Zusatzsicherungen für die verwundbarsten Stellen."
                features={[
                  "Panzerriegel / Stangenschloss",
                  "Zusätzliches Fensterschloss",
                  "Fachgerechte Montage inkl.",
                ]}
              />
              <PriceCard
                title="Smart Home Schutz"
                price={"Auf Anfrage"}
                description="Elektronische Absicherung per Funk-Alarmanlage und Video."
                features={[
                  "Steuerung per App",
                  "Benachrichtigung aufs Handy",
                  "Modular erweiterbar",
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

      {/* 6. FAQ (Spezifisch für Sicherheitstechnik) */}
      <section className="bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] text-center mb-8">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            <FAQAccordion question="Ist eine Beratung bei mir zu Hause wirklich kostenlos?" answer="Ja, im Großraum Wetzlar bieten wir eine völlig kostenfreie und unverbindliche Sicherheitsanalyse bei Ihnen vor Ort an." />
            <FAQAccordion question="Kann Sicherheitstechnik auch in Mietwohnungen installiert werden?" answer="Definitiv! Wir bieten spezielle Klebe- oder Klemm-Lösungen sowie Funk-Alarmanlagen an, die sich später beim Auszug spurlos entfernen und mitnehmen lassen." />
            <FAQAccordion question="Wie lange dauert der Einbau einer Alarmanlage?" answer="Dank moderner Funktechnologie lassen sich die meisten Alarmsysteme für kleinere bis mittlere Objekte innerhalb eines Tages komplett kabellos und ohne Schmutz installieren." />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <RelatedServices currentServiceId="sicherheitstechnik" />
      <FinalCTA />
    </div>
  );
}
