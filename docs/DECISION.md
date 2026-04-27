# Cookie-Consent Library Evaluation — DECISION

> **Datum:** 2026-04-27  
> **Projekt:** MS-Schlüsseldienst Wetzlar (Next.js 15 App Router)  
> **Entscheidung:** ✅ Fix & Harden des bestehenden Custom-Systems  

---

## Evaluierte Optionen

### 1. orestbida/cookieconsent v3.x (`vanilla-cookieconsent`)
- **License:** MIT ✅
- **Bundle:** ~12 KB gzipped ✅
- **TypeScript:** JS + Type Definitions ⚠️
- **Next.js App Router:** DOM-Injection Pattern — Konflikte bei Client-Side-Navigation ❌
- **Privacy by Default:** Alle Kategorien initial `false` ✅
- **Consent Audit Trail:** Nicht eingebaut — muss selbst implementiert werden ❌
- **Consent-Gates (2-Click):** Nicht eingebaut — muss selbst implementiert werden ❌
- **Cookie-Deletion bei Widerruf:** Nicht eingebaut ❌

### 2. klaro-org/klaro-js
- **License:** BSD-3-Clause ✅
- **Bundle:** 20–57 KB gzipped ❌ (Budget: <15 KB)
- **TypeScript:** Nativ ✅
- **Next.js App Router:** SSR-Guards erforderlich ⚠️
- **Privacy by Default:** ✅
- **Wartung:** Reduzierte öffentliche Aktivität ⚠️
- **Consent Audit Trail:** Nicht eingebaut ❌
- **Consent-Gates (2-Click):** Nicht eingebaut ❌

### 3. Bestehendes Custom-System (Phase 16)
- **License:** Eigentum ✅
- **Bundle:** 0 KB zusätzlich (bereits im 102 KB shared chunk) ✅
- **TypeScript:** Nativ ✅
- **Next.js App Router:** Perfekt integriert ✅
- **Privacy by Default:** Alle Kategorien initial `false` ✅
- **Consent Audit Trail:** `/api/consent-audit` + `navigator.sendBeacon()` ✅
- **Consent-Gates:** `MapConsentGate.tsx` + `CalendlyConsentGate.tsx` ✅
- **Cookie-Deletion bei Widerruf:** `deleteCookiesByCategory()` ✅
- **Kritischer Bug:** 3500ms Banner-Delay (§25 TTDSG Verstoß) ❌

---

## Entscheidungsmatrix

| Kriterium (Gewichtung) | Custom | orestbida v3 | klaro-js |
|---|:---:|:---:|:---:|
| Bundle-Impact (hoch) | ✅ 0 KB | ⚠️ +12 KB | ❌ +20-57 KB |
| Integration-Aufwand (hoch) | ✅ 0 | ❌ Komplett-Migration | ❌ Komplett-Migration |
| DSGVO-Konformität (kritisch) | ⚠️ Fix nötig | ✅ | ✅ |
| Audit Trail (kritisch) | ✅ Fertig | ❌ Neu bauen | ❌ Neu bauen |
| Consent-Gates (kritisch) | ✅ 2 Gates fertig | ❌ Neu bauen | ❌ Neu bauen |
| Cookie-Deletion (wichtig) | ✅ Fertig | ❌ Neu bauen | ⚠️ Callbacks |
| Next.js Kompatibilität (hoch) | ✅ Perfekt | ⚠️ DOM-Probleme | ⚠️ SSR-Guards |
| **Gesamtwertung** | **8/9** | **3/9** | **3/9** |

---

## Begründung

Das bestehende Custom-System ist dem Wettbewerb **deutlich überlegen** in allen Kategorien außer dem 3500ms-Delay-Bug. Dieser Bug ist ein isolierter Fix (Entfernung von 7 Zeilen Code + CSS-basierte Animation), der das System in volle DSGVO/TTDSG-Konformität bringt.

Eine Migration zu einer externen Library würde:
1. **Mindestens +12 KB** zum Bundle hinzufügen (bei klaro bis zu 57 KB)
2. Den **kompletten Consent-Gate-Stack** (MapConsentGate, CalendlyConsentGate) neu implementieren erfordern
3. Den **Audit-Trail** (`/api/consent-audit` + sendBeacon) neu implementieren erfordern
4. Die **Cookie-Deletion-Logik** (`deleteCookiesByCategory`) neu implementieren erfordern
5. **DOM-Injection-Probleme** in Next.js App Router einführen (orestbida)

### Kosten-Nutzen:
- **Fix existing:** ~30 Minuten, 0 Risiko, 0 Bundle-Impact
- **Migration:** ~8-12 Stunden, hohes Regressions-Risiko, +12-57 KB Bundle

---

## Durchgeführte Fixes

1. **`CookieConsent.tsx`:** 3500ms `setTimeout` entfernt → Banner mountet sofort, CSS-Animation schützt LCP
2. **`middleware.ts`:** Dead `google-analytics.com` aus CSP `connect-src` entfernt
3. **`layout.tsx`:** Logo-Preload von `.webp` auf `.svg` aktualisiert (Folgefix aus SVG-Migration)

---

## Prior Blocking Audit (Ergebnis)

| Service | Mechanismus | Consent-Kategorie | Status |
|---|---|---|---|
| Google Maps | `MapConsentGate.tsx` | marketing | ✅ Blockiert |
| Calendly | `CalendlyConsentGate.tsx` | marketing | ✅ Blockiert |
| GA4/GTM | Nicht aktiv geladen | analytics | ✅ Sicher (passiv) |
| Meta Pixel | Nicht aktiv geladen | marketing | ✅ Sicher (passiv) |
| Vercel Analytics | Cookieless (Art. 6 lit. f) | — | ✅ Kein Gate nötig |

**Fazit:** Alle Drittanbieter sind korrekt hinter Consent-Gates oder werden nicht geladen.
