# Externe Services — MS Schlüsseldienst Wetzlar

> Phase 17: Infrastructure-as-Code Dokumentation

## Übersicht

| Service | Verwendung | Konfiguration |
|---|---|---|
| Formspree | Kontaktformular-Backend | Server Action + API Route |
| Google Maps API | Servicegebiet-Karte | `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` |
| Google Analytics 4 | Conversion-Tracking | Consent-gated via Cookie-Banner |
| Google Fonts | Plus Jakarta Sans, DM Sans | self-hosted via `next/font` |
| Vercel | Hosting & Deployment | vercel.json, GitHub Integration |

---

## Formspree

- **Funktion**: Empfängt Kontaktformular-Daten per POST
- **Integration**: `app/actions/contact.ts` (Server Action) + `app/api/contact/route.ts` (API Route)
- **Felder**: name, email, phone (optional), message
- **Spam-Schutz**: Honeypot-Feld (`website`), Rate-Limiting (5/Stunde)
- **Dashboard**: https://formspree.io/

## Google Maps API

- **Funktion**: Interaktive Karte auf `/servicegebiet`
- **Env-Variable**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Konfiguration**: `@googlemaps/js-api-loader` Package
- **API Console**: https://console.cloud.google.com/apis/credentials
- **CSP**: `connect-src` + `frame-src` für `maps.googleapis.com` + `maps.google.com`

## Google Analytics 4

- **Funktion**: Conversion-Tracking (CTAs, Form-Funnel, Scroll-Depth)
- **Integration**: `lib/analytics.ts` (Provider-agnostisch, 19 Event-Typen)
- **Consent**: Nur bei Einwilligung via Cookie-Banner (`hasConsent('analytics')`)
- **Default**: Tracking deaktiviert bis Nutzer zustimmt (DSGVO-konform)

## Google Fonts

- **Fonts**: Plus Jakarta Sans (display) + DM Sans (body)
- **Loading**: Self-hosted via `next/font/google` (kein externer CDN-Request)
- **Subsets**: `latin` + `latin-ext` (für deutsche Umlaute)
- **Display**: `swap` (FOUT statt FOIT)

## Vercel

- **Funktion**: Hosting, CDN, Serverless Functions, Preview Deployments
- **Region**: `fra1` (Frankfurt, Deutschland — minimale Latenz für deutsche Nutzer)
- **Konfiguration**: `vercel.json` (Build, Cache-Headers, Env-Dokumentation)
- **GitHub Integration**: Auto-Deploy bei Push zu `main`, Preview bei PR
- **Security Headers**: Verwaltet in `next.config.ts` (nicht in vercel.json dupliziert)

---

## Reproducibility-Checklist

Für neue Team-Mitglieder:

```bash
# 1. Repository klonen
git clone [repository-url]
cd schlüsseldienst-webseite

# 2. Dependencies installieren
npm install

# 3. Environment-Variablen setzen
cp .env.example .env.local
# Werte in .env.local eintragen

# 4. Development-Server starten
npm run dev
# → http://localhost:3000

# 5. Validierung
npm run validate   # lint + typecheck + build
```

---

## Credentials-Speicherung

| Variable | Wo gespeichert | Scope |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Vercel Dashboard | Production + Preview |
| `NEXT_PUBLIC_BASE_URL` | Vercel Dashboard | Production |
| `NEXT_PUBLIC_APP_VERSION` | GitHub Actions (auto) | Build-Time |

> ⚠️ **Regel**: Keine Credentials im Repository. Alle Secrets ausschließlich im Vercel Dashboard unter Environment Variables.
