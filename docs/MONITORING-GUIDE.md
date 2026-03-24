# Monitoring Guide — Schlüsseldienst Wetzlar

## Monitoring-Endpunkte

| Route | Zweck | Verfügbarkeit |
|---|---|---|
| `/api/health` | Systemstatus + Dependencies | Alle Umgebungen |
| `/api/monitoring/errors` (POST) | Error-Reports empfangen | Alle Umgebungen |
| `/api/monitoring/errors` (GET) | Letzte Fehler abrufen | Nur Development |
| `/dev/dashboard` | Monitoring-Dashboard | Nur Development |

## Errors finden

### Production (Vercel)
1. Vercel Dashboard → Projekt → **Logs** Tab
2. Filtere nach `type: "error_report"`
3. Strukturierte JSON-Logs enthalten: `level`, `category`, `message`, `page`

### Development (Lokal)
1. Browser-Konsole: `[ErrorLogger:error]` Prefix suchen
2. `/api/monitoring/errors?limit=50` — letzte 50 Fehler als JSON
3. `/dev/dashboard` — visuelles Dashboard

## Web Vitals interpretieren

| Metrik | Gut | Akzeptabel | Schlecht | Budget |
|---|---|---|---|---|
| **LCP** | < 2.5s | 2.5s–4s | > 4s | 2.5s |
| **CLS** | < 0.1 | 0.1–0.25 | > 0.25 | 0.1 |
| **INP** | < 200ms | 200ms–500ms | > 500ms | 200ms |
| **FCP** | < 1.8s | 1.8s–3s | > 3s | 1.8s |
| **TTFB** | < 800ms | 800ms–1.8s | > 1.8s | 800ms |

Budget-Überschreitungen werden automatisch als `[PerfBudget]` Warnings geloggt.

## Health Check

```bash
curl https://schluesseldienst-wetzlar-24.de/api/health | jq .
```

Antwort:
```json
{
  "status": "ok",
  "uptime": 12345.67,
  "version": "0.1.0",
  "environment": "production",
  "commit": "abc1234",
  "dependencies": [
    { "name": "env_vars", "status": "ok" },
    { "name": "formspree", "status": "ok", "latency": 120 }
  ]
}
```

Status-Werte: `ok` (alles grün), `degraded` (non-critical), `down` (kritisch, HTTP 503).

## Incident Response

Siehe [INCIDENT-RESPONSE.md](./INCIDENT-RESPONSE.md) für:
- Severity-Levels (P1–P4) und Response-Zeiten
- Rollback-Prozess (Vercel instant rollback)
- Post-Mortem-Template
