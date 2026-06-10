import { Siren, ShieldAlert, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";
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
import { generatedServiceImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Einbruchschutz Wetzlar | Schlüsseldienst",
 description: "Kostenlose Risiko-Analyse in Wetzlar! ✔️ Tür- und Fensterabsicherung ✔️ VdS-geprüfte Technik ✔️ Soforthilfe nach Einbruch. Rufen Sie uns an!",
 path: "/leistungen/einbruchschutz",
 exactTitle: true,
});

export default function EinbruchschutzPage() {
  const serviceTestimonials = getTestimonialsByService("einbruchschutz");
  const testimonialsToDisplay = serviceTestimonials.length >= 2 ? serviceTestimonials : getAllTestimonials();

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "Einbruchschutz & Soforthilfe",
      description: "Sofortige Absicherung und Reparatur nach Einbrüchen. Umfangreiche Beratung zu mechanischer Sicherheitstechnik.",
      url: "/leistungen/einbruchschutz",
      price: 0
     }))
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema([
      { question: "Was tun nach einem Einbruch?", answer: "Verlassen Sie das Haus, rufen Sie sofort die Polizei (110) und fassen Sie nichts an. Erst nach Freigabe durch die Polizei können wir die Türnotabsicherung durchführen." },
      { question: "Wie schnell können Sie die Tür nach einem Einbruch wieder sichern?", answer: "Wir sind 24/7 über unseren Notdienst erreichbar und innerhalb von 15-30 Minuten vor Ort in Wetzlar, um Einbruchschäden provisorisch abzusichern oder neue Zylinder einzubauen." },
      { question: "Beraten Sie auch zum Thema Einbruchschutz?", answer: "Ja, wir bieten eine direkte Schwachstellenanalyse am Objekt an und installieren VdS-geprüfte Sicherheitstechnik wie Panzerriegel oder Fensterzusatzschlösser." },
     ])),
    }}
   />

   {/* Hero Section Ultrathink V2 Glassmorphism */}
   <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-5 z-0"></div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={[{ name: "Einbruchschutz", href: "/leistungen/einbruchschutz" }]} light={false} />
      
      <StaggerReveal className="mt-6 sm:mt-8 flex flex-col items-center w-full max-w-3xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-5 sm:mb-6 border-transparent text-white bg-[var(--color-red-500)] pl-1.5 py-1.5 mx-auto font-bold tracking-wide">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            24/7 Not-Absicherung
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.15] mb-4 sm:mb-6">
              Soforthilfe bei{" "}
              <span className="text-[var(--color-red-500)]">Einbruchschäden.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto font-medium" style={{ hyphens: "none" }} lang="de">
              Nach einem Einbruch stellen wir sofort die mechanische Sicherheit Ihrer Türen wieder her. Wir reparieren Beschläge, tauschen Schließzylinder aus und beraten Sie präventiv.
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

   {/* Problem-Analyse */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate max-w-none mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Prävention</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Sicherheit auf <span className="text-[var(--color-red-500)]">zwei Säulen</span>
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12 font-medium">
        Unsere Abteilung für Einbruchschutz gliedert sich in zwei wesentliche Phasen: Die Not-Absicherung für Betroffene mitten in der Nacht, und die geplante Präventiv-Absicherung für Hausbesitzer, die vorbauen möchten.
       </p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="group flex flex-col items-center text-center gap-6 p-8 md:p-10 rounded-[32px] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-all duration-300 hover:-translate-y-1">
         <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-colors duration-300">
          <ShieldAlert className="h-10 w-10" strokeWidth={1.5} />
         </div>
         <div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)] mb-4 group-hover:text-[var(--color-red-500)] transition-colors">
           Notfall: Sofort-Reparatur
          </h3>
          <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Aufgebrochene Türen sichern wir provisorisch oder reparieren sie sofort permanent, tauschen Zylinder aus und stellen den Schutz Ihres Eigentums schnellstmöglich wieder her.
          </p>
         </div>
        </div>

        <div className="group flex flex-col items-center text-center gap-6 p-8 md:p-10 rounded-[32px] bg-emerald-50 shadow-[var(--elevation-1)] border border-emerald-100 hover:shadow-[var(--elevation-2)] transition-all duration-300 hover:-translate-y-1">
         <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white group-hover:bg-emerald-600 transition-colors duration-300">
          <Wrench className="h-10 w-10" strokeWidth={1.5} />
         </div>
         <div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)] mb-4 group-hover:text-emerald-600 transition-colors">
           Geplant: Präventivberatung
          </h3>
          <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           Wir prüfen Schwachstellen bei Ihnen vor Ort. Der Großteil aller Einbrüche kann durch den professionellen Einbau von Panzerriegeln oder Fenster-Zusatzschlössern verhindert werden.
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
        <div className="text-center mb-12">
         <Badge variant="outline" className="mb-4 text-emerald-600 bg-emerald-50 border-emerald-200 uppercase tracking-widest font-bold">Unser Know-How</Badge>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mt-4">
           Moderne <span className="relative inline-block"><span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-100 -z-10 -rotate-1 rounded-sm"></span>mechanische</span> Sicherheit
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[100px] pointer-events-none" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
            {["Sicherheitszylinder der VdS-Klassen B & BZ", "Sicherheitsbeschläge mit Kernziehschutz", "Kastenzusatzschlösser & Sperrbügel", "Stangenschlösser für Altbautüren", "Fenster- und Terrassentürabsicherungen", "Beratung komplett vor Ort"].map((item, idx) => (
              <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] items-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="font-semibold text-gray-800 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Einbruchschutz-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[5]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[4]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen Einbruchschutz" subtitle="Erfahrungen unserer Kunden" />

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
           Häufige Fragen zum <span className="text-[color:var(--text-primary)]">Einbruchschutz</span>
         </h2>
       </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Was tun nach einem Einbruch?" answer="Verlassen Sie das Haus, rufen Sie sofort die Polizei (110) und fassen Sie nichts an. Erst nach Spurensicherung durch die Polizei können wir die Reparatur der Aufbruchspuren vornehmen." />
        <FAQAccordion question="Wann ist Ihr Notdienst zur Schadensbeseitigung erreichbar?" answer="Wir sind 365 Tage im Jahr, rund um die Uhr (24/7) für Sie da. Meistens treffen wir in 15-30 Minuten am Unfallort ein." />
        <FAQAccordion question="Können Panzerriegel an jeder Tür montiert werden?" answer="Die meisten Standard- und Wohneingangstüren eignen sich problemlos für Querriegel/Panzerriegel. Für Altbautüren mit Verzierungen weichen wir häufig auf massive Stangenschlösser aus. Das besprechen wir gerne direkt vor Ort." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* Offizielle Ressourcen und SEO Authority Links */}
   <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Weiterbildung</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[color:var(--text-primary)] mb-6">
        Offizielle <span className="text-[var(--color-red-500)]">Ressourcen</span> zum Einbruchschutz
      </h2>
      <p className="text-base text-[color:var(--text-secondary)] leading-relaxed mb-8">
        Informieren Sie sich bei diesen offiziellen Stellen über Prävention, Förderungen und Sicherheitsstandards:
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <a href="https://www.k-einbruch.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <Siren className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">K-EINBRUCH und Polizeiliche Kriminalprävention</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Die offizielle Kampagne der Polizei mit Tipps und Empfehlungen zum Einbruchschutz.</p>
          </div>
        </a>
        <a href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestandsimmobilien/Einbruchschutz/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">KfW Einbruchschutz-Förderung</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Staatliche Zuschüsse bis zu 1.600€ für Einbruchschutz-Maßnahmen an Ihrer Immobilie.</p>
          </div>
        </a>
        <a href="https://www.polizei.hessen.de/praesidium-mittelhessen/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Polizeipräsidium Mittelhessen</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Kriminalprävention und Einbruchschutztipps für den Lahn-Dill-Kreis und die Region Wetzlar.</p>
          </div>
        </a>
        <a href="https://www.verbraucherzentrale-hessen.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Verbraucherzentrale Hessen</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">Unabhängige Beratung zu Ihren Rechten und auch zum Thema Schlüsseldienst-Kosten.</p>
          </div>
        </a>
      </div>
    </div>
   </section>

   <RelatedServices currentServiceId="einbruchschutz" />
   <PersonalizedCTA />
   <FinalCTA headline="Einbruch? Sofortige Absicherung." benefits={["Notfall-Absicherung nach Einbruch","Kostenlose Sicherheitsberatung","VdS-geprüfte Schließtechnik"]} buttonText="Einbruchschutz jetzt anfragen" socialProof="Geprüfte Sicherheitstechnik vom Fachmann" subtitle="Soforthilfe · Panzerriegel · Stangenschlösser" />
  </div>
 );
}

export const dynamic = "force-static";
