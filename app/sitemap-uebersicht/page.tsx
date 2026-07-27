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
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Vollständige HTML Sitemap | Schlüssel Schmiede Wetzlar. HTML Sitemap | Vollständige Übersicht der Schlüssel Schmiede Wetzlar.</div>
      
      <main className="relative pt-[140px] lg:pt-[180px] pb-24 z-10 w-full min-h-screen bg-[var(--surface-primary)] font-sans">
        <div className="mx-auto max-w-7xl px-[var(--section-px)] space-y-12">
          <Breadcrumbs items={[{ name: 'Inhaltsübersicht', href: '/sitemap-uebersicht' }]} />
          
          <div>
            <h1 className="typo-h1 mb-4 text-[color:var(--text-primary)]">
              HTML Sitemap | Vollständige Übersicht der Schlüssel Schmiede Wetzlar
            </h1>
            <p className="typo-lead text-gray-700 max-w-4xl leading-relaxed">
              Willkommen auf der zentralen HTML Sitemap der Schlüssel Schmiede Wetzlar. Auf dieser Seite bieten wir Besuchern und Suchmaschinen eine struktuierte Inhaltsübersicht aller verfügbaren Unterseiten, Fachleistungen, Ratgeber-Beiträge und Einsatzgebiete im Lahn-Dill-Kreis. Diese Übersicht dient als Inhaltsverzeichnis für unsere gesamte Webpräsenz und ermöglicht es Ihnen, mit nur wenigen Klicks genau die Informationen zu finden, die Sie für Ihre Sicherheit und im Notfall benötigen.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mt-3 leading-relaxed">
              Als qualifizierter Schlüsseldienst Wetzlar ist es unser oberstes Anliegen, Ihnen den schnellsten Weg zu den gewünschten Informationen zu bieten. Ob Sie dringende Hilfe bei einer Notöffnung benötigen, sich ausführlich über modernen Einbruchschutz informieren möchten oder gezielt nach einem bestimmten Ortsteil in Wetzlar, Gießen, Aßlar, Herborn oder Solms suchen – nutzen Sie die folgenden Kategorien zur einfachen und schnellen Navigation. Unser 24-Stunden-Schlüsselnotdienst steht Ihnen nicht nur in der Kernstadt Wetzlar zur Verfügung, sondern deckt ein weitreichendes Einzugsgebiet im gesamten Lahn-Dill-Kreis ab.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mt-3 leading-relaxed">
              In der Kategorie <strong>Fachleistungen & Notdienste</strong> finden Sie unsere Kernkompetenzen detailliert aufgeschlüsselt. Dazu zählen zerstörungsfreie Türöffnungen (auch bei abgeschlossenen Türen oder abgebrochenen Schlüsseln), schonende Autoöffnungen, diskrete Tresoröffnungen sowie der professionelle Einbau von Schließanlagen und Sicherheitstechnik. Wir legen großen Wert auf transparente Kommunikation und garantieren Ihnen stets feste Preise ohne versteckte Kosten.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mt-3 leading-relaxed">
              Darüber hinaus bietet unsere Sektion <strong>Wissen & Rechtliches</strong> wertvolle Fachartikel in unserem Sicherheits-Blog, fundierte Schritt-für-Schritt-Anleitungen in unserem Einbruchschutz-Ratgeber sowie Erklärungen zu Fachbegriffen im Schlüsseldienst-Lexikon. In unseren Referenzen dokumentieren wir erfolgreich umgesetzte Projekte, von der schnellen Soforthilfe nach einem Einbruch bis hin zur Planung und Installation hochkomplexer elektronischer Schließsysteme für Gewerbeobjekte. Die Schlüssel Schmiede Wetzlar ist Ihr seriöser, regionaler Partner für alle Belange rund um Schlüssel, Schloss und Sicherheitstechnik.
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

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border-subtle)] space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Einsatzgebiete im Lahn-Dill-Kreis</h2>
                <p className="text-xs text-gray-500">Übersicht aller betreuten Städte und Gemeinden.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mb-6">
                Wir sind als regionaler, familiengeführter Meisterbetrieb im gesamten Lahn-Dill-Kreis und Umgebung für Sie im Einsatz. Unser Anspruch ist es, in Notfällen schnellstmöglich bei Ihnen vor Ort zu sein. Daher haben wir unsere Einsatzgebiete strategisch so gewählt, dass wir unseren Kunden eine verlässliche Anfahrtszeit garantieren können. Zu unseren Kerngebieten zählen neben Wetzlar (mit allen Stadtteilen wie Niedergirmes, Dutenhofen, Garbenheim, Naunheim etc.) auch die umliegenden Städte und Gemeinden wie Gießen, Aßlar, Solms, Hüttenberg, Braunfels, Leun, Ehringshausen, Herborn und Dillenburg. Sollten Sie sich außerhalb dieses Radius befinden, können wir Ihnen nach telefonischer Rücksprache gerne Auskunft über eine mögliche Anfahrt geben. Untenstehend finden Sie die alphabetische Liste unserer primären Einsatzorte, für die wir einen 24-Stunden-Bereitschaftsdienst sowie transparente, faire Festpreise ohne versteckte Kosten anbieten. Als Schlüsseldienst aus der Region distanzieren wir uns entschieden von unseriösen Vermittlungszentralen und garantieren Ihnen echte regionale Verfügbarkeit, fachmännische Handwerksarbeit und absolute Preistransparenz direkt am Telefon. Egal ob Türöffnung, Tresoröffnung, der Einbau moderner Sicherheitstechnik oder die schnelle Hilfe nach einem Einbruch – auf die Schlüssel Schmiede ist Verlass. Rufen Sie uns im Notfall direkt an.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
                <li>
                  <Link href="/sitemap-uebersicht/orte-a-m" className="text-[15px] text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-bold block truncate">
                    Einsatzgebiete (A - M)
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap-uebersicht/orte-n-z" className="text-[15px] text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-bold block truncate">
                    Einsatzgebiete (N - Z)
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap-uebersicht/standorte" className="text-[15px] text-[var(--color-red-600)] hover:text-[var(--color-red-700)] hover:underline font-bold block truncate">
                    Bekannte Standorte & POIs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export const dynamic = "force-static";
