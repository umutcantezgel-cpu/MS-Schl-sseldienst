import { ShieldCheck, CheckCircle2 } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import nextDynamic from"next/dynamic";
const PriceEstimator = nextDynamic(() => import("@/components/growth/PriceEstimator"));
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";

const PricingCalculator = nextDynamic(() => import("@/components/pricing/PricingCalculator"), {
 loading: () => (
  <div className="w-full max-w-2xl mx-auto h-[600px] bg-[var(--surface-primary)] rounded-[var(--radius-24)] shadow-[var(--elevation-1)] animate-pulse flex items-center justify-center p-8 mt-12">
   <div className="flex flex-col items-center gap-4">
    <div className="w-16 h-16 rounded-full bg-[var(--surface-secondary)]"></div>
    <div className="h-6 w-48 bg-[var(--surface-secondary)] rounded-full"></div>
    <div className="h-4 w-32 bg-[var(--surface-secondary)] rounded-full mt-2"></div>
   </div>
  </div>
 )
});
import PricingFAQ, { faqs } from"@/components/pricing/PricingFAQ";
import Breadcrumbs from"@/components/Breadcrumbs";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages } from "@/lib/data/imageAssets";
import { generateServiceSchema } from"@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/schema";

const mainServicesSchema = [
 generateServiceSchema({ title:"Türöffnung", description:"Zerstörungsfreie Türöffnung ab 99€", url:"/leistungen/turoeffnung", price: 99 }),
 generateServiceSchema({ title:"Autoöffnung", description:"Schonende Autoöffnung", url:"/leistungen/autooeffnung", price: 80 })
];

export const metadata = generateSharedMetadata({
 title: "Preise & Kosten | Schlüssel Schmiede Wetzlar",
 description: "Türöffnung ab 99€! ✔️ 100% Festpreis-Garantie in Wetzlar ✔️ Keine versteckten Gebühren. Jetzt transparenten Preis im Rechner prüfen.",
 path: "/preise",
});

export default function PreisePage() {
 const breadcrumbs = [
  { name:"Preise", href:"/preise" }
 ];

 return (
  <div className="bg-[var(--surface-secondary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(mainServicesSchema) }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
   />

   {/* Hero Section und Premium Dark */}
   <section className="relative min-h-[100svh] min-h-[100dvh] lg:min-h-[60vh] flex items-center pt-[100px] pb-8 sm:pt-[140px] sm:pb-[var(--space-24)] lg:pt-[200px] lg:pb-[var(--space-32)] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    {/* Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:"radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-[color:var(--text-secondary)] text-sm font-medium tracking-wide">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-success)]" />
            <span>Garantiert keine versteckten Kosten</span>
          </div>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="typo-hero-display text-[color:var(--text-primary)] mb-[var(--space-6)]">
            Ehrliche <span className="text-[var(--color-red-500)]">Festpreise</span> für Ihren Schlüsseldienst
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance">
            Wir hassen versteckte Gebühren. Berechnen Sie Ihren verbindlichen Endpreis für Wetzlar in unter 3 Sekunden.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--surface-secondary)] pointer-events-none z-[1]" />
   </section>

   {/* Calculator Section */}
   <section className="px-[var(--section-px)] pt-12 lg:pt-16 pb-[var(--section-py)] relative z-20 bg-[var(--surface-secondary)]">
    <StaggerReveal animation={entryAnimations.slideUpFade}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <PricingCalculator />
      </StaggerItem>
    </StaggerReveal>
   </section>

   {/* Additional Guarantees / Trust */}
   <section className="px-[var(--section-px)] py-[var(--section-py)] bg-white">
    <StaggerReveal className="mx-auto max-w-3xl text-center" animation={entryAnimations.scaleFade}>
     <StaggerItem animation={entryAnimations.scaleFade}>
      <div className="w-16 h-16 rounded-2xl bg-[var(--color-red-500)]/10 flex items-center justify-center mx-auto mb-6">
        <ShieldCheck className="h-8 w-8 text-[var(--color-red-500)]" />
      </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.scaleFade}>
      <h2 className="typo-h2 text-[color:var(--text-primary)]">
        Ihre Sicherheit: Unsere Festpreisgarantie
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.scaleFade}>
      <p className="mt-6 text-lg text-[color:var(--text-secondary)] leading-relaxed">
        Der Preis, den Ihnen der Monteur vor Ort nach der Besichtigung der Tür nennt, ist ein verbindlicher Festpreis. Es kommen keine Fantasie-Gebühren für &quot;Spezialwerkzeuge&quot; oder &quot;Erschwerniszulagen&quot; im Nachhinein dazu.
      </p>
     </StaggerItem>

     {/* Was ist im Preis enthalten? */}
     <StaggerItem animation={entryAnimations.scaleFade}>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
       {[
        { label:"An- & Abfahrt", desc:"Im Wetzlarer Kerngebiet kostenlos", icon:"M1 6v14h22V6H1zm1 1h20v12H2V7zM8 10H5v1h3v-1zM8 12.5H5v1h3v-1zm11 .5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
        { label:"Spezialtechnik", desc:"Endoskop und zerstörungsfreies Werkzeug", icon:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" },
        { label:"Komplette Arbeit", desc:"Öffnung, Prüfung und Funktionstest", icon:"M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" },
        { label:"Dokumentation", desc:"Saubere Rechnung mit MwSt.", icon:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" },
       ].map((item, i) => (
        <div key={i} className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-xl p-5 text-center hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="w-10 h-10 rounded-lg bg-[var(--color-red-500)]/10 flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-[var(--color-red-500)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
           <path d={item.icon} />
          </svg>
         </div>
         <h3 className="text-base font-bold text-[color:var(--text-primary)] mb-1">{item.label}</h3>
         <p className="text-sm text-[color:var(--text-tertiary)]">{item.desc}</p>
        </div>
       ))}
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* Phase 18 und Quick Price Estimator */}
   <section className="px-[var(--section-px)] py-[var(--section-py)] bg-[var(--surface-secondary)]">
    <div className="mx-auto max-w-2xl">
     <h2 className="typo-h2 text-[color:var(--text-primary)] text-center mb-2">Schnell-Schätzung</h2>
     <p className="text-center text-[color:var(--text-secondary)] mb-8">In 2 Klicks zur unverbindlichen Preiseinschätzung.</p>
     <PriceEstimator />
    </div>
   </section>

   {/* FAQ Section */}
   <section className="px-[var(--section-px)] py-[var(--section-py)] bg-white">
    <PricingFAQ />
   </section>

   {/* Trust Image */}
   <section className="px-[var(--section-px)] pb-24 md:pb-32 bg-white">
    <div className="mx-auto max-w-4xl rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
     <SeoContentImage image={teamImages[2]!} className="w-full h-[300px] md:h-[400px]" sizes="(max-width: 768px) 100vw, 800px" />
    </div>
   </section>

   <EmergencyCTA />
  </div>
 );
}

export const dynamic = "force-static";
