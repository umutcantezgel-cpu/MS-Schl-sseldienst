import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages } from "@/lib/data/imageAssets";
import Link from "next/link";

export const metadata = generateSharedMetadata({
  title: "Karriere & Jobs",
  description: "Wir suchen Servicemonteure (m/w/d) in Wetzlar! ✔️ Gutes Gehalt ✔️ Firmenwagen ✔️ Notdienst-Zuschläge. Jetzt lokal bewerben.",
  path: "/ueber-uns/karriere",
});

export default function KarrierePage() {
  const breadcrumbs = [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Karriere", href: "/ueber-uns/karriere" },
  ];

  const benefits = [
    "Faires Festgehalt + attraktive Notdienst-Zuschläge",
    "Modern ausgestattetes Firmenfahrzeug",
    "Hochwertiges Werkzeug und Arbeitskleidung",
    "Regelmäßige Schulungen und Weiterbildungen",
    "Regionale Einsätze ohne Montage-Reisen",
    "Sicherer Arbeitsplatz in einem wachsenden Unternehmen",
  ];

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
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
          <Breadcrumbs items={breadcrumbs} light={false} />
          <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Karriere
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-xl">
                Verstärken Sie unser Team in Wetzlar als erfahrener Monteur für Sicherheitstechnik.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" aria-hidden="true" />
      </section>

      <section className="px-[var(--section-px)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.12}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h2 className="typo-h3 text-[color:var(--text-primary)] mb-6">Wir suchen: Servicemonteur (m/w/d)</h2>
              <div className="prose prose-red text-[color:var(--text-secondary)]">
                <p>
                  Als etablierter Schlüsseldienst in Wetzlar legen wir Wert auf Qualität,
                  Transparenz und Kundenzufriedenheit. Um unser Team zu erweitern,
                  suchen wir motivierte Servicemonteure.
                </p>
                <h3 className="text-[color:var(--text-primary)] font-semibold mt-8 mb-4">Ihr Profil:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                  <li>Abgeschlossene handwerkliche Ausbildung (Schreiner, Schlosser o.ä. von Vorteil)</li>
                  <li>Idealerweise Erfahrung im Bereich Schlüsseldienst/Sicherheitstechnik</li>
                  <li>Führerschein Klasse B zwingend erforderlich</li>
                  <li>Bereitschaft zum Notdienst (auch an Wochenenden)</li>
                  <li>Einwandfreies Führungszeugnis</li>
                  <li>Fließendes Deutsch in Wort und Schrift</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.15}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <h3 className="typo-h4 text-[color:var(--text-primary)] mb-6">Ihre Vorteile bei uns:</h3>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3">
                      <svg className="w-5 h-5 text-[var(--color-green-600)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[color:var(--text-secondary)] text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-[var(--border-subtle)]">
                  <h4 className="font-semibold text-[color:var(--text-primary)] mb-4">Jetzt bewerben</h4>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-6">
                    Senden Sie uns Ihren Lebenslauf ganz unkompliziert per E-Mail. Wir melden uns umgehend bei Ihnen.
                  </p>
                  <Link
                    href="mailto:info@wetzlar-schlüsseldienst.de"
                    className="flex justify-center w-full px-5 py-3 rounded-[var(--radius-md)] bg-[var(--text-primary)] text-[var(--surface-primary)] font-semibold hover:bg-[var(--text-secondary)] transition-colors"
                  >
                    Bewerbung per E-Mail senden
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
