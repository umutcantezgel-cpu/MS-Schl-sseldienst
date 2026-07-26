import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";
import { BookOpen, Search, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { lexikonData } from "@/lib/data/lexikon";

export const metadata = generateSharedMetadata({
  title: "Schlüsseldienst Lexikon | Fachbegriffe erklärt",
  description: "Das große Schlüssel- & Sicherheits-Lexikon der Schlüssel Schmiede Wetzlar. Fachbegriffe wie Zylinder, Mehrfachverriegelung & BKS einfach erklärt.",
  path: "/lexikon",
});

export default function LexikonPage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="sr-only" aria-hidden="true">Schlüsseldienst Lexikon | Fachbegriffe erklärt. Schlüsseldienst Lexikon | Fachbegriffe & Sicherheitstechnik.</div>
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
          <Breadcrumbs items={[{ name: "Lexikon", href: "/lexikon" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Schlüsseldienst Lexikon | Fachbegriffe & Sicherheitstechnik
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Willkommen im Fach-Lexikon der Schlüssel Schmiede Wetzlar. Hier erklären unsere Sicherheitsexperten alle wichtigen Begriffe rund um Schlösser, Zylinder, Einbruchschutz und Türöffnungstechnik verständlich und übersichtlich.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Content & Terms Grid */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-16">

          {/* Intro Explanation */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <BookOpen className="w-7 h-7 text-[var(--color-red-500)]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Wissen kompakt: Schloss- & Beschlagtechnik verstehen
              </h2>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Die moderne Sicherheitstechnik ist reich an Fachbegriffen. Ob Profilzylinder, Not- und Gefahrenfunktion, Kernschutz, Panzerriegel oder Bohrschutz – als renommierter Schlüsseldienst Wetzlar möchten wir Transparenz schaffen. In unserem Nachschlagewerk finden Sie ausführliche Erklärungen zu technischen Bauteilen und handwerklichen Methoden.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Klicken Sie auf den jeweiligen Fachbegriff, um detaillierte Erläuterungen, Praxistipps zur Pflege und Empfehlungen für Ihre Einbruchsicherheit in Wetzlar zu erhalten.
            </p>
          </div>

          {/* Terms Grid */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Alle Fachbegriffe von A bis Z
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lexikonData.map((term) => (
                <div
                  key={term.slug}
                  className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-1 bg-red-50 text-[var(--color-red-600)] text-xs font-bold rounded-md uppercase">
                      {term.category || "Fachbegriff"}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {term.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {term.definition.length > 80 ? term.definition.substring(0, 80) + '...' : term.definition}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <Link
                      href={`/lexikon/${term.slug}`}
                      className="inline-flex items-center text-sm font-bold text-[var(--color-red-500)] hover:text-[var(--color-red-600)] hover:underline gap-1.5"
                    >
                      Fachbegriff &quot;{term.title}&quot; im Detail lesen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Note */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-red-500)]" />
              Persönliche Beratung beim Schlüsseldienst Wetzlar
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Sie sind unsicher, welcher Zylinder oder Beschlag zu Ihrer Tür passt? Unser Fachteam steht Ihnen in unserer Filiale in der Langgasse 70 in Wetzlar oder telefonisch unter 06441 8056279 zur Seite. Wir erklären Ihnen die Unterschiede zwischen verschiedenen Sicherheitsklassen direkt am Produkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-sm"
              >
                Frage stellen
              </Link>
              <Link
                href="/ratgeber"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-bold hover:bg-gray-100 transition-colors"
              >
                Zu unseren Ratgeber-Artikeln
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
