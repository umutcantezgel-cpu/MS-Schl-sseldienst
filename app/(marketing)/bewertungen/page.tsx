import { Star, Check, Award } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { auszeichnungImages, teamImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Erfahrungen & Bewertungen | Schlüssel Schmiede Wetzlar",
 description: "⭐ 5.0 Sterne aus über 40 Google Rezensionen. Lesen Sie echte Erfahrungen mit der Schlüssel Schmiede Wetzlar. 100% Top-Service!",
 path: "/bewertungen",
 exactTitle: true,
});

const reviews = [
  { name: "Thomas Soliman", city: "Wetzlar", rating: 5, date: "2026-03-02", text: "Ich kann diesen Betrieb wirklich aus voller Überzeugung weiterempfehlen! Vom ersten Moment an fühlt man sich hier bestens aufgehoben. Der Service ist extrem professionell.", timeAgo: "Vor 1 Monat" },
  { name: "daniel sk", city: "Wetzlar", rating: 5, date: "2026-03-02", text: "Ich möchte gerne von meiner positiven Erfahrung berichten. Der Besuch war nicht nur schnell mal eben einen Schlüssel nachmachen lassen, sondern sehr angenehm.", timeAgo: "Vor 1 Monat" },
  { name: "Sidan Uguztemur", city: "Wetzlar", rating: 5, date: "2026-02-02", text: "Zuverlässige und schnelle Schlüsselschmiede. Ich habe hier schon mehrfach Schlüssel nachmachen lassen und war jedes Mal vollumfänglich zufrieden.", timeAgo: "Vor 2 Monaten" },
  { name: "Felix Humpert", city: "Wetzlar", rating: 5, date: "2026-02-02", text: "Gestern ist es passiert, mir ist die Tür zugefallen und wir standen in der Kälte. Der Schlüsseldienst war super schnell da.", timeAgo: "Vor 2 Monaten" },
  { name: "Rezensent von golocal", city: "Wetzlar", rating: 5, date: "2026-02-01", text: "Von dem Moment an, als ich den Laden betrat, wurde ich freundlich und kompetent empfangen. Das Team dort ist nicht nur professionell, sondern auch unglaublich hilfsbereit.", timeAgo: "Vor 2 Monaten" },
  { name: "Denis Ceylan", city: "Wetzlar", rating: 5, date: "2026-03-02", text: "Super Service – schnell, zuverlässig und sogar an einem Samstag! Herr Mina war total freundlich und kompetent. Klare Empfehlung, jederzeit wieder 👍", timeAgo: "Vor 1 Monat" },
  { name: "Fabian599", city: "Wetzlar", rating: 5, date: "2026-03-02", text: "Falls jemand in Zukunft für Wetzlar und die Umgebung einen Schlüsseldienst benötigt, ich kann seit heute die „Schlüssel-Schmiede Wetzlar“ aus der Langgasse 100% empfehlen.", timeAgo: "Vor 1 Monat" },
  { name: "Ronnii Ka", city: "Wetzlar", rating: 5, date: "2025-11-02", text: "Habe einen Autoschlüssel nachmachen lassen von einem alten Opel Astra, da ich den Ersatzschlüssel verloren hatte. Lief alles perfekt.", timeAgo: "Vor 5 Monaten" },
  { name: "Philipp He", city: "Wetzlar", rating: 5, date: "2026-02-02", text: "Super hilfsbereit! Guter Service! Wir haben ein paar Versuche gebraucht, um einen Schlüssel für ein altes Schloss nachmachen zu lassen, am Ende hat aber alles funktioniert.", timeAgo: "Vor 2 Monaten" },
  { name: "Kate", city: "Wetzlar", rating: 5, date: "2025-11-02", text: "Mein Schlüssel war abgebrochen und der nette Herr hat’s trotzdem geschafft den zu kopieren. Preis war genau wie am Telefon besprochen, fair und günstig. Super netter Typ.", timeAgo: "Vor 5 Monaten" },
  { name: "S.", city: "Wetzlar", rating: 5, date: "2026-01-02", text: "Er war sehr schnell da und ich war in kurzen Zeit wieder in meiner Wohnung. Absolut zu empfehlen!", timeAgo: "Vor 3 Monaten" },
  { name: "karina vanzetta", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Sehr empfehlenswert! Trotz anfänglicher Schwierigkeiten hat sich der Schlüsseldienstmeister viel Zeit genommen und mit viel Mühe den passenden Rohling gefunden.", timeAgo: "Vor 6 Monaten" },
  { name: "Steve Hoffmann", city: "Wetzlar", rating: 5, date: "2025-11-02", text: "Absolut zu empfehlen, sehr nette Herrschaften. Absolut professionell in dem was sie tun. Schlüssel hat hundert Prozent gepasst, ohne zu hacken oder sonstiges.", timeAgo: "Vor 5 Monaten" },
  { name: "Melanie Breidenich", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Wunderbar! Sehr freundliche Ansprache und schnelle unkomplizierte Ausführung. Repariert sogar defekte Autoschlüsselgehäuse mit integrierter Fernbedienung tadellos.", timeAgo: "Vor 6 Monaten" },
  { name: "Christoph Reinhardt", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Sehr guter Service und NICHT teuer. Mir ist mein Schlüssel in der Haustür außen abgebrochen. Super schnelle Hilfe.", timeAgo: "Vor 6 Monaten" },
  { name: "Sandy Schneider", city: "Wetzlar", rating: 5, date: "2025-07-02", text: "In 15 Minuten war ein Mitarbeiter vor Ort und hat die Tür geöffnet. Top Service!", timeAgo: "Vor 9 Monaten" },
  { name: "Celina Hartmann", city: "Wetzlar", rating: 5, date: "2025-06-02", text: "War heute bei der Schlüsselschmiede um einen Schlüssel nachmachen zu lassen. Ging schnell der Schlüssel hat direkt gepasst.", timeAgo: "Vor 10 Monaten" },
  { name: "Justin Hartmann", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "Super freundlicher und kompetenter Laden in Wetzlar! Die Schlüssel Schmiede bietet nicht nur perfekte Nachschlüssel in Top-Qualität.", timeAgo: "Vor 8 Monaten" },
  { name: "Leticia", city: "Wetzlar", rating: 5, date: "2026-02-02", text: "Sehr schnell vor Ort, professionell und schnelle Öffnung der Tür. Kartenzahlung auch möglich 💯", timeAgo: "Vor 2 Monaten" },
  { name: "Monika Saad", city: "Wetzlar", rating: 5, date: "2025-06-02", text: "Endlich ist mal wieder ein Schlüsseldienst in Wetzlar zentral gelegen. Es war mir eine Freude heute bei der Neueröffnung dabei sein zu dürfen.", timeAgo: "Vor 10 Monaten" },
  { name: "Frau Knuddelknit", city: "Wetzlar", rating: 5, date: "2025-12-02", text: "Meine Tür war zugefallen, an einem Samstag. der nette Herr war schnell da und hat ohne Beschädigung die Tür öffnen können.", timeAgo: "Vor 4 Monaten" },
  { name: "H. B.", city: "Wetzlar", rating: 5, date: "2026-02-02", text: "Heute Batteriewechsel bei 3 Armbanduhren erfolgreich durchgeführt. sehr nette hilfsbereite Dame im Geschäft", timeAgo: "Vor 2 Monaten" },
  { name: "Dom", city: "Wetzlar", rating: 5, date: "2026-03-02", text: "Pünktlich, Schnell und Gute Preise. Danke für den Zylindertausch.", timeAgo: "Vor 1 Monat" },
  { name: "Mohammed Shehab", city: "Wetzlar", rating: 5, date: "2025-07-02", text: "Schlüssel kopieren lassen in unter 1 Minute. Der Chef ist sehr kompetent und freundlich.", timeAgo: "Vor 9 Monaten" },
  { name: "Carsten Ulm", city: "Wetzlar", rating: 5, date: "2026-01-02", text: "Professioneller und freundlicher Service, schnell das Problem behoben. Alles in allem super Leistung.", timeAgo: "Vor 3 Monaten" },
  { name: "Tinus", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "Schneller und freundlicher Service. Wenn ihr euch mal aussperrt, absolut weiter zu empfehlen. Alles ging super schnell.", timeAgo: "Vor 8 Monaten" },
  { name: "ophelia fritz", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Heute über den ADAC Schlüsselnotdienst vorbei gekommen. Super freundlich und so schnell. Danke!", timeAgo: "Vor 6 Monaten" },
  { name: "Ramona Pingel", city: "Wetzlar", rating: 5, date: "2025-06-02", text: "Ein echt toller Laden. Super toller schneller Service und sehr nette Besitzer.", timeAgo: "Vor 10 Monaten" },
  { name: "Johannes Kohlstädt", city: "Wetzlar", rating: 5, date: "2026-02-02", text: "Sehr Zuverlässig, Schnell und sehr Nett.", timeAgo: "Vor 2 Monaten" },
  { name: "Daniel Farella", city: "Wetzlar", rating: 5, date: "2025-06-02", text: "Ein super seriöser Laden. Sehr nettes Ambiente.", timeAgo: "Vor 10 Monaten" },
  { name: "Regina Mierzwa", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Schneller, kompetenter und sehr freundlicher Service! Nur zu empfehlen!", timeAgo: "Vor 6 Monaten" },
  { name: "Sadika Alici", city: "Wetzlar", rating: 5, date: "2025-09-02", text: "Sehr freundlich! kompetent!", timeAgo: "Vor 7 Monaten" },
  { name: "nicole fieres", city: "Wetzlar", rating: 5, date: "2025-06-02", text: "Super Laden und sehr freundlicher Besitzer. Sehr zu empfehlen.", timeAgo: "Vor 10 Monaten" },
  { name: "Felix Lehmann", city: "Wetzlar", rating: 5, date: "2026-01-02", text: "Sehr freundlicher und professioneller Service", timeAgo: "Vor 3 Monaten" },
  { name: "Pascal Kampert", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Schnell, freundlich und absolut faire Preise.", timeAgo: "Vor 6 Monaten" },
  { name: "Tahera Ibrahimi", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "Sehr nette Mitarbeiter Respektvoll und helfen jeden Kunde.", timeAgo: "Vor 8 Monaten" },
  { name: "Rezensent von Gelbe Seiten", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Von dem Moment an, als ich den Laden betrat, wurde ich freundlich und kompetent empfangen. Top Team.", timeAgo: "Vor 6 Monaten" },
  { name: "Elvir Civic", city: "Wetzlar", rating: 5, date: "2025-10-02", text: "Net und Freundlich, hat alles super funktioniert.", timeAgo: "Vor 6 Monaten" },
  { name: "Y", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "So ein korrekter freundlicher Mann er hilft den Kunden wo er kann top", timeAgo: "Vor 8 Monaten" },
  { name: "Oktay Yildiz", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "Immer wieder gerne!", timeAgo: "Vor 8 Monaten" },
  { name: "Raphael Tursky (dekekz)", city: "Wetzlar", rating: 5, date: "2025-07-02", text: "Top Service, Schnell und verlässlich!", timeAgo: "Vor 9 Monaten" },
  { name: "Tarek Habid", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "Bester Schlüsseldienst, mit dem besten Schlüssel Kopien.", timeAgo: "Vor 8 Monaten" },
  { name: "XxChrisxX 92", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "Sehr schnell und sehr kompetent .", timeAgo: "Vor 8 Monaten" },
  { name: "Marvin Mendoza", city: "Wetzlar", rating: 5, date: "2025-08-02", text: "Super Dienstleistung und Service", timeAgo: "Vor 8 Monaten" },
  { name: "Sascha Poschmann", city: "Wetzlar", rating: 5, date: "2026-03-24", text: "Ich kann die Schlüssel-Schmiede in Wetzlar und insbesondere Herrn Saad uneingeschränkt weiterempfehlen!", timeAgo: "Vor 1 Woche" },
  { name: "Horst Der Profi", city: "Wetzlar", rating: 5, date: "2026-02-02", text: "Tipi Topi", timeAgo: "Vor 2 Monaten" }
];

function generateReviewSchema() {
 return {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Schlüssel Schmiede Wetzlar",
  "image": "https://www.wetzlar-schlüsseldienst.de/images/og-image.jpg",
  "telephone": "+4964418056279",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Langgasse 70",
    "addressLocality": "Wetzlar",
    "postalCode": "35578",
    "addressCountry": "DE"
  },
  "aggregateRating": {
   "@type": "AggregateRating",
   "ratingValue": "5.0",
   "reviewCount": "46",
   "bestRating": "5",
   "worstRating": "1"
  },
  "review": reviews.map(r => ({
   "@type": "Review",
   "itemReviewed": {
    "@type": "Locksmith",
    "name": "Schlüssel Schmiede Wetzlar",
    "url": "https://www.wetzlar-schlüsseldienst.de/"
   },
   "author": {
    "@type": "Person",
    "name": r.name 
   },
   "datePublished": r.date,
   "reviewBody": r.text,
   "reviewRating": {
    "@type": "Rating",
    "ratingValue": r.rating,
    "bestRating": 5,
    "worstRating": 1
   }
  }))
 };
}

function StarRating({ rating }: { rating: number }) {
 return (
  <div className="flex gap-1 text-[var(--color-yellow-400)] drop-shadow-sm" aria-label={`${rating} von 5 Sternen`} role="img">
   {[...Array(5)].map((_, i) => (
    <Star
     key={i}
     className={`h-5 w-5 ${i < rating ?"fill-current" :"text-[var(--border-subtle)]"}`}
     aria-hidden="true"
    />
   ))}
  </div>
 );
}

export default function BewertungenPage() {
 const breadcrumbs = [
  { name:"Bewertungen", href:"/bewertungen" }
 ];

 return (
  <div className="bg-[var(--surface-secondary)] text-[color:var(--text-primary)] font-sans min-h-screen">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema()) }}
   />

   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[var(--space-64)] lg:pt-[220px] lg:pb-[var(--space-96)] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
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
            <Award className="w-4 h-4 text-[var(--color-yellow-400)]" />
            <span>45 verifizierte Rezensionen</span>
          </div>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight text-[color:var(--text-primary)] leading-[1.1]">
            Das sagen unsere <span className="text-[var(--color-red-500)]">Kunden</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-4xl font-extrabold text-white">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1 text-[var(--color-yellow-400)]" aria-label="5.0 von 5 Sternen" role="img">
                  {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[color:var(--text-tertiary)] mt-1">Kundenrezensionen</span>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-secondary)] pointer-events-none z-[1]" />
   </section>

   {/* Reviews Grid */}
   <section aria-label="Einzelne Kundenbewertungen" className="px-[var(--section-px)] -mt-16 lg:-mt-24 pb-[var(--section-py)] relative z-20">
    <div className="mx-auto max-w-7xl">
     <StaggerReveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      {reviews.map((review) => (
       <StaggerItem key={review.name} animation={entryAnimations.slideUpFade}>
         <article className="rounded-[var(--radius-24)] bg-white p-8 shadow-[var(--elevation-2)] border border-[var(--border-subtle)] h-full flex flex-col justify-between hover:shadow-[var(--elevation-3)] transition-all group">
          <div>
            <div className="flex justify-between items-start mb-6">
            <StarRating rating={review.rating} />
            <time className="text-[13px] font-medium text-[color:var(--text-tertiary)] bg-[var(--surface-secondary)] px-3 py-1 rounded-full" dateTime={review.date}>{review.timeAgo}</time>
            </div>
            <blockquote className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed relative">
            <span className="absolute -left-2 -top-2 text-4xl text-[var(--border-subtle)] font-serif leading-none opacity-50">&quot;</span>
            <span className="relative z-10 italic">{(review.text)}</span>
            </blockquote>
          </div>
          <footer className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-4">
           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-red-500)]/10 font-bold text-[var(--color-red-500)] text-lg group-hover:scale-110 transition-transform" aria-hidden="true">
            {review.name[0]}
           </div>
           <div>
            <div className="font-bold text-[color:var(--text-primary)]">{review.name}</div>
            <div className="text-sm text-[color:var(--text-tertiary)] flex items-center gap-1">
              <Check className="w-3 h-3 text-[var(--color-success)]" /> Verifizierte Kundin aus {review.city}
            </div>
           </div>
          </footer>
         </article>
       </StaggerItem>
      ))}
     </StaggerReveal>
    </div>
   </section>

   {/* Trust Bilder */}
   <section className="px-[var(--section-px)] pb-24 md:pb-32 relative z-20">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={auszeichnungImages[1]!} className="w-full h-[300px]" sizes="(max-width: 768px) 100vw, 50vw" />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={teamImages[0]!} className="w-full h-[300px]" sizes="(max-width: 768px) 100vw, 50vw" />
     </div>
    </div>
   </section>

   <aside aria-label="Notfall-Kontakt">
    <EmergencyCTA />
   </aside>
  </div>
 );
}

export const dynamic = "force-static";
