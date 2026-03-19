import Link from"next/link";
import { Key, Phone, Mail, MapPin, Clock, Star, ShieldCheck } from"lucide-react";

interface MenuItem {
 title: string;
 links: {
  text: string;
  url: string;
 }[];
}

const menuItems: MenuItem[] = [
 {
  title:"Leistungen",
  links: [
   { text:"Türöffnung", url:"/leistungen/turoeffnung" },
   { text:"Schloss austauschen", url:"/leistungen/schloss-austauschen" },
   { text:"Einbruchschutz", url:"/leistungen/einbruchschutz" },
   { text:"Schließanlagen", url:"/leistungen/schliessanlagen" },
   { text:"Tresoröffnung", url:"/leistungen/tresoroeffnung" },
   { text:"Preise", url:"/preise" },
  ],
 },
 {
  title:"Einsatzgebiete",
  links: [
   { text:"Schlüsseldienst Gießen", url:"/schluesseldienst-giessen" },
   { text:"Schlüsseldienst Wetzlar", url:"/schluesseldienst-wetzlar-niedergirmes" },
   { text:"Schlüsseldienst Aßlar", url:"/schluesseldienst-asslar" },
   { text:"Schlüsseldienst Herborn", url:"/schluesseldienst-herborn" },
   { text:"Schlüsseldienst Dillenburg", url:"/schluesseldienst-dillenburg" },
   { text:"Alle 20 Gebiete →", url:"/servicegebiet" },
  ],
 },
 {
  title:"Kontakt",
  links: [
   { text:"06441 8056544", url:"tel:+4964418056544" },
   { text:"info@sd-wetzlar.de", url:"mailto:info@sd-wetzlar.de" },
   { text:"Kontaktformular", url:"/kontakt" },
   { text:"FAQ", url:"/faq" },
  ],
 },
 {
  title:"Rechtliches",
  links: [
   { text:"Impressum", url:"/impressum" },
   { text:"Datenschutz", url:"/datenschutz" },
   { text:"Über uns", url:"/ueber-uns" },
  ],
 },
];

export default function Footer() {
 return (
  <footer role="contentinfo" aria-label="Fußzeile" className="bg-[var(--color-charcoal-950)] text-white pb-32 lg:pb-0 relative dark-focus">
   <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-blush-500)]/20 to-transparent" />
   <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[var(--color-charcoal-900)] to-transparent pointer-events-none opacity-30" />
   <div className="mx-auto max-w-7xl px-[var(--section-px)] py-[var(--section-py)] relative z-10">
    {/* Main Grid */}
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
     {/* Brand Column */}
     <div className="col-span-2 mb-8 lg:mb-0">
      <Link href="/" className="flex items-center gap-2">
       <Key className="h-6 w-6 text-[var(--value-primary)]" aria-hidden="true" />
       <span className="text-xl font-bold">Schlüsseldienst Wetzlar</span>
      </Link>
      <p className="mt-4 text-[var(--color-charcoal-400)] text-sm leading-relaxed max-w-xs">
       Ihr zuverlässiger Partner für alle Schloss- und Sicherheitsfragen
       in Wetzlar und Umgebung. 24/7 erreichbar.
      </p>
      <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-charcoal-400)]">
       <Clock className="h-4 w-4 text-[var(--value-icon-color)]" aria-hidden="true" />
       <span>24/7 Notdienst — auch an Feiertagen</span>
      </div>
     </div>

     {/* Menu Columns */}
     {menuItems.map((section, idx) => (
      <div key={idx}>
       <h3 id={`footer-nav-${idx}`} className="mb-4 font-bold uppercase text-xs tracking-widest text-[var(--color-charcoal-400)]">
        {section.title}
       </h3>
       <nav aria-labelledby={`footer-nav-${idx}`} className="space-y-3">
        <ul className="space-y-3">
         {section.links.map((link, linkIdx) => (
         <li key={linkIdx}>
          <Link
           href={link.url}
           className="text-sm text-[var(--color-charcoal-300)] hover:text-[var(--color-red-500)] transition-colors"
          >
           {link.text}
          </Link>
         </li>
        ))}
        </ul>
       </nav>
      </div>
     ))}
    </div>

    {/* Trust Bar */}
    <div className="mt-16 pt-8">
     <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[var(--color-charcoal-400)] text-sm">
      <div className="flex items-center gap-3">
       <div className="flex text-yellow-500">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
       </div>
       <span>4.9 / 5 auf Google</span>
      </div>
      <div className="flex items-center gap-3">
       <ShieldCheck className="w-5 h-5 text-[var(--value-icon-color)]" />
       <span>Ausgebildet von Uwe Sarfeld (TV-Experte)</span>
      </div>
      <div className="flex items-center gap-3">
       <div className="flex gap-2">
        <span className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] uppercase font-bold tracking-wider">EC / Kredit</span>
        <span className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] uppercase font-bold tracking-wider">Bar</span>
        <span className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] uppercase font-bold tracking-wider">PayPal</span>
       </div>
       <span>Sichere Zahlung vor Ort</span>
      </div>
     </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[var(--color-charcoal-500)] md:flex-row md:items-center">
     <p>© {new Date().getFullYear()} Schlüsseldienst Wetzlar. Alle Rechte vorbehalten.</p>
     <ul className="flex gap-4">
      <li><Link href="/impressum" className="hover:text-[var(--color-red-500)] transition-colors underline">Impressum</Link></li>
      <li><Link href="/datenschutz" className="hover:text-[var(--color-red-500)] transition-colors underline">Datenschutz</Link></li>
     </ul>
    </div>
   </div>
  </footer>
 );
}
