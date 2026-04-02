import { lexikonData } from "@/lib/data/lexikon";
import { generateSharedMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export const metadata = generateSharedMetadata({
  title: "Sicherheits-Lexikon | Fachbegriffe einfach erklärt",
  description: "Vom Panzerriegel bis zum Zylinder: Das Wetzlarer Lexikon für Schließtechnik & Schlüsseldienste. ✔️ Verständliche Erklärungen ✔️ Expertentipps.",
  path: "/lexikon",
  exactTitle: true,
});

export default function LexikonIndexPage() {
  // Group entries by category
  const categories = Array.from(new Set(lexikonData.map(e => e.category)));

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <section className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-[var(--surface-elevated)] overflow-hidden">
        <div className="container mx-auto px-[var(--section-px)] relative z-10 text-center flex flex-col items-center">
          <Breadcrumbs items={[
            { name: "Lexikon", href: "/lexikon" }
          ]} light={false} />
          
          <div className="mt-8 max-w-3xl mx-auto">
            <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <div className="inline-flex items-center justify-center p-3 bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] rounded-2xl mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
              </StaggerItem>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                  Schließtechnik-Lexikon
                </h1>
              </StaggerItem>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <p className="text-xl text-[color:var(--text-secondary)]">
                  Fachbegriffe rund um Türschlösser, Einbruchschutz und Sicherheitstechnik verständlich erklärt von MS Schlüsseldienst Wetzlar.
                </p>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="px-[var(--section-px)] py-16 md:py-24 relative -mt-10 z-20 max-w-5xl mx-auto">
        <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
          <div className="grid gap-16">
            {categories.map((category, catIndex) => (
              <StaggerItem key={category} animation={entryAnimations.slideUpFade}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[color:var(--text-primary)] mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[var(--color-red-500)] rounded-full hidden md:block"></span>
                    {category}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {lexikonData.filter(e => e.category === category).map((entry) => (
                      <Link 
                        href={`/lexikon/${entry.slug}`} 
                        key={entry.slug}
                        className="group flex flex-col p-6 rounded-[var(--radius-24)] border border-[var(--border-subtle)] bg-[var(--surface-secondary)] hover:bg-white hover:border-[var(--color-red-500)] hover:shadow-xl hover:shadow-[var(--color-red-500)]/10 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">
                            {entry.title}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-[color:var(--text-tertiary)] group-hover:text-[var(--color-red-500)] transition-transform group-hover:translate-x-1" />
                        </div>
                        <p className="text-[15px] text-[color:var(--text-secondary)] line-clamp-2 m-0 group-hover:text-[color:var(--text-primary)] transition-colors">
                          {entry.definition}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>
      </section>
    </div>
  );
}
