import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { COOKIE_INVENTORY, CONSENT_CATEGORY_INFO, type ConsentCategory } from "@/lib/cookie-inventory"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Cookie-Richtlinie & Datenschutz-Einstellungen",
    description: "Cookie-Richtlinie des Schlüssel Schmiede Wetzlar. Erfahren Sie, welche Cookies wir verwenden und wie Sie diese verwalten können.",
    path: "/cookie-richtlinie",
  })

const TOC_ITEMS = [
    { id: "1-was-sind-cookies", title: "1. Was sind Cookies?" },
    { id: "2-welche-cookies", title: "2. Welche Cookies wir verwenden" },
    { id: "3-cookie-kategorien", title: "3. Cookie-Kategorien" },
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
            lastUpdated="27. März 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Lesezeit: ca. 5 Minuten</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Cookies auf einen Blick" icon="info">
                    <p>Wir verwenden <strong>nur 5 Cookies</strong> auf dieser Website und davon sind 3 technisch notwendig und 2 optional (Analyse). <strong>Marketing-Cookies verwenden wir derzeit nicht aktiv.</strong></p>
                    <p>Sie können nicht-essentielle Cookies jederzeit ablehnen oder Ihre Einstellungen ändern. Klicken Sie dazu auf den Button &quot;Cookie-Einstellungen&quot; im Footer oder nutzen Sie unser <Link href="/datenschutz#4-cookies" className="underline hover:text-gray-900 font-medium">Privacy Center</Link>.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-was-sind-cookies">
                <h2 className="mt-0">1. Was sind Cookies?</h2>
                <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät (Computer, Tablet, Smartphone) gespeichert werden. Sie ermöglichen es der Website, bestimmte Informationen über Ihr Nutzungsverhalten zu speichern und beim nächsten Besuch wiederzuerkennen.</p>
                <p>Cookies können von der Website selbst gesetzt werden (<strong>First-Party-Cookies</strong>) oder von Drittanbietern, deren Dienste in die Website eingebunden sind (<strong>Third-Party-Cookies</strong>).</p>
                <p>Cookies allein können Sie <strong>nicht identifizieren</strong> und sie enthalten keine personenbezogenen Daten wie Name, E-Mail oder Adresse. Sie speichern lediglich anonyme oder pseudonyme Kennungen.</p>
            </LegalSection>

            <LegalSection id="2-welche-cookies">
                <h2 className="mt-0">2. Welche Cookies wir verwenden</h2>
                <p>Die folgende Tabelle listet <strong>alle Cookies</strong> auf, die unsere Website setzen kann. Diese Liste wird automatisch aus unserem zentralen Cookie-Inventar generiert und ist immer aktuell.</p>

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
                <h2 className="mt-0">3. Cookie-Kategorien im Detail</h2>

                <h3 className="mt-6 text-lg font-bold text-gray-900">3.1 Technisch notwendige Cookies (Essentiell)</h3>
                <p>Diese Cookies sind <strong>zwingend erforderlich</strong>, damit die Website grundlegende Funktionen bereitstellen kann. Sie können nicht deaktiviert werden, da die Website ohne sie nicht korrekt funktioniert.</p>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) i.V.m. § 25 Abs. 2 Nr. 2 TTDSG (technisch notwendig).</p>
                <ul className="mt-2 space-y-1.5 text-gray-600">
                    {essentialCookies.map(c => (
                        <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code> und {c.purpose}</li>
                    ))}
                </ul>

                <h3 className="mt-8 text-lg font-bold text-gray-900">3.2 Analyse-Cookies (optional)</h3>
                <p>Diese Cookies werden <strong>nur nach Ihrer aktiven Einwilligung</strong> gesetzt. Sie helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie kontinuierlich zu verbessern. Alle Daten werden anonymisiert erhoben.</p>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) i.V.m. § 25 Abs. 1 TTDSG.</p>
                <ul className="mt-2 space-y-1.5 text-gray-600">
                    {analyticsCookies.map(c => (
                        <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code> und {c.purpose} (Anbieter: {c.provider})</li>
                    ))}
                </ul>

                <h3 className="mt-8 text-lg font-bold text-gray-900">3.3 Marketing-Cookies (optional)</h3>
                <p>Marketing-Cookies ermöglichen die Einbindung externer Dienste und personalisierter Inhalte. <strong>Wir setzen derzeit keine aktiven Marketing-Cookies.</strong> Die Kategorie existiert für den Fall, dass zukünftig Dienste wie Terminbuchungs-Widgets eingebunden werden.</p>
                {marketingCookies.length > 0 ? (
                    <ul className="mt-2 space-y-1.5 text-gray-600">
                        {marketingCookies.map(c => (
                            <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code> und {c.purpose}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 italic mt-2">Derzeit keine Marketing-Cookies im Einsatz.</p>
                )}
            </LegalSection>

            <LegalSection id="4-einstellungen">
                <h2 className="mt-0">4. Ihre Cookie-Einstellungen verwalten</h2>
                <p>Sie haben jederzeit die volle Kontrolle über nicht-essentielle Cookies:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-3">So ändern Sie Ihre Einstellungen:</h3>
                    <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                        <li>Scrollen Sie zum Footer (Seitenende) unserer Website</li>
                        <li>Klicken Sie auf <strong>&quot;Cookie-Einstellungen&quot;</strong></li>
                        <li>Der Cookie-Banner öffnet sich erneut mit Ihren aktuellen Einstellungen</li>
                        <li>Passen Sie Ihre Auswahl an und klicken Sie auf &quot;Auswahl speichern&quot;</li>
                    </ol>
                </div>

                <p>Alternativ können Sie unser <Link href="/datenschutz#4-cookies" className="text-[var(--action-primary)] hover:underline font-medium">Privacy Center in der Datenschutzerklärung</Link> besuchen, um eine detaillierte Übersicht Ihrer Einstellungen einzusehen.</p>
            </LegalSection>

            <LegalSection id="5-cookies-loeschen">
                <h2 className="mt-0">5. Cookies manuell löschen</h2>
                <p>Sie können Cookies jederzeit direkt in Ihrem Browser löschen. Hier die Anleitungen für die gängigsten Browser:</p>

                <div className="space-y-4 my-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Google Chrome</h3>
                        <p className="text-sm text-gray-600">Einstellungen → Datenschutz und Sicherheit → Browserdaten löschen → Reiter &quot;Erweitert&quot; → Haken bei &quot;Cookies und andere Websitedaten&quot; → &quot;Daten löschen&quot; klicken</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Safari (macOS / iOS)</h3>
                        <p className="text-sm text-gray-600">Safari → Einstellungen → Datenschutz → &quot;Websitedaten verwalten&quot; → Daten für einzelne Websites oder alle Daten löschen</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Mozilla Firefox</h3>
                        <p className="text-sm text-gray-600">Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten → &quot;Daten entfernen&quot; → Haken bei &quot;Cookies und Website-Daten&quot; → &quot;Leeren&quot; klicken</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">Microsoft Edge</h3>
                        <p className="text-sm text-gray-600">Einstellungen → Datenschutz, Suche und Dienste → &quot;Zu löschende Elemente auswählen&quot; → Haken bei &quot;Cookies und andere Websitedaten&quot; → &quot;Jetzt löschen&quot;</p>
                    </div>
                </div>

                <p className="text-sm text-gray-500"><strong>Hinweis:</strong> Durch das Löschen von Cookies können gespeicherte Einstellungen (z.B. Ihre Cookie-Einwilligung und Schriftgröße) verloren gehen. Beim nächsten Besuch wird der Cookie-Banner erneut angezeigt.</p>
            </LegalSection>

            <LegalSection id="6-rechtsgrundlage">
                <h2 className="mt-0">6. Rechtsgrundlage</h2>
                <p>Die Rechtsgrundlage für den Einsatz von Cookies ergibt sich aus:</p>
                <ul className="mt-3 space-y-2 text-gray-600">
                    <li><strong>§ 25 Abs. 2 Nr. 2 TTDSG</strong> (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) und Für technisch notwendige Cookies ist keine Einwilligung erforderlich, da sie für die Bereitstellung des vom Nutzer ausdrücklich gewünschten Dienstes unbedingt erforderlich sind.</li>
                    <li><strong>§ 25 Abs. 1 TTDSG</strong> und Für alle nicht technisch notwendigen Cookies (Analyse, Marketing) holen wir Ihre ausdrückliche Einwilligung ein, bevor diese gesetzt werden.</li>
                    <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> und Die Verarbeitung personenbezogener Daten durch optionale Cookies erfolgt auf Grundlage Ihrer Einwilligung.</li>
                    <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> und Die Verarbeitung durch essentielle Cookies erfolgt auf Grundlage eines berechtigten Interesses an der technischen Funktionsfähigkeit der Website.</li>
                </ul>
            </LegalSection>

            <LegalSection id="7-aenderungen">
                <h2 className="mt-0">7. Änderungen dieser Cookie-Richtlinie</h2>
                <p>Wir behalten uns vor, diese Cookie-Richtlinie bei Änderungen an den verwendeten Cookies oder der Rechtsgrundlage zu aktualisieren. Sollten wir neue Cookie-Kategorien einführen oder bestehende wesentlich ändern, wird automatisch ein <strong>erneuter Einwilligungsprozess</strong> (Re-Consent) ausgelöst.</p>
                <p>Die aktuelle Version unserer Cookie-Konfiguration ist: <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">1.0.0</code>. Bei einer Versionserhöhung wird der Cookie-Banner automatisch erneut angezeigt.</p>
            </LegalSection>

            <LegalSection id="8-kontakt">
                <h2 className="mt-0">8. Kontakt</h2>
                <p>Bei Fragen zu unserer Cookie-Richtlinie oder zum Datenschutz wenden Sie sich bitte an:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>Mina Saad</strong><br />
                    Schlüssel Schmiede Wetzlar<br />
                    Gloelstraße 11<br />
                    35578 Wetzlar<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:+491782471037" className="text-[var(--action-primary)] hover:underline">0178 2471037</Link><br />
                    E-Mail: <Link href="mailto:notfall-schluessel@proton.me" className="text-[var(--action-primary)] hover:underline">notfall-schluessel@proton.me</Link>
                </div>
                <p>Weiterführende Informationen finden Sie in unserer <Link href="/datenschutz" className="text-[var(--action-primary)] hover:underline font-medium">Datenschutzerklärung</Link>.</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
