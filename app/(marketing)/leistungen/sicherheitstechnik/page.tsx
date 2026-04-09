import { ShieldCheck, Lock, Bell, Video, Check } from"lucide-react";
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
import { generatedServiceImages, generatedTrustImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Sicherheitstechnik Wetzlar | Schlüsseldienst",
 description: "Einbruchschutz für Wetzlar: ✔️ Panzerriegel ✔️ Stangenschlösser ✔️ Elektronik. Kostenlose & unverbindliche Sicherheitsberatung anfordern!",
 path: "/leistungen/sicherheitstechnik",
 exactTitle: true,
});

export default function SicherheitstechnikPage() {
  const serviceTestimonials = getTestimonialsByService("sicherheitstechnik");
  const testimonialsToDisplay = serviceTestimonials.length >= 3 ? serviceTestimonials : getAllTestimonials();

 const breadcrumbs = [
  { name:"Leistungen", href:"/leistungen" },
  { name:"Sicherheitstechnik", href:"/leistungen/sicherheitstechnik" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title:"Sicherheitstechnik",
      description:"Einbruchschutzberatung, Zusatzschlösser und Sicherheitstechnik.",
      url:"/leistungen/sicherheitstechnik",
      price: 199
     }))
    }}
   />
   
   {/* Hero Section , Premium Dark */}
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
       { question: "Ist eine Beratung bei mir zu Hause wirklich kostenlos?", answer: "Ja, im Großraum Wetzlar bieten wir eine völlig kostenfreie und unverbindliche Sicherheitsanalyse bei Ihnen vor Ort an." },
       { question: "Kann Sicherheitstechnik auch in Mietwohnungen installiert werden?", answer: "Definitiv! Wir bieten spezielle Klebe- oder Klemm-Lösungen sowie Funk-Alarmanlagen an, die sich später beim Auszug spurlos entfernen und mitnehmen lassen." },
       { question: "Wie lange dauert der Einbau einer Alarmanlage?", answer: "Dank moderner Funktechnologie lassen sich die meisten Alarmsysteme für kleinere bis mittlere Objekte innerhalb eines Tages komplett kabellos und ohne Schmutz installieren." },
      ]))
     }}
    />
    {/* Background Atmosphere */}
    <div className="absolute inset-0 opacity-10 bg-[url(/images/generated/schluesseldienst-wetzlar-panzerriegel-altbau-holztuer.webp)] bg-cover bg-center"></div>
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
            Kostenfreie Beratung in Wetzlar verfügbar
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.05] text-balance mb-[var(--space-6)] drop-shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-charcoal-900)] to-[var(--color-charcoal-600)]">Ruhig schlafen,</span> <br />
            <span className="relative inline-block"><span className="absolute -inset-1 bg-[var(--color-red-500)]/10 blur-xl rounded-full"></span><span className="relative text-[var(--color-red-500)]">sicher leben.</span></span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed">
            Schützen Sie, was Ihnen am wichtigsten ist. Wir analysieren Schwachstellen und sichern Ihr Zuhause mit modernster Technik - für ein unerschütterliches Sicherheitsgefühl.
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
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Lösungen</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Unsere Leistungen im <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-red-600)] to-[var(--color-red-500)]">Überblick</span>
       </h2>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Wir bieten maßgeschneiderte Lösungen für jeden Sicherheitsbedarf. Von einfachen mechanischen Sicherungen bis hin zu komplexen elektronischen Systemen.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Lock className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">Schließzylinder & Anlagen</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Hochsichere Profilzylinder mit Kopierschutz und komplexe Schließanlagen für Gebäude jeder Größe.
          </p>
         </div>
        </div>

        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Bell className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">Alarmanlagen</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Intelligente Einbruchmeldeanlagen, verkabelt oder als Funklösung für Bestandsbauten.
          </p>
         </div>
        </div>

        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Video className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">Videoüberwachung</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Hochauflösende Kamerasysteme mit Fernzugriff und intelligenter Bewegungserkennung.
          </p>
         </div>
        </div>

        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <ShieldCheck className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">Fenster- & Türsicherung</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Mechanischer Zusatzschutz zur effektiven Erschwerung von Aufbruchversuchen.
          </p>
         </div>
        </div>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-red-500)]/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-red-500)] animate-pulse"></span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)]">
             Unser Beratungsprozess
            </h3>
          </div>
          <ul className="space-y-6 text-lg text-[color:var(--text-secondary)] m-0 font-medium">
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>1. Termin vereinbaren:</strong> Kontaktieren Sie uns für ein unverbindliches Erstgespräch.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>2. Kostenlose Begehung:</strong> Wir analysieren die Sicherheitslage direkt bei Ihnen vor Ort.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>3. Konzept & Angebot:</strong> Sie erhalten ein maßgeschneidertes Sicherheitskonzept.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>4. Fachgerechte Installation:</strong> Unsere Experten montieren die Technik sauber und zuverlässig.</span>
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
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mt-4">
           Kalkulation & <span className="relative inline-block"><span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-red-100)] -z-10 -rotate-1 rounded-sm"></span>Richtpreise</span>
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          <PriceCard
            title="Sicherheits-Check"
            price={0}
            description="Schwachstellenanalyse Ihres Objekts durch unsere Experten vor Ort."
            features={["Kostenlos & unverbindlich","Direkt in Wetzlar & Umgebung","Individuelle Handlungsempfehlung",
            ]}
            isPopular={true}
          />
          <PriceCard
            title="Grundschutz Paket"
            price={199}
            description="Umfasst mechanische Zusatzsicherungen für die verwundbarsten Stellen."
            features={["Panzerriegel / Stangenschloss","Zusätzliches Fensterschloss","Fachgerechte Montage inkl.",
            ]}
          />
          <PriceCard
            title="Smart Home Schutz"
            price={"Auf Anfrage"}
            description="Elektronische Absicherung per Funk-Alarmanlage und Video."
            features={["Steuerung per App","Benachrichtigung aufs Handy","Modular erweiterbar",
            ]}
          />
        </div>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Ablauf & Trust (Process) */}
   {/* Sicherheitstechnik-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[4]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedTrustImages[3]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   {/* 5. Proof (Bewertungen) */}
   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen zur Sicherheitstechnik" subtitle="Was Kunden über uns sagen" />

   {/* 6. FAQ (Spezifisch für Sicherheitstechnik) */}
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
           Häufige <span className="bg-clip-text text-transparent bg-gradient-to-br from-[var(--color-charcoal-900)] to-[var(--color-charcoal-500)]">Fragen</span>
         </h2>
       </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Ist eine Beratung bei mir zu Hause wirklich kostenlos?" answer="Ja, im Großraum Wetzlar bieten wir eine völlig kostenfreie und unverbindliche Sicherheitsanalyse bei Ihnen vor Ort an." />
        <FAQAccordion question="Kann Sicherheitstechnik auch in Mietwohnungen installiert werden?" answer="Definitiv! Wir bieten spezielle Klebe- oder Klemm-Lösungen sowie Funk-Alarmanlagen an, die sich später beim Auszug spurlos entfernen und mitnehmen lassen." />
        <FAQAccordion question="Wie lange dauert der Einbau einer Alarmanlage?" answer="Dank moderner Funktechnologie lassen sich die meisten Alarmsysteme für kleinere bis mittlere Objekte innerhalb eines Tages komplett kabellos und ohne Schmutz installieren." />
      </div>
     </StaggerItem>
     </StaggerReveal>
    </section>

    {/* Weiterführende Informationen , SEO Authority Links */}
    <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-16 md:py-20">
     <div className="mx-auto max-w-4xl">
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Wissensdatenbank</span>
       </div>
       <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[color:var(--text-primary)] mb-6">
         Weiterführende <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-red-600)] to-[var(--color-red-500)]">Informationen</span> zum Einbruchschutz
       </h2>
       <p className="text-base text-[color:var(--text-secondary)] leading-relaxed mb-8">
         Informieren Sie sich bei offiziellen Stellen über staatliche Förderungen und polizeiliche Empfehlungen zum Einbruchschutz:
       </p>
       <div className="grid gap-4 sm:grid-cols-2">
         <a href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestandsimmobilien/Einbruchschutz/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
             <ShieldCheck className="h-5 w-5" />
           </div>
           <div>
             <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">KfW Einbruchschutz-Förderung</span>
             <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Staatliche Zuschüsse bis zu 1.600€ für Einbruchschutz-Maßnahmen an Ihrer Immobilie.</p>
           </div>
         </a>
         <a href="https://www.k-einbruch.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
             <Lock className="h-5 w-5" />
           </div>
           <div>
             <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">K-EINBRUCH , Polizeiliche Prävention</span>
             <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Offizielle Empfehlungen der Polizei zum Schutz Ihres Zuhauses.</p>
           </div>
         </a>
         <a href="https://www.vds.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
             <Check className="h-5 w-5" />
           </div>
           <div>
             <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">VdS Schadenverhütung</span>
             <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Zertifizierungs- und Prüfstelle für Sicherheitstechnik und Einbruchschutz.</p>
           </div>
         </a>
         <a href="https://www.polizei.hessen.de/praesidium-mittelhessen/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
             <Bell className="h-5 w-5" />
           </div>
           <div>
             <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Polizeipräsidium Mittelhessen</span>
             <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Kriminalprävention und Einbruchschutz-Beratung für den Lahn-Dill-Kreis.</p>
           </div>
         </a>
       </div>
     </div>
    </section>

   {/* 7. Final CTA */}
   <RelatedServices currentServiceId="sicherheitstechnik" />
   <PersonalizedCTA />
   <FinalCTA headline="Sicherheitstechnik vom Fachmann." benefits={["Individuelle Beratung zu Hause","Panzerriegel und Zusatzschlösser","Montage am gleichen Tag möglich"]} buttonText="Sicherheitsberatung anfragen" socialProof="Zertifizierte Sicherheitslösungen für Wetzlar" subtitle="Beratung · Einbau · Nachrüstung" />
  </div>
 );
}

export const dynamic = "force-static";
