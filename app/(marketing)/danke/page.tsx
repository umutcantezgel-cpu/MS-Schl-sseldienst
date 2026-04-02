import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateSharedMetadata({
  title: "Vielen Dank",
  description:
    "Vielen Dank für Ihre Nachricht an MS Schlüsseldienst Wetzlar. Wir melden uns schnellstmöglich.",
  path: "/danke",
  noindex: true,
});

export default function DankePage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
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
          <Breadcrumbs items={[{ name: "Danke", href: "/danke" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-green-100,#dcfce7)] flex items-center justify-center">
                <svg className="w-10 h-10 text-[var(--color-green-600,#16a34a)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </StaggerItem>

            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Vielen Dank!
              </h1>
            </StaggerItem>

            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-xl">
                Ihre Nachricht ist bei uns eingegangen. Wir melden uns in der Regel
                innerhalb von <strong>30 Minuten</strong> bei Ihnen zurück.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Next Steps */}
      <section className="px-[var(--section-px)] py-20 md:py-28">
        <StaggerReveal
          className="mx-auto max-w-2xl text-center"
          animation={entryAnimations.slideUpFade}
        >
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <h2 className="typo-h2 text-[color:var(--text-primary)] mb-8">
              Wie geht es weiter?
            </h2>
          </StaggerItem>

          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="grid gap-6 text-left">
              {[
                {
                  step: "1",
                  title: "Eingangsbestätigung",
                  text: "Sie erhalten in Kürze eine Bestätigungs-E-Mail von uns.",
                },
                {
                  step: "2",
                  title: "Persönliche Rückmeldung",
                  text: "Ein Mitarbeiter prüft Ihre Anfrage und kontaktiert Sie telefonisch oder per E-Mail.",
                },
                {
                  step: "3",
                  title: "Transparentes Angebot",
                  text: "Sie erhalten ein unverbindliches Festpreis-Angebot — keine versteckten Kosten.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-[var(--radius-lg)] bg-[var(--surface-elevated)] border border-[var(--border-subtle)]"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[color:var(--text-secondary)] mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-md)] bg-[var(--color-red-500)] text-white font-semibold hover:bg-[var(--color-red-600)] transition-colors"
              >
                Zur Startseite
              </Link>
              <Link
                href="tel:+491782471037"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-md)] border-2 border-[var(--border-medium)] text-[color:var(--text-primary)] font-semibold hover:bg-[var(--surface-elevated)] transition-colors"
              >
                Direkt anrufen: 0178 2471037
              </Link>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
