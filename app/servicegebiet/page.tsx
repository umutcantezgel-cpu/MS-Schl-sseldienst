import { MapPin, Check, Clock } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import Link from"next/link";
import { allLocations } from"@/lib/data/allLocations";
import { Card } from"@/components/ui/card";
import { generateSharedMetadata } from"@/lib/metadata";
import ServiceMapWrapper from"@/components/maps/ServiceMapWrapper";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { Badge } from"@/components/ui/badge";

export const metadata = generateSharedMetadata({
 title:"Servicegebiet — Einsatzgebiete rund um Wetzlar",
 description:"Schlüsseldienst Wetzlar: Aßlar, Solms, Hüttenberg, Lahnau und weitere Einsatzgebiete. 15–30 Min. Anfahrt, Festpreise ohne versteckte Kosten.",
 path:"/servicegebiet",
});

export default function ServicegebietPage() {
 const breadcrumbs = [
  { name:"Servicegebiet", href:"/servicegebiet" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[var(--text-primary)] font-sans">
   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[var(--space-64)] lg:pt-[220px] lg:pb-[var(--space-96)] bg-[var(--color-charcoal-900)] overflow-hidden">
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
      <Breadcrumbs items={breadcrumbs} light={true} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="hero" className="mb-[var(--space-6)] border-white/20 text-white bg-white/[0.08] backdrop-blur-md pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--value-primary)]"></span>
            </span>
            15–30 Min. Anfahrt garantiert
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight text-white leading-[1.1] text-balance mb-[var(--space-6)]">
            Unser <span className="text-[var(--value-primary)]">Servicegebiet</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-white/80 leading-relaxed">
            Wir sind Ihr lokaler Schlüsseldienst für Wetzlar und die direkte Umgebung. Wir kennen die Straßen und sind besonders schnell bei Ihnen vor Ort.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* Interactive Map Section */}
   <section aria-label="Interaktive Einsatzgebiet-Karte" className="px-[var(--section-px)] pt-[var(--space-12)] pb-[var(--section-py)] bg-[var(--surface-primary)] relative z-20">
    <div className="mx-auto max-w-5xl">
     <StaggerReveal className="text-center mb-[var(--space-12)]" animation={entryAnimations.slideUpFade}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
        Unsere <span className="text-[var(--value-primary)]">Einsatzgebiete</span> auf einen Blick
        </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <p className="mt-4 text-[18px] text-[var(--text-secondary)]">
        Der rote Kreis zeigt unser 50-km-Einsatzgebiet. Erkunden Sie die interaktive Karte.
        </p>
      </StaggerItem>
     </StaggerReveal>
     
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.2}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <ServiceMapWrapper />
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* Content Section */}
   <section aria-label="Einsatzgebiete im Detail" className="px-[var(--section-px)] py-[var(--section-py)] bg-[var(--surface-secondary)] border-t border-[var(--border-subtle)]">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <div className="prose prose-lg prose-slate mx-auto max-w-none">
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-[var(--text-primary)] mb-6">
        Schlüsselnotdienst in Ihrer Nähe
        </h2>
        <p className="text-[18px] text-[var(--text-secondary)] leading-relaxed mb-10">
        Wir sind für Sie in folgenden Städten und Regionen schnell und zuverlässig im Einsatz. Garantiert ohne versteckte Anfahrtskosten.
        </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allLocations.map((gebiet) => (
          <Link key={gebiet.slug} href={`/${gebiet.slug}`} className="group">
          <Card className="flex flex-col gap-2 p-5 bg-[var(--surface-primary)] hover:-translate-y-1 hover:border-[var(--value-primary)] hover:shadow-[var(--elevation-2)] transition-all duration-300 ease-out border border-[var(--border-subtle)] rounded-[var(--radius-16)] h-full">
            <div className="flex items-center gap-3 font-bold text-[var(--text-primary)] group-hover:text-[var(--value-primary)] transition-colors text-[16px]">
            <MapPin className="h-5 w-5 text-[var(--value-icon-color)] shrink-0" aria-hidden="true" />
            {gebiet.name} ({gebiet.plz})
            </div>
            <div className="flex items-center gap-2 text-[14px] font-bold text-[var(--value-primary)] pl-8">
            <Clock className="h-4 w-4" aria-hidden="true" />
            ca. {gebiet.logistics.drivingTimeMinutes} Min. Anfahrt
            </div>
          </Card>
          </Link>
        ))}
        </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <Card className="mt-16 p-8 md:p-10 bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[var(--radius-24)] shadow-[var(--elevation-1)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-blush-500)]/5 rounded-bl-[100px] pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--value-icon-bg)] text-[var(--value-icon-color)] shadow-[var(--shadow-cta)]">
            <Clock className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
          <h3 className="text-[24px] font-bold text-[var(--text-primary)] mb-4">
            Kalkulierbare Ankunft: 15–30 Minuten
          </h3>
          <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed mb-6">
            In Notsituationen zählt jede Minute. Dank unserer strategischen Positionierung in Wetzlar sind wir in der Lage, jeden Punkt in unserem Kern-Einsatzgebiet innerhalb von <strong className="text-[var(--value-primary)] font-bold">15 bis 30 Minuten</strong> zu erreichen.
          </p>
          <h4 className="text-[18px] font-bold text-[var(--text-primary)] mb-3 pt-4 border-t border-[var(--border-subtle)]">Warum wir besonders schnell sind</h4>
          <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed mb-6">
            Dank unserer lokalen Präsenz und ausgeklügelten Einsatzkoordination sind wir in der Lage, im gesamten Lahn-Dill-Kreis besonders schnell vor Ort zu sein. Unsere Monteure sind dezentral stationiert.
          </p>
          <h4 className="text-[18px] font-bold text-[var(--text-primary)] mb-3 pt-4 border-t border-[var(--border-subtle)]">Service auch über die Region hinaus</h4>
          <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed mb-0">
            Falls Ihr Wohnort nicht in unserer Liste der Einsatzgebiete auftaucht, kontaktieren Sie uns einfach. Wir finden eine schnelle Lösung, um Ihnen auch in Randgebieten zu helfen.
          </p>
          </div>
        </div>
        </Card>
      </StaggerItem>
     </div>
    </StaggerReveal>
   </section>

   <aside aria-label="Notfall-Kontakt">
    <EmergencyCTA />
   </aside>
  </div>
 );
}
