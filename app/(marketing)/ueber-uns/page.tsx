import { ShieldCheck, MapPin, Heart, Clock, Star, Wrench, ThumbsUp, Medal, Users } from"lucide-react";
import Link from "next/link";
import EmergencyCTA from"@/components/EmergencyCTA";
import AnimatedCounter from"@/components/ui/AnimatedCounter";
import TrustStrip from"@/components/trust/TrustStrip";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages, werkstattImages, auszeichnungImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Über uns — Lokaler Schlüsseldienst seit 15+ Jahren",
 description: "Ihr lokaler Partner aus Wetzlar! ✔️ Über 15 Jahre Erfahrung ✔️ Keine Callcenter ✔️ Lokale Monteure. Lernen Sie uns kennen.",
 path: "/ueber-uns",
});

export default function UeberUnsPage() {
 const breadcrumbs = [
  { name:"Über Uns", href:"/ueber-uns" }
 ];

 return (
  <div className="bg-[var(--surface-secondary)] text-[color:var(--text-primary)] font-sans min-h-screen">
   
   {/* Hero Section und Premium Dark */}
   <section className="relative min-h-[100svh] min-h-[100dvh] lg:min-h-[60vh] flex items-center pt-[100px] pb-8 sm:pt-[140px] sm:pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
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
            <MapPin className="w-4 h-4 text-[var(--color-red-500)]" />
            <span>Aus Wetzlar. Für Wetzlar.</span>
          </div>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-6)]">
            Nicht einfach ein Schlüsseldienst. <br />
            <span className="text-[var(--color-red-500)]">Ihre Rettung in der Not.</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance">
            Mehr als 15 Jahre Erfahrung, über 50 gerettete Situationen jeden Monat. Wir sind der Handwerksbetrieb von nebenan, dem Sie blind vertrauen können.
          </p>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-secondary)] pointer-events-none z-[1]" />
   </section>

   {/* Über-uns Bilder */}
   <section className="px-[var(--section-px)] py-16 bg-[var(--surface-secondary)]">
    <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={teamImages[1]!} className="w-full h-[280px]" sizes="(max-width: 768px) 100vw, 33vw" />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={werkstattImages[0]!} className="w-full h-[280px]" sizes="(max-width: 768px) 100vw, 33vw" />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={auszeichnungImages[2]!} className="w-full h-[280px]" sizes="(max-width: 768px) 100vw, 33vw" />
     </div>
    </div>
   </section>

   {/* Story Section */}
   <section className="px-[var(--section-px)] py-24 md:py-32 bg-[var(--surface-primary)]">
    <StaggerReveal className="mx-auto max-w-3xl" animation={entryAnimations.slideUpFade}>
     {/* Act 1 & 2: The Hook & The Problem */}
     <div className="prose prose-lg prose-slate mx-auto">
      <h2 className="typo-h2 text-[color:var(--text-primary)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
       <div className="w-14 h-14 rounded-2xl bg-[var(--color-red-500)]/10 flex flex-shrink-0 items-center justify-center">
        <ShieldCheck className="h-7 w-7 text-[var(--color-red-500)]" />
       </div>
       Warum wir den Ruf unserer Branche reparieren
      </h2>
      <p className="lead text-xl text-[color:var(--text-secondary)] font-medium leading-relaxed">
       Jeder kennt die Schauergeschichten aus dem Fernsehen: Wenn die Tür ins Schloss fällt, beginnt oft nicht nur der Stress, sondern auch die Angst vor der Rechnung.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed mt-4">
       Sogenannte &quot;Schwarze Schafe&quot; und Abzock-Zentralen aus dem Internet nutzen die pure Notlage der Menschen gnadenlos aus. Versteckte Anfahrtskosten, zerstörte Schlösser und Rechnungen jenseits der 300-Euro-Marke sind leider keine Seltenheit.
      </p>
      <p className="text-[color:var(--text-secondary)] font-bold leading-relaxed mt-4">
       Genau deshalb haben wir die Schlüssel Schmiede Wetzlar gegründet. Wir wollten beweisen: Echtes Handwerk geht immer ehrlich.
      </p>

      {/* Quote Insert */}
      <blockquote className="my-10 border-l-4 border-[var(--color-red-500)] bg-[var(--surface-secondary)] p-6 md:p-8 rounded-r-2xl italic text-[color:var(--text-primary)] shadow-[var(--elevation-1)]">
       &quot;Wir möchten, dass Sie aufatmen können, sobald Sie unser Auto in Ihrer Straße sehen. Keine bösen Überraschungen, sondern nur schnelle, kompetente Hilfe von Nachbarn.&quot;
      </blockquote>
     </div>

     {/* Statistics Bar (Prompt 5.3) */}
     <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-[var(--space-6)] text-center bg-white border border-[var(--border-subtle)] p-[var(--space-8)] rounded-[var(--radius-24)] shadow-[var(--elevation-2)]">
        <div className="flex flex-col gap-2 relative">
         <div className="text-[36px] font-extrabold text-[var(--color-red-500)]">
          <AnimatedCounter end={15} suffix="+" duration={1500} />
         </div>
         <div className="text-xs font-bold text-[color:var(--text-secondary)] uppercase tracking-wider">Jahre Erfahrung</div>
         <Medal className="absolute -top-4 -right-2 text-[var(--color-red-500)]/5 w-16 h-16" />
        </div>
        <div className="flex flex-col gap-2 relative">
         <div className="text-[36px] font-extrabold text-[var(--color-red-500)]">
          <AnimatedCounter end={50} suffix="+" duration={2000} />
         </div>
         <div className="text-xs font-bold text-[color:var(--text-secondary)] uppercase tracking-wider">Notöffnungen/Monat</div>
         <Users className="absolute -top-4 -right-2 text-[var(--color-red-500)]/5 w-16 h-16" />
        </div>
        <div className="flex flex-col gap-2 relative pt-6 md:pt-0">
         <div className="text-[36px] font-extrabold text-[var(--color-red-500)]">
          <AnimatedCounter end={99} suffix="%" duration={2000} />
         </div>
         <div className="text-xs font-bold text-[color:var(--text-secondary)] uppercase tracking-wider">Zerstörungsfrei</div>
         <ThumbsUp className="absolute -top-4 -right-2 text-[var(--color-red-500)]/5 w-16 h-16" />
        </div>
        <div className="flex flex-col gap-2 relative pt-6 md:pt-0">
         <div className="text-[36px] font-extrabold text-[var(--color-red-500)]">
          <AnimatedCounter end={25} suffix=" Min" duration={1200} />
         </div>
         <div className="text-xs font-bold text-[color:var(--text-secondary)] uppercase tracking-wider">Mittel. Anfahrtszeit</div>
         <Clock className="absolute -top-4 -right-2 text-[var(--color-red-500)]/5 w-16 h-16" />
        </div>
       </div>
     </StaggerItem>

     {/* Act 3: The Solution / The Values (Prompt 5.1) */}
     <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[var(--surface-secondary)] p-8 rounded-[var(--radius-24)] shadow-sm hover:shadow-[var(--elevation-3)] hover:ring-1 hover:ring-[var(--color-red-500)] transition-all">
         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-red-500)] text-white mb-6 shadow-[var(--shadow-cta)]">
          <Heart className="h-6 w-6" />
         </div>
         <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-3 pt-2 border-t border-[var(--border-subtle)]">Maximale Sorgfalt</h3>
         <p className="text-[color:var(--text-secondary)] text-base leading-relaxed">
          Wir behandeln jede Tür so vorsichtig, als wäre es unsere eigene. Zu 99% öffnen wir zerstörungsfrei. Darum vertrauen uns seit Jahren zahllose private Haushalte.
         </p>
        </div>

        <div className="bg-[var(--surface-secondary)] p-8 rounded-[var(--radius-24)] shadow-sm hover:shadow-[var(--elevation-3)] hover:ring-1 hover:ring-[var(--color-red-500)] transition-all">
         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-red-500)] text-white mb-6 shadow-[var(--shadow-cta)]">
          <Clock className="h-6 w-6" />
         </div>
         <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-3 pt-2 border-t border-[var(--border-subtle)]">Zeit ist Empathie</h3>
         <p className="text-[color:var(--text-secondary)] text-base leading-relaxed">
          Wer vor verschlossener Tür steht, oft bei Regen oder Kälte, braucht keine Warteschleifen. Wir garantieren in und um Wetzlar eine Anfahrt von unter 25 Minuten.
         </p>
        </div>

        <div className="bg-[var(--surface-secondary)] p-8 rounded-[var(--radius-24)] shadow-sm hover:shadow-[var(--elevation-3)] hover:ring-1 hover:ring-[var(--color-red-500)] transition-all sm:col-span-2 lg:col-span-1 border border-[var(--border-subtle)]">
         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-red-500)] text-white mb-6 shadow-[var(--shadow-cta)]">
          <Wrench className="h-6 w-6" />
         </div>
         <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-3 pt-2 border-t border-[var(--border-subtle)]">Meisterliche Expertise</h3>
         <p className="text-[color:var(--text-secondary)] text-base leading-relaxed">
          Echtes Handwerk: Wir sind mit Spezialwerkzeug ausgestattet, mit dem selbst moderne Hochsicherheitsschlösser professionell und nachhaltig bearbeitet werden können.
         </p>
        </div>
       </div>
     </StaggerItem>

     {/* Act 4 & 5: The Proof & Invitation */}
     <StaggerItem animation={entryAnimations.scaleFade}>
       <div className="mx-auto mt-16 max-w-3xl">
        {/* Uwe-Sarfeld Ausbildungs-Badge (Prompt 2.5) */}
        {/* Uwe-Sarfeld Ausbildungs-Badge (Premium) */}
        <div className="bg-white p-[var(--space-8)] md:p-[var(--space-10)] rounded-[var(--radius-16)] border-l-4 border-l-[var(--color-red-500)] border border-[var(--color-charcoal-100)] shadow-[var(--elevation-2)] relative overflow-hidden">
         {/* Decorative Quote Mark */}
         <span className="absolute top-4 right-6 text-[120px] font-serif text-[var(--color-red-500)]/[0.06] leading-none pointer-events-none select-none" aria-hidden="true">“</span>
         
         <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-charcoal-900)] shrink-0 text-white text-xl md:text-[24px] font-bold shadow-lg">
           US
          </div>
          <div className="flex flex-col text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-[var(--color-red-500)]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-red-500)]">Zertifizierte Ausbildung</span>
           </div>
           <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-3">
            Ausgebildet von Uwe Sarfeld
           </h3>
           <p className="text-[color:var(--text-secondary)] text-base leading-relaxed">
            Unser technischer Leiter durchlief ein hochkarätiges Mentoring-Programm bei Uwe Sarfeld, einem der profiliertesten TV-Sicherheitsexperten (bekannt aus Kabel 1 & WDR). Diese Spitzenausbildung befähigt unser Team zu branchenführenden Öffnungstechniken.
            Wir bringen nicht nur das richtige Werkzeug mit, sondern absolutes Meister-Know-how.
           </p>
          </div>
         </div>
        </div>
       </div>

       {/* MS Persönlichkeits-Element */}
       <div className="prose prose-lg prose-slate mx-auto mt-16">
        <div className="flex flex-col items-center text-center gap-6">
         {/* Initialen-Kreis */}
         <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-red-500)] to-[var(--color-red-700)] flex items-center justify-center text-white text-[32px] font-black shadow-[0_8px_32px_rgba(185,28,28,0.3)]">
          MS
         </div>
         <div className="flex flex-col items-center gap-1">
          <h3 className="text-xl font-bold text-[color:var(--text-primary)]"> Schlüssel Schmiede Wetzlar</h3>
          <span className="text-sm font-semibold text-[color:var(--text-tertiary)] uppercase tracking-wider">Inhaber & Geschäftsführer</span>
         </div>
         <div className="flex items-center gap-1 text-[var(--color-red-500)]">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
         </div>
         <p className="text-[color:var(--text-secondary)] text-lg leading-relaxed max-w-lg">
          Lassen Sie sich überzeugen, wenn Sie uns am meisten brauchen. Speichern Sie unsere Nummer am besten gleich in Ihrem Handy ein.
         </p>
         <a
          href="tel:+4964418056279"
          className="inline-flex items-center justify-center gap-3 h-[56px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-lg font-bold rounded-xl shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-1 transition-all duration-300"
         >
          <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          06441 8056279 anrufen
         </a>
        </div>
       </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   <EmergencyCTA />

    {/* Sub-Pages Navigation */}
    <section className="px-[var(--section-px)] py-16 md:py-20 bg-[var(--surface-secondary)]">
      <div className="mx-auto max-w-4xl">
        <h2 className="typo-h3 text-[color:var(--text-primary)] text-center mb-10">Mehr über uns erfahren</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Unsere Geschichte", href: "/ueber-uns/geschichte", desc: "15+ Jahre Handwerkstradition" },
            { name: "Unser Team", href: "/ueber-uns/team", desc: "Die Gesichter hinter dem Service" },
            { name: "Philosophie", href: "/ueber-uns/philosophie", desc: "Werte, die uns antreiben" },
            { name: "Karriere", href: "/ueber-uns/karriere", desc: "Werden Sie Teil des Teams" },
          ].map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex flex-col gap-2 p-6 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all"
            >
              <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">{page.name}</span>
              <span className="text-sm text-[color:var(--text-secondary)]">{page.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
 );
}

export const dynamic = "force-static";
