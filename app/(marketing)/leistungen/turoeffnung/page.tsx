import { DoorOpen, Check, Clock, ShieldCheck, Phone, HelpCircle } from"lucide-react";
import { Badge } from"@/components/ui/badge";
import FinalCTA from"@/components/ui/FinalCTA";
import nextDynamic from"next/dynamic";
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
import Link from"next/link";
import RelatedServices from"@/components/RelatedServices";
import Breadcrumbs from"@/components/Breadcrumbs";
import ProcessSteps from"@/components/trust/ProcessSteps";
import TrustStrip from"@/components/trust/TrustStrip";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getTestimonialsByService, getAllTestimonials } from "@/lib/data/testimonials";
import PriceCard from"@/components/pricing/PriceCard";
import FAQAccordion from"@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateHowToSchema } from"@/lib/schema";
import { getFAQSchema } from "@/lib/schema";
import { generateServiceSchema } from"@/lib/serviceSchema";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { tueroeffnungImages, schlossImages, generatedServiceImages, generatedHeroImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
  title: "Türöffnung Wetzlar | Schlüsseldienst",
  description: "Zugefallen oder abgeschlossen? ✔️ Zerstörungsfreie Türöffnung zu 99% ✔️ Zertifizierter Meisterbetrieb in Wetzlar. In ca. 20-30 Min. vor Ort. 📞 06441-8056279",
  path: "/leistungen/turoeffnung",
  exactTitle: true,
});

export default function TuroeffnungPage() {
  const serviceTestimonials = getTestimonialsByService("turoeffnung");
  const testimonialsToDisplay = serviceTestimonials.length >= 3 ? serviceTestimonials : getAllTestimonials();

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title:"Türöffnung",
      description:"Zerstörungsfreie Türöffnung ab 99€",
      url:"/leistungen/turoeffnung",
      price: 99
     }))
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateHowToSchema("Türöffnung in Wetzlar und So funktioniert der Ablauf","Schlüssel Schmiede Wetzlar öffnet zugefallene und abgesperrte Türen in Wetzlar und Umgebung zum Festpreis und zerstörungsfrei in 99% der Fälle, innerhalb von 15–30 Minuten."
     )),
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema([
      { question:"Was kostet eine Türöffnung in Wetzlar?", answer:"Schlüssel Schmiede Wetzlar öffnet zugefallene Türen ab 99 Euro und abgesperrte Türen ab 80 Euro zum Festpreis und ohne versteckte Kosten und ohne Anfahrtsgebühren." },
      { question:"Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?", answer:"Schlüssel Schmiede Wetzlar ist in 15–30 Minuten bei Ihnen und 24/7, auch nachts, an Wochenenden und Feiertagen." },
      { question:"Wird die Tür bei der Öffnung beschädigt?", answer:"In 99% der Fälle öffnet die Schlüssel Schmiede Wetzlar Ihre Tür zerstörungsfrei mit Spezialwerkzeug." },
     ])),
    }}
   />

   {/* Hero Section und Premium Dark */}
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    {/* Background Atmosphere */}
    <div className="absolute inset-0 opacity-10 bg-[url(/images/generated/schluesseldienst-wetzlar-zerstoerungsfreie-tueroeffnung-werkzeug.webp)] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-900)] to-transparent opacity-80 z-0"></div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={[{ name:"Türöffnung", href:"/leistungen/turoeffnung" }]} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]"></span>
            </span>
            Notdienst Wetzlar jetzt im Einsatz
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-[color:var(--text-primary)] leading-[1.05] text-balance mb-[var(--space-6)]">
            Schnell wieder <span className="text-[var(--color-red-500)]">im Warmen.</span> <br />Türöffnung in Wetzlar.
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed">
            Wir bringen Sie sicher und beschädigungsfrei in unter 25 Minuten zurück in Ihre Wohnung. Ehrliche Festpreise ab 99 € und garantiert ohne versteckte Kosten.
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

   {/* 3. Problem-Analyse */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Ausgesperrt? Keine Panik!
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Es passiert schneller, als man denkt: Ein kurzer Moment der
        Unachtsamkeit, ein Windstoß, und die Tür fällt ins Schloss. Der
        Schlüssel steckt von innen oder liegt noch auf dem Küchentisch. In
        solchen Momenten brauchen Sie einen zuverlässigen Partner, der
        schnell vor Ort ist und das Problem professionell löst.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <DoorOpen className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">
           Zugefallene Türen
          </h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Eine nur ins Schloss gefallene Tür öffnen wir mit
           Spezialwerkzeug in der Regel innerhalb weniger Minuten und
           zu 99% ohne jegliche Beschädigung an Schloss oder Zylinder.
          </p>
         </div>
        </div>

        <div className="flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <ShieldCheck className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">
           Verschlossene Türen
          </h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">
           Auch wenn die Tür abgeschlossen ist oder der Schlüssel
           abgebrochen ist, helfen wir kompetent. Hierbei muss der
           Zylinder oft aufgebohrt werden, wir haben jedoch immer
           passenden Ersatz dabei.
          </p>
         </div>
        </div>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
        <h3 className="text-[24px] font-bold text-[color:var(--text-primary)] mb-6">
         Was tun, wenn die Tür zu ist?
        </h3>
        <ol className="list-decimal pl-5 space-y-4 text-lg text-[color:var(--text-secondary)] m-0 font-medium">
         <li className="pl-2">Bewahren Sie Ruhe. Versuchen Sie nicht, die Tür gewaltsam zu öffnen.</li>
         <li className="pl-2">Prüfen Sie, ob ein Fenster offen steht oder ein Zweitschlüssel bei Nachbarn hinterlegt ist.</li>
         <li className="pl-2">Rufen Sie uns an: <a href="tel:+4964418056279" className="font-bold text-[var(--color-red-500)] hover:text-[color:var(--color-red-600)] hover:underline transition-colors inline-block ml-1">06441 8056279</a></li>
         <li className="pl-2">Wir nennen Ihnen einen verbindlichen Festpreis und machen uns sofort auf den Weg.</li>
        </ol>
       </div>
      </StaggerItem>
     </StaggerReveal>

     {/* 4. Lösung & Preis-Teaser */}
     <div className="pt-16 border-t border-[var(--border-subtle)]">
      <StaggerReveal className="" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="text-center mb-12">
         <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Preise</Badge>
         <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
           Unsere fairen Festpreise
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        <PriceCard
          title="Tür zugefallen"
          price={50}
          description="Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen."
          features={["Werktags 08-18 Uhr","Zerstörungsfreie Öffnung (99%)","Festpreis vor Ort",
          ]}
          isPopular={true}
        />
        <PriceCard
          title="Tür abgeschlossen"
          price={80}
          description="Schlüssel verloren oder doppelt abgeschlossen."
          features={["Werktags 08-18 Uhr","Profi-Werkzeug Einsatz","Ersatzzylinder zubuchbar (ab 25€)",
          ]}
        />
        </div>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Ablauf & Trust (Process) */}
   {/* Türöffnungs-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[0]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedHeroImages[0]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps headline="So läuft Ihre Türöffnung ab" subtitle="Von Ihrem Anruf bis zur geöffneten Tür – unser bewährter Ablauf für sichere Türöffnungen in Wetzlar." badgeText="ABLAUF TÜRÖFFNUNG" />

   {/* 5. Proof (Bewertungen) */}
   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen zur Türöffnung" subtitle="Geprüfte Bewertungen aus der Region" />

   {/* 6. FAQ (Spezifisch für Türöffnung) */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen zur Türöffnung
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Was kostet eine Türöffnung in Wetzlar?" answer="Schlüssel Schmiede Wetzlar öffnet zugefallene Türen ab 99 Euro und abgesperrte Türen ab 80 Euro zum Festpreis und ohne versteckte Kosten und ohne Anfahrtsgebühren." />
        <FAQAccordion question="Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?" answer="Wir sind in der Regel in 15–30 Minuten bei Ihnen vor Ort in Wetzlar und Umgebung." />
        <FAQAccordion question="Wird die Tür bei der Öffnung beschädigt?" answer="In 99% der Fälle öffnet die Schlüssel Schmiede Wetzlar Ihre Tür zerstörungsfrei mit Spezialwerkzeug." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* Verbraucherinformationen und SEO Authority Links */}
   <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <h2 className="text-[24px] md:text-[28px] font-extrabold tracking-tight text-[color:var(--text-primary)] mb-6">
        Verbraucherinformationen zum Thema Schlüsseldienst
      </h2>
      <p className="text-base text-[color:var(--text-secondary)] leading-relaxed mb-8">
        Informieren Sie sich bei offiziellen Stellen über Ihre Rechte und faire Preise:
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <a href="https://www.verbraucherzentrale-hessen.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Verbraucherzentrale Hessen</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Tipps zum Schutz vor unseriösen Schlüsseldiensten und Ihre Rechte als Verbraucher.</p>
          </div>
        </a>
        <a href="https://www.k-einbruch.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <DoorOpen className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">K-EINBRUCH und Polizeiliche Prävention</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Empfehlungen der Polizei für sichere Türen und Schlösser.</p>
          </div>
        </a>
        <a href="https://www.wetzlar.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Stadt Wetzlar</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Offizielle Informationen und Bürgerservice der Stadt Wetzlar.</p>
          </div>
        </a>
        <a href="https://www.hwk-wiesbaden.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Handwerkskammer Wiesbaden</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Finden Sie geprüfte Handwerksbetriebe in Ihrer Region.</p>
          </div>
        </a>
      </div>
    </div>
   </section>

   {/* 7. Final CTA */}
   <RelatedServices currentServiceId="turoeffnung" />
   <PersonalizedCTA />
   <FinalCTA headline="Tür zugefallen? Wir öffnen sofort." benefits={["Zerstörungsfreie Öffnung in 99% der Fälle","Festpreis ab 99€ ohne Anfahrtskosten","In unter 25 Minuten bei Ihnen"]} buttonText="Türöffnung beauftragen" socialProof="Hunderte Türen in Wetzlar geöffnet" subtitle="Zertifizierter Meisterbetrieb · Festpreise · 24/7" />
  </div>
 );
}

export const dynamic = "force-static";
