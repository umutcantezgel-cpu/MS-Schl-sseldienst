import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Users, ShieldCheck, MapPin, Award, CheckCircle2, Phone, Star, Wrench, Heart } from "lucide-react";

export const metadata = generateSharedMetadata({
  title: "Unser Team Wetzlar | Festangestellte Monteure",
  description: "Lernen Sie das Team von Schlüssel Schmiede kennen! Geprüftes Personal ohne Subunternehmer. Regionale Experten für Ihre Sicherheit in Wetzlar.",
  path: "/ueber-uns/team",
});

export default function TeamPage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Unser Team Wetzlar | Festangestellte Monteure. Das Team der Schlüssel Schmiede Wetzlar.</div>
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
              { name: "Team", href: "/ueber-uns/team" },
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
                Das Team der Schlüssel Schmiede Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Lernen Sie die Gesichter hinter dem verlässlichen Schlüsseldienst Wetzlar kennen. Unser Fachteam besteht aus ausgebildeten Handwerkern, erfahrenen Notdienst-Monteuren und zertifizierten Sicherheitsexperten für den gesamten Lahn-Dill-Kreis.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Team Profiles & Culture */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Intro Section */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <Users className="w-7 h-7 text-[var(--color-red-500)]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Persönlich, regional und kompetent vor Ort
              </h2>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              Hinter dem Namen <strong>Schlüssel Schmiede Wetzlar</strong> steht ein hochspezialisiertes Team aus regionalen Experten. Wir glauben daran, dass gute Handwerksleistung persönliche Verantwortung erfordert. Wenn Sie uns unter 06441 8056279 anrufen oder unser Fachgeschäft in der Langgasse 70 besuchen, sprechen Sie direkt mit den Fachkräften, die auch die Arbeiten vor Ort ausführen.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Als qualifizierter Schlüsseldienst Wetzlar legen wir besonderen Wert auf kontinuierliche Weiterbildung in den Bereichen beschädigungsfreie Türöffnung, moderne Elektronikzylinder, Fahrzeug-Codierung und Kriminalprävention.
            </p>
          </div>

          {/* Leadership & Profiles */}
          <div className="space-y-8">
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)]">
              Verantwortliche Ansprechpartner
            </h2>

            {/* Profile 1: Mina Saad */}
            <div className="p-8 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--color-red-500)] to-rose-700 text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-md">
                MS
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-xs font-bold text-[var(--color-red-500)] uppercase tracking-wider">Geschäftsleitung & Gründer</span>
                  <h3 className="text-2xl font-bold text-gray-900">Mina Saad</h3>
                  <p className="text-sm font-medium text-gray-500">Inhaber & Experte für Sicherheitstechnik</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Mina Saad gründete die Schlüssel Schmiede Wetzlar mit der Vision, faire Festpreise und ehrliches Handwerk im Lahn-Dill-Kreis zu etablieren. Er leitet das operative Geschäft, berät Großkunden bei Schließanlagen und garantiert persönlich für die Einhaltung des Ehrencodes.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">Sicherheitstechnik-Zertifiziert</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">Erfahrung seit 2018</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">Filiale Langgasse 70</span>
                </div>
              </div>
            </div>

            {/* Profile 2: Mobile Service Techniker Team */}
            <div className="p-8 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-2xl bg-gray-900 text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-md">
                ST
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Einsatzteam Lahn-Dill-Kreis</span>
                  <h3 className="text-2xl font-bold text-gray-900">Unser Notdienst- & Montageteam</h3>
                  <p className="text-sm font-medium text-gray-500">Mobile Servicetechniker für 24/7 Notöffnungen & Installationen</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Unsere mobilen Monteure sind dezentral in Wetzlar, Gießen, Aßlar und Solms stationiert. Sie führen tägliche Türöffnungen, Fahrzeugöffnungen und Tresoröffnungen mit modernster Sperrwerkzeug-Technologie aus.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">24/7 Rufbereitschaft</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">99% Zerstörungsfreie Öffnung</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">Führungszeugnis geprüft</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quality & Standards Section */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-red-500)]" />
              Verlässliche Standards & Zertifizierungen
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Alle Techniker der Schlüssel Schmiede Wetzlar tragen Dienstausweise und sind verpflichtet, sich bei Vor-Ort-Einsätzen ordnungsgemäß auszuweisen. Zudem arbeiten wir eng mit Herstellern wie ABUS, BKS, EVVA und KESO zusammen, um stets die neuesten Sicherheitsstandards für Schloss- und Beschlagtechnik anzubieten.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-800 pt-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Regelmäßige Schulungen in Aufperrtechnik</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Freundliches & zuvorkommendes Auftreten</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ausführliche Erklärung der Kosten vor Ort</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Saubere Arbeitsweise & Nachbereitung</div>
            </div>
          </div>

          {/* Call to Action Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-md gap-2"
            >
              <Phone className="w-5 h-5" /> Team kontaktieren
            </Link>
            <Link
              href="/ueber-uns/karriere"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-800 font-bold hover:bg-gray-100 transition-colors"
            >
              Werde Teil unseres Teams
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
