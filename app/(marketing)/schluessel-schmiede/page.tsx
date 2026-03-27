import { Badge } from"@/components/ui/badge";
import FinalCTA from"@/components/ui/FinalCTA";
import dynamic from"next/dynamic";
const PersonalizedCTA = dynamic(() => import("@/components/growth/PersonalizedCTA"));
import RelatedServices from"@/components/RelatedServices";
import Breadcrumbs from"@/components/Breadcrumbs";
import TrustStrip from"@/components/trust/TrustStrip";
import ReviewsSection from"@/components/reviews/ReviewsSection";
import FAQAccordion from"@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";
import { getFAQSchema } from "@/lib/schema";
import { siteUrl } from"@/lib/schema";
import { Key, MapPin, Clock, Phone, Hammer, Car, Fingerprint, Award, Camera, Battery, ChevronRight, Star, ShieldCheck, Wrench } from"lucide-react";
import Link from"next/link";

export const metadata = generateSharedMetadata({
 title:"Schlüssel Schmiede Wetzlar — Ladengeschäft & Werkstatt",
 description:"Die Schlüssel Schmiede in der Langgasse 70, Wetzlar: Schlüsselanfertigung, KFZ-Schlüssel Codierung, Gravuren, Passbilder und mehr. Persönliche Beratung vor Ort.",
 path:"/schluessel-schmiede",
});

function getLocalBusinessSchema() {
 return {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${siteUrl}/schluessel-schmiede#store`,
  name: "Schlüssel Schmiede Wetzlar",
  description: "Stationäres Ladengeschäft des MS Schlüsseldienst Wetzlar. Schlüsselanfertigung, KFZ-Schlüssel, Gravuren und persönliche Beratung.",
  url: `${siteUrl}/schluessel-schmiede`,
  telephone: "+4964418056544",
  address: {
   "@type": "PostalAddress",
   streetAddress: "Langgasse 70",
   addressLocality: "Wetzlar",
   postalCode: "35576",
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
   },
   {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:00",
    closes: "14:00",
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
  priceRange: "€–€€",
 };
}

const storeServices = [
 { icon: Key, title:"Schlüsselkopie", desc:"Standard-, Sicherheits- und Spezialschlüssel – präzise gefräst, sofort zum Mitnehmen.", accent:"bg-blue-500/10 text-blue-600" },
 { icon: Car, title:"KFZ-Schlüssel", desc:"Duplikation, Anfertigung und elektronische Codierung für alle gängigen Fahrzeugtypen.", accent:"bg-emerald-500/10 text-emerald-600" },
 { icon: Wrench, title:"Schlösser & Zylinder", desc:"Austausch, Reparatur und Beratung zu Schließzylindern und Kastenschlössern.", accent:"bg-amber-500/10 text-amber-600" },
 { icon: Award, title:"Gravuren", desc:"Klingelschilder, Pokale, Medaillen und Namensschilder – sauber und präzise.", accent:"bg-violet-500/10 text-violet-600" },
 { icon: Camera, title:"Passbilder", desc:"Biometrische Passbilder mit QR-Code – direkt erstellt, sofort abholbereit.", accent:"bg-rose-500/10 text-rose-600" },
 { icon: Battery, title:"Batteriewechsel", desc:"Schneller Batterieservice für Uhren, Autoschlüssel und kleine Geräte.", accent:"bg-cyan-500/10 text-cyan-600" },
];

const faqItems = [
 { question:"Wo befindet sich die Schlüssel Schmiede?", answer:"Unser Ladengeschäft befindet sich in der Langgasse 70, 35576 Wetzlar, direkt im Stadtzentrum mit guter Erreichbarkeit." },
 { question:"Welche Öffnungszeiten hat die Schlüssel Schmiede?", answer:"Mo–Fr: 09:00–18:00 Uhr, Sa: 10:00–14:00 Uhr. Den 24/7-Notdienst erreichen Sie jederzeit unter 06441 8056544." },
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
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-[var(--space-6)] border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ladengeschäft in der Langgasse 70, Wetzlar
          </Badge>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tighter text-[color:var(--text-primary)] leading-[1.05] text-balance mb-[var(--space-6)]">
            Die Schlüssel Schmiede <br /><span className="text-[var(--color-red-500)]">Wetzlar.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-[color:var(--text-secondary)] leading-relaxed">
            Ein Ort, an dem echtes Handwerk, Erfahrung und persönlicher Einsatz im Mittelpunkt stehen. Kommen Sie vorbei — ohne Hektik, ohne leere Versprechen.
          </p>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:+4964418056544"
              className="flex items-center justify-center gap-2 h-[56px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white rounded-xl font-bold text-[16px] shadow-[var(--shadow-cta)] hover:-translate-y-[1px] transition-all"
            >
              <Phone className="w-5 h-5" />
              06441 8056544
            </a>
            <a
              href="https://maps.google.com/?q=Langgasse+70,+35576+Wetzlar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-[56px] px-8 bg-[var(--surface-secondary)] hover:bg-[var(--surface-tertiary)] text-[color:var(--text-primary)] rounded-xl font-bold text-[16px] border border-[var(--border-subtle)] hover:-translate-y-[1px] transition-all"
            >
              <MapPin className="w-5 h-5" />
              Route planen
            </a>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* ═══ 2. TRUST-BAR ═══ */}
   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[88px] lg:-mt-[112px] flex flex-col items-center pointer-events-none mb-12">
    <div className="w-full pointer-events-auto px-4">
     <TrustStrip />
    </div>
   </div>

   {/* ═══ 3. STORY — "Mehr als ein Laden" ═══ */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
         <Hammer className="h-6 w-6" />
        </div>
        <Badge variant="outline" className="text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Unser Ladengeschäft</Badge>
       </div>
       <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        Mehr als ein Laden — <br className="hidden sm:block" />ein Ort für Vertrauen.
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="space-y-6 text-[18px] text-[color:var(--text-secondary)] leading-relaxed">
        <p>
         Die Schlüssel Schmiede ist nicht einfach ein Geschäft. Sie ist aus dem Wunsch entstanden, Menschen direkt vor Ort zu helfen — mit <strong className="text-[color:var(--text-primary)]">Zeit, Verständnis und sauberer Arbeit</strong>.
        </p>
        <p>
         Hier geht es nicht darum, schnell etwas &bdquo;abzufertigen&ldquo;. Jeder Auftrag, jeder Schlüssel und jedes Anliegen wird ernst genommen. Kommen Sie herein, stellen Sie Fragen, schildern Sie Probleme — und lassen Sie sich in Ruhe beraten.
        </p>
        <p>
         Die Schlüssel Schmiede ist der <strong className="text-[color:var(--text-primary)]">stationäre Ladenbetrieb des MS Schlüsseldienst Wetzlar</strong>. Wir bündeln unsere Erfahrung aus dem mobilen Schlüsseldienst mit präziser Werkstattarbeit vor Ort.
        </p>
       </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 4. BENTO-GRID — 6 Services ═══ */}
   <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.08}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-white border-[var(--color-red-100)]">Alles unter einem Dach</Badge>
        <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
         Unsere Leistungen im Laden
        </h2>
        <p className="mt-4 text-[18px] text-[color:var(--text-secondary)] max-w-2xl mx-auto">
         Von der Schlüsselkopie bis zum KFZ-Schlüssel, von Gravuren bis Passbilder — alles persönlich und direkt vor Ort.
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
            <h3 className="text-[20px] font-bold text-[color:var(--text-primary)] mb-2">{service.title}</h3>
            <p className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed m-0">{service.desc}</p>
           </div>
          </div>
         );
        })}
       </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 5. KFZ-SCHLÜSSEL HIGHLIGHT ═══ */}
   <section className="px-[var(--section-px)] py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
         <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
           <Car className="h-6 w-6" />
          </div>
          <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-100">Schwerpunkt</Badge>
         </div>
         <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
          KFZ-Schlüssel — <br />Anfertigen, Duplizieren & Codieren
         </h2>
         <p className="text-[18px] text-[color:var(--text-secondary)] leading-relaxed mb-8">
          Gerade bei modernen Fahrzeugschlüsseln ist Erfahrung entscheidend. Wir fräsen KFZ-Schlüssel nicht nur mechanisch, sondern lernen sie auch elektronisch an, damit sie im Alltag zuverlässig funktionieren.
         </p>
         <ul className="space-y-4">
          {[
           "Zusätzlicher Schlüssel als Ersatz",
           "Codierung mit Transponder / Wegfahrsperre",
           "Defekte Funkschlüssel reparieren oder ersetzen",
           "Kompatibel mit vielen Fahrzeugtypen",
          ].map((item, idx) => (
           <li key={idx} className="flex items-center gap-3 text-[16px] text-[color:var(--text-secondary)]">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
             <ShieldCheck className="h-3.5 w-3.5" />
            </div>
            {item}
           </li>
          ))}
         </ul>
        </div>
        <div className="relative">
         <div className="aspect-[4/3] rounded-[var(--radius-24)] bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50 flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
           <Car className="h-20 w-20 text-emerald-300 mx-auto mb-4" />
           <p className="text-[14px] text-emerald-600/60 font-medium">Werkstatt-Foto Platzhalter</p>
          </div>
         </div>
         <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-[var(--elevation-2)] border border-[var(--border-subtle)] px-5 py-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
           <Key className="h-5 w-5" />
          </div>
          <div>
           <p className="text-[14px] font-bold text-[color:var(--text-primary)]">Schneller als Autohaus</p>
           <p className="text-[12px] text-[color:var(--text-tertiary)]">Kein Werkstatt-Termin nötig</p>
          </div>
         </div>
        </div>
       </div>
      </StaggerItem>
     </StaggerReveal>
    </div>
   </section>

   {/* ═══ 6. GRAVUR HIGHLIGHT ═══ */}
   <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
     <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
         <div className="aspect-[4/3] rounded-[var(--radius-24)] bg-gradient-to-br from-violet-50 to-violet-100/50 border border-violet-200/50 flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
           <Award className="h-20 w-20 text-violet-300 mx-auto mb-4" />
           <p className="text-[14px] text-violet-600/60 font-medium">Gravur-Foto Platzhalter</p>
          </div>
         </div>
         <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-[var(--elevation-2)] border border-[var(--border-subtle)] px-5 py-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white">
           <Award className="h-5 w-5" />
          </div>
          <div>
           <p className="text-[14px] font-bold text-[color:var(--text-primary)]">Persönlich abgestimmt</p>
           <p className="text-[12px] text-[color:var(--text-tertiary)]">Details direkt im Laden klären</p>
          </div>
         </div>
        </div>
        <div className="order-1 md:order-2">
         <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600">
           <Award className="h-6 w-6" />
          </div>
          <Badge variant="outline" className="text-violet-600 bg-violet-50 border-violet-100">Sonderservice</Badge>
         </div>
         <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
          Gravuren — Klingelschilder, Pokale & mehr
         </h2>
         <p className="text-[18px] text-[color:var(--text-secondary)] leading-relaxed mb-8">
          Präzise Gravurarbeiten direkt im Laden — von Klingelschildern über Namensschilder bis hin zu Sportmedaillen und Pokalen. Besprechen Sie Ihre Wünsche persönlich und nehmen Sie das Ergebnis direkt mit.
         </p>
         <div className="grid grid-cols-2 gap-3">
          {["Klingelschilder","Namensschilder","Sportmedaillen","Pokale & Trophäen"].map((item) => (
           <div key={item} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-[var(--border-subtle)] text-[14px] font-medium text-[color:var(--text-primary)]">
            <ChevronRight className="h-4 w-4 text-violet-500 shrink-0" />
            {item}
           </div>
          ))}
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
        <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] leading-[1.1]">
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
           <h3 className="text-[20px] font-bold text-[color:var(--text-primary)]">Adresse</h3>
          </div>
          <address className="not-italic text-[18px] text-[color:var(--text-secondary)] leading-relaxed space-y-1">
           <p className="font-semibold text-[color:var(--text-primary)]">Schlüssel Schmiede Wetzlar</p>
           <p>Langgasse 70</p>
           <p>35576 Wetzlar</p>
          </address>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[var(--border-subtle)]">
           <a href="tel:+4964418056544" className="flex items-center gap-3 text-[16px] text-[color:var(--text-secondary)] hover:text-[var(--color-red-500)] transition-colors">
            <Phone className="h-4 w-4" /> 06441 8056544
           </a>
           <a href="tel:+491782471037" className="flex items-center gap-3 text-[16px] text-[color:var(--text-secondary)] hover:text-[var(--color-red-500)] transition-colors">
            <Phone className="h-4 w-4" /> 0178 2471037
           </a>
          </div>
         </div>

         <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 border border-[var(--border-subtle)]">
          <div className="flex items-center gap-3 mb-6">
           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <Clock className="h-5 w-5" />
           </div>
           <h3 className="text-[20px] font-bold text-[color:var(--text-primary)]">Öffnungszeiten</h3>
          </div>
          <div className="space-y-3">
           {[
            { day:"Montag – Freitag", time:"09:00 – 18:00 Uhr" },
            { day:"Samstag", time:"10:00 – 14:00 Uhr" },
            { day:"Sonntag", time:"Geschlossen" },
           ].map((row) => (
            <div key={row.day} className="flex justify-between items-center py-2 border-b border-[var(--border-subtle)] last:border-0">
             <span className="text-[16px] text-[color:var(--text-secondary)]">{row.day}</span>
             <span className="text-[16px] font-semibold text-[color:var(--text-primary)]">{row.time}</span>
            </div>
           ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200/50">
           <p className="text-[14px] text-emerald-700 font-medium flex items-center gap-2">
            <Phone className="h-4 w-4" />
            24/7 Notdienst unter 06441 8056544
           </p>
          </div>
         </div>
        </div>

        {/* Karten-Platzhalter */}
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] border border-[var(--border-subtle)] overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
         <MapPin className="h-16 w-16 text-[var(--color-red-200)] mb-4" />
         <p className="text-[16px] font-semibold text-[color:var(--text-tertiary)]">Langgasse 70, 35576 Wetzlar</p>
         <a
          href="https://maps.google.com/?q=Langgasse+70,+35576+Wetzlar"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-red-500)] text-white font-bold text-[14px] hover:bg-[var(--color-red-600)] transition-colors"
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
      <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-balance text-[color:var(--text-primary)] text-center leading-[1.1] mb-12">
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
   <FinalCTA />
  </div>
 );
}
