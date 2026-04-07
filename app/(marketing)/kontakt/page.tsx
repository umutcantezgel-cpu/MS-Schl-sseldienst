import { Phone, Mail, MapPin, Clock, MessageSquare } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import ContactForm from"@/components/contact/ContactForm";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { werkstattImages } from "@/lib/data/imageAssets";
import ContactMapWrapper from"@/components/maps/ContactMapWrapper";

export const metadata = generateSharedMetadata({
 title: "Kontakt – Schlüssel Schmiede Wetzlar | 24/7 Notdienst",
 description: "Ausgesperrt? 📞 Rufen Sie uns jetzt an: 06441-8056279. ✔️ 24/7 erreichbar ✔️ In 30 Min in ganz Wetzlar vor Ort. Wir helfen sofort!",
 path: "/kontakt",
});

export default function KontaktPage() {
 const breadcrumbs = [
  { name:"Kontakt", href:"/kontakt" }
 ];

 return (
  <div className="bg-[var(--surface-secondary)] text-[color:var(--text-primary)] font-sans min-h-screen">
   
   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden dark-focus">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-[color:var(--text-secondary)] text-[14px] font-medium tracking-wide">
            <MessageSquare className="w-4 h-4 text-[var(--color-red-500)]" />
            <span>Rund um die Uhr erreichbar</span>
          </div>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-6)]">
            Wir sind <span className="text-[var(--color-red-500)]">für Sie da.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] sm:text-[20px] text-[color:var(--text-secondary)] leading-relaxed text-balance">
            Rufen Sie uns im Notfall direkt an oder schreiben Sie uns eine Nachricht für allgemeine Anfragen und Termine.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-secondary)] pointer-events-none z-[1]" />
   </section>

   {/* Content Section */}
   <section aria-label="Kontaktmöglichkeiten" className="px-[var(--section-px)] -mt-20 lg:-mt-32 pb-24 md:pb-32 relative z-20">
    <div className="mx-auto max-w-7xl">
     <StaggerReveal className="grid gap-8 lg:grid-cols-[7fr_5fr] items-start" animation={entryAnimations.slideUpFade}>
      
      {/* LEFT: Dominant Call Path */}
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="bg-white p-8 sm:p-10 rounded-[var(--radius-24)] shadow-[var(--elevation-2)] border border-[var(--border-subtle)] h-full flex flex-col">
        <h2 className="typo-h2 text-balance text-[color:var(--text-primary)]">
         Der schnellste Weg zu uns
        </h2>
        <p className="mt-4 text-[16px] text-[color:var(--text-secondary)] leading-relaxed max-w-prose text-balance">
         Bei Notfällen — Tür zugefallen, Schlüssel abgebrochen, ausgesperrt — rufen Sie uns direkt an. Wir nennen Ihnen den Festpreis sofort am Telefon.
        </p>

        {/* Availability indicator */}
        <div className="mt-8 flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-xl w-fit">
         <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
         </span>
         <span className="text-[14px] font-semibold text-green-800">Jetzt erreichbar — 24/7 Notdienst</span>
        </div>

        {/* Giant Phone CTA */}
        <a
         href="tel:+4964418056279"
         className="group mt-6 flex items-center gap-5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)]"
        >
         <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
          <Phone className="w-8 h-8" />
         </div>
         <div className="flex flex-col">
          <span className="font-extrabold text-[32px] sm:text-[36px] tabular-nums tracking-tight">06441 8056279</span>
          <span className="text-[color:var(--text-secondary)] text-[15px] font-medium">Kostenlose Beratung — Festpreis vor Anfahrt</span>
         </div>
        </a>

        {/* Contact Details */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
         <div className="flex gap-4 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-subtle)]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
           <Mail className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
           <h3 className="text-[14px] font-bold text-[color:var(--text-primary)]">E-Mail</h3>
           <a href="mailto:info@wetzlar-schlüsseldienst.de" className="text-[14px] text-[color:var(--text-secondary)] hover:text-[var(--color-red-500)] hover:underline transition-colors">
            info@wetzlar-schlüsseldienst.de
           </a>
          </div>
         </div>
         <div className="flex gap-4 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-subtle)]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
           <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
           <h3 className="text-[14px] font-bold text-[color:var(--text-primary)]">Standort</h3>
           <p className="text-[14px] text-[color:var(--text-secondary)]">Langgasse 70, 35578 Wetzlar</p>
          </div>
         </div>
         <div className="flex gap-4 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-subtle)] sm:col-span-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
           <Clock className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
           <h3 className="text-[14px] font-bold text-[color:var(--text-primary)]">Servicezeiten</h3>
           <p className="text-[14px] text-[color:var(--text-secondary)]">
            <span className="font-semibold text-[color:var(--text-primary)]">Notdienst:</span> 24/7, 365 Tage im Jahr &nbsp;|&nbsp;
            <span className="font-semibold text-[color:var(--text-primary)]">Büro:</span> Mo-Fr, 08:00 - 18:00 Uhr
           </p>
          </div>
         </div>
        </div>
       </div>
      </StaggerItem>

      {/* RIGHT: Contact Form */}
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="bg-white p-8 sm:p-10 rounded-[var(--radius-24)] shadow-[var(--elevation-2)] border border-[var(--border-subtle)] h-full">
         <h2 className="typo-h2 text-balance text-[color:var(--text-primary)]">
          Oder schreiben Sie uns
         </h2>
         <p className="text-[14px] text-[color:var(--text-secondary)] mb-8 text-balance">Für allgemeine Anfragen, Terminwünsche und Rückrufe.</p>
         <ContactForm />
         {/* Trust line */}
         <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-[color:var(--text-tertiary)]">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
           <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
           <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Ihre Anfrage wird vertraulich behandelt — Antwort innerhalb von 30 Minuten</span>
         </div>
       </div>
      </StaggerItem>

     </StaggerReveal>
    </div>
   </section>

    {/* Premium Interactive Map Section */}
    <section aria-labelledby="standort-heading" className="px-[var(--section-px)] pb-24 md:pb-32 relative z-20">
     <div className="mx-auto max-w-7xl">
      <div className="text-center mb-10">
       <h2 id="standort-heading" className="typo-h2 text-[color:var(--text-primary)] text-balance">
        Finden Sie uns in <span className="text-[var(--color-red-500)]">Ihrer Nähe</span>
       </h2>
       <p className="mt-4 text-[16px] text-[color:var(--text-secondary)] max-w-2xl mx-auto text-balance">
        Über 78 Einsatzgebiete in der Region Wetzlar. Suchen Sie Ihren Standort und sehen Sie Festpreise, Anfahrtszeiten und direkte Kontaktmöglichkeiten.
       </p>
      </div>

      <ContactMapWrapper />

      {/* Stats below map */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 max-w-3xl mx-auto">
       {[
        { value: "78+", label: "Einsatzgebiete" },
        { value: "50 km", label: "Einsatzradius" },
        { value: "15-30 Min", label: "Ankunftszeit" },
        { value: "24/7", label: "Erreichbarkeit" },
       ].map((stat) => (
        <div key={stat.label} className="flex flex-col items-center justify-center gap-0.5 bg-white border border-[var(--border-subtle)] rounded-xl px-3 py-3 shadow-sm">
         <span className="text-[18px] font-black text-[color:var(--text-primary)] tabular-nums">{stat.value}</span>
         <span className="text-[11px] font-semibold text-[color:var(--text-tertiary)] uppercase tracking-wider">{stat.label}</span>
        </div>
       ))}
      </div>
     </div>
    </section>

    {/* Kontakt Bild */}
    <section className="px-[var(--section-px)] pb-24 md:pb-32">
     <div className="mx-auto max-w-4xl rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={werkstattImages[1]!} className="w-full h-[300px] md:h-[400px]" sizes="(max-width: 768px) 100vw, 800px" />
     </div>
    </section>

    <aside aria-label="Notfall-Kontakt">
     <EmergencyCTA />
    </aside>
   </div>
 );
}

export const dynamic = "force-static";
