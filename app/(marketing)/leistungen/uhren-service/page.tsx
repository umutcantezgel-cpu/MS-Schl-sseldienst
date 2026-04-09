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

export const metadata = generateSharedMetadata({
 title: "Uhren Service Wetzlar | Batteriewechsel & Armbänder",
 description: "Professioneller Uhren-Service in Wetzlar: Schneller Batteriewechsel, Kürzen und Austausch von Uhrenarmbändern. Sofort-Service ohne Termin.",
 path: "/leistungen/uhren-service",
 exactTitle: true,
});

export default function UhrenServicePage() {
  const serviceTestimonials = getTestimonialsByService("uhren");
  const testimonialsToDisplay = serviceTestimonials.length >= 3 ? serviceTestimonials : getAllTestimonials();

 const breadcrumbs = [
  { name: "Leistungen", href: "/leistungen" },
  { name: "Uhren Service", href: "/leistungen/uhren-service" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "Uhren Service & Batteriewechsel",
      description: "Batteriewechsel und Armbandwechsel für Armbanduhren in Wetzlar.",
      url: "/leistungen/uhren-service",
      price: 10
     }))
    }}
   />
   
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
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
       { question: "Wie lange dauert der Batteriewechsel?", answer: "Der reine Batteriewechsel dauert oft nur 5 bis 10 Minuten, Sie können in der Regel darauf warten." },
       { question: "Wechseln Sie auch Batterien von Premium-Marken?", answer: "Da dies auf das genaue Gehäuse ankommt und unter Umständen die Wasserdichtigkeit danach neu geprüft werden muss, begutachten wir Premium-Uhren (z.B. Rolex, Breitling) gerne vorab. Teilweise verweisen wir hierfür direkt auf den Hersteller." },
       { question: "Ist meine Uhr nach dem Batteriewechsel wasserdicht?", answer: "Wir verschließen die Uhr ordnungsgemäß, führen jedoch vor Ort keine zertifizierte Druckprüfung durch. Wer mit seiner Uhr tief taucht, sollte sie in ein spezielles Labor geben." },
      ]))
     }}
    />
    {/* Optional: Add a subtle overlay color for watches */}
    <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 to-transparent z-[1]" />
    
    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
            </span>
            Batterien & Armbänder
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-[color:var(--text-primary)] leading-[1.05] text-balance mb-[var(--space-6)]">
            Uhren-Service <br /> <span className="text-stone-600">Schnell & Einfach.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed">
            Ihre Uhr steht still oder das Armband ist kaputt? Wir wechseln Batterien und tauschen oder kürzen Gliederarmbänder für gängige Uhrenmarken.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>
   </section>

   <div className="relative z-20 w-full px-[var(--space-4)] flex flex-col items-center pointer-events-none mb-12">
    <div className="w-full pointer-events-auto px-4">
     <TrustStrip />
    </div>
   </div>

   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">Wir bringen Ihre Uhr zum Ticken</h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Mit unserem Sofort-Service tauschen wir leere Batterien hochwertiger Knopfzellen-Marken (wie VARTA, Renata) aus und garantieren eine lange Lebensdauer.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mx-auto mb-16">
          <PriceCard
            title="Batteriewechsel"
            price={"ab 10"}
            description="Fachgerechter Tausch der leeren Batterie."
            features={["Marken-Batterien (Renata/Varta)","Sofort Service ohne Termin","Entsorgung der Altbatterie"
            ]}
            isPopular={true}
          />
          <PriceCard
            title="Armband Service"
            price={"ab 15"}
            description="Kürzen und Austausch von Armbändern."
            features={["Glieder kürzen / verlängern","Austausch Leder & Metall","Federstege erneuern"
            ]}
          />
        </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen" subtitle="Was Kunden über unseren Service sagen" />

   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Können Sie jede Uhr öffnen?" answer="Für ca. 95% aller alltagsüblichen Mode- und Quarzuhren (z.B. Casio, Fossil, Michael Kors, Citizen) haben wir das passende Werkzeug, um den Deckel kratzerfrei zu lösen und wieder zu schließen." />
        <FAQAccordion question="Kann ich auf den Wechsel warten?" answer="Ja, der Austausch von Batterie oder das Herausnehmen von Gliedern dauert meist unter 10 Minuten. Sie können währenddessen bei uns im Geschäft warten." />
        <FAQAccordion question="Ist meine Uhr nach dem Batteriewechsel noch wasserdicht?" answer="Der Deckel wird wieder fest auf den bestehenden Dichtungsring gepresst. Wenn Sie mit der Uhr richtig tauchen gehen wollen, empfehlen wir jedoch einen Juwelier, der eine maschinelle zertifizierte Druckprüfung durchführen kann (diese bieten wir aktuell nicht an)." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   <RelatedServices currentServiceId="uhren" />
   <PersonalizedCTA />
   <FinalCTA />
  </div>
 );
}

export const dynamic = "force-static";
