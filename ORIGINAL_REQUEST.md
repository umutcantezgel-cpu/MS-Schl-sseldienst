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
