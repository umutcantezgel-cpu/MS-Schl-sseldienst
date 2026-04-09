import { Lock, EyeOff, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import nextDynamic from "next/dynamic";
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/trust/ProcessSteps";
import TrustStrip from "@/components/trust/TrustStrip";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getTestimonialsByService, getAllTestimonials } from "@/lib/data/testimonials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { getFAQSchema } from "@/lib/schema";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { generatedServiceImages, generatedTrustImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Tresoröffnung Wetzlar | Diskret & Zertifiziert",
 description: "Tresor aufbekommen? ✔️ Diskrete Safe-Öffnung ✔️ Mechanisch & Elektronisch. Höchste Vertraulichkeit durch Experten. 📞 06441-8056279",
 path: "/leistungen/tresoroeffnung",
 exactTitle: true,
});

export default function TresoroeffnungPage() {
  const serviceTestimonials = getTestimonialsByService("tresoroeffnung");
  const testimonialsToDisplay = serviceTestimonials.length >= 2 ? serviceTestimonials : getAllTestimonials();

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "Tresoröffnung & Safe-Öffnung",
      description: "Diskrete Tresor- und Safe-Öffnung vom Wetzlarer Fachbetrieb.",
      url: "/leistungen/tresoroeffnung",
      price: 150
     }))
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema([
      { question: "Wird mein Tresor bei der Öffnung beschädigt?", answer: "Wir setzen auf minimalinvasive Methoden. Selbst wenn wir bohren müssen, geschieht dies mikrochirurgisch, sodass der Zylinder oft problemlos getauscht werden kann." },
      { question: "Ist Diskretion zugesichert?", answer: "Selbstverständlich. Unsere Techniker sind fachlich und moralisch verpflichtet, höchste Vertraulichkeit bei Tresor- und Safe-Öffnungen zu wahren." },
      { question: "Öffnen Sie auch elektronische Safes?", answer: "Ja, wir öffnen mechanische Tresore (mit Doppelbartschlüssel) als auch elektronische Zahlenschloss-Safes aller gängigen Sicherheitsklassen." },
     ])),
    }}
   />

   {/* Hero Section und Premium Dark */}
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-charcoal-900)] to-[#0A0A0A] overflow-hidden text-white">
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={[{ name: "Tresoröffnung", href: "/leistungen/tresoroeffnung" }]} light={true} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-transparent text-gray-900 bg-amber-400 pl-1.5 py-1.5 mx-auto font-bold tracking-wide">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-900"></span>
            </span>
            Höchste Diskretion Garantiert
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-white leading-[1.05] text-balance mb-[var(--space-6)]">
            Diskrete <span className="text-amber-400">Tresoröffnung.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
            Schlüssel verloren oder Zahlencode vergessen? Wir analysieren die Konstruktion Ihres Tresors und wenden schonende Methoden an, um Ihre Wertsachen sicher und vertraulich freizugeben.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[88px] lg:-mt-[112px] flex flex-col items-center pointer-events-none mb-12">
    <div className="w-full pointer-events-auto px-4">
     <TrustStrip />
    </div>
   </div>

   {/* Problem-Analyse */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Absolute Verschwiegenheit
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12 font-medium">
        Die Öffnung von Safes, Geldschränken und antiken Tresoren erfordert ein Höchstmaß an Präzision und Fingerspitzengefühl. Gewaltanwendung zerstört oft nicht nur das äußere Schloss, sondern auch irreversible innere Riegelwerke. 
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-lg transition-all duration-300">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white">
          <EyeOff className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">
           Garantierte Diskretion
          </h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Wir bewahren Stillschweigen über Ihre Wertsachen. Unsere Techniker arbeiten diskret, schnell und ohne unnötiges Aufsehen.
          </p>
         </div>
        </div>

        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-amber-50 border border-amber-200 hover:shadow-lg transition-all duration-300">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
          <Lock className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">
           Spezialwerkzeuge
          </h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Wir setzen hochmoderne Bohrtechniken und Manipulationswerkzeuge (z.B. Endoskope) ein, um elektronische & mechanische Tresore zu entriegeln.
          </p>
         </div>
        </div>
       </div>
      </StaggerItem>
     </StaggerReveal>

     {/* Checkliste */}
     <div className="pt-16 border-t border-[var(--border-subtle)]">
      <StaggerReveal className="" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="mb-8">
         <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
           Unsere Expertise im Tresorbereich
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <ul className="grid grid-cols-1 gap-4 text-left">
          {["Öffnung von mechanischen Tresoren (z.B. Doppelbartschloss)", "Öffnung von elektronischen Schlüsselsafes / Panzerschränken", "Mikrochirurgische Aufbohrtechniken zur Vermeidung von Schäden", "Wiederherstellung: Wir reparieren den Zylinder, damit der Safe weiter genutzt werden kann."].map((item, idx) => (
            <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white border border-[var(--border-subtle)] items-center">
              <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
              <span className="font-semibold text-gray-800 text-base">{item}</span>
            </li>
          ))}
        </ul>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Tresoröffnungs-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[2]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedTrustImages[2]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen Tresoröffnung" subtitle="Darum vertrauen uns unsere Kunden" />

   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen zur Safe-Öffnung
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Wird mein Tresor bei der Öffnung beschädigt?" answer="Wir setzen auf minimalinvasive Methoden. Selbst wenn wir bohren müssen, geschieht dies mikrochirurgisch, sodass der Zylinder oft problemlos getauscht werden kann." />
        <FAQAccordion question="Ist Diskretion zugesichert?" answer="Selbstverständlich. Unsere Techniker sind fachlich und moralisch verpflichtet, höchste Vertraulichkeit bei Tresor- und Safe-Öffnungen zu wahren." />
        <FAQAccordion question="Öffnen Sie auch elektronische Safes?" answer="Ja, wir bearbeiten sowohl mechanische Tresore (z.B. mit Doppelbartschlüssel) als auch elektronische Zahlenschloss-Safes aller gängigen Sicherheitsstufen." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   <RelatedServices currentServiceId="tresoroeffnung" />
   <PersonalizedCTA />
   <FinalCTA />
  </div>
 );
}

export const dynamic = "force-static";
