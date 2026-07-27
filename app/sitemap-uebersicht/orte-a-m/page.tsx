import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { allLocations } from '@/lib/data/allLocations';
import GlobalBackground from '@/components/GlobalBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateSharedMetadata } from '@/lib/metadata';

export const metadata = generateSharedMetadata({
  title: 'Einsatzgebiete A-M | HTML Sitemap | Schlüssel Schmiede Wetzlar',
  description: 'Übersicht unserer Einsatzgebiete im Lahn-Dill-Kreis (A bis M). Wir sind Ihr lokaler Schlüsseldienst mit kurzen Anfahrtszeiten.',
  path: '/sitemap-uebersicht/orte-a-m',
});

export default function SitemapOrteAM() {
  const sortedLocations = [...allLocations]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(loc => loc.name.charAt(0).toUpperCase() >= 'A' && loc.name.charAt(0).toUpperCase() <= 'M');

  return (
    <>
      <GlobalBackground />
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Einsatzgebiete A-M | HTML Sitemap | Schlüssel Schmiede Wetzlar. Regionale Einsatzgebiete A bis M.</div>
      
      <main className="relative pt-[140px] lg:pt-[180px] pb-24 z-10 w-full min-h-screen bg-[var(--surface-primary)] font-sans">
        <div className="mx-auto max-w-7xl px-[var(--section-px)] space-y-12">
          <Breadcrumbs items={[
            { name: 'Inhaltsübersicht', href: '/sitemap-uebersicht' },
            { name: 'Einsatzgebiete A-M', href: '/sitemap-uebersicht/orte-a-m' }
          ]} />
          
          <div>
            <h1 className="typo-h1 mb-4 text-[color:var(--text-primary)]">
              Regionale Einsatzorte (A - M) | Schlüsseldienst Lahn-Dill-Kreis
            </h1>
            <p className="typo-lead text-gray-700 max-w-4xl leading-relaxed">
              Auf dieser Seite finden Sie alle unsere betreuten Städte, Gemeinden und Ortsteile im Lahn-Dill-Kreis, die mit den Buchstaben A bis M beginnen. Wir sind Ihr seriöser und kompetenter Ansprechpartner für alle Fragen rund um Sicherheitstechnik, Türöffnungen und Notdienste in der gesamten Region. Um Ihnen maximale Transparenz und Verlässlichkeit zu garantieren, haben wir unsere Einsatzgebiete detailliert aufgeschlüsselt. So können Sie sich jederzeit vergewissern, dass Ihr Wohn- oder Geschäftsort zu unserem regulären Einzugsgebiet gehört und Sie von unseren schnellen Anfahrtszeiten profitieren.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mt-3 leading-relaxed">
              Als ortsansässiger Betrieb in Wetzlar legen wir besonderen Wert auf regionale Nähe. Das bedeutet für Sie: keine langen Wartezeiten, keine versteckten Fahrtkosten und ein persönlicher Ansprechpartner direkt aus Ihrer Nachbarschaft. Wenn Sie Ihren Ort in der folgenden Liste finden, garantieren wir Ihnen unsere verbindlichen Festpreise sowie eine Anfahrtszeit, die im Notfall oft nur 15 bis 30 Minuten beträgt. Sollten Sie Fragen zu einem speziellen Ortsteil haben, der hier möglicherweise nicht aufgeführt ist, rufen Sie uns einfach an – in den meisten Fällen helfen wir Ihnen dennoch gerne und schnell weiter. Vertrauen Sie auf die Schlüssel Schmiede Wetzlar, wenn es um Ihre Sicherheit geht.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border-subtle)] space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Städte & Gemeinden (A - M)</h2>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
              {sortedLocations.map((loc) => (
                <li key={loc.id}>
                  <Link href={`/${loc.slug}`} className="text-sm text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold block truncate" title={`Schlüsseldienst in ${loc.name}`}>
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export const dynamic = "force-static";
