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
import FAQAccordion from "@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/schema";
import { generateSharedMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = generateSharedMetadata({
 title: "Passbilder Wetzlar | Schlüsseldienst",
 description: "Professionelle Passbilder für Personalausweis, Reisepass, Visum oder Führerschein in Wetzlar. Ohne Termin, sofort zum Mitnehmen. 100% biometrisch korrekt.",
 path: "/leistungen/passbilder",
 exactTitle: true,
});

export default function PassbilderPage() {
  const serviceTestimonials = getTestimonialsByService("passbilder");
  const testimonialsToDisplay = serviceTestimonials.length >= 3 ? serviceTestimonials : getAllTestimonials();

 const breadcrumbs = [
  { name: "Leistungen", href: "/leistungen" },
  { name: "Biometrische Passbilder", href: "/leistungen/passbilder" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "Biometrische Passbilder",
      description: "Sofort-Passbilder für Ausweise, Visa und Führerscheine in Wetzlar.",
      url: "/leistungen/passbilder",
      price: 15
     }))
    }}
   />
   
   {/* Hero Section — Ultrathink V2 Glassmorphism */}
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
       { question: "Brauche ich einen Termin für Passbilder?", answer: "Nein, Sie können während unserer Öffnungszeiten jederzeit ohne Termin für Passbilder vorbeikommen." },
       { question: "Wie lange dauern die Passbilder?", answer: "Das Fotografieren und der Druck dauern in der Regel nur 5 bis 10 Minuten. Sie können die Bilder sofort mitnehmen." },
       { question: "Machen Sie auch Bilder für Visa?", answer: "Ja, wir können die Bilder auf die spezifischen Maße und Hintergrundanforderungen für jegliche Visa anpassen (z.B. USA, Indien 5x5cm)." },
      ]))
     }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent z-[1]" />
    {/* Background Atmosphere — increased visibility */}
    <div className="absolute inset-0 opacity-[0.18] sm:opacity-[0.22] bg-[url(/images/generated/schluesseldienst-wetzlar-passbilder-1.webp)] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-0"></div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-6 sm:mt-8 flex flex-col items-center w-full max-w-3xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-5 sm:mb-6 border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Sofort & Ohne Termin
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.15] mb-4 sm:mb-6">
              Biometrische Passbilder{" "}
              <span className="text-blue-600">in Top-Qualität.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto" style={{ hyphens: "auto" }} lang="de">
              Egal ob Personalausweis, Reisepass, Führerschein oder Visum: Wir fotografieren Sie nach den offiziellen biometrischen Vorgaben. Sofort fertig zum Mitnehmen.
            </p>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>
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
         <span className="h-px w-8 bg-blue-500"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Qualität</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Perfekt für alle amtlichen <span className="text-blue-600">Dokumente</span>
       </h2>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        Die Anforderungen an Passbilder sind streng. Gesichtsausdruck, Ausleuchtung, Hintergrund und Kopfposition müssen genau stimmen. Wir haben die Technik und Erfahrung, um sofort akzeptierte Bilder für Ihre Dokumente zu erstellen.
       </p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group flex items-center gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-tight text-[color:var(--text-primary)] mb-1 group-hover:text-blue-600 transition-colors">Personalausweis</h4>
              <p className="text-base text-[color:var(--text-secondary)] m-0">Offiziell biometrisch, 3.5 x 4.5 cm</p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16 4.6V3.86a2.92 2.92 0 0 0-.86-2.25v0c-.6-.6-1.4-.93-2.25-.93h-.86L9.36 3.34c-.16.16-.3.34-.43.53"/><path d="M7 6.5 17.5 17"/></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-tight text-[color:var(--text-primary)] mb-1 group-hover:text-blue-600 transition-colors">Reisepass</h4>
              <p className="text-base text-[color:var(--text-secondary)] m-0">Weltweit gültig, EU Standard</p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-tight text-[color:var(--text-primary)] mb-1 group-hover:text-blue-600 transition-colors">Führerschein</h4>
              <p className="text-base text-[color:var(--text-secondary)] m-0">Für den neuen EU-Führerschein</p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-tight text-[color:var(--text-primary)] mb-1 group-hover:text-blue-600 transition-colors">Visa & Specials</h4>
              <p className="text-base text-[color:var(--text-secondary)] m-0">Z.B. USA Visum 5x5 cm / Elektronisch</p>
            </div>
          </div>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 border border-blue-100 mb-16 relative overflow-hidden">
          <h3 className="text-[24px] font-bold text-[color:var(--text-primary)] mb-6">4 Bilder - Ein Preis</h3>
          <p className="text-xl font-bold mb-4">Nur 15,- €</p>
          <ul className="space-y-4 text-lg text-[color:var(--text-secondary)] m-0 font-medium">
            <li className="flex items-start gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1"><Check className="h-4 w-4" /></div>
              <span>4 Passbilder gedruckt</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1"><Check className="h-4 w-4" /></div>
              <span>Sofortprüfung der Ausleuchtung und Position</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1"><Check className="h-4 w-4" /></div>
              <span>Digitaler Versand der biometrischen Datei (+5€)</span>
            </li>
          </ul>
        </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen" subtitle="Das sagen Kunden über unsere Bilder" />

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
           Häufige Fragen zu <span className="text-[color:var(--text-primary)]">Passbildern</span>
         </h2>
       </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Brauche ich einen Termin?" answer="Nein, Sie können für biometrische Passbilder einfach während unserer Öffnungszeiten vorbeikommen. Es dauert nur wenige Minuten." />
        <FAQAccordion question="Kann ich die Bilder sofort mitnehmen?" answer="Ja! Wir fotografieren Sie und drucken die Bilder sofort aus. Sie können sie nach wenigen Minuten mit nach Hause nehmen oder direkt zur Behörde gehen." />
        <FAQAccordion question="Können Sie auch digitale Passbilder erstellen?" answer="Ja, oft benötigen Sie für Online-Anträge Ihr biometrisches Passbild digital. Wir können Ihnen das Bild im richtigen Format per E-Mail zusenden." />
        <FAQAccordion question="Was ziehe ich am besten an?" answer="Ziehen Sie nicht unbedingt weiße Oberteile an, da der Hintergrund laut Vorschrift hell (hellgrau) sein muss. Ein farbiges oder dunkles Oberteil hebt sich besser ab." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   <RelatedServices currentServiceId="passbilder" />
   <PersonalizedCTA />
   <FinalCTA headline="Passbilder? Sofort und biometrisch." benefits={["100% biometrisch korrekte Fotos","Ohne Termin im Laden in Wetzlar","Für Reisepass, Personalausweis und Visum"]} buttonText="Jetzt Passbilder machen" socialProof="Tausende zufriedene Kunden im Laden" subtitle="Langgasse 70 · Sofort-Service · Montags bis Samstags" />
  </div>
 );
}

export const dynamic = "force-static";
