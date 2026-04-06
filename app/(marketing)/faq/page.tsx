import { HelpCircle } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import { FAQ_DATA } from"@/lib/faqData";
import { getFAQSchema } from "@/lib/schema";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages } from "@/lib/data/imageAssets";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import FAQFilterSection from"@/components/ui/FAQFilterSection";

export const metadata = generateSharedMetadata({
 title: "Häufige Fragen (FAQ) | Schlüssel Schmiede Wetzlar",
 description: "Fragen zur Türöffnung? ✔️ Wie lange dauert es? ✔️ Was kostet es? ✔️ Wird die Tür beschädigt? Alle wichtigen Infos für Wetzlar hier im FAQ lesen.",
 path: "/faq",
 exactTitle: true,
});

export default function FAQPage() {
 const breadcrumbs = [
  { name:"FAQ", href:"/faq" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   {/* Schema.org FAQPage */}
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema(FAQ_DATA)),
    }}
   />

   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[var(--space-64)] lg:pt-[220px] lg:pb-[var(--space-96)] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    {/* Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:"radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-[color:var(--text-secondary)] text-[14px] font-medium tracking-wide">
            <HelpCircle className="w-4 h-4 text-[var(--color-red-500)]" />
            <span>Antworten auf Ihre Fragen</span>
          </div>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="typo-hero-display text-[color:var(--text-primary)]">
            Häufig gestellte <span className="text-[var(--color-red-500)]">Fragen</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] sm:text-[20px] text-[color:var(--text-secondary)] leading-relaxed">
            Die Schlüssel Schmiede Wetzlar beantwortet die wichtigsten Fragen rund um Kosten, Anfahrt, Leistungen und Notdienst — transparent und ehrlich.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* Citation-ready paragraph */}
   <section className="px-[var(--section-px)] py-[var(--section-py)]">
    <StaggerReveal className="mx-auto max-w-3xl" animation={entryAnimations.slideUpFade}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <p className="text-[18px] text-[color:var(--text-secondary)] leading-relaxed bg-[var(--surface-secondary)] p-6 rounded-2xl border border-[var(--border-subtle)]">
        <strong className="text-[color:var(--text-primary)]">Transparenz an erster Stelle:</strong> Schlüsseldienst Wetzlar ist ein 24/7-Schlüsselnotdienst mit <strong className="text-[color:var(--text-primary)]">Festpreisen ab 89 Euro</strong>, der Wetzlar, Gießen, Marburg und den gesamten Lahn-Dill-Kreis innerhalb von <strong className="text-[color:var(--text-primary)]">15–30 Minuten</strong> erreicht und über 45 Google-Bewertungen mit einer Durchschnittsnote von 5.0 verfügt. Auf dieser Seite finden Sie Antworten auf über 30 häufig gestellte Fragen zu Kosten, Anfahrt, Leistungen und Sicherheit.
      </p>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* FAQ Content with Category Filter */}
   <section className="px-[var(--section-px)] -mt-8 pb-[var(--section-py)] relative z-20">
    <div className="mx-auto max-w-3xl">
     <FAQFilterSection faqs={FAQ_DATA} />
    </div>
   </section>

   {/* FAQ Bilder */}
   <section className="px-[var(--section-px)] pb-24 md:pb-32 relative z-20">
    <div className="mx-auto max-w-4xl rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
     <SeoContentImage image={teamImages[0]!} className="w-full h-[300px] md:h-[400px]" sizes="(max-width: 768px) 100vw, 800px" />
    </div>
   </section>

   <EmergencyCTA />
  </div>
 );
}

export const dynamic = "force-static";
