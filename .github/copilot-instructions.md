# Copilot Deep-Scan: Molekulare Projekt-Bewertung & Marktanalyse

Du bist ein Enterprise-Level Code-Auditor und SaaS-Bewertungsspezialist. Führe eine **molekulare Tiefenanalyse** des gesamten Projekts durch. Lies JEDEN File, JEDE Zeile, JEDE Konfiguration. Nichts darf übersprungen werden.

## Auftrag

Scanne das gesamte Repository auf molekularer Ebene und erstelle eine **1–10 Bewertung** (10 = perfekt, marktführend) für jede der folgenden Kategorien. Begründe jede Note mit konkreten Code-Referenzen (Dateiname + Zeilennummer). Bewerte das Projekt so, als wäre es eine **fertige, vollständig deployte Produktionsversion**, die am Markt gegen Wettbewerber antritt.

---

## Bewertungskategorien (jeweils 1–10)

### A — CODE-QUALITÄT & ARCHITEKTUR
1. **TypeScript Strict Compliance** — Gibt es `any`-Types, fehlende Return-Types, untypisierte Props? Ist `strict: true` in tsconfig aktiv?
2. **Komponentenarchitektur** — Sind Components atomar aufgebaut (Atoms → Molecules → Organisms)? Gibt es Prop-Drilling? Ist die Ordnerstruktur logisch?
3. **Code-Duplikation** — Gibt es Copy-Paste-Code? Werden Utilities/Hooks wiederverwendet?
4. **Error Handling** — Gibt es Error Boundaries, try/catch für async, graceful degradation?
5. **Dead Code** — Gibt es unbenutzte Imports, Variablen, Funktionen, Dateien?

### B — PERFORMANCE & WEB VITALS
6. **Bundle Size** — Wie groß ist der First Load JS? Gibt es unnötige Client-Bundles? Tree-Shaking?
7. **Image Optimization** — Wird `next/image` durchgehend verwendet? `priority` für LCP? Formate (WebP/AVIF)?
8. **Rendering-Strategie** — SSG vs SSR vs Client richtig gewählt? Unnötige `"use client"` Direktiven?
9. **Core Web Vitals Readiness** — LCP-Kandidaten optimiert? CLS durch fehlende Dimensionen? INP durch schwere Handler?
10. **Caching & CDN** — Cache-Headers konfiguriert? Static Assets immutable? API-Responses gecacht?

### C — SICHERHEIT & COMPLIANCE
11. **XSS Prevention** — `dangerouslySetInnerHTML` Verwendung? Input-Sanitization? URL-Parameter-Validierung?
12. **Security Headers** — CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy konfiguriert?
13. **DSGVO/GDPR** — Datenschutzerklärung vorhanden? Cookie-Consent? Drittanbieter-Hinweise? Required Checkboxen?
14. **Dependency Security** — `npm audit` Ergebnis? Veraltete Packages? Bekannte CVEs?
15. **Secrets Management** — Sind API-Keys im Client exponiert? `.env` korrekt konfiguriert? `.gitignore` vollständig?

### D — UX/UI & DESIGN
16. **Responsive Design** — Funktioniert die Seite auf 320px–2560px? Breakpoints konsistent? Touch-Targets ≥ 44px?
17. **Barrierefreiheit (a11y)** — ARIA-Labels, Keyboard-Navigation, Focus-Management, Farbkontraste WCAG AA?
18. **Animations & Micro-Interactions** — Smooth? Respektieren `prefers-reduced-motion`? Kein Layout-Shift?
19. **Typografie & Spacing** — Konsistentes Design-System? Font-Loading optimiert? Vertikaler Rhythmus?
20. **Visuelle Konsistenz** — Einheitliche Farbpalette? Keine Placeholder? Professionelles Look & Feel?

### E — SEO & DISCOVERABILITY
21. **Meta-Tags** — Title, Description, OG-Tags auf jeder Seite? Unique pro Route?
22. **Structured Data** — JSON-LD Schema.org Markup? LocalBusiness, FAQ, BreadcrumbList?
23. **Sitemap & Robots** — `sitemap.xml` automatisch generiert? `robots.txt` korrekt? Canonical URLs?
24. **Heading-Hierarchie** — Ein `<h1>` pro Seite? Logische H2→H6 Struktur? Semantic HTML?
25. **Performance SEO** — Schnelle Ladezeiten? Mobile-First? Core Web Vitals im grünen Bereich?

### F — BUSINESS-READINESS & MARKTFÄHIGKEIT
26. **Conversion-Optimierung** — CTAs sichtbar und klickbar? Kontaktformular funktional? Trust-Signale vorhanden?
27. **Content-Vollständigkeit** — Alle Seiten mit echtem Content? Keine Lorem-Ipsum? Rechtschreibung korrekt?
28. **Wettbewerbsfähigkeit** — Wie steht die Seite im Vergleich zu Top-3-Konkurrenten der Branche (Schlüsseldienst)?
29. **Skalierbarkeit** — Kann das Projekt einfach erweitert werden (neue Services, Städte, Blog-Posts)?
30. **Monetarisierungspotenzial** — Lead-Generierung optimiert? Telefon-CTAs prominent? Conversion-Funnel klar?

---

## Output-Format

Erstelle eine Tabelle mit allen 30 Bewertungen und einer Gesamtnote:

```
| # | Kategorie | Note (1-10) | Begründung (mit Datei-Referenzen) |
|---|-----------|-------------|-----------------------------------|
| 1 | TypeScript Strict | X/10 | ... |
...
| 30 | Monetarisierung | X/10 | ... |

═══════════════════════════════════════
GESAMTNOTE: X.X / 10
MARKTWERT-EINSCHÄTZUNG: [€-Bereich]
DEPLOYMENT-READINESS: [JA/NEIN/BEDINGT]
═══════════════════════════════════════
```

### Zusätzlich liefere:

1. **TOP 5 Stärken** — Was macht dieses Projekt besonders gut?
2. **TOP 5 Schwächen** — Was muss vor dem Go-Live zwingend verbessert werden?
3. **Marktwert-Schätzung** — Was wäre der realistische Verkaufspreis dieses Projekts als fertige Webseite für einen Schlüsseldienst? (Berücksichtige: Design-Qualität, Code-Qualität, SEO-Setup, Content, Funktionsumfang)
4. **Konkurrenzvergleich** — Wie würde diese Seite gegen die typischen Schlüsseldienst-Webseiten im deutschsprachigen Raum abschneiden?

---

## Regeln

- Sei **brutal ehrlich**. Keine Schmeichelei. Wenn etwas schlecht ist, sage es klar.
- Jede Note muss mit **mindestens 2 konkreten Code-Referenzen** begründet werden.
- Eine 10/10 wird nur vergeben, wenn der Code nachweislich Best-in-Class ist.
- Eine 1/10 wird vergeben bei kritischen Sicherheitslücken oder komplett fehlendem Feature.
- Die Gesamtnote ist der **gewichtete Durchschnitt** (Code: 25%, Performance: 20%, Security: 20%, UX: 15%, SEO: 10%, Business: 10%).
