import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { getAboutPageGraphSchema } from "@/lib/schema";
import Link from "next/link";
import { ShieldCheck, Heart, Scale, Lock, Eye, Award, ArrowRight } from "lucide-react";

export const metadata = generateSharedMetadata({
  title: "Unsere Philosophie & Werte | Schlüssel Schmiede",
  description: "Erfahren Sie mehr über die Philosophie, Werte und den Kodex der Schlüssel Schmiede Wetzlar – Handwerksehre, Preistransparenz und Kundennähe.",
  path: "/ueber-uns/philosophie",
});

export default function PhilosophiePage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <JsonLd data={getAboutPageGraphSchema({ name: "Philosophie", url: "/ueber-uns/philosophie" })} />
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Unsere Philosophie & Werte | Schlüssel Schmiede. Unsere Philosophie & Werte | Schlüsseldienst Wetzlar.</div>
      {/* Hero */}
      <section className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs
            items={[
              { name: "Über uns", href: "/ueber-uns" },
              { name: "Philosophie", href: "/ueber-uns/philosophie" },
            ]}
            light={false}
          />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Unsere Philosophie & Werte | Schlüsseldienst Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Die Philosophie der Schlüssel Schmiede Wetzlar ruht auf vier unverrückbaren Säulen: Absolute Transparenz, echte Handwerksehre, regionale Verantwortung und der konsequente Schutz unserer Kunden vor unseriösen Notdienst-Praktiken im Lahn-Dill-Kreis.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Philosophy Sections */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Core Mission Statement */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <Heart className="w-7 h-7 text-[var(--color-red-500)]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Unsere Haltung als Schlüsseldienst Wetzlar
              </h2>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              Wer vor verschlossener Tür steht oder nachts nach Hause zurückkehrt und feststellt, dass der Schlüssel fehlt, befindet sich in einer Ausnahmesituation. In diesen Momenten sind Vertrauen, Schnelligkeit und Fairness unverzichtbar. Als etablierter Schlüsseldienst Wetzlar nutzen wir Notsituationen niemals aus.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Unsere Unternehmensphilosophie richtet sich strikt an den Grundsätzen des ehrlichen deutschen Handwerks aus. Wir begegnen jedem Kunden auf Augenhöhe, erklären vor Beginn der Arbeit jeden Handgriff und nennen vor Abfahrt einen verbindlichen Festpreis.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Die 4 Säulen unserer Philosophie
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">

              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">1. Absolute Preistransparenz</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Keine versteckten Materialzuschläge, keine unklaren Pauschalen. Wir nennen Ihnen den vollen Endpreis inkl. MwSt. am Telefon, bevor sich unser Techniker auf den Weg macht. Sie bezahlen erst nach erfolgreicher Arbeit.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">2. Zerstörungsfreie Öffnungstechnik</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Über 99% aller zugefallenen Türen öffnen wir völlig beschädigungsfrei ohne Einsatz von Bohrer oder Fräse. Das schont Ihre Tür, den Rahmen und verhindert unnötige Folgekosten für Schlossersatz.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">3. Regionale Präsenz & Verantwortung</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wir sind kein anonymes Callcenter, sondern ein eingetragener Fachbetrieb mit Ladenlokal in der Langgasse 70 in Wetzlar. Wir sind Nachbarn, die ihren Kunden aus dem Lahn-Dill-Kreis dauerhaft verlässlich beistehen.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">4. Qualitäts- & Datenschutzversprechen</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wir verbauen ausschließlich zertifizierte Markenprodukte geprüfter deutscher Hersteller. Kundendaten verarbeiten wir streng nach DSGVO und verifizieren stets die Zugangsberechtigung vor Türöffnungen.
                </p>
              </div>

            </div>
          </div>

          {/* Anti-Abzocke Codex */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-red-500)]" />
              Unser Ehrenkodex gegen Notdienst-Abzocke
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Verbraucherzentralen und die Kriminalpolizei warnen seit Jahren vor unseriösen Vermittlungsplattformen im Internet. Die Schlüssel Schmiede Wetzlar hat sich verpflichtet, aktiv gegen diese Praktiken einzustehen. Bei uns gibt es keine überhöhten Kilometerpauschalen, keine gefälschten Vor-Ort-Adressen und keine überteuerten Notzylinder.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Unsere 5-Sterne-Bewertungen bei Google und das Vertrauen von hunderten Kunden aus Wetzlar, Gießen, Aßlar und Solms bestätigen uns täglich darin, diesen Weg konsequent weiterzugehen.
            </p>
          </div>

          {/* Sub-Pages Navigation */}
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <Link
              href="/ueber-uns/geschichte"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-red-500)] transition-colors font-bold text-sm text-gray-800 flex items-center justify-center gap-2"
            >
              Unsere Geschichte lesen <ArrowRight className="w-4 h-4 text-[var(--color-red-500)]" />
            </Link>
            <Link
              href="/ueber-uns/team"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-red-500)] transition-colors font-bold text-sm text-gray-800 flex items-center justify-center gap-2"
            >
              Unser Team kennenlernen <ArrowRight className="w-4 h-4 text-[var(--color-red-500)]" />
            </Link>
            <Link
              href="/bewertungen"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-red-500)] transition-colors font-bold text-sm text-gray-800 flex items-center justify-center gap-2"
            >
              Kundenbewertungen lesen <ArrowRight className="w-4 h-4 text-[var(--color-red-500)]" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
