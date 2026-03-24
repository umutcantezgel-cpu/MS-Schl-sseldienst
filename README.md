# MS Schlüsseldienst Wetzlar

Professionelle Website für einen lokalen Schlüsseldienst in Wetzlar und Umgebung. Ergebnis einer 20-Phasen Enterprise-Grade Upgrade-Pipeline — gebaut mit Next.js 15, optimiert für lokale SEO, Performance, Barrierefreiheit und hohe Conversion-Raten.

## Tech Stack

| Technologie | Version | Zweck |
|---|---|---|
| **Next.js** | 15.4.9 | App Router, RSC, SSG |
| **React** | 19+ | UI-Framework |
| **TypeScript** | Strict Mode | Typsicherheit |
| **Tailwind CSS** | 4.1.11 | Styling + Design Tokens |
| **Framer Motion** | 11.18.2 | Animationen |
| **Formspree** | — | Kontaktformular-Backend |
| **Vercel** | — | Deployment & Hosting |

> **Nicht im Stack:** Kein Headless CMS, keine externen AI APIs, kein Sentry/externes Error-Tracking, kein Newsletter-System, kein i18n, kein Dark Mode.

## Projektstruktur

```
app/                    → Routen (Layout, Pages, API Routes, Server Actions)
components/
├── analytics/          → WebVitalsReporter, ScrollDepthTracker
├── forms/              → ContactForm (Zod, Honeypot, Rate-Limiting)
├── growth/             → PersonalizedHero, PriceEstimator, DynamicCounter
├── layout/             → StickyHeader, Footer, Navigation, Breadcrumbs
├── monitoring/         → ErrorHandlers (global error capture)
├── sections/           → FinalCTA, TrustStrip, ServiceCards, About
├── ui/                 → Button, Card, Badge, CookieConsent, JsonLd
└── mobile/             → MobileBottomBar, BottomSheet
hooks/                  → useVisitorSegment, useConsent, useNetworkStatus
lib/                    → Analytics, Sanitize, Monitoring, Formatters
lib/monitoring/         → ErrorLogger, Anomaly Detection
docs/                   → Architecture, Security, Deployment, Monitoring
```

## Erste Schritte

### Voraussetzungen
- Node.js 18+
- npm 10+

### Installation

```bash
git clone <repository-url> && cd schluesseldienst-webseite
npm install
cp .env.example .env.local
# .env.local ausfüllen (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

## Verfügbare Scripts

| Script | Beschreibung |
|---|---|
| `npm run dev` | Development Server (Turbopack) |
| `npm run build` | Production Build |
| `npm run start` | Production Server lokal |
| `npm run lint` | ESLint Check |
| `npm run typecheck` | TypeScript Strict Check |
| `npm run validate` | Lint + Typecheck + Build |
| `npm run test:smoke` | Smoke Tests (7 Endpoints) |
| `npm run build:analyze` | Bundle-Analyse mit @next/bundle-analyzer |

## Deployment

- **Automatisch**: Vercel deployt bei Push auf `main`
- **Preview**: Vercel erstellt Preview-Deployments bei PRs
- **Rollback**: Vercel Dashboard → Deployments → vorherige Version promoten
- **CI**: GitHub Actions Pipeline (lint → typecheck → build → smoke-test)

Siehe [docs/deployment-guide.md](docs/deployment-guide.md) für Details.

## 20-Phasen-Pipeline

Diese Website durchlief eine vollständige 20-Phasen Enterprise Upgrade Pipeline:

| Phase | Fokus |
|---|---|
| 1-3 | Semantik, SEO, Typography |
| 4-5 | Animation, Conversion-Architektur |
| 6-7 | Performance, Progressive Enhancement |
| 8-9 | Barrierefreiheit, Resilienz |
| 10-11 | Content-Architektur, Advanced SEO |
| 12-13 | Design System, Analytics |
| 14-15 | Testing-Dokumentation, Formspree-Integration |
| 16-17 | Security & DSGVO, DevOps & CI/CD |
| 18-19 | Growth & Personalisierung, Monitoring |
| 20 | Code-Qualität, Dokumentation, Finale Konsolidierung |

Siehe [CHANGELOG.md](CHANGELOG.md) für Details pro Phase.

## Dokumentation

| Dokument | Inhalt |
|---|---|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Komponentenhierarchie, Datenfluss, Rendering |
| [SECURITY-CHECKLIST.md](docs/SECURITY-CHECKLIST.md) | CSP, DSGVO, Input-Validation |
| [MONITORING-GUIDE.md](docs/MONITORING-GUIDE.md) | Error-Logging, Web Vitals, Health Checks |
| [INCIDENT-RESPONSE.md](docs/INCIDENT-RESPONSE.md) | P1-P4 Severity, Rollback, Post-Mortem |
| [deployment-guide.md](docs/deployment-guide.md) | Vercel, Environment, CI/CD |
| [MAINTENANCE.md](docs/MAINTENANCE.md) | Wartungsplan (wöchentlich bis jährlich) |
| [HANDOFF.md](docs/HANDOFF.md) | Onboarding für neue Entwickler |
