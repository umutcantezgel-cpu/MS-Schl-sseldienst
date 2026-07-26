# Original User Request

## Initial Request — 2026-06-19T03:38:11-07:00

# Teamwork Project Prompt — Final Draft

> Status: Ready for launch — awaiting user approval
> Goal: Execute the analysis via the teamwork_preview subagent

Durchsuche den gesamten Quellcode und analysiere die Konsistenz aller genannten Preise für alle Dienstleistungen. Verändere keinen Code, sondern erstelle am Ende einen detaillierten Bericht über alle gefundenen Preis-Inkonsistenzen.

Working directory: /Users/umurey/Downloads/MS-Schl-sseldienst-main
Integrity mode: development

## Requirements

### R1. Umfassende Suche nach Preisangaben
Durchsuche systematisch alle Frontend-Seiten (`app/**/*.tsx`), Komponenten (`components/**/*.tsx`) sowie Hintergrund- und Konfigurationsdateien (`lib/data/**/*.ts`, `.json` etc.) nach jeglichen Preisangaben (z.B. "€", "Euro", "ab X €", Festpreise). 

### R2. Zuordnung von Dienstleistung und Kontext
Extrahiere für jeden gefundenen Preis die exakte Dienstleistung (z.B. Türöffnung, KFZ-Öffnung, Tresoröffnung, Anfahrt) und notiere die genaue Datei und ggf. die Code-Zeile oder Komponente als Quelle.

### R3. Konsistenzprüfung
Gleiche alle gefundenen Preise systematisch miteinander ab. Identifiziere explizit, wenn für dieselbe Dienstleistung (oder denselben Fall, wie z.B. "Türöffnung am Wochenende") auf verschiedenen Seiten unterschiedliche Preise genannt werden.

### R4. Abschlussbericht
Erstelle einen detaillierten Bericht in der Datei `price_analysis_report.md`. Der Bericht darf keine Änderungen am Code vornehmen, sondern dient rein der Dokumentation für den Nutzer.

## Acceptance Criteria

### Analyse-Abdeckung
- [ ] Der Bericht beinhaltet Daten aus UI-Komponenten (.tsx) UND Hintergrund-Dateien (wie /lib/data).
- [ ] Jede Dienstleistungsgruppe (Türöffnung, Tresoröffnung, Anfahrt etc.) hat eine eigene Sektion.

### Fehlererkennung
- [ ] Es gibt eine hervorgehobene Sektion "Inkonsistenzen", die klipp und klar auflistet, wo sich Preise widersprechen (z.B. "Datei A sagt 49€, Datei B sagt 59€ für Leistung X").
- [ ] Zu jedem widersprüchlichen Preis ist die genaue Datei/Quelle angegeben.

## Follow-up — 2026-07-26T06:20:40Z

Das Ziel ist es, den Quellcode des Next.js Projekts "MS-Schlüsseldienst" systematisch zu optimieren, um beim nächsten Seobility-Crawl einen Onpage-Score von 100/100 in Technik & Meta, Struktur sowie Inhalt zu erreichen.

Working directory: `/Users/umurey/Downloads/MS-Schl-sseldienst-main`
Integrity mode: development

## Requirements

### R1. Meta-Tags und Titel optimieren
Überarbeite 123 Seitentitel und Meta-Descriptions im Code (z. B. in Next.js `metadata` Exporten). 
Jede Seite muss einen individuellen Titel (45-65 Zeichen) und eine individuelle Meta-Description (120-155 Zeichen) besitzen, in denen das Haupt-Keyword sinnvoll integriert ist.

### R2. Inhalts- und Keyword-Probleme beheben
- Beseitige mehrfach verwendete Textblöcke (359 Fälle auf 71 Seiten) durch individuelles Umschreiben der Komponenten/Inhalte.
- Erweitere den Text auf 18 Seiten so, dass jede Seite mindestens 500 Wörter nützlichen Inhalt bietet.
- Stelle sicher, dass auf allen Seiten das H1-Keyword sowie das Title-Keyword im Fließtext wiederverwendet werden.
- Korrigiere Tippfehler (2 Seiten) und behebe Probleme mit Strong/Bold-Tags (24 Seiten).

### R3. Struktur- und Verlinkungsprobleme beheben
- Optimiere generische interne Linktexte ("hier klicken", "mehr lesen") auf 26 Seiten durch keywordrelevante Phrasen.
- Reduziere oder balanciere die Verlinkung auf 2 Seiten mit extrem vielen internen Links.
- Repariere 5 fehlerhafte externe Links und 1 interne Weiterleitung im Code.

### R4. Technische Probleme beheben
- Entferne oder ersetze 7 nicht abrufbare sowie 1 problematische eingebundene Datei.
- Optimiere die Code-Struktur, um die HTML-Dateigröße bei 2 Seiten (aktuell > 0,5 MB) zu reduzieren.
- Repariere fehlerhafte Überschriften-Strukturen (H1 -> H2 -> H3) auf 2 Seiten.

## Acceptance Criteria

### Verifikation durch lokalen Build & programmatische Prüfung
- [ ] Das Projekt lässt sich fehlerfrei mittels `npm run build` kompilieren.
- [ ] Es wird programmatisch (durch ein Skript des Teams) in den generierten Build-Dateien geprüft, dass alle überprüften URLs einen `<title>` zwischen 45-65 Zeichen und eine `<meta name="description">` zwischen 120-155 Zeichen besitzen.
- [ ] Es wird stichprobenartig oder per Skript geprüft, dass keine Platzhaltertexte (Lorem Ipsum) oder identische lange Textblöcke mehr in den generierten HTML-Dateien vorkommen.
- [ ] Es wird geprüft, dass jede Seite exakt eine `<h1>` Überschrift enthält und deren Text im Body-Inhalt wiederverwendet wird.
