# Handoff Report: Price Reference Exploration

## 1. Observation
We ran grep searches and examined specific files in the workspace `/Users/umurey/Downloads/MS-Schl-sseldienst-main` to locate all occurrences of price indications (currency symbols, '€', 'Euro', 'ab', 'Festpreis', etc.) in the codebase. 

The following exact occurrences, file paths, line numbers, and surrounding contexts were observed:

### A. Business Configuration & Data (`lib/data/`)

* **File**: `lib/data/company.ts`
  * Line 34: `startingPrice: "99 €",`
  * Line 35: `startingPriceValue: 99,`
  * Line 36: `travelCostWetzlar: "0 Euro",`
  * Line 37: `travelCostWetzlarValue: 0,`
  * Line 40: `headline: "Türöffnung tagsüber ab 99 € (Endpreis)",`
  * Line 41: `baseNote: "Basispreis für eine zugefallene, nicht verschlossene Standardtür an Werktagen (Mo–Fr, 06:00–19:59 Uhr). Zzgl. Anfahrt außerhalb der Wetzlarer Kernstadt.",`
  * Line 44: `legalNote: "Alle Preise verstehen sich als Endpreise inklusive 19% der gesetzlichen Mehrwertsteuer."`

* **File**: `lib/data/services.ts`
  * Line 20: `amount: 99,` (Pricing for `srv-01` Türöffnung)
  * Line 28: `description: "Professionelle Türöffnung in Wetzlar vom etablierten Fachbetrieb. Zerstörungsfrei in nahezu allen Fällen. Ehrliche Preise ab 99 Euro (Endpreis) ohne böse Überraschungen.",`
  * Line 36: `shortDescription: "Fahrzeug verschlossen? Wir öffnen alle Marken beschädigungsfrei und garantieerhaltend ab 99 Euro.",`
  * Line 43: `title: "Autoöffnung Wetzlar | KFZ beschädigungsfrei öffnen ab 99€",`
  * Line 78: `pricing: { amount: 0, interval: "one-time", features: ["Sicherheits-Schwachstellenanalyse vor Ort ist kostenfrei!"] }`

* **File**: `lib/data/locations.ts` (Wetzlar Kernstadt & Direct Districts)
  * Line 112: `metaTitle: "Schlüsseldienst Wetzlar 24/7 Notdienst ab 99€",`
  * Line 113: `metaDescription: "Ihr lokaler Schlüsseldienst für Wetzlar Kernstadt. Zerstörungsfreie Türöffnung ab 99€. In ca. 5-10 Min. bei Ihnen vor Ort...",`
  * Line 126: `fareInfo: "Da wir direkt in Wetzlar ansässig sind, berechnen wir in der gesamten Kernstadt absolut keine Anfahrtskosten! Unser Einsatz beginnt mit exakt 0 Euro Fahrtkosten.",`
  * Line 149: `<h3>Null-Euro Anfahrtskosten direkt im Stadtzentrum</h3>`
  * Line 150: `...Wir erheben exklusiv und transparent nur unseren werktäglichen Festpreis von 99 Euro für die Standardöffnung...`
  * Line 165: `...Und wirklich null Euro Fahrtkosten auf der Rechnung!...`
  * Line 175: `...Preis war transparent bei 99 Euro (werktags)...`
  * Line 221: `metaTitle: "Schlüsseldienst Niedergirmes Türöffnung ab 99€",`
  * Line 222: `metaDescription: "Schlüsseldienst Wetzlar-Niedergirmes: Lokaler Notdienst ohne Anfahrtskosten. In 3-5 Min. vor Ort. Festpreis ab 99€..."`
  * Line 231: `...Unser verbindlicher Festpreis ab 99 Euro gilt hier ohne Wenn und Aber...`
  * Line 253: `...zugefallene Tür öffnen wir werktags von 06:00 bis 19:59 Uhr zum transparenten Festpreis von 99 Euro...`
  * Line 291: `metaDescription: "Ihr Schlüsseldienst für Wetzlar-Dutenhofen! Transparenter Festpreis ab 99€..."`
  * Line 300: `...Unsere kalkulierbaren Festpreise ab 99 Euro bieten Ihnen absolute Kostensicherheit...`
  * Line 342: `travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",`
  * Line 345: `metaTitle: "Schlüsseldienst Münchholzhausen 24/7 ab 99€",`
  * Line 346: `metaDescription: "...Festpreis ab 99€..."`
  * Line 355: `...Unser Festpreis von ab 99 Euro ist genau das: ein Festpreis ohne verdeckte Überraschungen...`
  * Line 364: `question: "Sind die angegebenen 99 Euro Festpreise wirklich transparent?",`
  * Line 365: `answer: "Definitiv. Bei nur zugefallenen, unverschlossenen Standardtüren berechnen wir werktags (06:00 bis 19:59 Uhr) pauschal 99 Euro."`
  * Line 397: `metaDescription: "...Festpreis ab 99€..."`
  * Line 406: `...Unser Festpreissystem bietet absolute Transparenz, beginnend ab 99 Euro...`
  * Line 447: `metaTitle: "Schlüsseldienst Hermannstein Festpreis ab 99€"`
  * Line 457: `...Es gilt unser glasklares Festpreissystem ab 99 Euro.`
  * Line 466: `question: "Bleibt es in Wetzlar-Hermannstein wirklich bei 99 Euro Festpreis?",`
  * Line 467: `answer: "Ja, der Grundpreis für die einfache Öffnung (nicht abgeschlossen, Standardtür) liegt werktags zwischen 06:00 und 19:59 Uhr bei genau 99 Euro."`

* **Files**: `lib/data/locations_ring*.ts` (Programmatic structures mapping over 100 regional districts across 11 files: `locations_ring1b.ts` to `locations_ring4b.ts`, `locations_wetzlar_bezirke.ts`)
  * Every location object in these files has programmatic pricing structures:
    ```typescript
    pricing: {
      basePrice: companyInfo.financial.startingPriceValue,
      basePriceNight: 119 | 149,
      basePriceWeekend: 179,
      travelCost: null | number,
      travelCostText: "Keine Anfahrtskosten" | "+ 10€ Anfahrt" | "+ 15€ Anfahrt" | "Geringe Anfahrtskosten" | "Anfahrtskosten nach Absprache"
    }
    ```
  * SEO fields, hero intro text, main text body, and FAQs in these files dynamically insert or hardcode references to prices:
    * e.g., `"Festpreis ab 99€"`, `"ab 99 Euro Festpreis"`, `"Nacht ab 119€, Wochenende ab 179€"`.

---

### B. Frontend Page Components (`app/`)

* **File**: `app/(legal)/agb/page.tsx`
  * Line 45: `Wir arbeiten mit <strong>transparenten Festpreisen ab 99,- € (inkl. 19% MwSt.)</strong> zzgl. Anfahrt...`
  * Line 82: `3.2. <strong>Grundtarif Türöffnung:</strong>... Festpreis-Honorar ab 99,00 € (brutto).`
  * Line 83: `3.3. <strong>Mobilitätspauschale:</strong>... berechnen wir maximal 40,00 €.`
  * Line 90: `4.2. ... Leerfahrt-/Ausfallpauschale von maximal 80,00 € inkl. MwSt.`

* **File**: `app/(marketing)/[stadtgebiet]/page.tsx`
  * Line 34: `title: \`Schlüsseldienst \${city.name} | 24h Notdienst ab 99€ | Schlüssel Schmiede\`,`
  * Line 81: `"priceRange": "ab 99€",`

* **File**: `app/(marketing)/bewertungen/page.tsx`
  * Line 84: `"priceRange": "€€",`

* **File**: `app/(marketing)/kontakt/page.tsx`
  * Line 105: `Kostenlose Beratung und 0€ Anfahrt in der Wetzlarer Kernstadt`

* **File**: `app/(marketing)/leistungen/autooeffnung/page.tsx`
  * Line 91: `...Festpreis ab 149€.`
  * Line 202: `<PriceCard title="Einfache Autoöffnung" price={149} ... />`
  * Line 210: `<PriceCard title="Premium/Luxus Modelle" price={180} ... />`
  * Line 269: `Eine einfache Autoöffnung bieten wir ab 149 Euro an. Bei modernen Fahrzeugen mit spezieller Diebstahlsicherung (Safe-Sicherung) starten die Preise ab 180 Euro.`

* **File**: `app/(marketing)/leistungen/autoschluessel/page.tsx`
  * Line 67: `answer: "Abhängig vom Fahrzeugmodell starten einfache Autoschlüssel bei uns ab ca. 45€."`
  * Line 164: `<PriceCard title="Gehäusetausch" price={"ab 15"} ... />`
  * Line 171: `<PriceCard title="Ersatzschlüssel" price={"ab 45"} ... />`
  * Line 179: `<PriceCard title="Sonderfälle" price={"Auf Anfrage"} ... />`
  * Line 215: `answer="Abhängig vom Modell starten neu gefräste und programmierte Autoschlüssel bei uns ab ca. 45€. Ein reiner Gehäusetausch ist deutlich günstiger."`

* **File**: `app/(marketing)/leistungen/einbruchschutz/page.tsx`
  * Line 263: `Staatliche Zuschüsse bis zu 1.600€ für Einbruchschutz-Maßnahmen an Ihrer Immobilie.`

* **File**: `app/(marketing)/leistungen/page.tsx`
  * Line 10: `description: "Alle Services im Überblick: ✔️ Türöffnung ab 99€ ✔️ Tresoröffnung ✔️ Einbruchschutz. ..."`

* **File**: `app/(marketing)/leistungen/schliessanlagen/page.tsx`
  * Line 198: `<PriceCard title="Mechanische Systeme" price={"Individuell"} ... />`
  * Line 206: `<PriceCard title="Elektronische Systeme" price={"Auf Anfrage"} ... />`

* **File**: `app/(marketing)/leistungen/schluessel-nachmachen/page.tsx`
  * Line 171: `<PriceCard title="Standard-Schlüssel" price="ab 9,90 €" ... />`
  * Line 179: `<PriceCard title="Fahrzeugschlüssel" price="ab 45,00 €" ... />`
  * Line 186: `<PriceCard title="Sicherheits-Schlüssel" price={"Auf Anfrage"} ... />`

* **File**: `app/(marketing)/leistungen/sicherheitstechnik/page.tsx`
  * Line 224: `<PriceCard title="Sicherheits-Check" price={0} ... />`
  * Line 232: `<PriceCard title="Grundschutz Paket" price={199} ... />`
  * Line 239: `<PriceCard title="Smart Home Schutz" price={"Auf Anfrage"} ... />`
  * Line 322: `Staatliche Zuschüsse bis zu 1.600€ für Einbruchschutz-Maßnahmen an Ihrer Immobilie.`

* **File**: `app/(marketing)/leistungen/turoeffnung/page.tsx`
  * Line 42: `description:"Zerstörungsfreie Türöffnung ab 99€",`
  * Line 59: `answer:"Schlüssel Schmiede Wetzlar öffnet zugefallene Türen ab 99 Euro und abgesperrte Türen ab 80 Euro zum Festpreis..."`
  * Line 104: `Ehrliche Festpreise ab 99€ und garantiert ohne versteckte Kosten.`
  * Line 218: `price={99}`
  * Line 230: `price={129}`
  * Line 236: `Ersatzzylinder zubuchbar (ab 25€)`
  * Line 289: `answer="Schlüssel Schmiede Wetzlar öffnet zugefallene Türen ab 99 Euro und abgesperrte Türen ab 80 Euro zum Festpreis..."`
  * Line 351: `benefits={["Zerstörungsfreie Öffnung in 99% der Fälle","Festpreis ab 99€ ohne Anfahrtskosten", ... ]}`

* **File**: `app/(marketing)/preise/page.tsx`
  * Line 28: `generateServiceSchema({ title:"Türöffnung", description:"Zerstörungsfreie Türöffnung ab 99€", url:"/leistungen/turoeffnung", price: 99 }),`
  * Line 34: `description: "Türöffnung ab 99€! ✔️ Verbindliche Preisnennung vor Anfahrt ✔️ Keine versteckten Gebühren. Jetzt transparenten Preis im Rechner prüfen.",`

* **File**: `app/(marketing)/schluessel-schmiede/page.tsx`
  * Line 78: `priceRange: "€-€€",`

* **File**: `app/(panic)/emergency/page.tsx`
  * Line 66: `<span>Festpreis 149€</span>`
  * Line 76: `Nachttarif (20:00-06:00): Türöffnung zugefallen ab 149€ Festpreis.`

* **File**: `app/page.tsx`
  * Line 31: `title: "Schlüsseldienst Wetzlar | 24h Notdienst ab 99€",`

---

### C. Shared Components & Constants (`components/`)

* **File**: `components/cards/ServiceCard.tsx`
  * Line 33: `Ab {service.pricing.amount} {service.pricing.currency === "EUR" ? "€" : "$"}`

* **File**: `components/growth/PriceEstimator.tsx`
  * Price Matrix definitions (Lines 25–46):
    * `zugefallen.regulaer`: `from: companyInfo.financial.startingPriceValue` (99), `to: 149`
    * `zugefallen.abend`: `from: 119`, `to: 169`
    * `zugefallen.nacht`: `from: 149`, `to: 199`
    * `zugefallen.wochenende`: `from: 179`, `to: 229`
    * `abgebrochen.regulaer`: `from: 129`, `to: 199`
    * `abgebrochen.abend`: `from: 159`, `to: 229`
    * `abgebrochen.nacht`: `from: 179`, `to: 249`
    * `abgebrochen.wochenende`: `from: 209`, `to: 279`
    * `schliessanlage.regulaer`: `from: 199`, `to: 499`
    * `schliessanlage.abend`: `from: 219`, `to: 519`
    * `schliessanlage.nacht`: `from: 249`, `to: 549`
    * `schliessanlage.wochenende`: `from: 279`, `to: 579`
    * `sicherheit.regulaer`: `from: 149`, `to: 399`
    * `sicherheit.abend`: `from: 169`, `to: 419`
    * `sicherheit.nacht`: `from: 199`, `to: 449`
    * `sicherheit.wochenende`: `from: 229`, `to: 479`
  * Line 201: `{price.from}€ - {price.to}€`

* **File**: `components/locations/LocalTrustSignals.tsx`
  * Line 26: `{city.fareInfo || "Festpreis ab 99€"}`

* **File**: `components/pricing/PriceCard.tsx`
  * Line 85: `€` (hardcoded unit)

* **File**: `components/pricing/PricingCalculator.tsx`
  * Line 93, 240: `€` (labels)
  * Line 253: `{basePrice} €`
  * Line 258: `+{surcharge} €`
  * Line 269: `{currentPrice} €`

* **File**: `components/pricing/pricing.constants.ts`
  * Line 7: `doorFallen: { day: companyInfo.financial.startingPriceValue, evening: 119, night: 149, weekend: 179 },`
  * Line 8: `doorLocked: { day: 189, evening: 209, night: 239, weekend: 269 },`
  * Line 9: `carOpening: { day: 149, evening: 169, night: 229, weekend: 229 },`
  * Line 22: `zylinder: { label: 'Ersatzzylinder (Markenware) ab', price: 25 },`

* **File**: `components/pricing/PricingFAQ.tsx`
  * Line 18: `question:"Was bedeutet 'ab' bei den Preisen?",`
  * Line 19: `answer:"Der 'ab'-Preis bezieht sich auf eine einfach zugefallene, unverschlossene Standardtür..."`

* **File**: `components/sections/home/InteractiveMapSection.tsx`
  * Line 32: `{ value: "0€", label: "Anfahrt in der Wetzlarer Kernstadt" },`

* **File**: `components/sections/home/PricingSection.tsx`
  * Lines 76, 94, 142, 161, 199: `€` (currency labels)

* **File**: `components/sections/home/SeoContentSection.tsx`
  * Line 39: `...transparenten Preis ab 99 Euro...`

* **File**: `components/trust/ProcessSteps.tsx`
  * Line 3: `import { Phone, Euro, DoorOpen, CreditCard } from "lucide-react";`
  * Line 30: `icon: Euro,`

---

### D. Metadata & Feeds / APIs (`app/api/` & `app/llms*.txt/`)

* **File**: `app/api/cron/video-syndication/route.ts`
  * Line 64: `const PRICE = \`\${companyInfo.financial.startingPriceValue}€\`;`

* **File**: `app/api/og/route.tsx`
  * Line 134: `Festpreis ab 99€`

* **File**: `app/llms-full.txt/route.ts`
  * Line 11: `- Festpreis: ab \${city.pricing.basePrice}€`
  * Line 99: `| Türöffnung (zugefallen) | \${companyInfo.financial.startingPriceValue}€ |`
  * Line 110: `...ab \${companyInfo.financial.startingPrice} an. Fahrkosten in der Wetzlarer Kernstadt: \${companyInfo.financial.travelCostWetzlar}.`

* **File**: `app/llms.txt/route.ts`
  * Line 34: `const anchor = \`\${name} | Tel: \${phone} | ab \${price}€ Festpreis | \${addr}\`;`
  * Line 38: `> **Sofort-Kontakt: \${phone}** | Festpreis ab \${price}€ | \${addr}`
  * Line 64: `| Türöffnung (zugefallen) | \${PRICING.doorFallen.day}€ | \${PRICING.doorFallen.night}€ |`
  * Line 65: `| Türöffnung (abgesperrt) | \${PRICING.doorLocked.day}€ | \${PRICING.doorLocked.night}€ |`
  * Line 66: `| Autoöffnung | \${PRICING.carOpening.day}€ | \${PRICING.carOpening.night}€ |`
  * Line 67: `| Anfahrt Wetzlar Kernstadt | \${companyInfo.financial.travelCostWetzlarValue}€ | \${companyInfo.financial.travelCostWetzlarValue}€ |`
  * Line 79: `1. **Türöffnung** — zerstörungsfrei in nahezu allen Fällen, ab \${price}€`
  * Line 108: `- Rechnungen von 300-800€ für einfache Türöffnungen`
  * Line 110: `...Festpreis ab \${price}€...`
  * Line 119, 122, 125, 131, 135, 151: Dynamic references of `ab \${price}€` or `Festpreis ab \${price}€`.

---

## 2. Logic Chain
1. We utilized `grep_search` and `find_by_name` to sweep the target file directories (`app/`, `components/`, `lib/data/`).
2. We verified the results against `view_file` to capture exact line numbers and code contexts for pricing indicators.
3. We categorized the findings into config data, location rings, routes, component markup, and AI text feeds.
4. We successfully mapped each occurrence without altering any code.

## 3. Caveats
No codebase modifications were made. Tests were not run as this is a read-only investigation.
We noted that the location ring data (`lib/data/locations_ring*.ts`) contains repeated programmatic pricing patterns across 100+ districts. We summarized these instead of copy-pasting hundreds of near-identical object lines to keep the report concise and readable.

## 4. Conclusion
The price configurations in the app are anchored in `lib/data/company.ts` (`companyInfo.financial.startingPriceValue = 99`), `components/pricing/pricing.constants.ts` (`PRICING` matrix), and `components/growth/PriceEstimator.tsx` (`PRICE_MATRIX`). However, there are also numerous hardcoded strings of prices (e.g. `99€`, `149€`, `199€`, `ab 9,90 €`, `ab 45,00 €`) scattered across metadata and content pages.

## 5. Verification Method
Verify by inspecting the reported files and lines in the codebase directly.
No project tests relate directly to testing hardcoded currency formatting, but standard lint checks or builds can confirm formatting remains intact.
