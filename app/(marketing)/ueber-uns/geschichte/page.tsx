import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
  title: "Unsere Geschichte als Schlüsseldienst in Wetzlar",
  description: "Vom lokalen Handwerksbetrieb zum 24/7 Notdienst. Lesen Sie die Erfolgsgeschichte vom Schlüssel Schmiede in Wetzlar. ✔️ Über 15 Jahre Erfahrung.",
  path: "/ueber-uns/geschichte",
});

export default function GeschichtePage() {
  const breadcrumbs = [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Geschichte", href: "/ueber-uns/geschichte" },
  ];

  const timeline = [
    {
      year: "Gründung",
      title: "Der Anfang",
      text: "Schlüssel Schmiede Wetzlar wurde als lokaler Handwerksbetrieb gegründet und mit dem klaren Ziel, faire und transparente Schlüsseldienstleistungen in der Region Wetzlar anzubieten.",
    },
    {
      year: "Aufbau",
      title: "Wachstum durch Vertrauen",
      text: "Durch konsequent faire Festpreise und schnelle Einsatzzeiten wuchs das Vertrauen der Wetzlarer Bürger. Mundpropaganda wurde zum stärksten Wachstumsmotor.",
    },
    {
      year: "Erweiterung",
      title: "24/7-Notdienst",
      text: "Erweiterung zum Rund-um-die-Uhr-Notdienst. Egal ob nachts, am Wochenende oder an Feiertagen und wir sind immer erreichbar.",
    },
    {
      year: "Heute",
      title: "Ihr Partner in der Region",
      text: "Heute betreuen wir Privat- und Gewerbekunden in Wetzlar und allen umliegenden Stadtgebieten. Unser Versprechen bleibt dasselbe: Festpreise, Transparenz, Handwerksqualität.",
    },
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
                Unsere Geschichte als Schlüsseldienst in Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-xl">
                Vom Handwerksbetrieb zum vertrauenswürdigsten Schlüsseldienst in Wetzlar.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" aria-hidden="true" />
      </section>

      <section className="px-[var(--section-px)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.12}>
            {timeline.map((item, i) => (
              <StaggerItem key={i} animation={entryAnimations.slideUpFade}>
                <div className="flex gap-6 mb-10 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--border-subtle)] mt-3" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h2 className="typo-h3 text-[color:var(--text-primary)] mb-2">{item.title}</h2>
                    <p className="text-[color:var(--text-secondary)]">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
