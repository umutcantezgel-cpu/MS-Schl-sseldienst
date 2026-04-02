# Security Checklist — MS Schlüsseldienst Wetzlar

> Phase 16: Enterprise Security & DSGVO-Compliance
> Stand: März 2026

## Manuelle Penetrationstest-Checkliste

### XSS (Cross-Site Scripting)
- [ ] `<script>alert(1)</script>` in Kontaktformular (Name, E-Mail, Nachricht)
- [ ] `<img src=x onerror=alert(1)>` in URL-Parametern
- [ ] JavaScript-Injection in Suchparametern
- [ ] Verifiziere: React escaped alle JSX-Werte automatisch
- [ ] Verifiziere: `dangerouslySetInnerHTML` nur für JSON-LD (typsicher, `JSON.stringify`)

### CSRF (Cross-Site Request Forgery)
- [ ] Versuche Formular-Submit von externer Domain
- [ ] Verifiziere: Origin-Header-Prüfung in API-Routes
- [ ] Verifiziere: SameSite=Lax auf allen Cookies

### Clickjacking
- [ ] Versuche Website in `<iframe>` einzubetten
- [ ] Verifiziere: X-Frame-Options: DENY Header
- [ ] Verifiziere: CSP frame-ancestors 'none'

### Open Redirect
- [ ] Versuche redirect-Parameter zu manipulieren
- [ ] Verifiziere: Keine dynamischen Redirects basierend auf URL-Parametern

### Information Disclosure
- [ ] Prüfe ob Fehlerseiten Stack-Traces zeigen (Production)
- [ ] Prüfe ob .env, .git zugänglich sind
- [ ] Prüfe ob Source-Maps in Production zugänglich sind
- [ ] Verifiziere: error.tsx zeigt KEINE technischen Details in Production

### HTTP Methods
- [ ] Prüfe ob PUT/DELETE auf API-Routes möglich sind
- [ ] Verifiziere: Nur POST auf /api/contact, /api/csp-report

### Cookie Security
- [ ] Verifiziere: consent_status Cookie hat SameSite=Lax, Secure
- [ ] Verifiziere: visitor_type Cookie hat angemessene Flags
- [ ] Verifiziere: Keine HttpOnly-Cookies werden durch Client-JS gesetzt

### HTTPS
- [ ] Prüfe ob HTTP auf HTTPS redirected
- [ ] Prüfe kein Mixed Content (HTTP-Ressourcen auf HTTPS-Seite)
- [ ] Verifiziere: HSTS Header mit max-age=63072000

### Directory Traversal
- [ ] Versuche `/../` in URL-Pfaden
- [ ] Verifiziere: Next.js Routing verhindert Traversal

### Source Code Exposure
- [ ] Prüfe `/.env` → 404
- [ ] Prüfe `/.git/config` → 404
- [ ] Prüfe `/_next/static` enthält keine Secrets

## Security-Header-Validierung

### Erwartete Headers
| Header | Erwarteter Wert |
|---|---|
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload |
| X-Content-Type-Options | nosniff |
| X-Frame-Options | DENY |
| X-XSS-Protection | 0 |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), bluetooth=() |
| Content-Security-Policy-Report-Only | (vollständige CSP) |

### Externe Validierung
- [ ] securityheaders.com → Ziel: A+
- [ ] Mozilla Observatory → Ziel: A+
- [ ] `curl -I https://www.wetzlar-schluesseldienst.de` → alle Headers prüfen

## DSGVO-Compliance-Checkliste

- [x] Datenschutzerklärung vollständig (Art. 13/14 DSGVO)
- [x] Impressum nach §5 TMG inkl. Streitschlichtung
- [x] Cookie-Consent-Banner DSGVO/TTDSG-konform
- [x] Cookie-Inventar als SSOT (lib/cookie-inventory.ts)
- [x] Analytics nur nach Einwilligung (Art. 6 Abs. 1 lit. a)
- [x] Verarbeitungsverzeichnis dokumentiert (Art. 30)
- [x] Betroffenenrechte dokumentiert (Art. 15-21)
- [x] Drittlandtransfer dokumentiert (EU-US DPF)
- [x] Cookie-Einstellungen jederzeit änderbar (Footer-Link)
