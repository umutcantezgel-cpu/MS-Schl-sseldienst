import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { MICRO_POIS } from '@/lib/data/pois';
import GlobalBackground from '@/components/GlobalBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateSharedMetadata } from '@/lib/metadata';

export const metadata = generateSharedMetadata({
  title: 'Bekannte Standorte & POIs | HTML Sitemap | Schlüssel Schmiede Wetzlar',
  description: 'Übersicht unserer Schlüsseldienst-Einsatzgebiete rund um bekannte Standorte, Sehenswürdigkeiten und POIs im Lahn-Dill-Kreis.',
  path: '/sitemap-uebersicht/standorte',
});

export default function SitemapStandorte() {
  const sortedPois = [...MICRO_POIS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <GlobalBackground />
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Bekannte Standorte & POIs | HTML Sitemap | Schlüssel Schmiede Wetzlar. Regionale POIs und Sehenswürdigkeiten.</div>
      
      <main className="relative pt-[140px] lg:pt-[180px] pb-24 z-10 w-full min-h-screen bg-[var(--surface-primary)] font-sans">
        <div className="mx-auto max-w-7xl px-[var(--section-px)] space-y-12">
          <Breadcrumbs items={[
            { name: 'Inhaltsübersicht', href: '/sitemap-uebersicht' },
            { name: 'Bekannte Standorte & POIs', href: '/sitemap-uebersicht/standorte' }
          ]} />
          
          <div>
            <h1 className="typo-h1 mb-4 text-[color:var(--text-primary)]">
              Bekannte Standorte & POIs | Schlüsseldienst
            </h1>
            <p className="typo-lead text-gray-700 max-w-4xl leading-relaxed">
              Manchmal befindet man sich nicht zu Hause, wenn man Hilfe von einem Schlüsseldienst benötigt, sondern an einem bekannten öffentlichen Ort, einem Einkaufszentrum, einer Klinik oder einer Sehenswürdigkeit. In solchen Notsituationen – beispielsweise wenn der Autoschlüssel im Fahrzeug eingeschlossen ist oder der Tresorschlüssel im Büro verloren ging – ist eine exakte geografische Zuordnung für eine schnelle Hilfe unerlässlich.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mt-3 leading-relaxed">
              Daher haben wir auf dieser Seite unsere speziellen Einsatzgebiete rund um markante Points of Interest (POIs) und bekannte Standorte im Lahn-Dill-Kreis aufgelistet. Wenn Sie sich in der Nähe eines der unten genannten Orte befinden, können unsere Monteure dank gezielter Routenplanung und ortskundiger Expertise oft noch schneller bei Ihnen sein. Wir verstehen, dass Situationen an öffentlichen Orten oft mit besonderem Stress verbunden sind, und setzen alles daran, Ihnen zügig, diskret und professionell zu helfen. Unser 24-Stunden-Service steht Ihnen an all diesen Standorten mit der bewährten Qualität der Schlüssel Schmiede Wetzlar zur Verfügung. Zögern Sie nicht, uns telefonisch Ihren genauen Standort durchzugeben – wir machen uns sofort auf den Weg.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border-subtle)] space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Markante Standorte & POIs</h2>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
              {sortedPois.map((poi) => (
                <li key={poi.slug}>
                  <Link href={`/standorte/${poi.slug}`} className="text-sm text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold block truncate" title={`Schlüsseldienst Nähe ${poi.name}`}>
                    {poi.name}
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
