import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateSharedMetadata({
  title: "Angebot anfragen | Schlüsseldienst Wetzlar",
  description: "Unverbindliche Anfrage stellen: ✔️ Verbindliches Preisangebot in 30 Min. ✔️ Transparent & lokal in Wetzlar. Keine versteckten Kosten. Jetzt anfragen!",
  path: "/anfrage",
});

export default function AnfragePage() {
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
          <Breadcrumbs items={[{ name: "Anfrage", href: "/anfrage" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Unverbindliche Anfrage
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-xl">
                Beschreiben Sie Ihr Anliegen und wir melden uns mit einem transparenten
                Festpreis-Angebot und kostenlos und unverbindlich.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Redirect to Contact */}
      <section className="px-[var(--section-px)] py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <StaggerReveal animation={entryAnimations.slideUpFade}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <h2 className="typo-h3 text-[color:var(--text-primary)] mb-4">
                  Zwei Wege zu Ihrem Angebot
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {/* Option 1: Call */}
                  <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--surface-primary)] border border-[var(--border-subtle)] text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-red-500)]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[var(--color-red-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[color:var(--text-primary)] mb-2">
                      Sofort-Angebot per Telefon
                    </h3>
                    <p className="text-sm text-[color:var(--text-secondary)] mb-4">
                      Für dringende Anliegen und direkter Kontakt mit Festpreis-Auskunft.
                    </p>
                    <Link
                      href="tel:+4964418056279"
                      className="inline-flex items-center justify-center w-full px-5 py-3 rounded-[var(--radius-md)] bg-[var(--color-red-500)] text-white font-semibold hover:bg-[var(--color-red-600)] transition-colors"
                    >
                      06441 8056279
                    </Link>
                  </div>

                  {/* Option 2: Form */}
                  <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--surface-primary)] border border-[var(--border-subtle)] text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-red-500)]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[var(--color-red-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[color:var(--text-primary)] mb-2">
                      Schriftliche Anfrage
                    </h3>
                    <p className="text-sm text-[color:var(--text-secondary)] mb-4">
                      Nutzen Sie unser Kontaktformular für Ihre detaillierte Anfrage.
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-[var(--color-red-500)] text-[var(--color-red-500)] font-semibold hover:bg-[var(--color-red-500)] hover:text-white transition-colors"
                    >
                      Zum Kontaktformular
                    </Link>
                  </div>
                </div>

                <p className="mt-6 text-sm text-[color:var(--text-tertiary)]">
                  Kostenlos &amp; unverbindlich · Antwort in 30 Min · DSGVO-konform
                </p>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
