# MS Schlüsseldienst Wetzlar — Next.js 15 Website

> **Production Domain:** [www.wetzlar-schlüsseldienst.de](https://www.wetzlar-schlüsseldienst.de)  
> **Punycode:** `www.xn--wetzlar-schlsseldienst-3lc.de`  
> **Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion

---

## 🚀 Quick Start

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:3000)
npm run dev

# Produktions-Build erstellen
npm run build

# Produktions-Build lokal testen
npm start
```

---

## 📂 Projektstruktur

```
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root Layout, Metadata API, Icons
│   ├── page.tsx                  # Homepage (580+ Wörter SEO Content)
│   ├── (marketing)/              # Marketing-Seiten (Leistungen, Kontakt, etc.)
│   ├── (legal)/                  # Rechtliche Seiten (Impressum, Datenschutz, AGB)
│   ├── llms.txt/                 # LLM-Kurzindex (AI Crawler Support)
│   └── llms-full.txt/            # LLM-Vollindex
├── components/
│   ├── StickyHeader.tsx          # Hauptnavigation mit Mega-Menü
│   ├── Footer.tsx                # Footer mit Synonym-Anchors & Trust-Links
│   ├── HeroSection.tsx           # H1-optimierter Hero
│   └── seo/                      # SEO-Komponenten (JsonLd, SeoOptimizedImage)
├── lib/
│   ├── schema.ts                 # Schema.org (siteUrl = Single Source of Truth)
│   ├── metadata.ts               # Shared Metadata Generator
│   ├── seo/jsonld.ts             # Organization/Website Schema
│   └── data/                     # Company, Navigation, Locations Daten
├── next.config.ts                # Server-Config (Redirects, Headers, WWW-Enforcer)
└── public/                       # Statische Assets (Icons, Fonts, Images)
```

---

## 🔧 SEO-Architektur

### Domain & Punycode
- **Canonical:** `https://www.xn--wetzlar-schlsseldienst-3lc.de`
- **Punycode verifiziert via:** `python3 -c "import encodings.idna; print(encodings.idna.ToASCII('wetzlar-schlüsseldienst').decode())"`
- **Single Source of Truth:** `lib/schema.ts` → `siteUrl`

### Server-Konfiguration (`next.config.ts`)
- **WWW-Enforcer:** 301 Redirect non-www → www (Punycode-basiert)
- **Squarespace Migration:** 14 Legacy-Redirects (7 Pfade × mit/ohne Trailing-Slash)
- **Security Headers:** HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **X-Powered-By:** Deaktiviert

### Schema.org
- **Typ:** `["LocalBusiness", "Locksmith"]` (Dual-Type für Knowledge Graph)
- **24/7 Öffnungszeiten:** Monday–Sunday + PublicHolidays
- **GPS:** 50.5606 / 8.5048
- **Telefon:** +4964418056279

### Link-Struktur
- **Header ↔ Footer:** Synonym-Strategie (keine duplicate Anchor Texts)
- **Logo:** `<span className="sr-only">` für Crawler-Sichtbarkeit
- **Externe Links:** 7 dofollow Trust-Links (K-EINBRUCH, ABUS, HWK, etc.)

---

## 📊 Build-Status

| Metrik | Wert |
|---|---|
| Statische Seiten | 194 SSG Pages |
| TypeScript Errors | 0 |
| ESLint Errors | 0 |
| Build Exit Code | 0 |

---

## 📝 Kontakt

- **Telefon:** 06441 8056279
- **E-Mail:** info@wetzlar-schlüsseldienst.de
- **Adresse:** Langgasse 70, 35578 Wetzlar

---

## 📄 Lizenz

Proprietär — © 2026 MS Schlüsseldienst Wetzlar. Alle Rechte vorbehalten.
