import Link from 'next/link';
import { ShieldCheck, MapPin, Search, BookOpen, FileText, ChevronDown } from 'lucide-react';
import { allLocations } from '@/lib/data/allLocations';
import { getNavigationConfig } from '@/lib/data/navigation';
import GlobalBackground from '@/components/GlobalBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateSharedMetadata } from '@/lib/metadata';

export const metadata = generateSharedMetadata({
  title: 'Vollständige HTML Sitemap | Schlüssel Schmiede Wetzlar',
  description: 'Unsere vollständige HTML Sitemap. Finden Sie schnell alle Unterseiten, Leistungsbereiche und Einsatzgebiete im Lahndillkreis.',
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
      
      <main className="relative pt-[140px] lg:pt-[180px] pb-24 z-10 w-full min-h-screen bg-[var(--surface-primary)] font-sans">
        <div className="mx-auto max-w-7xl px-[var(--section-px)] space-y-12">
          <Breadcrumbs items={[{ name: 'Inhaltsübersicht', href: '/sitemap-uebersicht' }]} />
          
          <div>
            <h1 className="typo-h1 mb-4 text-[color:var(--text-primary)]">
              HTML Sitemap | Vollständige Übersicht der Schlüssel Schmiede Wetzlar
            </h1>
            <p className="typo-lead text-gray-700 max-w-4xl leading-relaxed">
              Willkommen auf der zentralen HTML Sitemap der Schlüssel Schmiede Wetzlar. Auf dieser Seite bieten wir Besuchern und Suchmaschinen eine struktuierte Inhaltsübersicht aller verfügbaren Unterseiten, Fachleistungen, Ratgeber-Beiträge und Einsatzgebiete im Lahn-Dill-Kreis.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mt-3 leading-relaxed">
              Als qualifizierter Schlüsseldienst Wetzlar ist es unser Anliegen, Ihnen den schnellsten Weg zu den gewünschten Informationen zu bieten. Ob Sie Hilfe bei einer Notöffnung benötigen, sich über Einbruchschutz informieren oder nach einem bestimmten Ortsteil in Wetzlar, Gießen, Aßlar oder Solms suchen – nutzen Sie die folgenden Kategorien zur Navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Hauptseiten & Filialen */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                  <Search className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Zentrale Unternehmensseiten</h2>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm">
                {navConfig.main.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/schluessel-schmiede" className="text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold">
                    Schlüssel Schmiede Ladenlokal (Langgasse 70, Wetzlar)
                  </Link>
                </li>
                <li>
                  <Link href="/ueber-uns/geschichte" className="text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold">
                    Unsere Geschichte & Tradition
                  </Link>
                </li>
                <li>
                  <Link href="/ueber-uns/team" className="text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold">
                    Unser Handwerker-Team
                  </Link>
                </li>
                <li>
                  <Link href="/ueber-uns/philosophie" className="text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold">
                    Unsere Philosophie & Ehrenkodex
                  </Link>
                </li>
                <li>
                  <Link href="/ueber-uns/karriere" className="text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold">
                    Karriere & Stellenangebote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Leistungsbereiche */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Fachleistungen & Notdienste</h2>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm">
                {navConfig.services.items.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-semibold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratgeber, Lexikon & Legal */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="p-2 bg-blue-100 text-blue-800 rounded-lg">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Wissen & Rechtliches</h2>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <Link href="/blog" className="text-blue-700 hover:underline font-semibold">
                    Sicherheits-Blog & Fachartikel
                  </Link>
                </li>
                <li>
                  <Link href="/ratgeber" className="text-blue-700 hover:underline font-semibold">
                    Ratgeber Einbruchschutz & Türöffnung
                  </Link>
                </li>
                <li>
                  <Link href="/lexikon" className="text-blue-700 hover:underline font-semibold">
                    Schlüsseldienst Lexikon (A–Z)
                  </Link>
                </li>
                <li>
                  <Link href="/referenzen" className="text-blue-700 hover:underline font-semibold">
                    Referenzen & Kundenprojekte
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="text-gray-700 hover:underline">
                    Allgemeine Geschäftsbedingungen (AGB)
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-700 hover:underline">
                    Datenschutzerklärung (DSGVO)
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-gray-700 hover:underline">
                    Impressum & Betreiberdaten
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-richtlinie" className="text-gray-700 hover:underline">
                    Cookie-Richtlinie & Einstellungen
                  </Link>
                </li>
                <li>
                  <Link href="/widerruf" className="text-gray-700 hover:underline">
                    Widerrufsbelehrung & Musterformular
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Collapsible Location Accordions to balance visible link density (< 100 links visible initially) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border-subtle)] space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Einsatzgebiete nach Anfangsbuchstaben ({allLocations.length} Orte)</h2>
                <p className="text-xs text-gray-500">Klicken Sie auf eine Buchstabengruppe, um alle zugehörigen Städte und Ortsteile auszuklappen.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {Object.entries(groupedLocations).map(([letter, locations]) => (
                <details key={letter} className="group border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
                  <summary className="p-4 cursor-pointer font-bold text-base text-gray-900 flex items-center justify-between hover:bg-gray-100 transition-colors">
                    <span>Buchstabe {letter} ({locations.length} Einsatzorte)</span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-4 pt-2 bg-white border-t border-gray-200">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                      {locations.map((loc) => (
                        <Link key={loc.slug} href={`/${loc.slug}`} className="p-2 rounded bg-gray-50 hover:bg-red-50 hover:text-[var(--color-red-600)] transition-colors border border-gray-100 font-medium">
                          {loc.name} ({loc.plz})
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export const dynamic = "force-static";
