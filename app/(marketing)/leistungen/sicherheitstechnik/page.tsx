import { ShieldCheck, Lock, Bell, Video, Check } from"lucide-react";
import { Badge } from"@/components/ui/badge";
import FinalCTA from"@/components/ui/FinalCTA";
import dynamic from"next/dynamic";
const PersonalizedCTA = dynamic(() => import("@/components/growth/PersonalizedCTA"));
import RelatedServices from"@/components/RelatedServices";
import Breadcrumbs from"@/components/Breadcrumbs";
import ProcessSteps from"@/components/trust/ProcessSteps";
import TrustStrip from"@/components/trust/TrustStrip";
import ReviewsSection from"@/components/reviews/ReviewsSection";
import PriceCard from"@/components/pricing/PriceCard";
import FAQAccordion from"@/components/ui/FAQAccordion";
import Link from"next/link";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateServiceSchema } from"@/lib/serviceSchema";
import { getFAQSchema } from"@/lib/faqSchema";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title:"Sicherheitstechnik — Einbruchschutz & Beratung",
 description:"Kostenlose Sicherheitsberatung in Wetzlar. Wir installieren Panzerriegel, Stangenschlösser und moderne Sicherheitstechnik für Ihr Zuhause.",
 path:"/leistungen/sicherheitstechnik",
});

export default function SicherheitstechnikPage() {
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
       { question: "Ist eine Beratung bei mir zu Hause wirklich kostenlos?", answer: "Ja, im Großraum Wetzlar bieten wir eine völlig kostenfreie und unverbindliche Sicherheitsanalyse bei Ihnen vor Ort an." },
       { question: "Kann Sicherheitstechnik auch in Mietwohnungen installiert werden?", answer: "Definitiv! Wir bieten spezielle Klebe- oder Klemm-Lösungen sowie Funk-Alarmanlagen an, die sich später beim Auszug spurlos entfernen und mitnehmen lassen." },
       { question: "Wie lange dauert der Einbau einer Alarmanlage?", answer: "Dank moderner Funktechnologie lassen sich die meisten Alarmsysteme für kleinere bis mittlere Objekte innerhalb eines Tages komplett kabellos und ohne Schmutz installieren." },
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
            Kostenfreie Beratung in Wetzlar verfügbar
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-[color:var(--text-primary)] leading-[1.05] text-balance mb-[var(--space-6)]">
            Ruhig schlafen, <br /><span className="text-[var(--color-red-500)]">sicher leben.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-[color:var(--text-secondary)] leading-relaxed">
            Schützen Sie, was Ihnen am wichtigsten ist. Wir analysieren Schwachstellen und sichern Ihr Zuhause mit modernster Technik – für ein unerschütterliches Sicherheitsgefühl.
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
       <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">Unsere Leistungen im Überblick</h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-[18px] text-[color:var(--text-secondary)] leading-relaxed mb-12">
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
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
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
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
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
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
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
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
           Mechanischer Zusatzschutz zur effektiven Erschwerung von Aufbruchversuchen.
          </p>
         </div>
        </div>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <h3 className="text-[24px] font-bold text-[color:var(--text-primary)] mb-6">Unser Beratungsprozess</h3>
          <ul className="space-y-6 text-[18px] text-[color:var(--text-secondary)] m-0 font-medium">
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
         <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
           Kalkulation & Richtpreise
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
   <ProcessSteps />

   {/* 5. Proof (Bewertungen) */}
   <ReviewsSection />

   {/* 6. FAQ (Spezifisch für Sicherheitstechnik) */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen
      </h2>
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

   {/* 7. Final CTA */}
   <RelatedServices currentServiceId="sicherheitstechnik" />
   <PersonalizedCTA />
   <FinalCTA />
  </div>
 );
}
