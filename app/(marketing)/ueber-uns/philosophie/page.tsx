import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { auszeichnungImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
  title: "Unsere Philosophie",
  description:
    "Transparenz, Fairness und Handwerksqualität — die drei Säulen unserer Philosophie als Schlüsseldienst in Wetzlar.",
  path: "/ueber-uns/philosophie",
});

export default function PhilosophiePage() {
  const breadcrumbs = [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Philosophie", href: "/ueber-uns/philosophie" },
  ];

  const principles = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Transparenz",
      text: "Festpreise, die wir Ihnen am Telefon nennen, gelten. Keine versteckten Kosten, keine Überraschungen, keine Aufschläge. Sie wissen immer vorher, was es kostet.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Fairness",
      text: "Wir empfehlen nur, was wirklich nötig ist. Keine unnötigen Schlossauswechslungen, kein Upselling. Ehrliche Beratung steht an erster Stelle.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Handwerksqualität",
      text: "Jede Türöffnung, jeder Schlüssel, jede Schließanlage wird mit handwerklicher Präzision ausgeführt. Qualität, die sich über Jahre bewährt.",
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
                Unsere Philosophie
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-xl">
                Drei Werte, die jeden unserer Einsätze leiten.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" aria-hidden="true" />
      </section>

      <section className="px-[var(--section-px)] py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <StaggerReveal className="grid md:grid-cols-3 gap-8" animation={entryAnimations.slideUpFade} staggerDelay={0.12}>
            {principles.map((p, i) => (
              <StaggerItem key={i} animation={entryAnimations.slideUpFade}>
                <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h2 className="typo-h3 text-[color:var(--text-primary)] mb-3">{p.title}</h2>
                  <p className="text-[color:var(--text-secondary)] text-sm leading-relaxed">{p.text}</p>
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
