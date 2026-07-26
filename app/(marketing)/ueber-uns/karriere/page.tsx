import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Briefcase, CheckCircle, ShieldCheck, Heart, UserPlus, Phone, Mail, Award, Clock } from "lucide-react";

export const metadata = generateSharedMetadata({
  title: "Karriere & Jobangebote | Schlüssel Schmiede Wetzlar",
  description: "Werde Teil unseres Teams! Offene Stellen für Servicetechniker, Monteure und Fachkräfte für Sicherheitstechnik beim Schlüsseldienst Wetzlar.",
  path: "/ueber-uns/karriere",
});

export default function KarrierePage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Karriere & Jobangebote | Schlüssel Schmiede Wetzlar. Karriere & Stellenangebote beim Schlüsseldienst Wetzlar.</div>
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
              { name: "Karriere", href: "/ueber-uns/karriere" },
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
                Karriere & Stellenangebote beim Schlüsseldienst Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Du suchst eine berufliche Perspektive im Bereich Handwerk und Sicherheitstechnik? Die Schlüssel Schmiede Wetzlar bietet attraktive Arbeitsplätze, überdurchschnittliche Bezahlung und ein motiviertes Team im Lahn-Dill-Kreis. Werde Teil unseres Erfolgs!
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Career Content */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Intro & Work Culture */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <Briefcase className="w-7 h-7 text-[var(--color-red-500)]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Warum Karriere bei der Schlüssel Schmiede Wetzlar machen?
              </h2>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              Als führender lokaler Schlüsseldienst Wetzlar stehen wir für echtes Handwerk, modernste Technologie und ein faires Arbeitsklima. Unser Team betreut täglich zufriedene Kunden in Wetzlar, Gießen, Aßlar, Solms und im gesamten Lahn-Dill-Kreis. Wir legen großen Wert auf stetige Weiterbildung, gegenseitigen Respekt und moderne Arbeitsmittel.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <Award className="w-5 h-5 text-[var(--color-red-500)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-gray-900 block">Faire & pünktliche Vergütung</strong>
                  <span className="text-xs text-gray-600">Attraktives Festgehalt zzgl. Leistungsboni und Notdienst-Zuschlägen.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <Clock className="w-5 h-5 text-[var(--color-red-500)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-gray-900 block">Geregelte Arbeitszeiten</strong>
                  <span className="text-xs text-gray-600">Verlässliche Dienstpläne mit klar strukturierten Bereitschaftszeiten.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-[var(--color-red-500)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-gray-900 block">Top-Ausstattung & Einsatzfahrzeuge</strong>
                  <span className="text-xs text-gray-600">Moderne Firmenfahrzeuge, Pick-Sets, Fräsmaschinen und Profi-Werkzeug.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <Heart className="w-5 h-5 text-[var(--color-red-500)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-gray-900 block">Familiäres Teamklima</strong>
                  <span className="text-xs text-gray-600">Flache Hierarchien, kurze Entscheidungswege und kollegialer Zusammenhalt.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Open Positions Grid */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Aktuelle Stellenangebote & Jobs
            </h2>

            <div className="space-y-6">

              {/* Position 1 */}
              <div className="p-8 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-[var(--color-red-500)] uppercase tracking-wider">Vollzeit / Teilzeit</span>
                    <h3 className="text-xl font-bold text-gray-900">Servicetechniker für Türöffnung & Notdienst (m/w/d)</h3>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Standort Wetzlar</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Du führst selbstständig zerstörungsfreie Türöffnungen, Fahrzeugöffnungen und Zylinderwechsel vor Ort bei unseren Kunden in Wetzlar und Umgebung durch. Du berätst Kunden freundlich und vertrittst die Markenwerte der Schlüssel Schmiede.
                </p>

                <div className="space-y-2">
                  <strong className="text-xs font-bold text-gray-900 uppercase tracking-wider block">Das bringst du mit:</strong>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Handwerkliches Geschick oder Ausbildung (Schlosser, Tischler, Mechatroniker o.ä.)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Führerschein Klasse B zwingend erforderlich</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Einwandfreies Führungszeugnis & Kundenfreundlichkeit</li>
                  </ul>
                </div>
              </div>

              {/* Position 2 */}
              <div className="p-8 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-[var(--color-red-500)] uppercase tracking-wider">Vollzeit</span>
                    <h3 className="text-xl font-bold text-gray-900">Monteur für Sicherheitstechnik & Schließanlagen (m/w/d)</h3>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Standort Wetzlar</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Deine Aufgabe umfasst die Montage und Wartung mechatronischer und mechanischer Schließanlagen, Panzerriegel, Zusatzschlösser und Sicherheitstüren für Privat- und Gewerbekunden im Lahn-Dill-Kreis.
                </p>

                <div className="space-y-2">
                  <strong className="text-xs font-bold text-gray-900 uppercase tracking-wider block">Das bringst du mit:</strong>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Erfahrung in der Sicherheitstechnik oder Metallverarbeitung</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Sorgfältige und präzise Arbeitsweise</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Teamfähigkeit und Interesse an modernster Sicherheitstechnik</li>
                  </ul>
                </div>
              </div>

              {/* Position 3: Quereinsteiger */}
              <div className="p-8 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Quereinstieg möglich</span>
                    <h3 className="text-xl font-bold text-gray-900">Quereinsteiger Schlüsseldienst / Auszubildender (m/w/d)</h3>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">Intensive Einarbeitung</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Du hast noch keine Vorerfahrung im Schlüsseldienst, bist aber handwerklich begabt und motiviert, ein neues Handwerk zu erlernen? Wir bilden dich intensiv in Aufperrtechnik, Frästechnik und Kundenberatung aus.
                </p>
              </div>

            </div>
          </div>

          {/* Application Instructions */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[var(--color-red-500)] text-white flex items-center justify-center mx-auto">
              <UserPlus className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Unkompliziert bewerben – ohne Papierkram!</h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Bei uns zählt deine Motivation und dein handwerkliches Können. Sende uns deinen Lebenslauf oder ruf uns einfach direkt an für ein kurzes Kennenlernen!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="mailto:schluesselschmiede@gmail.com?subject=Bewerbung%20Schl%C3%BCsseldienst%20Wetzlar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-md gap-2"
              >
                <Mail className="w-5 h-5" /> Per E-Mail bewerben
              </a>
              <a
                href="tel:+4964418056279"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-800 font-bold hover:bg-gray-100 transition-colors gap-2"
              >
                <Phone className="w-5 h-5" /> Telefonisch melden: 06441 8056279
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
