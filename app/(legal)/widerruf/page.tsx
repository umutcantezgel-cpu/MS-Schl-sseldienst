import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Widerrufsbelehrung für Schlüsseldienst-Aufträge",
    description: "Widerrufsbelehrung des Schlüssel Schmiede Wetzlar. ✔️ Informationen zum Widerrufsrecht ✔️ Muster-Widerrufsformular.",
    path: "/widerruf",
  })

const TOC_ITEMS = [
    { id: "1-widerrufsrecht", title: "1. Widerrufsrecht" },
    { id: "2-widerrufsfrist", title: "2. Widerrufsfrist" },
    { id: "3-ausuebung", title: "3. Ausübung des Widerrufs" },
    { id: "4-folgen", title: "4. Folgen des Widerrufs" },
    { id: "5-ausnahmen", title: "5. Ausnahmen vom Widerrufsrecht" },
    { id: "6-muster-formular", title: "6. Muster-Widerrufsformular" },
    { id: "7-kontakt", title: "7. Kontakt" },
]

export default function WiderrufPage() {
    return (
        <LegalLayout
            heroTitle="Widerrufsbelehrung für Schlüsseldienst-Aufträge"
            heroSubtitle="Ihre Rechte als Verbraucher gemäß dem Bürgerlichen Gesetzbuch. Transparent, verständlich und ohne Kleingedrucktes."
            lastUpdated="27. März 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Lesezeit: ca. 4 Minuten</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Widerruf und das Wichtigste auf einen Blick" icon="info">
                    <p>Als Verbraucher haben Sie grundsätzlich ein <strong>14-tägiges Widerrufsrecht</strong> bei Fernabsatzverträgen (z.B. telefonische Beauftragung).</p>
                    <p><strong>Wichtige Ausnahme bei Notdiensten:</strong> Wenn Sie unseren Schlüsseldienst zur sofortigen Notöffnung beauftragen und wir die Dienstleistung vor Ablauf der Widerrufsfrist vollständig erbringen, <strong>erlischt Ihr Widerrufsrecht</strong> gemäß § 356 Abs. 4 Nr. 2 BGB. Dies gilt, sofern Sie vor Beginn der Leistung ausdrücklich zugestimmt und bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung verlieren.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-widerrufsrecht">
                <h2 className="mt-0">1. Widerrufsrecht</h2>
                <p>Sie haben das Recht, binnen <strong>vierzehn Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                <p>Das Widerrufsrecht besteht bei Verträgen, die außerhalb von Geschäftsräumen geschlossen werden (§ 312b BGB) sowie bei Fernabsatzverträgen (§ 312c BGB), also insbesondere bei telefonischer oder elektronischer Beauftragung unserer Dienstleistungen.</p>
            </LegalSection>

            <LegalSection id="2-widerrufsfrist">
                <h2 className="mt-0">2. Widerrufsfrist</h2>
                <p>Die Widerrufsfrist beträgt <strong>14 Tage ab dem Tag des Vertragsschlusses</strong>.</p>
                <p>Bei telefonischer Beauftragung unseres Schlüsseldienstes beginnt die Frist mit dem Moment der telefonischen Vertragsannahme durch unseren Disponenten.</p>
                <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer <strong>eindeutigen Erklärung</strong> (z.B. ein mit der Post versandter Brief, ein Telefax oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
            </LegalSection>

            <LegalSection id="3-ausuebung">
                <h2 className="mt-0">3. Ausübung des Widerrufs</h2>
                <p>Um Ihr Widerrufsrecht auszuüben, richten Sie Ihre Widerrufserklärung bitte an:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>Mina Saad</strong><br />
                    Schlüssel Schmiede Wetzlar<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:+4964418056279" className="text-[var(--action-primary)] hover:underline">06441 8056279</Link><br />
                    E-Mail: <Link href="mailto:schluesselschmiede@gmail.com?subject=Widerruf" className="text-[var(--action-primary)] hover:underline">schluesselschmiede@gmail.com</Link>
                </div>
                <p>Sie können dafür das unten beigefügte <Link href="#6-muster-formular" className="text-[var(--action-primary)] hover:underline font-medium">Muster-Widerrufsformular</Link> verwenden, das jedoch nicht vorgeschrieben ist.</p>
                <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts <strong>vor Ablauf der Widerrufsfrist absenden</strong>.</p>
            </LegalSection>

            <LegalSection id="4-folgen">
                <h2 className="mt-0">4. Folgen des Widerrufs</h2>
                <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), <strong>unverzüglich und spätestens binnen vierzehn Tagen</strong> ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.</p>
                <p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart. In keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>

                <h3 className="mt-6 text-base font-bold text-gray-900">Wertersatz bei teilweise erbrachter Leistung</h3>
                <p>Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen entspricht.</p>
            </LegalSection>

            <LegalSection id="5-ausnahmen">
                <h2 className="mt-0">5. Ausnahmen vom Widerrufsrecht</h2>
                <p>Das Widerrufsrecht besteht <strong>nicht</strong> bei folgenden Verträgen:</p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                    <h3 className="text-base font-bold text-red-900 mt-0 mb-3">Ausnahme bei Notdienst-Einsätzen</h3>
                    <p className="text-red-800">Gemäß <strong>§ 356 Abs. 4 Nr. 2 BGB</strong> erlischt das Widerrufsrecht bei einem Vertrag zur Erbringung von Dienstleistungen, wenn der Unternehmer die Dienstleistung <strong>vollständig erbracht hat</strong> und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung durch den Unternehmer verliert.</p>
                </div>

                <p><strong>In der Praxis bedeutet das:</strong> Wenn Sie uns zum Beispiel um 22:00 Uhr anrufen, weil Sie sich ausgesperrt haben, und wir Ihre Tür sofort öffnen, ist die Dienstleistung vollständig erbracht. Ein Widerruf nach der Öffnung ist nicht mehr möglich, da die Leistung nicht rückgängig gemacht werden kann.</p>
                <p>Unser Disponent weist Sie vor Ihrer Beauftragung telefonisch auf diese Ausnahme hin.</p>

                <h3 className="mt-6 text-base font-bold text-gray-900">Weitere gesetzliche Ausnahmen (§ 312g Abs. 2 BGB)</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                    <li><strong>Nr. 11:</strong> Verträge zur Erbringung von Dienstleistungen in den Bereichen Beherbergung (zu anderen Zwecken als zu Wohnzwecken), Beförderung von Waren, Kraftfahrzeugvermietung, Lieferung von Speisen und Getränken sowie zur Erbringung weiterer Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn der Vertrag für die Erbringung einen spezifischen Termin vorsieht.</li>
                    <li><strong>Nr. 1:</strong> Verträge zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist (z.B. maßangefertigte Sicherheitsschlösser).</li>
                </ul>
            </LegalSection>

            <LegalSection id="6-muster-formular">
                <h2 className="mt-0">6. Muster-Widerrufsformular</h2>
                <p className="text-sm text-gray-500 mb-4">(Gemäß Anlage 2 zu Artikel 246a § 1 Absatz 2 Satz 1 Nummer 1 und § 2 Absatz 2 Nummer 2 EGBGB)</p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4 space-y-4">
                    <p className="text-sm text-gray-500 italic">Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.</p>

                    <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-3 text-sm">
                        <p>An:<br />
                        <strong>Mina Saad</strong><br />
                        Schlüssel Schmiede Wetzlar<br />
                        Gloelstraße 11<br />
                        35576 Wetzlar<br />
                        E-Mail: schluesselschmiede@gmail.com</p>

                        <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):</p>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">Beschreibung der Dienstleistung</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">Bestellt am (*) / erhalten am (*)</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">Name des/der Verbraucher(s)</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">Anschrift des/der Verbraucher(s)</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1 mt-6">
                            <p className="text-gray-400 text-xs">Datum und Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
                        </div>

                        <p className="text-xs text-gray-400 mt-4">(*) Unzutreffendes streichen.</p>
                    </div>
                </div>
            </LegalSection>

            <LegalSection id="7-kontakt">
                <h2 className="mt-0">7. Kontakt</h2>
                <p>Bei Fragen zum Widerrufsrecht wenden Sie sich bitte an:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>Mina Saad</strong><br />
                    Schlüssel Schmiede Wetzlar<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:+4964418056279" className="text-[var(--action-primary)] hover:underline">06441 8056279</Link><br />
                    E-Mail: <Link href="mailto:schluesselschmiede@gmail.com" className="text-[var(--action-primary)] hover:underline">schluesselschmiede@gmail.com</Link>
                </div>
                <p>Weitere Informationen zu Ihren Rechten finden Sie in unseren <Link href="/agb#6-widerrufsrecht" className="text-[var(--action-primary)] hover:underline font-medium">Allgemeinen Geschäftsbedingungen</Link> und in unserer <Link href="/datenschutz" className="text-[var(--action-primary)] hover:underline font-medium">Datenschutzerklärung</Link>.</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
