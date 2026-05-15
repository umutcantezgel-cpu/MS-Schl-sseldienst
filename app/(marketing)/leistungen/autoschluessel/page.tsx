import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import nextDynamic from "next/dynamic";
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
import RelatedServices from "@/components/RelatedServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/trust/ProcessSteps";
import TrustStrip from "@/components/trust/TrustStrip";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getTestimonialsByService, getAllTestimonials } from "@/lib/data/testimonials";
import PriceCard from "@/components/pricing/PriceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/schema";
import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { generatedMacroImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Autoschlüssel Wetzlar | Schlüsseldienst",
 description: "KfZ-Schlüssel kaputt oder verloren? Wir reparieren und programmieren Gehäuse und Elektronik von Autoschlüsseln in Wetzlar. ✔️ Schnell & Günstig",
 path: "/leistungen/autoschluessel",
 exactTitle: true,
});

export default function AutoschluesselPage() {
  const serviceTestimonials = getTestimonialsByService("autoschluessel");
  const testimonialsToDisplay = serviceTestimonials.length >= 3 ? serviceTestimonials : getAllTestimonials();

 const breadcrumbs = [
  { name: "Leistungen", href: "/leistungen" },
  { name: "Autoschlüssel Programmierung", href: "/leistungen/autoschluessel" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "Autoschlüssel Programmierung & Reparatur",
      description: "Reparatur, Gehäusetausch und Neuprogrammierung von KFZ-Schlüsseln in Wetzlar.",
      url: "/leistungen/autoschluessel",
      price: 45
     }))
    }}
   />
   
   {/* Hero Section Ultrathink V2 Glassmorphism */}
   <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
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
       { question: "Reparieren Sie alle Autoschlüssel?", answer: "Wir können für die meisten gängigen Marken neue Transponder programmieren und Gehäuse austauschen." },
       { question: "Muss das Auto vor Ort sein?", answer: "Für die Neuprogrammierung des Transponders bzw. der Wegfahrsperre muss das Fahrzeug zwingend bei uns vor Ort sein." },
       { question: "Was kostet ein neuer Autoschlüssel?", answer: "Abhängig vom Fahrzeugmodell starten einfache Autoschlüssel bei uns ab ca. 45€." },
      ]))
     }}
    />
    {/* Background Atmosphere increased visibility */}
    <div className="absolute inset-0 opacity-[0.18] sm:opacity-[0.22] bg-[url(/images/bg-autoschluessel.png)] bg-cover bg-center"></div>
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
            KfZ-Schlüssel & Transponder Service
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.15] mb-4 sm:mb-6">
              Autoschlüssel{" "}
              <span className="text-[var(--color-red-500)]">reparieren & codieren.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto" style={{ hyphens: "auto" }} lang="de">
              Gehäuse kaputt? Tasten defekt? Zweitschlüssel benötigt? Wir programmieren und reparieren Transponder-Schlüssel schnell und oft günstiger als im Autohaus direkt in Wetzlar.
            </p>
          </div>
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

   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Dienstleistung</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Unser <span className="text-[var(--color-red-500)]">Autoschlüssel-Service</span>
       </h2>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Sie müssen nicht zwingend teures Geld im Autohaus lassen. Mit unserer Ausrüstung können wir Fehler auslesen, Chips programmieren und defekte Gehäuse wechseln. Kommen Sie mit Fahrzeug und allen restlichen Schlüsseln zu unserem Shop!
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-red-500)]/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-red-500)] animate-pulse"></span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)]">
             Ablauf der Codierung
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
            {["1. Termin direkt vor Ort am Geschäft", "2. Diagnose & Programmierung", "3. Mechanisches Fräsen bei Bedarf"].map((item, idx) => (
              <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] items-center">
                <Check className="w-6 h-6 text-[var(--color-red-500)] shrink-0" />
                <span className="font-semibold text-gray-800 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </StaggerItem>
     </StaggerReveal>

     <div className="pt-16 border-t border-[var(--border-subtle)]">
      <StaggerReveal className="" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="text-center mb-12">
         <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Preise</Badge>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1]">
           Transparente <span className="relative inline-block"><span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-red-100)] -z-10 -rotate-1 rounded-sm"></span>Konditionen</span>
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          <PriceCard
            title="Gehäusetausch"
            price={"ab 15"}
            description="Austausch von kaputten Knöpfen und Plastikschalen."
            features={["Erhält Original-Elektronik","Günstig und schnell","Fühlt sich an wie neu",
            ]}
          />
          <PriceCard
            title="Ersatzschlüssel"
            price={"ab 45"}
            description="Neuer Funkschlüssel inkl. Programmierung."
            features={["Transponder codiert","Zentralverriegelung inkl.","Viele Marken möglich",
            ]}
            isPopular={true}
          />
          <PriceCard
            title="Sonderfälle"
            price={"Auf Anfrage"}
            description="Schlüssel komplett verloren (Alle Schlüssel weg)."
            features={["Komplett neue Codierung","Löschen alter Schlüssel","Individuelle Diagnose",
            ]}
          />
        </div>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Unsere Google Reviews" subtitle="Das sagen unsere Kunden" />

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
        <FAQAccordion question="Reparieren Sie alle Autoschlüssel?" answer="Wir können für die meisten gängigen Marken (wie VW, Audi, BMW, Mercedes, Opel, Ford) neue Transponder programmieren und Gehäuse austauschen. Rufen Sie am besten vorher an, um Ihr exaktes Modell durchzugeben." />
        <FAQAccordion question="Muss das Auto vor Ort sein?" answer="Für die Neuprogrammierung des Transponders bzw. der Wegfahrsperre muss das Fahrzeug zwingend bei uns vor Ort am Laden stehen, sonst können wir den Schlüssel nicht am Fahrzeug anlernen." />
        <FAQAccordion question="Was kostet ein neuer Autoschlüssel?" answer="Abhängig vom Modell starten neu gefräste und programmierte Autoschlüssel bei uns ab ca. 45€. Ein reiner Gehäusetausch ist deutlich günstiger." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   <RelatedServices currentServiceId="autoschluessel" />
   <PersonalizedCTA />
   <FinalCTA headline="Schlüssel kaputt? Wir reparieren ihn." benefits={["Programmierung und Gehäusetausch","Alle gängigen Fahrzeugmarken","Schneller Service ohne Wartezeit"]} buttonText="KFZ-Schlüssel reparieren lassen" socialProof="Spezialisiert auf Autoschlüssel aller Art" subtitle="Codierung · Elektronik · Sofort-Reparatur" />
  </div>
 );
}

export const dynamic = "force-static";
