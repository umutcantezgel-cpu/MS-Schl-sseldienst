import { Check } from"lucide-react";
import { Badge } from"@/components/ui/badge";
import FinalCTA from"@/components/ui/FinalCTA";
import RelatedServices from"@/components/RelatedServices";
import Breadcrumbs from"@/components/Breadcrumbs";
import ProcessSteps from"@/components/trust/ProcessSteps";
import TrustStrip from"@/components/trust/TrustStrip";
import ReviewsSection from"@/components/reviews/ReviewsSection";
import PriceCard from"@/components/pricing/PriceCard";
import FAQAccordion from"@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateServiceSchema } from"@/lib/serviceSchema";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title:"Schlüssel nachmachen — Sofort-Service",
 description:"Ersatzschlüssel aller Art direkt vor Ort in Wetzlar anfertigen lassen. Von Haustür bis Autoschlüssel.",
 path:"/leistungen/schluessel-nachmachen",
});

export default function SchluesselNachmachenPage() {
 const breadcrumbs = [
  { name:"Leistungen", href:"/leistungen" },
  { name:"Schlüssel nachmachen", href:"/leistungen/schluessel-nachmachen" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title:"Schlüssel nachmachen",
      description:"Ersatzschlüssel aller Art direkt vor Ort anfertigen lassen.",
      url:"/leistungen/schluessel-nachmachen",
      price: 8.5
     }))
    }}
   />
   
   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[var(--space-64)] lg:pt-[220px] lg:pb-[var(--space-96)] bg-[var(--color-charcoal-900)] overflow-hidden">
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
      <Breadcrumbs items={breadcrumbs} light={true} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="hero" className="mb-[var(--space-6)] border-white/20 text-white bg-white/[0.08] backdrop-blur-md pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]"></span>
            </span>
            Sofort-Service im Ladenlokal
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight text-white leading-[1.1] text-balance mb-[var(--space-6)]">
            Der perfekte Ersatzschlüssel <br /><span className="text-[var(--color-red-500)]">in Rekordzeit.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-white/80 leading-relaxed">
            Vom einfachen Haustürschlüssel bis zum Autoschlüssel: Wir fertigen Ihr passgenaues Duplikat direkt vor Ort. Sparen Sie Zeit und Nerven mit unserem Präzisionsservice.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* 2. Trust-Bar */}
   <div className="relative z-20 -mt-8">
    <TrustStrip />
   </div>

   {/* Content Section */}
   <section className="px-[var(--section-px)] py-[var(--section-py)] relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[var(--text-primary)] leading-tight mb-6">So einfach geht&apos;s bei uns</h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-[18px] text-[var(--text-secondary)] leading-relaxed mb-12">
        Wir bieten Ihnen eine schnelle und präzise Anfertigung von Ersatzschlüsseln für fast alle Schlosstypen mit modernsten Fräsmaschinen. Kommen Sie einfach in unserem Geschäft vorbei.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <h3 className="text-[24px] font-bold text-[var(--text-primary)] mb-6">Der Ablauf vor Ort</h3>
          <ul className="space-y-6 text-[18px] text-[var(--text-secondary)] m-0 font-medium">
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>1. Bringen Sie Ihr Original:</strong> Kommen Sie einfach während der Öffnungszeiten mit dem zu kopierenden Schlüssel vorbei.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>2. Warten Sie kurz:</strong> Die meisten Standard-Schlüssel fräsen wir direkt vor Ihren Augen in wenigen Minuten.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[var(--color-red-500)] mt-0.5"><Check className="h-4 w-4" /></div>
              <span><strong>3. Fertiges Duplikat:</strong> Sie erhalten Ihren passgenauen Ersatzschlüssel zu fairen und transparenten Preisen.</span>
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
         <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Übersicht</Badge>
         <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
           Welche Schlüssel wir nachmachen
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          <PriceCard
            title="Standard-Schlüssel"
            price={8.5}
            description="Zimmer-, Briefkasten- und normale Haustürschlüssel."
            features={["Sofort-Mitnahme","Präzise Kopie","Passgenauigkeit",
            ]}
            isPopular={true}
          />
          <PriceCard
            title="Fahrzeugschlüssel"
            price={45}
            description="Ersatzschlüssel für Autos und Motorräder."
            features={["Moderne Transponder","Auch mit Wegfahrsperre","Schneller als Autohaus",
            ]}
          />
          <PriceCard
            title="Sicherheits-Schlüssel"
            price={"Auf Anfrage"}
            description="Geschützte Schließanlagen und Sicherheitsschlösser."
            features={["Sicherungskarte nötig","Bestellung beim Hersteller","Höchste Sicherheit",
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

   {/* 6. FAQ (Spezifisch für Schlüssel nachmachen) */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[var(--text-primary)] text-center mb-12">
        Häufige Fragen
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Wie lange dauert das Nachmachen eines Schlüssels?" answer="Die meisten Standard-Schlüssel werden direkt vor Ort in wenigen Minuten gefräst. Sie können darauf warten und sie sofort mitnehmen." />
        <FAQAccordion question="Was benötige ich für Sicherheitsschlüssel?" answer="Für Schlüssel, die zu einer geschützten Schließanlage gehören, benötigen wir zwingend die entsprechende Sicherungskarte im Original. Ohne diese dürfen wir das Duplikat gesetzlich nicht anfertigen." />
        <FAQAccordion question="Können Sie abgebrochene Schlüssel nachmachen?" answer="Oft ja, wenn beide Teile vorhanden sind. Wir können ein Profil auslesen und oft erfolgreich eine Kopie erstellen, auch wenn der Originalschlüssel in zwei Teilen ist." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* 7. Final CTA */}
   <RelatedServices currentServiceId="schluessel-nachmachen" />
   <FinalCTA />
  </div>
 );
}
