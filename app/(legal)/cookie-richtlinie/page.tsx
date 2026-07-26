import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { COOKIE_INVENTORY, CONSENT_CATEGORY_INFO, type ConsentCategory } from "@/lib/cookie-inventory"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Cookie-Richtlinie & Datenschutzeinstellungen | Wetzlar",
    description: "Cookie Richtlinie des Schlüssel Schmiede Wetzlar. Erfahren Sie, welche Cookies wir verwenden und wie Sie diese verwalten können.",
    path: "/cookie-richtlinie",
  })

const TOC_ITEMS = [
    { id: "1-was-sind-cookies", title: "1. Was sind Cookies?" },
    { id: "2-welche-cookies", title: "2. Welche Cookies wir verwenden" },
    { id: "3-cookie-kategorien", title: "3. Cookiekategorien" },
    { id: "4-einstellungen", title: "4. Ihre Einstellungen" },
    { id: "5-cookies-loeschen", title: "5. Cookies löschen" },
    { id: "6-rechtsgrundlage", title: "6. Rechtsgrundlage" },
    { id: "7-aenderungen", title: "7. Änderungen" },
    { id: "8-kontakt", title: "8. Kontakt" },
]

function getCategoryLabel(cat: ConsentCategory): string {
    return CONSENT_CATEGORY_INFO[cat].label
}

function getCategoryBadgeColor(cat: ConsentCategory): string {
    switch (cat) {
        case "essential": return "bg-green-100 text-green-800 border-green-200"
        case "analytics": return "bg-blue-100 text-blue-800 border-blue-200"
        case "marketing": return "bg-amber-100 text-amber-800 border-amber-200"
    }
}

export default function CookieRichtliniePage() {
    const essentialCookies = COOKIE_INVENTORY.filter(c => c.category === "essential")
    const analyticsCookies = COOKIE_INVENTORY.filter(c => c.category === "analytics")
    const marketingCookies = COOKIE_INVENTORY.filter(c => c.category === "marketing")

    return (
        <LegalLayout
            heroTitle="Cookie-Richtlinie und Datenschutz-Einstellungen"
            heroSubtitle="Vollständige Transparenz darüber, welche Cookies wir verwenden, warum wir sie brauchen und wie Sie die Kontrolle behalten."
            lastUpdated="12. April 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Lesezeit: ca. 6 Minuten</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Cookies auf einen Blick" icon="info">
                    <p>Die <strong>Cookie Richtlinie & Datenschutzeinstellungen</strong> der Schlüssel Schmiede Wetzlar garantiert volle Transparenz gemäß DSGVO und TTDSG. Wir verwenden nur 3 technisch notwendige Cookies auf dieser Website. Analyse- und Marketing-Cookies setzen wir derzeit nicht aktiv ein.</p>
                    <p>Sie können nicht-essentielle Cookies jederzeit anpassen. Öffnen Sie dazu den Link &quot;Cookie-Einstellungen&quot; im Footer unserer Website oder nutzen Sie unser <Link href="/datenschutz#4-cookies" className="underline hover:text-gray-900 font-medium">Privacy Center in der Datenschutzerklärung</Link>.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-was-sind-cookies">
                <h2 className="mt-0">1. Was sind Cookies?</h2>
                <p>Unsere <strong>Cookie-Richtlinie und Datenschutz-Einstellungen</strong> beschreibt transparent die Funktionsweise digitaler Speichertechnologien. Cookies sind kleine Textdateien, die beim Besuch unserer Webseite auf Ihrem Endgerät (Computer, Tablet, Smartphone) abgelegt werden. Sie ermöglichen es der Website, bestimmte Einstellungen über Ihr Nutzungsverhalten zu speichern und beim nächsten Besuch wiederzuerkennen.</p>
                <p>Cookies können direkt von unserer eigenen Domain gesetzt werden (First-Party-Cookies) oder von eingebundenen Drittanbieter-Diensten (Third-Party-Cookies).</p>
                <p>Standardmäßige Cookies können Sie als Person nicht direkt identifizieren und enthalten keine sensiblen Kontaktdaten wie Name, Telefonnummer oder Wohnadresse. Sie dienen der Speicherung anonymer oder pseudonymer Systemkennungen.</p>
            </LegalSection>

            <LegalSection id="2-welche-cookies">
                <h2 className="mt-0">2. Welche Cookies wir verwenden</h2>
                <p>Die folgende Tabelle listet alle aktiven Cookies auf, die unsere Schlüssel Schmiede Wetzlar Webseite setzen kann. Diese Aufstellung entstammt direkt unserem zentralen Cookie-Inventar und wird bei technischen Aktualisierungen angepasst.</p>

                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Cookie-Name</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Kategorie</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Anbieter</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Zweck</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Dauer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {COOKIE_INVENTORY.map((cookie, i) => (
                                <tr key={cookie.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                    <td className="px-4 py-3 font-mono text-xs text-gray-800 border-b border-gray-100">{cookie.name}</td>
                                    <td className="px-4 py-3 border-b border-gray-100">
                                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full border ${getCategoryBadgeColor(cookie.category)}`}>
                                            {getCategoryLabel(cookie.category)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{cookie.provider}</td>
                                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{cookie.purpose}</td>
                                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100 whitespace-nowrap">{cookie.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </LegalSection>

            <LegalSection id="3-cookie-kategorien">
                <h2 className="mt-0">3. Cookiekategorien im Detail</h2>

                <h3 className="mt-6 text-lg font-bold text-gray-900">3.1 Technisch notwendige Cookies (Essentiell)</h3>
                <p>Diese Speicherdaten sind zwingend erforderlich, damit die Website der Schlüssel Schmiede grundlegende Systemfunktionen wie die Speicherung Ihrer Cookie-Einwilligung bereitstellen kann. Sie können nicht deaktiviert werden, da die Weboberfläche ohne sie nicht DSGVO-konform arbeitet.</p>
                <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) i.V.m. § 25 Abs. 2 Nr. 2 TTDSG (technisch notwendig).</p>
                <ul className="mt-2 space-y-1.5 text-gray-600">
                    {essentialCookies.map(c => (
                        <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code>: {c.purpose}</li>
                    ))}
                </ul>

                <h3 className="mt-8 text-lg font-bold text-gray-900">3.2 Analysecookies (optional)</h3>
                <p>Wir haben die technische Struktur für optionale Analyse-Cookies vorbereitet. Derzeit setzen wir jedoch keine aktiven Analyse-Cookies ein. Sollte eine Aktivierung erfolgen, werden diese Daten erst nach Ihrer ausdrücklichen Zustimmung verarbeitet.</p>
                <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) i.V.m. § 25 Abs. 1 TTDSG.</p>
                <ul className="mt-2 space-y-1.5 text-gray-600">
                    {analyticsCookies.map(c => (
                        <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code>: {c.purpose} (Anbieter: {c.provider})</li>
                    ))}
                </ul>

                <h3 className="mt-8 text-lg font-bold text-gray-900">3.3 Marketingcookies (optional)</h3>
                <p>Marketing-Cookies dienen der Einbindung externer Medien. Derzeit werden keine aktiven Marketing-Cookies auf unserer Schlüsseldienst Wetzlar Plattform verwendet.</p>
                {marketingCookies.length > 0 ? (
                    <ul className="mt-2 space-y-1.5 text-gray-600">
                        {marketingCookies.map(c => (
                            <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code>: {c.purpose}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 italic mt-2">Derzeit keine Marketing-Cookies im Einsatz.</p>
                )}
            </LegalSection>

            <LegalSection id="4-einstellungen">
                <h2 className="mt-0">4. Ihre Cookie-Einstellungen verwalten</h2>
                <p>Im Rahmen unserer Cookie Richtlinie & Datenschutzeinstellungen behalten Sie jederzeit die volle Kontrolle über Ihre Daten:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-3">Schritte zur Anpassung Ihrer Präferenzen:</h3>
                    <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                        <li>Rufen Sie den Bereich am Seitenende (Footer) auf.</li>
                        <li>Wählen Sie den Link Cookie-Einstellungen.</li>
                        <li>Der Einwilligungsdialog öffnet sich mit Ihren aktuellen Präferenzen.</li>
                        <li>Nehmen Sie die gewünschten Anpassungen vor und speichern Sie Ihre Auswahl.</li>
                    </ol>
                </div>

                <p>Zusätzlich können Sie jederzeit unser <Link href="/datenschutz#4-cookies" className="text-[var(--action-primary)] hover:underline font-medium">Privacy Center in der Datenschutzerklärung</Link> nutzen.</p>
            </LegalSection>

            <LegalSection id="5-cookies-loeschen">
                <h2 className="mt-0">5. Cookies manuell im Browser löschen</h2>
                <p>Sie können in Ihrem Webbrowser gespeicherte Cookies eigenständig löschen. Hier finden Sie Anleitungen für gängige Systeme:</p>

                <div className="space-y-4 my-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Google Chrome</h3>
                        <p className="text-sm text-gray-600">Menü → Einstellungen → Datenschutz und Sicherheit → Browserdaten löschen → Haken bei &quot;Cookies und andere Websitedaten&quot; setzen und Bestätigung ausführen.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Safari (macOS / iOS)</h3>
                        <p className="text-sm text-gray-600">Safari → Einstellungen → Datenschutz → Websitedaten verwalten → Gespeicherte Daten für einzelne Webseiten entfernen.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Mozilla Firefox</h3>
                        <p className="text-sm text-gray-600">Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten → Daten entfernen auswählen.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Microsoft Edge</h3>
                        <p className="text-sm text-gray-600">Einstellungen → Datenschutz, Suche und Dienste → Zu löschende Elemente auswählen → Cookies entfernen.</p>
                    </div>
                </div>

                <p className="text-sm text-gray-500">Hinweis: Durch das Löschen von Cookies wird beim nächsten Besuch der Schlüssel Schmiede Wetzlar Website der Einwilligungsbanner erneut eingeblendet.</p>
            </LegalSection>

            <LegalSection id="6-rechtsgrundlage">
                <h2 className="mt-0">6. Rechtsgrundlagen</h2>
                <p>Die Verarbeitung basiert auf folgenden Rechtsvorschriften:</p>
                <ul className="mt-3 space-y-2 text-gray-600">
                    <li><strong>§ 25 Abs. 2 Nr. 2 TTDSG:</strong> Technisch notwendige Speicherfunktionen erfordern keine vorherige Zustimmung.</li>
                    <li><strong>§ 25 Abs. 1 TTDSG:</strong> Für optionale Technologien wird eine ausdrückliche Einwilligung eingeholt.</li>
                    <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Verarbeitung personenbezogener Daten bei erteilter Einwilligung.</li>
                    <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigtes Interesse am sicheren Betrieb unseres Webangebots.</li>
                </ul>
            </LegalSection>

            <LegalSection id="7-aenderungen">
                <h2 className="mt-0">7. Aktualisierungen der Cookie-Richtlinie</h2>
                <p>Wir passen diese Cookie-Richtlinie an, sofern sich rechtliche Vorgaben oder technische Funktionen verändern. Sollten wesentliche Kategorien ergänzt werden, wird ein neuer Einwilligungsdialog für Seitenbesucher ausgegeben.</p>
                <p>Aktuelle Konfigurationsversion: <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">1.0.0</code>.</p>
            </LegalSection>

            <LegalSection id="8-kontakt">
                <h2 className="mt-0">8. Kontakt zum Datenschutzbeauftragten</h2>
                <p>Bei Fragen zu unserer Cookie-Richtlinie oder den Datenschutzeinstellungen kontaktieren Sie uns bitte unter:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    Mina Saad<br />
                    Schlüssel Schmiede Wetzlar<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:+4964418056279" className="text-[var(--action-primary)] hover:underline font-medium">06441 8056279</Link><br />
                    E-Mail: <Link href="mailto:schluesselschmiede@gmail.com" className="text-[var(--action-primary)] hover:underline font-medium">schluesselschmiede@gmail.com</Link>
                </div>
                <p>Weitere Details finden Sie in unserer vollständigen <Link href="/datenschutz" className="text-[var(--action-primary)] hover:underline font-medium">Datenschutzerklärung</Link>.</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
