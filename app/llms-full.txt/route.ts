import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/schema";
import { companyInfo } from "@/lib/data/company";

export async function GET() {
    const content = `# ${companyInfo.localStore.name} und Vollständige Website-Inhalte

> Dieses Dokument enthält den vollständigen Inhalt aller Seiten der Website von ${companyInfo.localStore.name}, dem ${companyInfo.localStore.tagline} in Wetzlar, Gießen, Marburg und dem Lahn-Dill-Kreis.

---

# Startseite

${companyInfo.localStore.name} ist ein ${companyInfo.localStore.tagline} für Schlüssel, Schlösser und Sicherheitstechnik mit integriertem 24/7 Schlüsseldienst und Festpreisen ${companyInfo.financial.startingPrice}, der Wetzlar, Gießen, Marburg und den gesamten Lahn-Dill-Kreis innerhalb von 20-30 Minuten erreicht und über 44 Google-Bewertungen mit einer Durchschnittsnote von 5.0 verfügt.

## Leistungen im Überblick
- **Türöffnung**: Zerstörungsfreie Öffnung von Haus- und Wohnungstüren in 99% der Fälle. Festpreis ${companyInfo.financial.startingPrice} (tagsüber).
- **Autoöffnung**: Schonende Öffnung von Fahrzeugen aller Marken ohne Lackschäden. ${companyInfo.financial.startingPrice}.
- **Schließanlagen**: Beratung, Planung und Einbau von Schließanlagen für Wohn- und Gewerbeimmobilien.
- **Sicherheitstechnik**: Einbruchschutz-Beratung, Zusatzschlösser, Panzerriegel, elektronische Schließsysteme.
- **Schlüssel nachmachen**: Anfertigung von Ersatzschlüsseln für alle gängigen Schlosstypen.

## Warum ${companyInfo.localStore.name}?
- **Transparente Festpreise**: Preis wird vorab am Telefon genannt. Keine versteckten Kosten.
- **Lokaler Anbieter**: Echte Handwerker aus Wetzlar, kein anonymes Callcenter.
- **Zerstörungsfreie Öffnung**: Mit Spezialwerkzeug öffnen wir zugefallene Türen in 99% der Fälle ohne Schaden.

---

# Türöffnung

## Tür zugefallen in Wetzlar? Schlüsseldienst in 15 Minuten vor Ort.

${companyInfo.localStore.name} öffnet zugefallene und abgesperrte Türen in Wetzlar und Umgebung zum Festpreis und zerstörungsfrei in 99% der Fälle, innerhalb von 15-30 Minuten, 24 Stunden am Tag.

### So funktioniert eine Türöffnung
1. **Anruf**: Sie rufen uns an unter ${companyInfo.phone.link}
2. **Anfahrt**: Unser Techniker ist in 15-30 Minuten bei Ihnen
3. **Öffnung**: Zerstörungsfreie Öffnung mit Spezialwerkzeug
4. **Abrechnung**: Transparenter Festpreis und Sie zahlen nur den vereinbarten Betrag

### Preise Türöffnung
- Tür zugefallen (Schlüssel steckt von innen): ${companyInfo.financial.startingPrice} (tagsüber)
- Tür abgesperrt (Schlüssel verloren): auf Anfrage
- Abendzuschlag / Nachtzuschlag (22-08 Uhr) / Wochenende: je nach Einsatzzeit

---

# Autoöffnung

## Auto ausgesperrt in Wetzlar? Professionelle Fahrzeugöffnung ohne Lackschäden.

${companyInfo.localStore.name} öffnet Fahrzeuge aller Marken schonend und ohne Beschädigung. ${companyInfo.financial.startingPrice} (tagsüber) und 24/7 erreichbar, in 20-30 Minuten vor Ort.

---

# Schließanlagen

## Neue Schließanlage für Ihr Gebäude in Wetzlar? Beratung und Einbau vom Fachmann.

${companyInfo.localStore.name} plant und installiert Schließanlagen für Wohn- und Gewerbeimmobilien in Wetzlar und Umgebung und von der einfachen Gleichschließung bis zur elektronischen Zutrittskontrolle.

---

# Sicherheitstechnik

## Einbruchschutz in Wetzlar? Professionelle Sicherheitsberatung und Nachrüstung.

${companyInfo.localStore.name} berät Sie kostenlos zum Einbruchschutz und rüstet Ihre Türen und Fenster mit Zusatzschlössern, Panzerriegeln und modernen Schließsystemen nach.

---

# Schlüssel nachmachen

## Schlüssel nachmachen in Wetzlar? Ersatzschlüssel für alle gängigen Schlosstypen.

${companyInfo.localStore.name} fertigt Ersatzschlüssel für Haustüren, Wohnungstüren, Briefkästen und Garagentore und schnell, zuverlässig und zu fairen Preisen.

---

# Preise & Kosten

${companyInfo.localStore.name} arbeitet ausschließlich mit transparenten Preisen. Der Preis wird Ihnen vorab am Telefon genannt und ohne versteckte Kosten. Anfahrtskosten Kernstadt Wetzlar: ${companyInfo.financial.travelCostWetzlar}.

| Leistung | Tagsüber (ab) | 
|---|---|
| Türöffnung (zugefallen) | ${companyInfo.financial.startingPriceValue}€ | 
| Türöffnung (abgesperrt) | auf Anfrage | 
| Autoöffnung | auf Anfrage | 
| Tresoröffnung | auf Anfrage |
| Schließzylinder-Austausch | auf Anfrage | 

---

# Häufig gestellte Fragen (FAQ)

### Was kostet ein Schlüsseldienst in Wetzlar?
${companyInfo.localStore.name} öffnet zugefallene Türen ${companyInfo.financial.startingPrice} zum Festpreis und ohne versteckte Kosten. Anfahrtsgebühren Kernstadt Wetzlar: ${companyInfo.financial.travelCostWetzlar}. 

### Wie schnell kommt der Schlüsseldienst in Wetzlar?
Unser Schlüsseldienst ist in 15-30 Minuten bei Ihnen in Wetzlar und Umgebung und 24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr.

### Gibt es einen Schlüsseldienst in Wetzlar der nachts geöffnet hat?
Ja, ${companyInfo.localStore.name} ist rund um die Uhr erreichbar und auch nachts, an Wochenenden und an allen deutschen Feiertagen.

### Welcher Schlüsseldienst in Wetzlar ist seriös?
${companyInfo.localStore.name} ist mit 5.0 Sternen bei 44 Google-Bewertungen einer der bestbewerteten Schlüsseldienste der Region. Wir arbeiten mit transparenten Vorab-Preisen am Telefon.

### Wird die Tür bei der Öffnung beschädigt?
In 99% der Fälle öffnet ${companyInfo.localStore.name} Ihre Tür zerstörungsfrei mit Spezialwerkzeug. Sollte ein Schlossaustausch nötig sein, besprechen wir dies vorher mit Ihnen.

### Muss ich einen Ausweis vorlegen?
Ja, aus rechtlichen Gründen müssen Sie nachweisen, dass Sie berechtigt sind, die Tür zu öffnen. Ein Personalausweis oder Mietvertrag ist ausreichend.

### Wie kann ich bezahlen?
Sie können bei ${companyInfo.localStore.name} via ${companyInfo.financial.acceptedPayments.join(" oder ")} bezahlen.

### Kommt der Schlüsseldienst auch nach Gießen?
Ja, ${companyInfo.localStore.name} bedient Gießen.

### Kommt der Schlüsseldienst auch nach Marburg?
Ja, ${companyInfo.localStore.name} bedient auch Marburg.

---

# Servicegebiet

${companyInfo.localStore.name} bedient ein Einsatzgebiet im Umkreis von 50 Kilometern um Wetzlar.

---

# Kontakt

- Telefon (24/7 Notdienst): ${companyInfo.phone.link}
- E-Mail: ${companyInfo.email}
- Adresse: ${companyInfo.localStore.street}, ${companyInfo.localStore.postalCode} ${companyInfo.localStore.city}, ${companyInfo.localStore.state}
- Servicezeiten: ${companyInfo.openingHours.emergency}
- Ladenzeiten: ${companyInfo.openingHours.store}

---

# Über uns

${companyInfo.localStore.name} ist ein 24 Stunden Notdienst & Handwerksbetrieb mit über 15 Jahren Erfahrung im Bereich Schlüssel, Schlösser, Sicherheitstechnik und Schlüsseldienst. Wir sind keine Vermittlung und kein Callcenter und jeder Einsatz wird von unseren eigenen Technikern durchgeführt. ${companyInfo.partnership.isAdacPartner ? "Zudem sind wir stolzer ADAC Partner." : ""}

---

*Letzte Aktualisierung: 2026-04-09*
*Quelle: ${siteUrl}*
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}
