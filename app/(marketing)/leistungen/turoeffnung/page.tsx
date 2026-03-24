import { DoorOpen, Check, Clock, ShieldCheck, Phone, HelpCircle } from"lucide-react";
import { Badge } from"@/components/ui/badge";
import FinalCTA from"@/components/ui/FinalCTA";
import dynamic from"next/dynamic";
const PersonalizedCTA = dynamic(() => import("@/components/growth/PersonalizedCTA"));
import Link from"next/link";
import RelatedServices from"@/components/RelatedServices";
import Breadcrumbs from"@/components/Breadcrumbs";
import ProcessSteps from"@/components/trust/ProcessSteps";
import TrustStrip from"@/components/trust/TrustStrip";
import ReviewsSection from"@/components/reviews/ReviewsSection";
import PriceCard from"@/components/pricing/PriceCard";
import FAQAccordion from"@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateHowToSchema } from"@/lib/schema";
import { getFAQSchema } from"@/lib/faqSchema";
import { generateServiceSchema } from"@/lib/serviceSchema";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title:"Türöffnung — Beschädigungsfrei & Festpreis",
 description:"Zugefallene oder verschlossene Tür? Professionelle Türöffnung in Wetzlar und Umgebung ohne Schäden. 24/7 Notdienst, in 15-30 Min. vor Ort.",
 path:"/leistungen/turoeffnung",
});

export default function TuroeffnungPage() {
 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title:"Türöffnung",
      description:"Zerstörungsfreie Türöffnung ab 50€",
      url:"/leistungen/turoeffnung",
      price: 50
     }))
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateHowToSchema("Türöffnung in Wetzlar — So funktioniert der Ablauf","Schlüsseldienst Wetzlar öffnet zugefallene und abgesperrte Türen in Wetzlar und Umgebung zum Festpreis — zerstörungsfrei in 99% der Fälle, innerhalb von 15–30 Minuten."
     )),
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema([
      { question:"Was kostet eine Türöffnung in Wetzlar?", answer:"Schlüsseldienst Wetzlar öffnet zugefallene Türen ab 50 Euro und abgesperrte Türen ab 80 Euro zum Festpreis — ohne versteckte Kosten und ohne Anfahrtsgebühren." },
      { question:"Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?", answer:"Schlüsseldienst Wetzlar ist in 15–30 Minuten bei Ihnen — 24/7, auch nachts, an Wochenenden und Feiertagen." },
      { question:"Wird die Tür bei der Öffnung beschädigt?", answer:"In 99% der Fälle öffnet Schlüsseldienst Wetzlar Ihre Tür zerstörungsfrei mit Spezialwerkzeug." },
     ])),
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
    {/* Background Atmosphere */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
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
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-[color:var(--text-secondary)] leading-relaxed">
            Wir bringen Sie sicher und beschädigungsfrei in unter 25 Minuten zurück in Ihre Wohnung. Ehrliche Festpreise ab 50 € – garantiert ohne versteckte Kosten.
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
       <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Ausgesperrt? Keine Panik!
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-[18px] text-[color:var(--text-secondary)] leading-relaxed mb-12">
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
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
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
          <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">
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
        <ol className="list-decimal pl-5 space-y-4 text-[18px] text-[color:var(--text-secondary)] m-0 font-medium">
         <li className="pl-2">Bewahren Sie Ruhe. Versuchen Sie nicht, die Tür gewaltsam zu öffnen.</li>
         <li className="pl-2">Prüfen Sie, ob ein Fenster offen steht oder ein Zweitschlüssel bei Nachbarn hinterlegt ist.</li>
         <li className="pl-2">Rufen Sie uns an: <a href="tel:+4964418056544" className="font-bold text-[var(--color-red-500)] hover:text-[color:var(--color-red-600)] hover:underline transition-colors inline-block ml-1">06441 8056544</a></li>
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
         <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
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
   <ProcessSteps />

   {/* 5. Proof (Bewertungen) */}
   <ReviewsSection />

   {/* 6. FAQ (Spezifisch für Türöffnung) */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen zur Türöffnung
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Was kostet eine Türöffnung in Wetzlar?" answer="Schlüsseldienst Wetzlar öffnet zugefallene Türen ab 50 Euro und abgesperrte Türen ab 80 Euro zum Festpreis — ohne versteckte Kosten und ohne Anfahrtsgebühren." />
        <FAQAccordion question="Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?" answer="Wir sind in der Regel in 15–30 Minuten bei Ihnen vor Ort in Wetzlar und Umgebung." />
        <FAQAccordion question="Wird die Tür bei der Öffnung beschädigt?" answer="In 99% der Fälle öffnet Schlüsseldienst Wetzlar Ihre Tür zerstörungsfrei mit Spezialwerkzeug." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* 7. Final CTA */}
   <RelatedServices currentServiceId="turoeffnung" />
   <PersonalizedCTA />
   <FinalCTA />
  </div>
 );
}
