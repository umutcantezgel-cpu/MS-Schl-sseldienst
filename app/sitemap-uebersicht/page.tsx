import Link from 'next/link';
import { ShieldCheck, MapPin, Search } from 'lucide-react';
import { allLocations } from '@/lib/data/allLocations';
import { getNavigationConfig } from '@/lib/data/navigation';
import GlobalBackground from '@/components/GlobalBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { generateSharedMetadata } from '@/lib/metadata';

export const metadata = generateSharedMetadata({
  title: 'Sitemap | Alle Seiten im Überblick',
  description: 'Unsere vollständige HTML Sitemap. Finden Sie schnell alle Unterseiten, Leistungsbereiche und Einsatzgebiete im Lahn-Dill-Kreis.',
  path: '/sitemap-uebersicht',
});

export default function SitemapPage() {
  const navConfig = getNavigationConfig();

  // Gruppieren der Einsatzgebiete nach Buchstaben
  const sortedLocations = [...allLocations].sort((a, b) => a.name.localeCompare(b.name));
  const groupedLocations = sortedLocations.reduce((acc, curr) => {
    const letter = curr.name.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(curr);
    return acc;
  }, {} as Record<string, typeof allLocations>);

  return (
    <>
      <GlobalBackground />
      
      <main className="relative pt-[120px] lg:pt-[140px] pb-16 z-10 w-full overflow-hidden min-h-screen">
        <div className="mx-auto max-w-7xl px-[var(--section-px)]">
          <Breadcrumbs items={[{ name: 'Inhaltsübersicht', href: '/sitemap-uebersicht' }]} />
          
          <div className="mt-8 mb-12">
            <h1 className="typo-h1 mb-4 text-[color:var(--text-primary)]">Vollständige Sitemap aller <span className="text-[var(--color-red-500)]">Schlüsseldienst-Seiten</span></h1>
            <p className="typo-lead">Hier finden Sie eine Übersicht aller Unterseiten, Themen und Einsatzgebiete unseres Schlüsseldienstes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            
            {/* Hauptseiten & Leistungen */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                    <Search className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Hauptseiten</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {navConfig.main.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[color:var(--color-red-600)] hover:text-[color:var(--color-red-700)] hover:underline underline-offset-4 transition-all">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/schluessel-schmiede" className="text-[color:var(--color-red-600)] hover:text-[color:var(--color-red-700)] hover:underline underline-offset-4 transition-all">
                      Schlüssel Schmiede (Filiale)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Leistungen</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {navConfig.services.items.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[color:var(--color-red-600)] hover:text-[color:var(--color-red-700)] hover:underline underline-offset-4 transition-all">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Einsatzgebiete */}
            <div className="md:col-span-1 lg:col-span-2 bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[var(--color-blue-500)]/10 text-[var(--color-blue-600)] rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">Alle {allLocations.length} Einsatzgebiete</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
                {Object.entries(groupedLocations).map(([letter, locations]) => (
                  <div key={letter} className="flex flex-col gap-3">
                    <h3 className="font-extrabold text-[var(--color-charcoal-300)] text-lg border-b border-gray-100 pb-2">{letter}</h3>
                    <ul className="flex flex-col gap-2.5">
                      {locations.map((loc) => (
                        <li key={loc.slug}>
                          <Link href={`/${loc.slug}`} className="text-[color:var(--text-secondary)] hover:text-[color:var(--color-blue-600)] hover:underline underline-offset-4 transition-all text-sm">
                            {loc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
