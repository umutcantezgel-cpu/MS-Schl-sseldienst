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
import { schlossImages, montageImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Schließanlagen Wetzlar | Für Gewerbe & Eigenheim",
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
   
   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
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
    {/* Background Atmosphere */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-900)] to-transparent opacity-80 z-0"></div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]"></span>
            </span>
            Kostenfreie Beratung in Wetzlar anfragen
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-[color:var(--text-primary)] leading-[1.05] text-balance mb-[var(--space-6)]">
            Volle Kontrolle, <br /><span className="text-[var(--color-red-500)]">minimaler Aufwand.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-[color:var(--text-secondary)] leading-relaxed">
            Intelligente Schließanlagen für Ihr Objekt. Wir planen und installieren passgenaue Systeme für maximalen Komfort und kompromisslose Sicherheit.
          </p>
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
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">Komfort und Sicherheit</h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-[18px] text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Eine Schließanlage organisiert Zugangsberechtigungen effizient. Ein Hauptschlüssel öffnet alle Türen, während individuelle Schlüssel nur für spezifische Bereiche berechtigt sind. Ideal für komplexe Gebäudestrukturen.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Building className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">Für Gewerbe & Verwaltung</h3>
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
           Sichere und verwaltbare Systeme für Mehrfamilienhäuser, Bürogebäude und Produktionsstätten.
          </p>
         </div>
        </div>

        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Key className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">Weniger Schlüssel</h3>
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
           Reduzieren Sie den Schlüsselbund auf ein Minimum. Ein einziger Schlüssel reicht für alle autorisierten Zugänge.
          </p>
         </div>
        </div>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <h3 className="text-[24px] font-bold text-[color:var(--text-primary)] mb-6">In 4 Schritten zu Ihrer Schließanlage</h3>
          <ul className="space-y-6 text-[18px] text-[color:var(--text-secondary)] m-0 font-medium">
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>1. Erstberatung:</strong> Analyse Ihrer Anforderungen vor Ort in Wetzlar.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>2. Schließplan:</strong> Erstellung eines detaillierten Berechtigungskonzepts.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>3. Fertigung:</strong> Maßgenaue Produktion durch unsere Markenpartner.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>4. Installation:</strong> Fachgerechter Einbau und Schlüsselübergabe.</span>
            </li>
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
         <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
           Kalkulation & Richtpreise
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
       image={schlossImages[5]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={montageImages[0]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   {/* 5. Proof (Bewertungen) */}
   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen zu Schließanlagen" subtitle="Echte Kundenstimmen" />

   {/* 6. FAQ (Spezifisch für Schließanlagen) */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen zu Schließanlagen
      </h2>
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
   <FinalCTA />
  </div>
 );
}

export const dynamic = "force-static";
