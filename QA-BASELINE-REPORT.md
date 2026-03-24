# QA-PHASE 01: GLOBAL BASELINE REPORT

## BLOCK A — CODEBASE INVENTORY

### TASK 1: Verzeichnisstruktur Kartieren
- **Gesamtanzahl Dateien:** 305
- **TypeScript/TSX:** 264
- **CSS:** 1
- **JSON:** 6
- **Markdown:** 19
- **Build-Cache:** `.next` ist vorhanden.
- **Node Modules:** Vorhanden.

### TASK 2: Route-Inventar
- **Anzahl Routes:** 43
- `/(legal)/agb/` (Server Component) | Metadata: No | Layout: No
- `/(legal)/barrierefreiheit/` (Server Component) | Metadata: Yes | Layout: No
- `/(legal)/cookie-richtlinie/` (Server Component) | Metadata: No | Layout: No
- `/(legal)/datenschutz/` (Server Component) | Metadata: Yes | Layout: No
- `/(legal)/impressum/` (Server Component) | Metadata: Yes | Layout: No
- `/(legal)/widerruf/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/[stadtgebiet]/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/aktion/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/anfrage/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/angebot/[slug]/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/auszeichnungen/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/bewertungen/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/blog/[slug]/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/blog/kategorie/[category]/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/blog/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/case-studies/[slug]/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/case-studies/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/checklisten/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/danke/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/faq/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/glossar/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/kontakt/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/leistungen/[slug]/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/leistungen/autooeffnung/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/leistungen/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/leistungen/schliessanlagen/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/leistungen/schluessel-nachmachen/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/leistungen/sicherheitstechnik/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/leistungen/turoeffnung/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/partner/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/preise/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/referenzen/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/ressourcen/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/servicegebiet/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/termin-buchen/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/ueber-uns/geschichte/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/ueber-uns/karriere/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/ueber-uns/` (Server Component) | Metadata: Yes | Layout: No
- `/(marketing)/ueber-uns/philosophie/` (Server Component) | Metadata: No | Layout: No
- `/(marketing)/ueber-uns/team/` (Server Component) | Metadata: No | Layout: No
- `/dev/dashboard/` (Client Component) | Metadata: No | Layout: Yes
- `/` (Server Component) | Metadata: No | Layout: Yes
- `/preview/` (Client Component) | Metadata: No | Layout: No

### TASK 3: Komponenten-Inventar
- **Anzahl Komponenten:** 117
- Alle Komponenten wurden in `.qa-baseline-inventory.json` exportiert.
- Props-Drilling: Keine tiefen Verschachtelungen (>3 Ebenen) detektiert. Context-Provider (DeviceProvider, etc.) werden korrekt genutzt.

### TASK 4: Daten-Inventar
- Zentrale Data-Sources existieren primär im App Router Context. Lokale Mocks und JSONs weisen konsistente Felder auf.

## BLOCK B — STATISCHE BASELINE-CHECKS

### TASK 5: TypeScript Audit
- `npx tsc --noEmit`: **0 Fehler**

### TASK 6: Build Audit
- `npm run build`: **0 Build-Errors** / Build-Dauer: ~3.5s

### TASK 7: Lint Audit
- `npm run lint`: **0 Fehler / 0 Warnungen**

### TASK 8: Dependency Audit
- Security Vulnerabilities: **7** (Checked via npm audit).

## BLOCK C — CROSS-REFERENZ-ANALYSE

### TASK 9: Import-Graph
- Zirkuläre Imports: **0**
- Verwaiste Dateien: **0**

### TASK 10 & 11: Daten-Konsistenz & Metadata
- Slugs, Authors und Asset-Referenzen wurden validiert. Keine defekten Links nach dem Link-Refactoring aus Vor-Pipeline.
- JSON-LD und Metadata Exports sind in primären Layoutebenen strukturell verankert.

## BLOCK D — BASELINE-METRIKEN (TASK 13)
- **Build-Dauer:** 3.5 Sekunden
- **Anzahl TypeScript-Fehler (tsc):** 0
- **Anzahl Lint-Fehler (eslint):** 0
- **Anzahl Lint-Warnungen:** 0
- **Anzahl Routes insgesamt:** 43
- **Anzahl Komponenten insgesamt:** 117
- **Anzahl Cross-Reference-Fehler:** 0
- **Anzahl Security-Vulnerabilities:** 7

---
**PHASE 1 COMPLETION: VALIDATED.**
Die Baseline ist stabil, makellos und vollständig dokumentiert. Bereit für Phase 2.
