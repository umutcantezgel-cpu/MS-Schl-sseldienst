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

   {/* Hero Section — Ultrathink V2 Glassmorphism */}
   <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    {/* Background Atmosphere — increased visibility */}
    <div className="absolute inset-0 opacity-[0.18] sm:opacity-[0.22] bg-[url(/images/generated/schluesseldienst-wetzlar-panzerriegel-altbau-holztuer.webp)] bg-cover bg-center"></div>
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
            Kostenfreie Beratung in Wetzlar verfügbar
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.15] mb-4 sm:mb-6">
              Ruhig schlafen,{" "}
              <span className="text-[var(--color-red-500)]">sicher leben.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto" style={{ hyphens: "auto" }} lang="de">
              Schützen Sie, was Ihnen am wichtigsten ist. Wir analysieren Schwachstellen und sichern Ihr Zuhause mit modernster Technik — für ein unerschütterliches Sicherheitsgefühl.
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
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Lösungen</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Unsere Leistungen im <span className="text-[var(--color-red-500)]">Überblick</span>
       </h2>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Wir bieten maßgeschneiderte Lösungen für jeden Sicherheitsbedarf. Von einfachen mechanischen Sicherungen bis hin zu komplexen elektronischen Systemen.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="group flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Lock className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-[var(--color-red-500)] transition-colors">Schließzylinder & Anlagen</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Hochsichere Profilzylinder mit Kopierschutz und komplexe Schließanlagen für Gebäude jeder Größe.
          </p>
         </div>
        </div>

        <div className="group flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Bell className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-[var(--color-red-500)] transition-colors">Alarmanlagen</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Intelligente Einbruchmeldeanlagen, verkabelt oder als Funklösung für Bestandsbauten.
          </p>
         </div>
        </div>

        <div className="group flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Video className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-[var(--color-red-500)] transition-colors">Videoüberwachung</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Hochauflösende Kamerasysteme mit Fernzugriff und intelligenter Bewegungserkennung.
          </p>
         </div>
        </div>

        <div className="group flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <ShieldCheck className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-[var(--color-red-500)] transition-colors">Fenster- & Türsicherung</h3>
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
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
            {["1. Termin vereinbaren", "2. Kostenlose Begehung", "3. Konzept & Angebot", "4. Fachgerechte Installation"].map((item, idx) => (
              <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] items-center">
                <Check className="w-6 h-6 text-[var(--color-red-500)] shrink-0" />
                <span className="font-semibold text-gray-800 text-base">{item}</span>
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
           Häufige <span className="text-[color:var(--text-primary)]">Fragen</span>
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
         Weiterführende <span className="text-[var(--color-red-500)]">Informationen</span> zum Einbruchschutz
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
