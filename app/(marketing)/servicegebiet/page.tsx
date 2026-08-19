import { MapPin, Check, Clock, ChevronDown } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Link from "next/link";
import { allLocations } from "@/lib/data/allLocations";
import LocationListClient from "@/components/locations/LocationListClient";
import { Card } from "@/components/ui/card";
import { generateSharedMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/schema";
import ServiceMapWrapper from "@/components/maps/ServiceMapWrapper";
import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

import JsonLd from "@/components/seo/JsonLd";
import { getGenericPageGraphSchema } from "@/lib/schema";

export const metadata = generateSharedMetadata({
 title: "Unsere Einsatzgebiete | Schlüsseldienst Wetzlar",
 description: "Wir sind hier: | Aßlar | Solms | Hüttenberg | Lahnau & 70+ Orte. Lokaler Schlüsseldienst aus Wetzlar. Schnelle Hilfe in 15 bis 30 Min!",
 path: "/servicegebiet",
 exactTitle: true,
});

export default function ServicegebietPage() {
 const breadcrumbs = [
  { name: "Servicegebiet", href: "/servicegebiet" }
 ];

 // Categorize locations to balance link density (< 100 visible links on load)
 const primaryLocations = allLocations.slice(0, 12);

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
    {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
    <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Unsere Einsatzgebiete | Schlüsseldienst Wetzlar. Schlüsseldienst Einsatzgebiete im Lahn-Dill-Kreis.</div>
   <JsonLd data={getGenericPageGraphSchema({
     title: "Unsere Einsatzgebiete | Schlüsseldienst Wetzlar",
     description: "Übersicht aller Städte und Gemeinden im 50km Umkreis von Wetzlar, in denen unser Schlüsseldienst tätig ist.",
     url: "/servicegebiet",
     pageType: "CollectionPage",
     breadcrumbs: [
       { name: "Startseite", url: "/" },
       { name: "Servicegebiet", url: "/servicegebiet" }
     ]
   })} />
   {/* Hero Section */}
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center max-w-3xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--value-primary)]"></span>
            </span>
            15-30 Min. Anfahrt garantiert
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-[color:var(--text-primary)] leading-[1.05] text-balance mb-[var(--space-6)]">
            Schlüsseldienst <span className="text-[color:var(--value-primary)]">Einsatzgebiete</span> im Lahn-Dill-Kreis
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance">
            Die Schlüssel Schmiede Wetzlar ist Ihr lokaler Fachbetrieb für Wetzlar, Gießen und den gesamten Lahn-Dill-Kreis. Wir sind dezentral aufgestellt und erreichen Sie im Notfall in 15 bis 30 Minuten vor Ort. Unsere erfahrenen Monteure sind Tag und Nacht für Sie im Einsatz, um verschlossene Türen zerstörungsfrei zu öffnen, defekte Schlösser auszutauschen oder präventiven Einbruchschutz zu installieren. Durch unsere tiefe Verwurzelung in der Region garantieren wir Ihnen nicht nur kurze Anfahrtswege, sondern auch absolute Preistransparenz. Bei uns gibt es keine versteckten Kosten oder bösen Überraschungen – alle Preise werden Ihnen bereits am Telefon klar kommuniziert. Vertrauen Sie auf echte Handwerksqualität aus Ihrer direkten Nachbarschaft. Egal ob Sie in der Wetzlarer Kernstadt, in Niedergirmes, Dutenhofen oder in einer der umliegenden Gemeinden wie Aßlar, Braunfels oder Solms wohnen: Ein Anruf genügt, und wir machen uns umgehend auf den Weg zu Ihnen. Ihre Sicherheit und Zufriedenheit stehen für uns an oberster Stelle.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* Interactive Map Section */}
   <section aria-label="Interaktive Einsatzgebiet-Karte" className="px-[var(--section-px)] pt-24 md:pt-32 pb-24 md:pb-32 bg-[var(--surface-primary)] relative z-20">
    <div className="mx-auto max-w-5xl">
     <StaggerReveal className="text-center mb-[var(--space-12)]" animation={entryAnimations.slideUpFade}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
        Unsere <span className="text-[color:var(--value-primary)]">Einsatzgebiete</span> auf einen Blick
        </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <p className="mt-4 text-lg text-[color:var(--text-secondary)]">
        Der rote Kreis zeigt unser 50-km-Einsatzgebiet rund um Wetzlar. Erkunden Sie die Karte.
        </p>
      </StaggerItem>
     </StaggerReveal>
     
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.2}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <ServiceMapWrapper />
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* Balanced Location Accordions Section (< 100 links visible by default) */}
   <section aria-label="Einsatzgebiete im Detail" className="px-[var(--section-px)] py-24 md:py-32 bg-[var(--surface-secondary)] border-t border-[var(--border-subtle)]">
    <StaggerReveal className="mx-auto max-w-4xl space-y-12" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
          Schlüsselnotdienst in Ihrer Nähe: Alle Orte & Stadtteile
        </h2>
        <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-8">
          Wir bedienen alle Kernstädte und Ortsteile im Lahn-Dill-Kreis sowie angrenzende Gemeinden. Wählen Sie Ihre Stadt für direkte Kontaktdaten, Anfahrtszeiten und Festpreise vor Ort. Unser Service-Netzwerk ist so aufgebaut, dass wir nahezu jeden Winkel der Region effizient abdecken. Dadurch vermeiden wir lange Fahrtzeiten und können Ihnen den Service zu Konditionen anbieten, die für Sie fair und nachvollziehbar sind. Auf dieser Seite finden Sie eine Übersicht unserer wichtigsten Einsatzgebiete. Sollte Ihr Ortsteil nicht explizit aufgeführt sein, zögern Sie nicht, uns dennoch zu kontaktieren – in den allermeisten Fällen gehört er dennoch zu unserem regulären Einzugsgebiet.
        </p>
      </StaggerItem>

      {/* 1. Primary Locations & Load More (Client Component) */}
      <StaggerItem animation={entryAnimations.slideUpFade}>
        <LocationListClient />
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <Card className="mt-12 p-8 md:p-10 bg-[var(--surface-primary)] border border-[var(--border-subtle)] rounded-[var(--radius-24)] shadow-[var(--elevation-1)] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-blush-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--value-icon-bg)] text-[var(--value-icon-color)] shadow-[var(--shadow-cta)]">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-[color:var(--text-primary)] mb-4">
                Kalkulierbare Ankunft: 15 bis 30 Minuten
              </h3>
              <p className="text-base text-[color:var(--text-secondary)] leading-relaxed mb-6">
                In Notsituationen zählt jede Minute. Dank unserer strategischen Positionierung in Wetzlar sind wir in der Lage, jeden Punkt in unserem Kern-Einsatzgebiet innerhalb von 15 bis 30 Minuten zu erreichen.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-[color:var(--text-primary)]">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Transparente Festpreise</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 24/7 Erreichbarkeit</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Schadensfreie Öffnung</span>
              </div>
            </div>
          </div>
        </Card>
      </StaggerItem>
    </StaggerReveal>
   </section>

   <aside aria-label="Notfall-Kontakt">
    <EmergencyCTA 
      title="Ihr Ort ist nicht aufgeführt? Wir helfen trotzdem!" 
      description="Rufen Sie uns an – wir sind im gesamten Lahn-Dill-Kreis mobil im Einsatz." 
      buttonText="06441 8056279 anrufen"
    />
   </aside>
  </div>
 );
}

export const dynamic = "force-static";
