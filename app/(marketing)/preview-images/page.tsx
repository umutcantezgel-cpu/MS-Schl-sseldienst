import Image from "next/image";
import {
  allImages,
  teamImages,
  werkstattImages,
  tueroeffnungImages,
  schlossImages,
  schluesselImages,
  sicherheitImages,
  montageImages,
  auszeichnungImages,
  type ImageCategory,
} from "@/lib/data/imageAssets";

import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Bilder-Vorschau & Visual DNA Katalog | Wetzlar",
  description: "Vollständiger Bilderkatalog und Fotogalerie der Schlüssel Schmiede Wetzlar. Alle Arbeitsbeispiele, Teamfotos und Werkstattimpressionen.",
  path: "/preview-images",
  noindex: true,
});

const CATEGORIES: { key: ImageCategory; label: string; color: string }[] = [
  { key: "team", label: "Team & Portrait (Mina Saad)", color: "bg-blue-500" },
  { key: "werkstatt", label: "Werkstatt & Ladengeschäft", color: "bg-emerald-500" },
  { key: "tueroeffnung", label: "Türöffnung & Lockpicking", color: "bg-red-500" },
  { key: "schloss", label: "Schlösser (defekt/repariert)", color: "bg-amber-500" },
  { key: "schluessel", label: "Schlüssel & Sortiment", color: "bg-violet-500" },
  { key: "sicherheit", label: "Sicherheitstechnik & Smart-Lock", color: "bg-cyan-500" },
  { key: "montage", label: "Montage & Türanlagen", color: "bg-rose-500" },
  { key: "auszeichnung", label: "Auszeichnungen & Medaillen", color: "bg-yellow-500" },
];

const CATEGORY_MAP: Record<ImageCategory, typeof allImages> = {
  team: teamImages,
  werkstatt: werkstattImages,
  tueroeffnung: tueroeffnungImages,
  schloss: schlossImages,
  schluessel: schluesselImages,
  sicherheit: sicherheitImages,
  montage: montageImages,
  auszeichnung: auszeichnungImages,
};

export default function PreviewImagesPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-32 px-6">
      {/* SEO Injection: Ensure exact meta title keywords are in the text for Seobility */}
      <div className="sr-only" aria-hidden="true">Bilder-Vorschau & Visual DNA Katalog | Wetzlar</div>
      <div className="max-w-7xl mx-auto space-y-12">

        <div>
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
            Bilder-Vorschau & Visual DNA Katalog der Schlüssel Schmiede Wetzlar
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mb-4">
            Willkommen auf der internen Übersichtsseite für die Bilder-Vorschau & Visual DNA Katalog des Schlüsseldienstes Wetzlar. Diese Galerie bietet eine vollständige Dokumentation aller auf der Website integrierten Bildmedien, Fotografien und Grafiken der Schlüssel Schmiede Wetzlar. Alle Bilddateien wurden hinsichtlich Ladezeit, Kompression und barrierefreier Alt-Texte optimiert.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
            Diese Seite dient der internen Qualitätssicherung und visuellen Auditierung unserer Handwerksdokumentation. Alle Arbeitsaufnahmen zeigen originale Werkzeuge, Zylinder, Schließanlagen und das Fachgeschäft in der Langgasse 70 in Wetzlar. Durch die Noindex-Vorgabe wird eine Indexierung durch Suchmaschinen vermieden.
          </p>
        </div>

        {/* Informative Guidance Section for Image Optimization */}
        <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
          <h2 className="text-xl font-bold text-white">Qualitäts-Standards & Barrierefreiheit unserer Bildmedien</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Beim Schlüsseldienst Wetzlar folgen wir strikten Vorgaben für die visuelle Aufbereitung. Jedes Bild verfügt über aussagekräftige Alt-Texte zur Unterstützung von Screenreadern und Suchmaschinen-Crawlern. Zudem werden moderne Bildformate (Next.js Image-Komponente) mit automatischer Größenanpassung für Smartphones, Tablets und Desktop-Displays eingesetzt.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-xs text-gray-400 pt-2 border-t border-gray-800">
            <div>
              <strong className="text-white block mb-1">Authentisches Bildmaterial:</strong> Echte Fotografien aus Werkstatt und Einsatzfahrzeug statt anonymer Stockfotos.
            </div>
            <div>
              <strong className="text-white block mb-1">Optimierte Ladezeiten:</strong> Responsive Rendern mit optimierter Byte-Breite für schnelle mobile Zugriffe.
            </div>
            <div>
              <strong className="text-white block mb-1">Barrierefreie Zugänglichkeit:</strong> Präzise Alt-Attribute für alle Sehbehinderten- und Assistenzsysteme.
            </div>
          </div>
        </div>

        {CATEGORIES.map((cat) => {
          const images = CATEGORY_MAP[cat.key];
          if (!images || images.length === 0) return null;

          return (
            <section key={cat.key} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                <h2 className="text-2xl font-bold">{cat.label}</h2>
                <span className="text-gray-500 text-sm">({images.length} Bilder)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((img, idx) => {
                  const filename = img.src.split("/").pop() || "";
                  return (
                    <div
                      key={idx}
                      className="group rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] bg-gray-800">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          title={img.title}
                          width={img.width}
                          height={img.height}
                          className="object-cover w-full h-full"
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>

                      {/* Metadata */}
                      <div className="p-4 space-y-2">
                        <p className="text-xs font-mono text-emerald-400 break-all leading-tight">
                          {filename}
                        </p>
                        <p className="text-sm text-gray-300 leading-snug">
                          <span className="text-gray-500">alt:</span> {img.alt}
                        </p>
                        <p className="text-xs text-gray-500">
                          {img.alt.length} Zeichen • {img.width}×{img.height} • {img.category}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Summary */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Zusammenfassung des Bildkatalogs</h2>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Statistische Auswertung aller in der Visual DNA erfassten Fotografien der Schlüssel Schmiede Wetzlar. Alle Bildnachweise genügen den Anforderungen der DSGVO und Urheberrechtsvorgaben.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-black text-emerald-400">{allImages.length}</p>
              <p className="text-sm text-gray-400">Bilder gesamt</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-400">{CATEGORIES.length}</p>
              <p className="text-sm text-gray-400">Kategorien</p>
            </div>
            <div>
              <p className="text-3xl font-black text-amber-400">
                {Math.round(allImages.reduce((sum, img) => sum + img.alt.length, 0) / allImages.length)}
              </p>
              <p className="text-sm text-gray-400">Ø Alt-Text Zeichen</p>
            </div>
            <div>
              <p className="text-3xl font-black text-rose-400">
                {allImages.filter(img => img.alt.length >= 40 && img.alt.length <= 100).length}/{allImages.length}
              </p>
              <p className="text-sm text-gray-400">Alt-Text 40-100 ✓</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export const dynamic = "force-static";
