import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateSharedMetadata({
  title: "Barrierefreiheit unserer Schlüsseldienst-Website",
  description: "Informationen zur Barrierefreiheit des Schlüssel Schmiede Wetzlar. Wir setzen uns für eine uneingeschränkte Nutzung unserer Website ein.",
  path: "/barrierefreiheit",
});

export default function BarrierefreiheitPage() {
  const breadcrumbs = [
    { name: "Barrierefreiheit", href: "/barrierefreiheit" },
  ];

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* Hero Section */}
      <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={breadcrumbs} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-6)]">
                Erklärung zur Barrierefreiheit unserer Website
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-2xl">
                Unsere Website soll für alle Menschen zugänglich sein , unabhängig von
                visuellen, motorischen, auditiven oder kognitiven Fähigkeiten.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-24 md:py-32">
        <StaggerReveal
          className="mx-auto max-w-3xl"
          animation={entryAnimations.slideUpFade}
        >
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="prose prose-lg prose-slate mx-auto">
              <h2 className="typo-h2 text-[color:var(--text-primary)] text-balance">
                Unser Anspruch
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Wir sind bestrebt, unsere Website gemäß den{" "}
                <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong>{" "}
                auf <strong>Level AA</strong> barrierefrei zu gestalten. In vielen Bereichen
                erfüllen wir bereits den strengeren <strong>Level AAA</strong> Standard.
              </p>

              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                Umgesetzte Maßnahmen
              </h2>

              <h3 className="mt-6 text-xl font-bold text-[color:var(--text-primary)]">
                Visuelle Barrierefreiheit
              </h3>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>Kern-Textkontraste von mindestens 7:1 (WCAG AAA)</li>
                <li>Doppelter Fokusring , auf jedem Hintergrund sichtbar</li>
                <li>Unterstützung für Dark Mode, hohen Kontrast und reduzierte Transparenz</li>
                <li>Kompatibilität mit dem Windows-Hochkontrastmodus</li>
                <li>Informationen werden nie nur durch Farbe vermittelt , immer zusätzlich durch Icon und Text</li>
                <li>Schriftgrößen-Anpassung über ein Widget (Normal, Groß, Sehr groß)</li>
                <li>Zoom bis 400% ohne Informationsverlust</li>
              </ul>

              <h3 className="mt-6 text-xl font-bold text-[color:var(--text-primary)]">
                Tastatur-Bedienbarkeit
              </h3>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>Alle Funktionen sind vollständig per Tastatur bedienbar</li>
                <li>&quot;Zum Hauptinhalt springen&quot;-Link für schnelle Navigation</li>
                <li>Logische Tab-Reihenfolge auf allen Seiten</li>
                <li>Escape schließt Menüs und Dialoge</li>
                <li>Fokus wird bei dynamischen Inhalten korrekt verwaltet</li>
              </ul>

              <h3 className="mt-6 text-xl font-bold text-[color:var(--text-primary)]">
                Screenreader-Kompatibilität
              </h3>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>Semantisches HTML mit korrekter Landmark-Struktur</li>
                <li>Lückenlose Überschriften-Hierarchie (h1-h4)</li>
                <li>Alle Bilder haben aussagekräftige Alternativtexte</li>
                <li>ARIA-Labels auf allen interaktiven Elementen</li>
                <li>Dekorative Elemente sind für Screenreader ausgeblendet</li>
                <li>Seitenwechsel werden automatisch angekündigt</li>
              </ul>

              <h3 className="mt-6 text-xl font-bold text-[color:var(--text-primary)]">
                Motorische Barrierefreiheit
              </h3>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>Touch-Ziele von mindestens 48×48 Pixel auf Mobilgeräten</li>
                <li>Keine zeitkritischen Aktionen</li>
                <li>Animationen respektieren &quot;Reduzierte Bewegung&quot;-Einstellungen</li>
                <li>Kein Blinken oder Stroboskop-Effekte</li>
              </ul>

              <h3 className="mt-6 text-xl font-bold text-[color:var(--text-primary)]">
                Kognitive Barrierefreiheit
              </h3>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>Klare, einfache Sprache ohne unnötige Fachbegriffe</li>
                <li>Konsistente Navigation und wiederkehrende Muster</li>
                <li>Eindeutige Fehlermeldungen mit konkreten Lösungsvorschlägen</li>
                <li>Breadcrumb-Navigation zur Orientierung</li>
              </ul>

              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                Unterstützte Technologien
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Unsere Website ist optimiert für die Nutzung mit:
              </p>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>Aktuelle Versionen von Chrome, Firefox, Safari und Edge</li>
                <li>VoiceOver (macOS / iOS)</li>
                <li>NVDA und JAWS (Windows)</li>
                <li>TalkBack (Android)</li>
                <li>Vergrößerungssoftware und Bildschirmlupen</li>
                <li>Tastatur-Navigation und alternative Eingabegeräte</li>
              </ul>

              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                Bekannte Einschränkungen
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Trotz unserer Bemühungen können einzelne Bereiche Einschränkungen aufweisen:
              </p>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>Eingebettete Google-Maps-Karten unterliegen den Barrierefreiheits-Standards von Google</li>
                <li>Externe Inhalte (z.B. Google-Bewertungen) können wir nicht vollständig kontrollieren</li>
              </ul>

              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                Feedback & Kontakt
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Wenn Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben,
                kontaktieren Sie uns bitte:
              </p>
              <ul className="mt-3 space-y-2 text-[color:var(--text-secondary)]">
                <li>
                  Telefon:{" "}
                  <Link
                    href="tel:+4964418056279"
                    className="text-[var(--action-primary)] hover:underline font-medium"
                  >
                    06441 8056279
                  </Link>
                </li>
                <li>
                  E-Mail:{" "}
                  <Link
                    href="mailto:schluesselschmiede@gmail.com?subject=Barrierefreiheit"
                    className="text-[var(--action-primary)] hover:underline font-medium"
                  >
                    schluesselschmiede@gmail.com
                  </Link>
                </li>
                <li>
                  Oder über unser{" "}
                  <Link
                    href="/kontakt"
                    className="text-[var(--action-primary)] hover:underline font-medium"
                  >
                    Kontaktformular
                  </Link>
                </li>
              </ul>
              <p className="mt-4 text-[color:var(--text-tertiary)] text-sm">
                Wir bemühen uns, gemeldete Probleme innerhalb von 5 Werktagen zu bearbeiten.
              </p>

              <p className="mt-12 text-[color:var(--text-tertiary)] text-sm border-t border-[var(--border-subtle)] pt-6">
                <strong>Stand dieser Erklärung:</strong> März 2026
                <br />
                Diese Erklärung wurde zuletzt am 22. März 2026 aktualisiert.
              </p>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
