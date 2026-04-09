import Link from"next/link";
import Image from"next/image";
import { Phone, Mail, MapPin, Clock, Star, ShieldCheck } from"lucide-react";
import { getNavigationConfig } from "@/lib/data/navigation";

const config = getNavigationConfig();

interface MenuItem {
 title: string;
 links: {
  text: string;
  url: string;
 }[];
}

const menuItems: MenuItem[] = [
 {
  title: config.services.label,
  links: config.services.items.map(item => ({ text: item.label, url: item.href }))
 },
 {
  title:"Einsatzgebiete",
  links: [
   { text:"Schlüssel Schmiede Gießen", url:"/schluesseldienst-giessen" },
   { text:"Schlüssel Schmiede Wetzlar", url:"/schluesseldienst-wetzlar" },
   { text:"Schlüssel Schmiede Aßlar", url:"/schluesseldienst-asslar" },
   { text:"Schlüssel Schmiede Herborn", url:"/schluesseldienst-herborn" },
   { text:"Schlüssel Schmiede Dillenburg", url:"/schluesseldienst-dillenburg" },
   { text:"Alle Einsatzgebiete →", url:"/servicegebiet" },
  ],
 },
 {
  // [SEO: Resolved "Text duplicate" via Anchor-Variation und Footer synonyms vs Header]
  title:"Kundenservice",
  links: [
   { text:"Notdienst anrufen: 06441 8056279", url:"tel:+4964418056279" },
   { text:"E-Mail schreiben", url:"mailto:info@wetzlar-schlüsseldienst.de" },
   { text:"Unsere Filiale besuchen", url:"/schluessel-schmiede" },
   { text:"Nachricht senden", url:"/kontakt" },
   { text:"Häufige Fragen zur Türöffnung", url:"/faq" },
  ],
 },
 {
   // [SEO: Resolved "Text duplicate" und Footer labels differ from Header navigation]
   title: "Über uns",
   links: [
    { text: "Unser Schlüssel Schmiede Team", url: "/ueber-uns" },
    { text: "Aktuelle Ratgeber-Artikel", url: "/blog" },
    { text: "Kundenstimmen & Erfahrungen", url: "/bewertungen" },
    { text: "Beratungstermin vereinbaren", url: "/termin-buchen" },
    { text: "Preisübersicht Türöffnung", url: "/preise" },
   ],
  },
];

export default function Footer() {
 return (
   <footer className="bg-[var(--color-charcoal-950)] text-white pb-[72px] lg:pb-0 relative dark-focus">
   <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-blush-500)]/20 to-transparent" />
   <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[var(--color-charcoal-900)] to-transparent pointer-events-none opacity-30" />
   <div className="mx-auto max-w-7xl px-[var(--section-px)] py-[var(--section-py)] relative z-10">
    <h2 className="sr-only" id="footer-navigation-heading">Footer Navigation</h2>
    {/* Main Grid */}
     <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
     {/* Brand Column */}
      <div className="col-span-2 mb-8 lg:mb-0">
       {/* [SEO: Resolved "No Text" via sr-only on footer logo link] */}
       <Link href="/" className="inline-block">
        <span className="sr-only">Zurück zur Startseite und Schlüssel Schmiede Wetzlar</span>
        <Image
         src="/images/footer-logo.webp"
         alt="Schlüssel Schmiede Wetzlar Logo"
         width={280}
         height={84}
         className="w-auto object-contain"
         style={{ height: '80px' }}
         unoptimized
        />
       </Link>
       <p className="mt-4 text-[var(--color-charcoal-400)] text-sm leading-relaxed max-w-xs">
        Ihre Schlüssel Schmiede für alle Schloss und Sicherheitsfragen
        in Wetzlar und Umgebung. 24/7 erreichbar.
       </p>
       <div className="mt-5 space-y-2.5">
        <a href="tel:+4964418056279" className="flex items-center gap-2.5 text-sm text-[var(--color-charcoal-300)] hover:text-[var(--color-red-500)] transition-colors">
         <Phone className="h-4 w-4 text-[var(--color-red-500)] shrink-0" aria-hidden="true" />
         <span>06441 8056279</span>
        </a>
        <a href="mailto:info@wetzlar-schlüsseldienst.de" className="flex items-center gap-2.5 text-sm text-[var(--color-charcoal-300)] hover:text-[var(--color-red-500)] transition-colors">
         <Mail className="h-4 w-4 text-[var(--color-red-500)] shrink-0" aria-hidden="true" />
         <span>info@wetzlar-schlüsseldienst.de</span>
        </a>
        <div className="flex items-center gap-2.5 text-sm text-[var(--color-charcoal-400)]">
         <MapPin className="h-4 w-4 text-[var(--color-red-500)] shrink-0" aria-hidden="true" />
         <span>Langgasse 70, 35578 Wetzlar</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[var(--color-charcoal-400)]">
         <Clock className="h-4 w-4 text-[var(--color-red-500)] shrink-0" aria-hidden="true" />
         <span>Montag bis Samstag 10 bis 18 Uhr und 24/7 Schlüsselnotdienst</span>
        </div>
        {/* Social Media */}
        <div className="mt-5 flex items-center gap-3">
          <a href="https://www.facebook.com/profile.php?id=61582567388378" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[var(--color-charcoal-300)] hover:bg-[var(--color-red-500)] hover:text-white transition-all">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="https://www.instagram.com/schluessel_schmiede_wetzlar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[var(--color-charcoal-300)] hover:bg-[var(--color-red-500)] hover:text-white transition-all">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/mina-saad-a218413a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[var(--color-charcoal-300)] hover:bg-[var(--color-red-500)] hover:text-white transition-all">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
       </div>
      </div>

     {/* Menu Columns */}
     {menuItems.map((section, idx) => (
      <div key={idx}>
       <div id={`footer-nav-${idx}`} className="mb-4 font-bold uppercase text-xs tracking-widest text-[var(--color-charcoal-400)]">
        {section.title}
       </div>
       {section.title === "Kundenservice" ? (
        <address id={`footer-nav-${idx}-address`} className="space-y-3 not-italic block">
         <ul className="space-y-3">
          {section.links.map((link, linkIdx) => (
          <li key={linkIdx}>
           <Link
            href={link.url}
            className="flex items-center gap-2.5 text-sm text-[var(--color-charcoal-300)] hover:text-[var(--color-red-500)] transition-colors"
           >
            {link.text.includes('06441') && <Phone className="h-4 w-4 text-[var(--color-red-500)] shrink-0" aria-hidden="true" />}
            {link.text.includes('info@') && <Mail className="h-4 w-4 text-[var(--color-red-500)] shrink-0" aria-hidden="true" />}
            {!link.text.includes('06441') && !link.text.includes('info@') && <span className="w-4 h-4 shrink-0" aria-hidden="true" />} {/* Placeholder for alignment */}
            {link.text}
           </Link>
          </li>
         ))}
         </ul>
        </address>
       ) : (
        <nav aria-labelledby={`footer-nav-${idx}`} className="space-y-3">
         <ul className="space-y-3">
          {section.links.map((link, linkIdx) => (
           <li key={linkIdx}>
           <Link
            href={link.url}
            className="text-sm text-[var(--color-charcoal-300)] hover:text-[var(--color-red-500)] transition-colors inline-block py-1.5 w-full"
           >
            {link.text}
           </Link>
          </li>
         ))}
         </ul>
        </nav>
       )}
      </div>
     ))}
    </div>

    {/* Conversion Push CTA (Safety Net) */}
     <div className="mt-12 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold text-white">Nichts Passendes gefunden?</div>
        <p className="text-[var(--color-charcoal-400)] text-sm max-w-md">
          Kommen Sie persönlich im Laden vorbei oder rufen Sie uns an, wir beraten Sie gerne. Auch 24/7 als Schlüsseldienst Notdienst erreichbar.
        </p>
      </div>
       <a 
         href="tel:+4964418056279" 
         className="flex items-center justify-center gap-3 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white px-8 h-[52px] rounded-full font-bold transition-all shadow-md hover:-translate-y-1 w-full md:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-charcoal-900)] whitespace-nowrap"
      >
        <Phone className="w-5 h-5" />
        Jetzt Kontakt aufnehmen
      </a>
    </div>

     {/* [SEO: Outbound Trust-Signals added und dofollow links to authoritative institutions] */}
     {/* rel="noopener noreferrer" WITHOUT nofollow = intentional dofollow for trust signaling */}
     <div className="mt-12 pt-8 border-t border-white/10">
       <div className="mb-4 font-bold uppercase text-xs tracking-widest text-[var(--color-charcoal-400)]">
         Vertrauenswürdige Partner & Institutionen
       </div>
       <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-charcoal-400)]">
         {/* [SEO: Sister-Site Cross-Link und bidirektional dofollow für Domain-Authority-Transfer] */}
         <a href="https://www.schluesseldienst-wetzlar.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors font-medium text-[var(--color-charcoal-300)]">Schlüsseldienst Wetzlar und Unsere Partnerseite</a>
         {/* [SEO: Outbound Trust-Signal added] */}
         <a href="https://www.adac.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors font-medium text-[var(--color-charcoal-300)]">ADAC und Offizieller Partner</a>
         <a href="https://www.k-einbruch.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">K-EINBRUCH und Polizeiliche Kriminalprävention</a>
         <a href="https://www.abus.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">ABUS Sicherheitstechnik</a>
         <a href="https://www.hwk-wiesbaden.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">Handwerkskammer Wiesbaden</a>
         <a href="https://www.wetzlar.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">Stadtverwaltung Wetzlar</a>
         <a href="https://www.polizei.hessen.de/praesidium-mittelhessen/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">Polizeipräsidium Mittelhessen</a>
         <a href="https://www.verbraucherzentrale-hessen.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">Verbraucherzentrale Hessen</a>
         <a href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestandsimmobilien/Einbruchschutz/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">KfW Einbruchschutz-Förderung</a>
         <a href="https://www.webspider24.de" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-red-500)] transition-colors">Webspider24 Webkatalog</a>
       </div>
     </div>

    {/* Trust Bar */}
    <div className="mt-12 pt-8">
     <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[var(--color-charcoal-400)] text-sm">
      <div className="flex items-center gap-3">
       <div className="flex text-yellow-500">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />)}
       </div>
       <span>5.0 / 5 auf Google</span>
      </div>
      <div className="flex items-center gap-3">
       <ShieldCheck className="w-5 h-5 text-[var(--value-icon-color)]" aria-hidden="true" />
       <span>Ausgebildet von Uwe Sarfeld (TV-Experte)</span>
      </div>
      <div className="flex items-center gap-3">
       <div className="flex gap-2">
         <span className="px-3 py-1.5 bg-white/15 rounded-lg text-[10px] uppercase font-bold tracking-wider">EC / Kredit</span>
         <span className="px-3 py-1.5 bg-white/15 rounded-lg text-[10px] uppercase font-bold tracking-wider">Bar</span>
       </div>
       <span>Sichere Zahlung vor Ort</span>
      </div>
     </div>
    </div>

    {/* Bottom Bar und Semantic Address Region */}
    <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[var(--color-charcoal-500)] md:flex-row md:items-center">
     <p>© 2025{new Date().getFullYear()} Schlüssel Schmiede Wetzlar. Alle Rechte vorbehalten. | Festpreis Garantie Wetzlarer Kernstadt</p>
      <nav aria-label="Rechtliche Informationen">
       <ul className="flex flex-wrap gap-4">
        {config.legal.map((link) => (
         <li key={link.label}>
          <Link href={link.href} className="hover:text-[var(--color-red-500)] transition-colors underline">
           {link.label}
          </Link>
         </li>
        ))}
        <li><Link href="/cookie-richtlinie" className="hover:text-[var(--color-red-500)] transition-colors underline">Cookie-Richtlinie</Link></li>
        <li><Link href="/barrierefreiheit" className="hover:text-[var(--color-red-500)] transition-colors underline">Barrierefreiheit</Link></li>
        <li><Link href="/sitemap-uebersicht" className="hover:text-[var(--color-red-500)] transition-colors underline">Sitemap</Link></li>
        <li><a href="#cookie-settings" className="hover:text-[var(--color-red-500)] transition-colors underline cursor-pointer">Cookie-Einstellungen</a></li>
       </ul>
      </nav>
    </div>
   </div>
  </footer>
 );
}
