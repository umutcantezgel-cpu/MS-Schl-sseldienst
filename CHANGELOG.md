# Changelog — Schlüsseldienst Wetzlar

Alle Änderungen über die 20-Phasen Enterprise Upgrade Pipeline.

## Phase 23 — Forensic Molecular Codebase Clean
- **Root-Hygiene:** 27+ verwaiste Scripts, Reports und Artefakte entfernt (~460 KB)
- **AI-Context:** 10 `.ai-*`/`.*-state.md` Dateien entfernt (~48 KB), lebt in `.github/copilot-instructions.md`
- **Asset-Ordner:** `Logos/`, `MS-Bilder/`, `Neue Bilder Integrieren/` bereinigt
- **Dependency:** `react-calendly` (ungenutzt) deinstalliert, `@next/bundle-analyzer` nach devDependencies verschoben
- **SSOT-Fix (KRITISCH):** Platzhalter-Telefonnummer `+49-176-12345678` → echte Nummer `06441 80 56 279`
- **SSOT-Fix:** "1530/1520/2530 Minuten" → "15–30/15–20/25–30 Minuten" an 7+ Stellen
- **SSOT-Fix:** PayPal-Erwähnung aus Blog-MDX entfernt
- **SSOT-Fix:** Geo-Koordinaten in layout.tsx, metadata.ts, serviceSchema.ts, jsonld.ts auf dynamischen SSOT-Import umgestellt
- **SSOT-Fix:** Kreditkarte zur `acceptedPayments` in company.ts hinzugefügt (AGB-konform)
- **SSOT-Fix:** Canonical URL in jsonld.ts auf zentrale siteUrl aus schema.ts umgestellt
- **Dead Code:** `getFAQsByCategory()`, `generateOrganizationSchema()`, `getCompanyInfo()`, `lib/data/images.ts`, `lib/data/faq.ts` entfernt
- **Code-Hygiene:** JSX-Tag-Fehler in datenschutz/page.tsx, TypeScript-Fehler in StatsSection.tsx behoben
- **.gitignore:** Erweitert um 15+ Artefakt-Muster gegen zukünftige Verschmutzung
- **Build:** 0 Errors (lint + typecheck + build), 7/7 SSOT-Integritätsprüfungen bestanden

## Phase 22 — Business Data Integrity & NAP-Konsistenz
- Single Source of Truth (SSOT): Hardcoded Geschäftsdaten durch zentrales `lib/data/company.ts` ersetzt
- Duplicate Content Entfernung: `schluessel-schmiede/page.tsx` komplett umgeschrieben für SEO-Eindeutigkeit
- Standortseiten: 155+ `locations*.ts` Skripte an SSOT-Preise dynamisch angebunden
- Pervasive String Replacement: Veraltete "Fachgeschäft" / "50€" Referenzen terminiert
- Logo-Assets: Globale Standardisierung auf `logo-neu.svg` in Header, Footer, Favicon
- LLM-Routen: `llms.txt` und `llms-full.txt` an `companyInfo`-SSOT verlinkt
- Mobile-Layout Fix: Footer `pb-[100px]` gegen `MobileBottomBar`-Überlappung
- Calendly & Facebook Integration: Konsistente Einbindung von SSOT Links


## Phase 20 — Code-Qualität, Dokumentation & Finale Konsolidierung
- TypeScript: `noImplicitReturns` aktiviert, `@ts-ignore` eliminiert
- README.md: Komplett-Overhaul (Tech Stack, Scripts, 20-Phasen-Übersicht)
- Neue Docs: ARCHITECTURE.md, CHANGELOG.md, HANDOFF.md, MAINTENANCE.md
- Context-Finalisierung: Alle 20 Phasen als ✅ markiert

## Phase 19 — Monitoring & Observability (Local-Only)
- ErrorLogger Singleton (PII-Filter, Fingerprinting, 30s Batching, sendBeacon)
- `/api/monitoring/errors` (POST: Rate-Limit + Dedup, GET: dev-only)
- ErrorHandlers (global `window.error` + `unhandledrejection`)
- WebVitals Budget-Alerts (LCP/CLS/INP/FCP/TTFB)
- `/api/health` erweitert (Dependencies, Status-Levels, Commit SHA)
- Dev-Dashboard (`/dev/dashboard` — 3 Tabs, 60s Refresh)
- Docs: INCIDENT-RESPONSE.md, MONITORING-GUIDE.md

## Phase 18 — Growth, Personalisierung & Conversion-Optimierung
- Visitor-Segment-Engine (4 Segmente via Middleware Cookie)
- PersonalizedHero, PersonalizedCTA (segment-aware Components)
- ReturnVisitorBanner, DynamicCounter, PriceEstimator
- MobileBottomBar Enhancement (dismissal, /kontakt-Ausschluss)
- 27 typisierte Analytics Events, Conversion-Benchmarks

## Phase 17 — DevOps, CI/CD & Deployment-Infrastruktur
- Environment-Strategie (lib/env.ts, .env.example)
- GitHub Actions CI (lint → typecheck → build → smoke-test)
- Vercel Deployment-Konfiguration, Health-Check, Smoke-Tests
- Feature-Flag System, Rollback-Strategie

## Phase 16 — Enterprise Security & DSGVO-Compliance
- Cookie-Consent-System (CookieConsent + useConsent)
- Datenschutzerklärung + Impressum (DSGVO-konform)
- CSP, Security-Headers (HSTS, X-Frame-Options, Permissions-Policy)
- Input-Sanitisierung, XSS-Prävention, CSRF-Schutz

## Phase 15 — Formspree & Calendly Premium-Integration
- ContactForm: useActionState, Zod-Validation, Honeypot, Rate-Limiting
- Server Action mit SMTP-Vorbereitung
- Calendly: ADR #9 (nicht anwendbar)

## Phase 14 — Testing Pyramid & Quality Infrastructure
- Testing-Strategie dokumentiert
- Quality Gates definiert

## Phase 13 — Analytics & Datengetriebene Optimierung
- GA4 Integration (consent-gated via DSGVO)
- Vercel Speed Insights, ScrollDepthTracker
- 19 typisierte Events (page_view, cta_click etc.)

## Phase 12 — Design System & Storybook (Dokumentation)
- Design-Token-System in globals.css (41KB)
- Komponentenkatalog dokumentiert

## Phase 11 — Advanced SEO Dominanz
- robots.ts (AI-Crawler-freundlich), sitemap.ts (ContentGraph)
- llms.txt, llms-full.txt, sitemap-ai.xml
- Meta-Daten aller Seiten optimiert

## Phase 10 — Content-Architektur & Kognitive Optimierung
- Content-Guidelines, Leistungsseiten-Struktur
- FAQ mit Schema.org, Breadcrumbs

## Phase 9 — Unzerstörbare Resilienz
- Error Boundaries (error.tsx, global-error.tsx, not-found.tsx)
- Loading States, Offline-Banner, Network-Status Hook

## Phase 8 — Totale Inklusion & Barrierefreiheit
- WCAG 2.1 AA Compliance
- Skip-Links, Focus Management, RouteAnnouncer
- Keyboard Navigation, Screen Reader Optimierung

## Phase 7 — Adaptives UI & Progressive Enhancement
- Responsive Design (375px–1920px+)
- Touch-friendly Interaktionen, BottomSheet
- Progressive Enhancement für JS-disabled

## Phase 6 — Extreme Performance-Optimierung
- Image-Optimierung (next/image, WebP/AVIF)
- Font-Optimierung (next/font, display: swap)
- Code-Splitting, Dynamic Imports

## Phase 5 — Conversion-Architektur & Vertrauenspsychologie
- Sticky CTA, Exit-Intent-Banner
- Trust-Signale, Social Proof
- Telefon-CTAs prominenter

## Phase 4 — Kinetische Lebendigkeit
- Framer Motion Animationen
- Scroll-Triggered Reveals, Micro-Interactions
- prefers-reduced-motion Respektierung

## Phase 3 — Typografische Alchemie
- Plus Jakarta Sans + DM Sans (next/font)
- Typografie-System mit Design Tokens

## Phase 2 — UI/UX-Raumarchitektur & Design-Token-System
- 8px Grid System, Spacing Scale
- Color Tokens (Premium Red, Charcoal, White)
- Glassmorphism, Elevation System

## Phase 1 — Semantisches HTML, SEO & Komponentenstruktur
- Semantische HTML5-Struktur
- Komponentenarchitektur (Server/Client Split)
- Basis-SEO (Title, Meta, Open Graph)
