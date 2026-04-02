# Developer Handoff — Schlüsseldienst Wetzlar

## Quick Start

```bash
git clone <repo> && cd schluesseldienst-webseite
npm install
cp .env.example .env.local   # NEXT_PUBLIC_GOOGLE_MAPS_API_KEY eintragen
npm run dev                   # → http://localhost:3000
```

## Häufige Aufgaben

### Neue Seite hinzufügen
1. Erstelle `app/neue-seite/page.tsx`
2. Exportiere `metadata` für SEO
3. Importiere Sections aus `components/sections/`
4. Füge Route in `lib/content-graph.ts` hinzu (falls verlinkt)
5. `npm run validate` → 0 Errors

### Neuen Service (Leistung) hinzufügen
1. Erstelle `app/leistungen/neuer-service/page.tsx`
2. Folge dem Muster der bestehenden Leistungsseiten
3. Füge `PersonalizedCTA` vor `FinalCTA` ein
4. Aktualisiere `CONTENT_GRAPH` in `lib/content-graph.ts`
5. Aktualisiere Sitemap in `app/sitemap.ts`

### Kontaktformular ändern
- Formular: `components/forms/ContactForm.tsx`
- Server Action: `app/actions/contact.ts`
- Validierung: Zod Schemas im Formular
- Backend: Formspree (API Key in `.env.local`)

### Analytics Event hinzufügen
1. Definiere Event in `lib/analytics.ts` → `AnalyticsEvent` Type
2. Verwende `trackEvent('event_name', { ... })` im Component
3. Consent-Check: Analytics Events feuern nur wenn `hasConsent('analytics')` === true

### Monitoring & Debugging
- **Vercel Logs**: Dashboard → Projekt → Logs
- **Health Check**: `curl /api/health | jq .`
- **Dev Dashboard**: `/dev/dashboard` (nur Development)
- **Error Logging**: `errorLogger.capture(error, { page, category })` aus `@/lib/monitoring/error-logger`

## Wo finde ich was?

| Thema | Pfad |
|---|---|
| Seitenrouten | `app/` |
| UI Components | `components/ui/` |
| Sektionen (Hero, CTA etc.) | `components/sections/` |
| Formular-Logik | `components/forms/` + `app/actions/` |
| Growth/Personalisierung | `components/growth/` |
| Custom Hooks | `hooks/` |
| Utility-Funktionen | `lib/` |
| Design Tokens | `app/globals.css` |
| API Routes | `app/api/` |
| Dokumentation | `docs/` |
| CI Pipeline | `.github/workflows/ci.yml` |

## Architektur-Entscheidungen

1. **Server Components als Standard** — `'use client'` nur wenn React Hooks oder Browser APIs benötigt
2. **Dynamic Imports** für alle nicht-kritischen Client Components (Performance)
3. **Kein Dark Mode** — bewusste Entscheidung, nicht Bug
4. **Local-Only Monitoring** — kein Sentry, ErrorLogger + Vercel native Logs
5. **Formspree** als einziges Form-Backend — kein eigenes Backend nötig
6. **4 Visitor-Segmente** via Middleware Cookie — kein externer Personalisierungsdienst

## Deployment

- **Push auf `main`** → automatisches Vercel Deployment
- **PR erstellen** → Preview-Deployment
- **Rollback**: Vercel Dashboard → vorherige Version promoten
- Details: [docs/deployment-guide.md](deployment-guide.md)
