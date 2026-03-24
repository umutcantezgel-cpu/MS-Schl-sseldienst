# Wartungsplan — Schlüsseldienst Wetzlar

## Wöchentlich

- [ ] `npm audit` ausführen → Sicherheitsberichte prüfen
- [ ] Vercel Logs auf Fehler prüfen (Function Logs → `type: "error_report"`)
- [ ] `/api/health` prüfen → Status `ok` bestätigen
- [ ] Google Search Console → Crawl-Fehler, Indexierung prüfen

## Monatlich

- [ ] Analytics Review (GA4): Traffic, Conversion-Raten, Bounce
- [ ] `npm update` → Minor/Patch Updates (danach `npm run validate`)
- [ ] Web Vitals Check: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Formspree Dashboard: Spam-Rate, Zustellrate prüfen
- [ ] Content-Aktualität: Preise, Telefonnummern, Öffnungszeiten

## Quartalsweise

- [ ] Major Dependency Updates (manuell, Staging zuerst)
- [ ] Lighthouse Audit auf allen Key-Routes (Performance ≥ 90)
- [ ] DSGVO-Review: Cookie-Inventar, Datenschutzerklärung aktuell?
- [ ] Security-Headers Re-Audit: CSP, HSTS, X-Frame-Options
- [ ] Bundle-Analyse: `npm run build:analyze` → keine neuen Bloat-Dependencies

## Jährlich

- [ ] Full Security Audit (Dependencies, Code, Infrastruktur)
- [ ] Barrierefreiheits-Audit (WCAG 2.1 AA)
- [ ] Performance-Benchmark Vergleich (Year-over-Year)
- [ ] Architektur-Review: Modernisierungs-Möglichkeiten
- [ ] SSL/Domain-Renewal prüfen

## Dependency-Update-Strategie

### Automatisch (Dependabot/Renovate empfohlen)
- Security Updates: Auto-Merge wenn Tests grün
- Patch Updates: Auto-Merge wenn Tests grün

### Manuell (kritische Prüfung)
- Minor Updates: Feature Branch → `npm run validate` → Staging → Merge
- Major Updates: Breaking Changes prüfen → Feature Branch → Full Test → Staging → Merge

### Vor jedem Merge prüfen
1. `npm run validate` (lint + typecheck + build) = 0 Errors
2. `npm run test:smoke` = alle Endpoints OK
3. Lighthouse Score nicht gesunken
4. Manueller Smoke-Test auf Staging
