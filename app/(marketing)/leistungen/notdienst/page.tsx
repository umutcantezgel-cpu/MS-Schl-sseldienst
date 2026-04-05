import { Clock, Navigation2, CheckCircle2, Phone, CalendarDays } from "lucide-react";
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
import { generatedServiceImages, generatedLocalImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
  title: "Schlüsselnotdienst Wetzlar | 24/7 Notfallhilfe",
  description: "Ausgesperrt? ✔️ Wir sind Ihr lokaler 24/7 Notdienst für Wetzlar. ✔️ In 20-30 Minuten vor Ort. Auch am Wochenende & nachts faire Preise! 📞 06441-8056279",
  path: "/leistungen/notdienst",
  exactTitle: true,
});

export default function NotdienstPage() {
  const serviceTestimonials = getTestimonialsByService("notdienst");
  const testimonialsToDisplay = serviceTestimonials.length >= 2 ? serviceTestimonials : getAllTestimonials();

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "24/7 Schlüsselnotdienst",
      description: "Bereitschaftsdienst für Türöffnungen und Autoöffnungen in Wetzlar rund um die Uhr, 365 Tage im Jahr.",
      url: "/leistungen/notdienst",
      price: 50
     }))
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema([
      { question: "Ist der Notdienst an Feiertagen im Einsatz?", answer: "Ja, unser Service ist 365 Tage im Jahr besetzt, einschließlich aller gesetzlichen Feiertage, Weihnachten und Silvester." },
      { question: "Gibt es hohe Nachtzuschläge?", answer: "Wir kommunizieren unsere Preise (inklusive eventueller Wochenend- und Nachtzuschläge) immer transparent im Voraus am Telefon." },
      { question: "Lande ich nachts bei einem Call-Center?", answer: "Nein, Sie sprechen direkt mit einem zuständigen Monteur aus Wetzlar, der sofort aufbricht, um Ihnen zu helfen." },
     ])),
    }}
   />

   {/* Hero Section */}
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-gray-900 to-[#121212] overflow-hidden text-white">
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={[{ name: "Notdienst", href: "/leistungen/notdienst" }]} light={true} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-transparent text-white bg-[var(--color-red-500)] pl-1.5 py-1.5 mx-auto font-bold tracking-wide">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Lokaler Notdienst jetzt im Einsatz
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-white leading-[1.05] text-balance mb-[var(--space-6)]">
            Rund um die Uhr <span className="text-[var(--color-red-500)]">für Sie da.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-gray-300 leading-relaxed font-medium">
            Ein Notfall kennt keine Feierabendzeiten. Aus diesem Grund ist unser Notdienst-Telefon 365 Tage im Jahr, 24 Stunden am Tag für die Region Wetzlar besetzt.
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
       <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Immer ansprechbar. Niemals Callcenter.
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-[18px] text-[color:var(--text-secondary)] leading-relaxed mb-12 font-medium">
         Transparenz und absolute Verlässlichkeit. Wo viele Dienstleister Sie nachts stundenlang warten lassen, machen wir uns lokal von Lahnau aus sofort auf den Weg nach Wetzlar und Umgebung.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-lg transition-all duration-300">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
          <Navigation2 className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">
           Regionale Stationierung
          </h3>
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Wir sind ein echter Dienstleister aus der Region. Das bedeutet keine langen Autobahnfahrten von Frankfurt aus: in 15 bis 30 Minuten sind wir bei Ihnen.
          </p>
         </div>
        </div>

        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-red-50 border border-red-100 hover:shadow-lg transition-all duration-300">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white">
          <Phone className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">
           Verbindliche Preisnennung
          </h3>
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Rufen Sie uns an: Wir schätzen das Problem direkt mit Ihnen ein und nennen Ihnen einen fairen, fixen Preis für die Öffnung.
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
         <Badge variant="outline" className="mb-4 text-blue-600 bg-blue-50 border-blue-200 tracking-widest font-bold">SCHICHTBETRIEB</Badge>
         <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
           Wann wir für Sie Einsatzbereit sind
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {["Alltagsniederlassung (Mo-Fr)", "Schichtbetrieb (Mo-So, Tag/Nacht)", "Wochenend-Notdienst (Sa & So)", "Feiertagsbereitschaft (Weihnachten etc.)", "Regional stationiert in Lahnau / Wetzlar", "Zerstörungsfreie Methoden auch bei Nacht"].map((item, idx) => (
            <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white border border-[var(--border-subtle)] items-center">
              <CalendarDays className="w-6 h-6 text-blue-500 shrink-0" />
              <span className="font-semibold text-gray-800 text-[16px]">{item}</span>
            </li>
          ))}
        </ul>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Notdienst-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[6]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedLocalImages[0]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen Nachtdienst" subtitle="Wir lassen niemanden in der Kälte stehen" />

   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen Notdienst
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Ist der Notdienst an Feiertagen im Einsatz?" answer="Ja, unser Service ist 365 Tage im Jahr besetzt, einschließlich aller gesetzlichen Feiertage, Weihnachten und Silvester." />
        <FAQAccordion question="Gibt es hohe Nachtzuschläge?" answer="Wir kommunizieren unsere Preise (inklusive ortsüblicher Wochenend- und Nachtzuschläge) immer transparent im Voraus am Telefon. Sie erleben bei uns keine bösen Überraschungen." />
        <FAQAccordion question="Lande ich nachts bei einem Call-Center?" answer="Nein, Sie sprechen direkt mit einem zuständigen Monteur aus unserem Regionalteam, der sofort aufbricht, um Ihnen zu helfen." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   <RelatedServices currentServiceId="notdienst" />
   <PersonalizedCTA />
   <FinalCTA />
  </div>
 );
}

export const dynamic = "force-static";
