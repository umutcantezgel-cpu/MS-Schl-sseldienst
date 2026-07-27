import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { allLocations } from '@/lib/data/allLocations';
import GlobalBackground from '@/components/GlobalBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateSharedMetadata } from '@/lib/metadata';

export const metadata = generateSharedMetadata({
  title: 'Einsatzgebiete N-Z | Sitemap | Schlüssel Schmiede',
  description: 'Übersicht unserer Einsatzgebiete im Lahn-Dill-Kreis (N bis Z). Wir sind Ihr lokaler Schlüsseldienst mit kurzen Anfahrtszeiten.',
  path: '/sitemap-uebersicht/orte-n-z',
});

export default function SitemapOrteNZ() {
  const sortedLocations = [...allLocations]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(loc => loc.name.charAt(0).toUpperCase() >= 'N' && loc.name.charAt(0).toUpperCase() <= 'Z');

  return (
    <>
      <GlobalBackground />
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Einsatzgebiete N-Z | HTML Sitemap | Schlüssel Schmiede Wetzlar. Regionale Einsatzgebiete N bis Z.</div>
      
      <main className="relative pt-[140px] lg:pt-[180px] pb-24 z-10 w-full min-h-screen bg-[var(--surface-primary)] font-sans">
        <div className="mx-auto max-w-7xl px-[var(--section-px)] space-y-12">
          <Breadcrumbs items={[
            { name: 'Inhaltsübersicht', href: '/sitemap-uebersicht' },
            { name: 'Einsatzgebiete N-Z', href: '/sitemap-uebersicht/orte-n-z' }
          ]} />
          
          <div>
            <h1 className="typo-h1 mb-4 text-[color:var(--text-primary)]">
              Regionale Einsatzorte (N - Z)
            </h1>
            <p className="typo-lead text-gray-700 max-w-4xl leading-relaxed">
              Auf dieser Seite präsentieren wir Ihnen alle weiteren von uns betreuten Städte, Gemeinden und Stadtteile im Lahn-Dill-Kreis, deren Namen mit den Buchstaben N bis Z beginnen. Als kompetenter Fachbetrieb für Sicherheitstechnik und Notöffnungen sind wir stolz darauf, ein so weitreichendes Gebiet verlässlich abdecken zu können. Ob Sie sich aus Ihrem Haus ausgesperrt haben, ein defektes Schloss austauschen lassen möchten oder eine ausführliche Beratung zum Thema Einbruchschutz wünschen – wir sind für Sie da. Unsere transparente Preispolitik sowie die Verpflichtung zu qualitativ hochwertiger Handwerksarbeit stehen dabei jederzeit im Mittelpunkt unserer Tätigkeit.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mt-3 leading-relaxed">
              Dank unserer zentralen Lage in Wetzlar und unserer hervorragenden Anbindung erreichen unsere Monteure auch die Orte dieser Liste in der Regel innerhalb kürzester Zeit. Wir verzichten ganz bewusst auf undurchsichtige Vermittlungszentralen und stellen sicher, dass Sie direkt mit einem Fachmann aus der Region sprechen. Sollte es einmal schnell gehen müssen, garantieren wir Ihnen unsere sofortige Einsatzbereitschaft – an 365 Tagen im Jahr, rund um die Uhr. Durchsuchen Sie die Liste nach Ihrem Wohn- oder Einsatzort und kontaktieren Sie uns vertrauensvoll. Wir freuen uns darauf, Ihnen in Notsituationen schnell und unkompliziert zur Seite zu stehen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border-subtle)] space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Städte & Gemeinden (N - Z)</h2>
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
