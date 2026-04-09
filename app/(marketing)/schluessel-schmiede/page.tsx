import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import nextDynamic from "next/dynamic";
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
import RelatedServices from "@/components/RelatedServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import { getFAQSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/schema";
import { Key, MapPin, Clock, Phone, Hammer, Car, Fingerprint, Award, Camera, Battery, ChevronRight, Star, ShieldCheck, Wrench, CircuitBoard, Cpu } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { werkstattImages, maschinenImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Schlüssel Schmiede | Schlüsseldienst Wetzlar",
 description: "Langgasse 70 in Wetzlar: ✔️ KFZ-Schlüssel Codierung ✔️ Ersatzschlüssel sofort ✔️ Passbilder & Gravuren. Kommen Sie ohne Termin vorbei!",
 path: "/schluessel-schmiede",
 exactTitle: true,
});

function getLocalBusinessSchema() {
 return {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${siteUrl}/schluessel-schmiede#store`,
  name: "Schlüssel Schmiede Wetzlar",
  description: "Stationäres Ladengeschäft des Schlüssel Schmiede Wetzlar. Schlüsselanfertigung, KFZ-Schlüssel, Gravuren und persönliche Beratung.",
  url: `${siteUrl}/schluessel-schmiede`,
  telephone: "+4964418056279",
  address: {
   "@type": "PostalAddress",
   streetAddress: "Langgasse 70",
   addressLocality: "Wetzlar",
   postalCode: "35578",
   addressRegion: "Hessen",
   addressCountry: "DE",
  },
  geo: {
   "@type": "GeoCoordinates",
   latitude: 50.5588,
   longitude: 8.5045,
  },
  openingHoursSpecification: [
   {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:00",
   },
  ],
  parentOrganization: {
   "@type": "Locksmith",
   "@id": `${siteUrl}/#localbusiness`,
  },
  hasOfferCatalog: {
   "@type": "OfferCatalog",
   name: "Dienstleistungen der Schlüssel Schmiede",
   itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schlüsselanfertigung" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "KFZ-Schlüssel Codierung" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gravurarbeiten" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biometrische Passbilder" } },
   ],
  },
  aggregateRating: {
   "@type": "AggregateRating",
   ratingValue: "4.9",
   reviewCount: "189",
   bestRating: "5",
  },
  image: `${siteUrl}/og-image.png`,
  priceRange: "€-€€",
 };
}

const storeServices = [
 { icon: Key, title:"Schlüsselkopie", desc:"Standard-, Sicherheits- und Spezialschlüssel - präzise gefräst, sofort zum Mitnehmen.", accent:"bg-blue-500/10 text-blue-600" },
 { icon: Car, title:"KFZ-Schlüssel", desc:"Duplikation, Anfertigung und elektronische Codierung für alle gängigen Fahrzeugtypen.", accent:"bg-red-500/10 text-red-600" },
 { icon: Wrench, title:"Schlösser & Zylinder", desc:"Austausch, Reparatur und Beratung zu Schließzylindern und Kastenschlössern.", accent:"bg-amber-500/10 text-amber-600" },
 { icon: Award, title:"Gravuren", desc:"Klingelschilder, Pokale, Medaillen und Namensschilder - sauber und präzise.", accent:"bg-violet-500/10 text-violet-600" },
 { icon: Camera, title:"Passbilder", desc:"Biometrische Passbilder mit QR-Code - direkt erstellt, sofort abholbereit.", accent:"bg-rose-500/10 text-rose-600" },
 { icon: Battery, title:"Batteriewechsel", desc:"Schneller Batterieservice für Uhren, Autoschlüssel und kleine Geräte.", accent:"bg-cyan-500/10 text-cyan-600" },
];

const faqItems = [
 { question:"Wo befindet sich die Schlüssel Schmiede?", answer:"Unser Ladengeschäft befindet sich in der Langgasse 70, 35578 Wetzlar, direkt im Stadtzentrum mit guter Erreichbarkeit." },
 { question:"Welche Öffnungszeiten hat die Schlüssel Schmiede?", answer:"Mo-Sa: 10:00-18:00 Uhr. Den 24/7-Notdienst erreichen Sie jederzeit unter 06441 8056279." },
 { question:"Kann ich ohne Termin vorbeikommen?", answer:"Ja, selbstverständlich! Kommen Sie während der Öffnungszeiten einfach vorbei. Für komplexere Anliegen empfehlen wir einen kurzen Anruf vorab." },
 { question:"Werden KFZ-Schlüssel sofort im Laden angefertigt?", answer:"Ja, viele Autoschlüssel können direkt vor Ort gefräst und elektronisch codiert werden. Je nach Fahrzeugtyp kann eine Bestellung nötig sein." },
 { question:"Bieten Sie auch Gravuren für Vereine an?", answer:"Ja, wir gravieren Pokale, Medaillen und Trophäen für Sportvereine und Veranstaltungen. Kommen Sie vorbei und besprechen Sie die Details persönlich." },
];

export default function SchluesselSchmiedePage() {
 const breadcrumbs = [
  { name:"Schlüssel Schmiede", href:"/schluessel-schmiede" },
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   {/* JSON-LD: LocalBusiness (Store) */}
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
   />
   {/* JSON-LD: FAQPage */}
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqItems)) }}
   />

   {/* ═══ 1. HERO ═══ */}
   <section className="relative pt-[160px] pb-[100px] lg:pt-[200px] lg:pb-[140px] bg-gradient-to-b from-slate-900 via-slate-800 to-[var(--surface-primary)] overflow-hidden">
    {/* High-Tech Background Elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-red-500)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-red-500)]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
    </div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <Breadcrumbs items={breadcrumbs} light={true} />
      </div>
      
      <StaggerReveal className="flex flex-col items-center max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-white/10 text-white bg-white/5 backdrop-blur-md pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-red-400)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]"></span>
            </span>
            Ladengeschäft & High-Tech Werkstatt in der Langgasse 70
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-4xl sm:text-[56px] lg:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1.05] text-balance mb-[var(--space-6)]">
            Die <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-red-400)] to-red-200">Schlüssel Schmiede</span> <br />Wetzlar.
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            Wo Traditionshandwerk auf modernste Mikroelektronik trifft. Von der klassischen Schlüsselkopie bis zur komplexen KFZ-Transponder-Codierung an unseren CNC-Fräsen.
          </p>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:+4964418056279"
              className="flex items-center justify-center gap-2 h-[56px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white rounded-xl font-bold text-base shadow-[0_0_20px_rgba(185,28,28,0.3)] hover:shadow-[0_0_30px_rgba(185,28,28,0.5)] hover:-translate-y-[1px] transition-all"
            >
              <Phone className="w-5 h-5" />
              06441 8056279
            </a>
            <a
              href="https://maps.google.com/?q=Langgasse+70,+35578+Wetzlar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-[56px] px-8 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl font-bold text-base border border-white/20 hover:-translate-y-[1px] transition-all"
            >
              <MapPin className="w-5 h-5" />
              Route zur Werkstatt
            </a>
          </div>
        </StaggerItem>

        <StaggerItem animation={entryAnimations.slideUpFade} className="w-full mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="flex flex-col items-center p-2">
              <span className="text-[32px] md:text-4xl font-black text-white leading-none tracking-tight">
                <AnimatedCounter end={2005} />
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Gründungsjahr</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-[32px] md:text-4xl font-black text-white leading-none tracking-tight">
                <AnimatedCounter end={18500} prefix="+" />
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Gefräste Schlüssel</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-[32px] md:text-4xl font-black text-white leading-none tracking-tight">
                <AnimatedCounter end={15} suffix=" Min" />
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Ø Zeit KFZ-Schlüssel</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-[32px] md:text-4xl font-black text-[var(--color-red-400)] leading-none tracking-tight">
                <AnimatedCounter end={100} suffix="%" />
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Festpreis Garantie</span>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* ═══ 2. TRUST-BAR ═══ */}
   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[88px] lg:-mt-[112px] flex flex-col items-center pointer-events-none mb-12">
    <div className="w-full pointer-events-auto px-4">
     <TrustStrip />
    </div>
   </div>

   {/* ═══ 3. STORY , "Wetzlars Präzisionszentrum" ═══ */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
         <ShieldCheck className="h-6 w-6" />
        </div>
        <Badge variant="outline" className="text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Wetzlars Präzisionszentrum</Badge>
       </div>
       <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Moderne Sicherheitstechnik, <br className="hidden sm:block" />direkt in der Langgasse 70.
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="space-y-6 text-lg text-[color:var(--text-secondary)] leading-relaxed">
        <p>
         Die Schlüssel Schmiede Wetzlar vereint traditionelle Handwerkskunst mit modernster Sicherheitstechnologie. Zentral gelegen im Herzen von Wetzlar, haben wir es uns als lokaler Handwerksbetrieb zur Aufgabe gemacht, nicht nur schnelle Notdiensteinsätze zu leisten, sondern Ihnen einen verlässlichen Anlaufpunkt für maßgeschneiderte Sicherheitslösungen zu bieten.
        </p>
        <p>
         Wir fertigen hochpräzise mechanische Schlüssel und programmieren elektronische Fahrzeugschlüssel direkt an hochmodernen CNC-Fräsen. Jeder Auftrag – von der einzelnen Schlüsselkopie bis hin zur Konzeption einer komplexen Schließanlage – wird von unseren erfahrenen Sicherheitstechnikern mit höchster Sorgfalt und persönlichem Engagement ausgeführt.
        </p>
        <p>
         Vertrauen Sie auf <strong className="text-[color:var(--text-primary)]">maximale Transparenz</strong> und professionelle Beratung. Besuchen Sie uns in unserem Studio, wo unser Team sich Zeit für Ihre individuellen Anforderungen nimmt, anstatt bloß Standardsätze abzuspulen.
        </p>
       </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 3b. WERKSTATT GALERIE ═══ */}
   <section className="px-[var(--section-px)] pb-16 relative z-20">
    <div className="mx-auto max-w-5xl">
     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)] col-span-2">
       <SeoContentImage
        image={werkstattImages[0]!}
        className="w-full h-[280px] md:h-[360px]"
        sizes="(max-width: 768px) 100vw, 66vw"
       />
      </div>
      <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
       <SeoContentImage
        image={werkstattImages[1]!}
        className="w-full h-[280px] md:h-[360px]"
        sizes="(max-width: 768px) 50vw, 33vw"
       />
      </div>
      <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
       <SeoContentImage
        image={maschinenImages[0]!}
        className="w-full h-[240px]"
        sizes="(max-width: 768px) 50vw, 33vw"
       />
      </div>
      <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
       <SeoContentImage
        image={maschinenImages[1]!}
        className="w-full h-[240px]"
        sizes="(max-width: 768px) 50vw, 33vw"
       />
      </div>
      <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
       <SeoContentImage
        image={werkstattImages[2]!}
        className="w-full h-[240px]"
        sizes="(max-width: 768px) 50vw, 33vw"
       />
      </div>
     </div>
    </div>
   </section>

   {/* ═══ 4. BENTO-GRID , 6 Services ═══ */}
   <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.08}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-white border-[var(--color-red-100)]">Alles unter einem Dach</Badge>
        <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
         Unsere Leistungen im Laden
        </h2>
        <p className="mt-4 text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto">
         Von der Schlüsselkopie bis zum KFZ-Schlüssel, von Gravuren bis Passbilder , alles persönlich und direkt vor Ort.
        </p>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {storeServices.map((service) => {
         const Icon = service.icon;
         return (
          <div key={service.title} className="group relative flex flex-col gap-4 p-6 md:p-8 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] hover:-translate-y-1 transition-all duration-300">
           <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${service.accent} transition-transform group-hover:scale-110`}>
            <Icon className="h-7 w-7" />
           </div>
           <div>
            <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">{service.title}</h3>
            <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">{service.desc}</p>
           </div>
          </div>
         );
        })}
       </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 5. KFZ-SCHLÜSSEL HIGHLIGHT (Tech Bento Grid) ═══ */}
   <section className="px-[var(--section-px)] py-24 md:py-32 bg-[var(--surface-primary)]">
    <div className="mx-auto max-w-6xl">
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-[var(--color-red-600)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Präzisionswerkstatt</Badge>
        <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
         High-Tech KFZ-Schlüssel <br className="hidden md:block"/>Codierung & Frästechnik
        </h2>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade} className="w-full">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Main Large Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-[var(--radius-24)] bg-[var(--surface-secondary)] border border-[var(--border-subtle)] p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-red-500)]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[var(--color-red-500)]/10 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-red-500)] text-white shadow-[0_0_20px_rgba(185,28,28,0.3)]">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="text-[28px] font-extrabold text-[color:var(--text-primary)] tracking-tight">Vollständige Fahrzeugintegration</h3>
              </div>
              <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed max-w-md mb-8">
                Wir fräsen den Rohling nicht nur nach Originalmaßen, sondern verheiraten den Kryptochip elektronisch mit der Wegfahrsperre Ihres Autos. Perfekte Funktion, so als kämen Sie direkt aus dem Autohaus.
              </p>
              
              <ul className="space-y-4">
               {[
                "100% OBD-Kompatibilität für fast alle Premium Marken",
                "Auslesen des PIN-Codes vor Ort",
                "Löschen von gestohlenen/verlorenen Schlüsseln",
               ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base font-medium text-[color:var(--text-primary)]">
                 <div className="flex h-6 w-6 shrink-0 mt-0.5 items-center justify-center rounded-full bg-[var(--color-red-100)] text-[var(--color-red-600)]">
                  <ShieldCheck className="h-4 w-4" />
                 </div>
                 {item}
                </li>
               ))}
              </ul>
            </div>
            {/* Visual element placeholder for large card */}
            <div className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <CircuitBoard className="w-[300px] h-[300px] text-[var(--color-red-300)]" />
            </div>
          </div>

          {/* Small Card 1: Speed */}
          <div className="rounded-[var(--radius-24)] bg-[var(--color-red-600)] border border-[var(--color-red-500)] p-8 relative overflow-hidden flex flex-col justify-end group">
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent z-0" />
            <div className="absolute top-6 right-6 z-10 opacity-50">
              <Clock className="w-16 h-16 text-white" />
            </div>
            <div className="relative z-10">
              <h4 className="text-[24px] font-extrabold text-white mb-2">Kein Termin nötig.</h4>
              <p className="text-red-50 text-base leading-relaxed">
                Während das Autohaus oft Wochen auf ein Ersatzteil wartet, codieren wir Ihren Schlüssel im Handumdrehen direkt in der Schmiede.
              </p>
            </div>
          </div>

          {/* Small Card 2: Tech Specs */}
          <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] border border-[var(--border-subtle)] p-8 relative overflow-hidden group hover:border-violet-200 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                <Cpu className="h-5 w-5" />
              </div>
              <Badge variant="outline" className="bg-transparent text-violet-600 border-violet-200">CNC Fräse</Badge>
            </div>
            <h4 className="text-xl font-bold text-[color:var(--text-primary)] mb-3">Laser & Bahnfräsung</h4>
            <p className="text-base text-[color:var(--text-secondary)] leading-relaxed">
              Unsere computergesteuerten CNC-Maschinen arbeiten auf den Hundertstel-Millimeter exakt. Das garantiert, dass der Schließzylinder in der Autotür nicht klemmt.
            </p>
          </div>
        </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 6. BSS & GRAVUR HIGHLIGHT (Bento 2.0) ═══ */}
   <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-24 md:py-32 overflow-hidden relative">
    {/* Background Shapes */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="mx-auto max-w-6xl relative z-10">
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade} className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-violet-600 bg-violet-50 border-violet-100">Präzision & biometrische Fotografie</Badge>
        <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
         Lasergravuren & <br className="hidden md:block"/>Passbild-Studio
        </h2>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid md:grid-cols-2 gap-6 items-stretch">
        
        {/* Passbilder Sektion */}
        <div className="rounded-[var(--radius-24)] bg-white border border-[var(--border-subtle)] p-8 lg:p-10 relative overflow-hidden group shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] transition-shadow">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Camera className="w-32 h-32 text-rose-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600">
                <Fingerprint className="h-6 w-6" />
              </div>
              <h3 className="text-[24px] font-extrabold text-[color:var(--text-primary)]">Biometrische Passbilder</h3>
            </div>
            <p className="text-base text-[color:var(--text-secondary)] leading-relaxed mb-8">
              Wir erstellen offizielle, biometrische Passfotos nach den strengen ICAO-Normen, die von den Bürgerbüros für Ausweise und Führerscheine akzeptiert werden.
            </p>
            <div className="space-y-3">
              {[
                { label: "Behörden-Konform", text: "Strenge Einhaltung aller Vorgaben" },
                { label: "E-Pass-Ready", text: "Sofort mit QR-Code zum Einscannen" },
                { label: "Kein Termin", text: "Direkt im Laden shoooten & mitnehmen" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-rose-600 text-sm w-[120px] shrink-0">{item.label}</div>
                  <div className="text-sm text-[color:var(--text-secondary)]">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gravuren Sektion */}
        <div className="rounded-[var(--radius-24)] bg-violet-600 border border-violet-500 p-8 lg:p-10 relative overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-transparent z-0" />
          <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <Award className="w-40 h-40 text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-[24px] font-extrabold text-white">Präzisions-Gravuren</h3>
            </div>
            <p className="text-base text-violet-100 leading-relaxed mb-8 max-w-sm">
              Materialschonende Gravurarbeiten direkt im Laden. Für Vereine, Unternehmen oder private Erinnerungsstücke.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Klingelschilder",
                "Hausnummern",
                "Pokale & Medaillen",
                "Namensschilder",
                "Schließanlagen-Schlüssel",
                "Edelstahl & Messing"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

       </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 7. STANDORT & ÖFFNUNGSZEITEN ═══ */}
   <section className="px-[var(--section-px)] py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Besuchen Sie uns</Badge>
        <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
         Standort & Öffnungszeiten
        </h2>
       </div>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid md:grid-cols-2 gap-8">
        {/* Adresse & Zeiten */}
        <div className="flex flex-col gap-6">
         <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 border border-[var(--border-subtle)]">
          <div className="flex items-center gap-3 mb-6">
           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <MapPin className="h-5 w-5" />
           </div>
           <h3 className="text-xl font-bold text-[color:var(--text-primary)]">Adresse</h3>
          </div>
          <address className="not-italic text-lg text-[color:var(--text-secondary)] leading-relaxed space-y-1">
           <p className="font-semibold text-[color:var(--text-primary)]">Schlüssel Schmiede Wetzlar</p>
           <p>Langgasse 70</p>
           <p>35578 Wetzlar</p>
          </address>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[var(--border-subtle)]">
           <a href="tel:+4964418056279" className="flex items-center gap-3 text-base text-[color:var(--text-secondary)] hover:text-[var(--color-red-500)] transition-colors">
            <Phone className="h-4 w-4" /> 06441 8056279
           </a>
           <a href="tel:+491782471037" className="flex items-center gap-3 text-base text-[color:var(--text-secondary)] hover:text-[var(--color-red-500)] transition-colors">
            <Phone className="h-4 w-4" /> 0178 2471037
           </a>
          </div>
         </div>

         <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 border border-[var(--border-subtle)]">
          <div className="flex items-center gap-3 mb-6">
           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <Clock className="h-5 w-5" />
           </div>
           <h3 className="text-xl font-bold text-[color:var(--text-primary)]">Öffnungszeiten</h3>
          </div>
          <div className="space-y-3">
           {[
            { day:"Montag - Samstag", time:"10:00 - 18:00 Uhr" },
            { day:"Sonntag", time:"Geschlossen" },
           ].map((row) => (
            <div key={row.day} className="flex justify-between items-center py-2 border-b border-[var(--border-subtle)] last:border-0">
             <span className="text-base text-[color:var(--text-secondary)]">{row.day}</span>
             <span className="text-base font-semibold text-[color:var(--text-primary)]">{row.time}</span>
            </div>
           ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-[var(--color-red-50)] border border-[var(--color-red-200)]/50">
           <p className="text-sm text-[var(--color-red-700)] font-medium flex items-center gap-2">
            <Phone className="h-4 w-4" />
            24/7 Notdienst unter 06441 8056279
           </p>
          </div>
         </div>
        </div>

        {/* Karten-Platzhalter */}
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] border border-[var(--border-subtle)] overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
         <MapPin className="h-16 w-16 text-[var(--color-red-200)] mb-4" />
         <p className="text-base font-semibold text-[color:var(--text-tertiary)]">Langgasse 70, 35578 Wetzlar</p>
         <a
          href="https://maps.google.com/?q=Langgasse+70,+35578+Wetzlar"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-red-500)] text-white font-bold text-sm hover:bg-[var(--color-red-600)] transition-colors"
         >
          <MapPin className="h-4 w-4" />
          In Google Maps öffnen
         </a>
        </div>
       </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 9. FAQ ═══ */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <h2 className="text-[32px] md:text-4xl font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
        Häufige Fragen zur Schlüssel Schmiede
      </h2>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
       {faqItems.map((faq, idx) => (
        <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
       ))}
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* ═══ 10. REVIEWS ═══ */}
   <ReviewsSection />

   {/* ═══ 11+12. CTAs & Related ═══ */}
   <RelatedServices currentServiceId="schluessel-nachmachen" />
   <PersonalizedCTA />
   <FinalCTA headline="Besuchen Sie unsere Schlüssel Schmiede." benefits={["24 Stunden Notdienst in der Langgasse 70","Alle Services ohne Termin","Persönliche Beratung vor Ort"]} buttonText="Jetzt anrufen oder vorbeikommen" socialProof="Ihr 24 Stunden Notdienst für Schlüssel und Sicherheit" subtitle="Mo-Sa 10-18 Uhr · Langgasse 70 · Wetzlar" />
  </div>
 );
}

export const dynamic = "force-static";
