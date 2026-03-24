# Architektur — Schlüsseldienst Wetzlar

## Rendering-Strategie

| Route | Strategie | Grund |
|---|---|---|
| `/` (Homepage) | SSG | Statischer Content, hohe Performance |
| `/leistungen/*` | SSG | 5 statische Service-Seiten |
| `/preise` | SSG | Statische Preistabelle |
| `/kontakt` | SSG + Client | Server-rendered Page, Client-Side Form |
| `/[stadtgebiet]` | ISR | 20+ dynamische Stadtgebiet-Seiten |
| `/api/health` | Dynamic | Server-Side Health Check |
| `/api/monitoring/*` | Dynamic | Error-Logging API |
| `/dev/dashboard` | Dynamic | Dev-Only Monitoring Dashboard |

## Komponentenhierarchie

```
layout.tsx (Server)
├── StickyHeader (Client — dynamic)
├── CookieConsent (Client — dynamic)
├── ErrorHandlers (Client — dynamic, global error capture)
├── WebVitalsReporter (Client — dynamic, CWV → GA4)
├── ReturnVisitorBanner (Client — dynamic)
├── MobileBottomBar (Client — dynamic)
├── ExitIntentBanner (Client — dynamic)
└── page.tsx (Server)
    ├── HeroSection (Client — Framer Motion)
    ├── PersonalizedHero (Client — segment-aware)
    ├── TrustStrip (Server)
    ├── ServiceCards (Server)
    ├── DynamicCounter (Client — IO-animated)
    ├── PriceEstimator (Client — 3-step flow)
    ├── PersonalizedCTA (Client — segment-aware)
    └── FinalCTA (Server)
```

## Datenfluss

```
Middleware (Visitor-Segment-Detection via Cookie)
    ↓
useVisitorSegment() Hook (Client — reads cookie)
    ↓
PersonalizedHero / PersonalizedCTA (renders segment-specific content)
    ↓
lib/personalization.ts (Content Map: 4 Segmente × 5 Felder)
```

## API-Routes

| Route | Methode | Zweck | Schutz |
|---|---|---|---|
| `/api/contact` | POST | Formspree Proxy | Rate-Limit, CSRF, Honeypot |
| `/api/health` | GET | System Health | Public |
| `/api/csp-report` | POST | CSP Violation Logs | Public |
| `/api/monitoring/errors` | POST/GET | Error Reports | Rate-Limit, GET: dev-only |
| `/api/og` | GET | OG Image Generation | Public |

## Key Design Decisions

1. **Kein Dark Mode** — Schlüsseldienst-Kunden brauchen schnelle Info, kein Theme-Toggle
2. **Kein i18n** — Rein deutschsprachige Kundschaft in Wetzlar/Mittelhessen
3. **Kein Sentry** — Local-only Monitoring via ErrorLogger + Vercel native Logs
4. **RSC Default** — Server Components für maximale Performance, `'use client'` nur wo nötig
5. **Dynamic Imports** — Alle nicht-kritischen Client Components lazy-loaded
6. **Segment-Personalisierung** — 4 Visitor-Segmente via Middleware Cookie (kein externer Service)
