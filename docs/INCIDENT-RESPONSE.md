# Incident Response — Schlüsseldienst Wetzlar

## Severity Levels

| Level | Beschreibung | Response Zeit | Beispiel |
|---|---|---|---|
| **P1** | Site komplett down | < 5 Minuten | Server 500, DNS-Fehler, Build broken |
| **P2** | Kritische Funktion kaputt | < 1 Stunde | Kontaktformular, Telefonnummer nicht klickbar |
| **P3** | Nebenfunktion beeinträchtigt | < 24 Stunden | Langsame Seite, Animation defekt |
| **P4** | Kosmetisch | Nächster Sprint | Typo, kleines UI-Problem |

## Debugging-Workflow

1. **Vercel Dashboard** → Deployments → Function Logs (Production-Errors)
2. **`/api/health`** → Systemstatus + Dependencies prüfen
3. **Browser-Konsole** → Client-seitige Errors (ErrorLogger)
4. **Google Search Console** → Crawl- und Indexierungsfehler

## Rollback-Prozess

1. Vercel Dashboard → Deployments öffnen
2. Letzte funktionierende Deployment finden
3. „..." Menü → „Promote to Production"
4. Bestätigen → Sofortiger Rollback (< 30 Sekunden)

## Eskalation

| Schritt | Aktion |
|---|---|
| 1 | Fehler in Vercel Logs identifizieren |
| 2 | Rollback wenn P1/P2 |
| 3 | Fix entwickeln + PR erstellen |
| 4 | CI Pipeline durchlaufen lassen |
| 5 | Nach Deploy: Smoke-Test (`npm run test:smoke`) |

## Post-Mortem Template

```markdown
# Post-Mortem: [Titel]

**Datum:** YYYY-MM-DD
**Severity:** P1/P2/P3/P4
**Dauer:** X Minuten/Stunden

## Was ist passiert?
[Beschreibung]

## Timeline
- HH:MM — Fehler entdeckt
- HH:MM — Rollback durchgeführt
- HH:MM — Fix deployed

## Root Cause
[Ursache]

## Fix
[Lösung]

## Prävention
- [ ] Maßnahme 1
- [ ] Maßnahme 2
```
