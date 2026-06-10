import { Key, Building, ShieldCheck, Check, ArrowRight, Building2, Settings, Lock } from"lucide-react";
import { Badge } from"@/components/ui/badge";
import FinalCTA from"@/components/ui/FinalCTA";
import nextDynamic from"next/dynamic";
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
import RelatedServices from"@/components/RelatedServices";
import Breadcrumbs from"@/components/Breadcrumbs";
import ProcessSteps from"@/components/trust/ProcessSteps";
import TrustStrip from"@/components/trust/TrustStrip";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getTestimonialsByService, getAllTestimonials } from "@/lib/data/testimonials";
import PriceCard from"@/components/pricing/PriceCard";
import FAQAccordion from"@/components/ui/FAQAccordion";
import Link from"next/link";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateServiceSchema } from"@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/schema";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { generatedServiceImages, generatedMacroImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Schließanlagen Wetzlar | Schlüsseldienst",
 description: "Kostenlose Objektbegehung! ✔️ Elektronische & Mechanische Anlagen ✔️ Nur 1 Schlüssel für alle Leitungen. Planung & Montage in Wetzlar.",
 path: "/leistungen/schliessanlagen",
 exactTitle: true,
});

export default function SchliessanlagenPage() {
  const serviceTestimonials = getTestimonialsByService("schliessanlagen");
  const testimonialsToDisplay = serviceTestimonials.length >= 3 ? serviceTestimonials : getAllTestimonials();

 const breadcrumbs = [
  { name:"Leistungen", href:"/leistungen" },
  { name:"Schließanlagen", href:"/leistungen/schliessanlagen" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title:"Schließanlagen",
      description:"Mechanische und elektronische Schließanlagen für Wetzlar.",
      url:"/leistungen/schliessanlagen",
      price: 150
     }))
    }}
   />
   
   {/* Hero Section Ultrathink V2 Glassmorphism */}
   <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{
      __html: JSON.stringify(getFAQSchema([
       { question: "Ist eine Anlage auch für Einfamilienhäuser sinnvoll?", answer: "Ja, wir bieten Gleichschließungen an. Das bedeutet: Mit nur einem Schlüssel können Sie Haustür, Garage, Kellertür und Briefkasten öffnen." },
       { question: "Was passiert bei einem Schlüsselverlust?", answer: "Bei elektronischen Anlagen wird der betreffende Transponder einfach im System gesperrt. Eine mechanische Anlage erfordert unter Umständen den Austausch des Zylinders, wobei wir durch Sicherungskarten vor unbefugten Kopien schützen." },
       { question: "Können bestehende Anlagen erweitert werden?", answer: "Oftmals ja. Wir prüfen Ihre bestehende Anlage mit Sicherungskarte und bestellen bei Bedarf passende Erweiterungszylinder direkt vom Hersteller nach." },
      ]))
     }}
    />
    {/* Background Atmosphere increased visibility */}
    <div className="absolute inset-0 opacity-[0.18] sm:opacity-[0.22] bg-[url(/images/bg-schliessanlagen.png)] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-0"></div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-6 sm:mt-8 flex flex-col items-center w-full max-w-3xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-5 sm:mb-6 border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]"></span>
            </span>
            Kostenfreie Beratung in Wetzlar anfragen
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.15] mb-4 sm:mb-6">
              Volle Kontrolle,{" "}
              <span className="text-[var(--color-red-500)]">minimaler Aufwand.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto" style={{ hyphens: "none" }} lang="de">
              Intelligente Schließanlagen für Ihr Objekt. Wir planen und installieren passgenaue Systeme für maximalen Komfort und kompromisslose Sicherheit.
            </p>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* 2. Trust-Bar */}
   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[88px] lg:-mt-[112px] flex flex-col items-center pointer-events-none mb-12">
    <div className="w-full pointer-events-auto px-4">
     <TrustStrip />
    </div>
   </div>

   {/* Content Section */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate max-w-none mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Lösungen</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Komfort und <span className="text-[var(--color-red-500)]">Sicherheit</span>
       </h2>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Eine Schließanlage organisiert Zugangsberechtigungen effizient. Ein Hauptschlüssel öffnet alle Türen, während individuelle Schlüssel nur für spezifische Bereiche berechtigt sind. Ideal für komplexe Gebäudestrukturen.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="group flex flex-col items-center text-center gap-6 p-8 md:p-10 rounded-[32px] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-all duration-300 hover:-translate-y-1">
         <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-colors duration-300">
          <Building className="h-10 w-10" strokeWidth={1.5} />
         </div>
         <div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)] mb-4 group-hover:text-[var(--color-red-500)] transition-colors">Für Gewerbe & Verwaltung</h3>
          <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Sichere und verwaltbare Systeme für Mehrfamilienhäuser, Bürogebäude und Produktionsstätten.
          </p>
         </div>
        </div>

        <div className="group flex flex-col items-center text-center gap-6 p-8 md:p-10 rounded-[32px] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-all duration-300 hover:-translate-y-1">
         <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-colors duration-300">
          <Key className="h-10 w-10" strokeWidth={1.5} />
         </div>
         <div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)] mb-4 group-hover:text-[var(--color-red-500)] transition-colors">Weniger Schlüssel</h3>
          <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Reduzieren Sie den Schlüsselbund auf ein Minimum. Ein einziger Schlüssel reicht für alle autorisierten Zugänge.
          </p>
         </div>
        </div>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-5 sm:p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-red-500)] animate-pulse"></span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)]">
             In 4 Schritten zu Ihrer Schließanlage
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left relative z-10 w-full">
            {["1. Erstberatung in Wetzlar", "2. Detaillierter Schließplan", "3. Maßgenaue Fertigung", "4. Fachgerechte Installation"].map((item, idx) => (
              <li key={idx} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-[var(--radius-xl)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] items-center w-full">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-red-500)] shrink-0" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </StaggerItem>
     </StaggerReveal>

     {/* 4. Lösung & Preis-Teaser */}
     <div className="pt-16 border-t border-[var(--border-subtle)]">
      <StaggerReveal className="" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="text-center mb-12">
         <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Preise</Badge>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mt-4">
           Kalkulation & <span className="relative inline-block"><span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-red-100)] -z-10 -rotate-1 rounded-sm"></span>Richtpreise</span>
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          <PriceCard
            title="Mechanische Systeme"
            price={"Individuell"}
            description="Klassische Zentralschloss- oder Hauptschlüsselanlagen."
            features={["Kopierschutzmechanismen","Bewährte Sicherheitstechnik","Langlebig und robust",
            ]}
            isPopular={true}
          />
          <PriceCard
            title="Elektronische Systeme"
            price={"Auf Anfrage"}
            description="Moderne Zugangskontrolle mit Transpondern oder Smartphone."
            features={["Verlorene Chips sperren","Berechtigungen jederzeit ändern","Historie der Zutritte möglich",
            ]}
          />
        </div>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Ablauf & Trust (Process) */}
   {/* Schließanlagen-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[3]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedMacroImages[0]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   {/* 5. Proof (Bewertungen) */}
   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen zu Schließanlagen" subtitle="Das sagen unsere Kunden vor Ort" />

   {/* 6. FAQ (Spezifisch für Schließanlagen) */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="flex flex-col items-center justify-center mb-12">
         <div className="flex items-center gap-3 mb-4">
           <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
           <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Support</span>
           <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         </div>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] text-center leading-[1.1]">
           Häufige Fragen zu <span className="text-[color:var(--text-primary)]">Schließanlagen</span>
         </h2>
       </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Ist eine Anlage auch für Einfamilienhäuser sinnvoll?" answer="Ja, wir bieten Gleichschließungen an. Das bedeutet: Mit nur einem Schlüssel können Sie Haustür, Garage, Kellertür und Briefkasten öffnen." />
        <FAQAccordion question="Was passiert bei einem Schlüsselverlust?" answer="Bei elektronischen Anlagen wird der betreffende Transponder einfach im System gesperrt. Eine mechanische Anlage erfordert unter Umständen den Austausch des Zylinders, wobei wir durch Sicherungskarten vor unbefugten Kopien schützen." />
        <FAQAccordion question="Können bestehende Anlagen erweitert werden?" answer="Oftmals ja. Wir prüfen Ihre bestehende Anlage mit Sicherungskarte und bestellen bei Bedarf passende Erweiterungszylinder direkt vom Hersteller nach." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* 7. Final CTA */}
   <RelatedServices currentServiceId="schliessanlagen" />
   <PersonalizedCTA />
   <FinalCTA headline="Schließanlage planen? Wir beraten Sie." benefits={["Kostenlose Objektbegehung vor Ort","Ein Schlüssel für alle Türen","Mechanisch und elektronisch"]} buttonText="Beratungstermin vereinbaren" socialProof="Professionelle Anlagen für Gewerbe und Eigenheim" subtitle="Planung · Montage · Wartung" />
  </div>
 );
}

export const dynamic = "force-static";
