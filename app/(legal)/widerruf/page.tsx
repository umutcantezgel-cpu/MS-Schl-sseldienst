import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Widerrufsbelehrung für Schlüsseldienstaufträge",
    description: "Widerrufsbelehrung der Schlüssel Schmiede Wetzlar. Transparente Informationen zum Widerrufsrecht und Muster-Widerrufsformular.",
    path: "/widerruf",
  })

const TOC_ITEMS = [
    { id: "1-widerrufsrecht", title: "1. Widerrufsrecht" },
    { id: "2-widerrufsfrist", title: "2. Widerrufsfrist" },
    { id: "3-ausuebung", title: "3. Ausübung des Widerrufs" },
    { id: "4-folgen", title: "4. Folgen des Widerrufs" },
    { id: "5-ausnahmen", title: "5. Ausnahmen vom Widerrufsrecht" },
    { id: "6-muster-formular", title: "6. Musterwiderrufsformular" },
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
                <p className="text-sm text-gray-500 font-medium">Lesezeit: ca. 6 Minuten</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Widerruf und das Wichtigste auf einen Blick" icon="info">
                    <p>Die <strong>Widerrufsbelehrung für Schlüsseldienstaufträge</strong> regelt Ihre Rechte bei der Beauftragung der Schlüssel Schmiede Wetzlar. Als Verbraucher steht Ihnen grundsätzlich ein 14-tägiges Widerrufsrecht bei Fernabsatzverträgen zu.</p>
                    <p>Bei sofort auszuführenden Schlüsselnotdiensten vor Ort erlischt das Widerrufsrecht nach vollständiger Leistungserbringung gemäß § 356 Abs. 4 Satz 1 BGB i.V.m. § 312g Abs. 2 Nr. 11 BGB, sofern Sie der sofortigen Ausführung zugestimmt haben.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-widerrufsrecht">
                <h2 className="mt-0">1. Widerrufsrecht bei Verbraucherverträgen</h2>
                <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag mit dem Schlüsseldienst Wetzlar zu widerrufen.</p>
                <p>Das gesetzliche Widerrufsrecht gilt für Verträge, die außerhalb von Geschäftsräumen geschlossen werden (§ 312b BGB) sowie für Fernabsatzverträge (§ 312c BGB), etwa bei telefonischer oder elektronischer Beauftragung von Schlosswechseln oder Einbruchschutz-Montagen.</p>
                <p>Unsere Kunden werden vor jedem Einsatz transparent über ihre gesetzlichen Rechte aufgeklärt.</p>
            </LegalSection>

            <LegalSection id="2-widerrufsfrist">
                <h2 className="mt-0">2. Widerrufsfrist</h2>
                <p>Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsschlusses.</p>
                <p>Bei telefonischer Beauftragung unserer Schlüssel Schmiede Dienstleistungen beginnt die Frist mit dem Moment der telefonischen Auftragsbestätigung durch unseren Disponenten.</p>
                <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
            </LegalSection>

            <LegalSection id="3-ausuebung">
                <h2 className="mt-0">3. Ausübung des Widerrufs</h2>
                <p>Ihre Widerrufserklärung richten Sie bitte an folgende Anschrift:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    Mina Saad<br />
                    Schlüssel Schmiede Wetzlar<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:+4964418056279" className="text-[var(--action-primary)] hover:underline font-medium">06441 8056279</Link><br />
                    E-Mail: <Link href="mailto:schluesselschmiede@gmail.com?subject=Widerruf" className="text-[var(--action-primary)] hover:underline font-medium">schluesselschmiede@gmail.com</Link>
                </div>
                <p>Sie können dafür das unten beigefügte <Link href="#6-muster-formular" className="text-[var(--action-primary)] hover:underline font-medium">Muster-Widerrufsformular</Link> verwenden.</p>
                <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
            </LegalSection>

            <LegalSection id="4-folgen">
                <h2 className="mt-0">4. Folgen des Widerrufs</h2>
                <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.</p>
                <p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart.</p>

                <h3 className="mt-6 text-base font-bold text-gray-900">Wertersatz bei teilweise erbrachter Leistung</h3>
                <p>Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt erbrachten Dienstleistungen entspricht.</p>
            </LegalSection>

            <LegalSection id="5-ausnahmen">
                <h2 className="mt-0">5. Ausnahmen vom Widerrufsrecht</h2>
                <p>Das Widerrufsrecht besteht gemäß § 312g Abs. 2 BGB in folgenden Fällen nicht:</p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6 space-y-3">
                    <h3 className="text-base font-bold text-red-900 mt-0">Ausnahme bei sofortigen Notdiensteinsätzen</h3>
                    <p className="text-red-800 text-sm leading-relaxed">Gemäß § 356 Abs. 4 Satz 1 BGB i.V.m. § 312g Abs. 2 Nr. 11 BGB erlischt das Widerrufsrecht bei einem Vertrag zur Erbringung von Dienstleistungen, wenn der Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat.</p>
                </div>

                <p>Praktische Bedeutung: Wenn Sie unseren Notdienst um 23:00 Uhr zur sofortigen Türöffnung in Wetzlar rufen und wir die Tür schadensfrei öffnen, ist die Dienstleistung vollständig erfüllt. Ein nachträglicher Widerruf ist in diesem Fall gesetzlich ausgeschlossen.</p>
                <p>Sollten im Zuge eines Einsatzes neu verpackte Zylinder oder Zusatzschlösser verkauft werden, die nicht starr verbaut wurden, gilt für diese Ware das reguläre 14-tägige Widerrufsrecht.</p>
            </LegalSection>

            <LegalSection id="6-muster-formular">
                <h2 className="mt-0">6. Musterwiderrufsformular</h2>
                <p className="text-sm text-gray-500 mb-4">(Gemäß Anlage 2 zu Artikel 246a § 1 Absatz 2 Satz 1 Nummer 1 EGBGB)</p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4 space-y-4">
                    <p className="text-sm text-gray-500 italic">Möchten Sie Ihren Vertrag widerrufen, füllen Sie bitte dieses Formular aus und senden es an uns zurück:</p>

                    <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-3 text-sm">
                        <p>An:<br />
                        Mina Saad<br />
                        Schlüssel Schmiede Wetzlar<br />
                        Gloelstraße 11<br />
                        35576 Wetzlar<br />
                        E-Mail: schluesselschmiede@gmail.com</p>

                        <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):</p>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">Beschreibung der Dienstleistung (z.B. Schlosswechsel)</p>
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
                            <p className="text-gray-400 text-xs">Datum und Unterschrift des/der Verbraucher(s) (nur bei schriftlicher Übermittlung)</p>
                        </div>

                        <p className="text-xs text-gray-400 mt-4">(*) Unzutreffendes streichen.</p>
                    </div>
                </div>
            </LegalSection>

            <LegalSection id="7-kontakt">
                <h2 className="mt-0">7. Kontaktfragen zum Widerrufsrecht</h2>
                <p>Bei allen Fragen zur Ausübung Ihres Widerrufsrechts wenden Sie sich bitte direkt an den Kundenservice der Schlüssel Schmiede Wetzlar:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    Mina Saad<br />
                    Schlüssel Schmiede Wetzlar<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:+4964418056279" className="text-[var(--action-primary)] hover:underline font-medium">06441 8056279</Link><br />
                    E-Mail: <Link href="mailto:schluesselschmiede@gmail.com" className="text-[var(--action-primary)] hover:underline font-medium">schluesselschmiede@gmail.com</Link>
                </div>
                <p>Weiterführende Hinweise finden Sie in unseren <Link href="/agb#6-widerrufsrecht" className="text-[var(--action-primary)] hover:underline font-medium">Allgemeinen Geschäftsbedingungen</Link> sowie in unserer <Link href="/datenschutz" className="text-[var(--action-primary)] hover:underline font-medium">Datenschutzerklärung</Link>.</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
