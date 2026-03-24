# Deployment Guide — MS Schlüsseldienst Wetzlar

> Phase 17: DevOps, CI/CD & Deployment

## Deployment-Workflow

```
Local Development → PR erstellen → CI Pipeline → Review → Merge → Production
```

### 1. Local Development
```bash
git checkout -b feature/my-feature
npm run dev                    # Lokal entwickeln (Turbopack)
npm run validate               # Lint + TypeCheck + Build lokal prüfen
git commit -m "feat(scope): description"
git push origin feature/my-feature
```

### 2. Pull Request
- PR auf GitHub erstellen → `main` als Target
- CI Pipeline läuft automatisch (lint → typecheck → build)
- Vercel erstellt automatisch ein Preview Deployment
- Preview-URL erscheint als GitHub Comment

### 3. Code Review
- Mindestens 1 Approval erforderlich
- Status Checks müssen alle grün sein
- Squash & Merge nach Approval

### 4. Production Deployment
- Vercel deployed automatisch bei Merge zu `main`
- Smoke Tests laufen nach Deployment
- Health Check unter `/api/health` verfügbar

---

## Rollback

### Decision-Tree

```
Problem auf Production
├── Fehler in neuem Code?
│   ├── Trivial → Hotfix-Forward (schneller)
│   └── Komplex → Rollback
├── Ungültige Env-Variable?
│   └── Fix Variable in Vercel Dashboard → Redeploy
├── Third-Party Service Down?
│   └── Feature-Flag deaktivieren (Kill-Switch)
└── Kritischer Bug in Core-Feature?
    └── Rollback zur letzten stabilen Version
```

### Rollback-Schritte (Vercel Dashboard)

1. Öffne [Vercel Dashboard](https://vercel.com/dashboard) → Projekt
2. Gehe zu **Deployments** Tab
3. Finde das letzte stabile Deployment
4. Klicke **⋮** → **Promote to Production**
5. Verifiziere mit Smoke Tests: `BASE_URL=https://domain.de npm run test:smoke`

### Rollback-Schritte (CLI)

```bash
# Installiere Vercel CLI (einmalig)
npm i -g vercel

# Login
vercel login

# Liste der Deployments
vercel ls

# Rollback zu spezifischem Deployment
vercel rollback [deployment-url]
```

---

## Hotfix-Strategie

Wenn ein Fix schneller als Rollback ist:

```bash
git checkout main
git pull
git checkout -b fix/critical-bug
# Fix implementieren
npm run validate               # Lokal prüfen
git commit -m "fix(scope): critical bug description"
git push origin fix/critical-bug
# PR erstellen → Review → Merge
# Vercel deployed automatisch (<2 Min)
```

---

## Notfall-Kontakte

| Rolle | Kontakt |
|---|---|
| Admin | Mina Saad |
| Vercel Dashboard | vercel.com/dashboard |
| GitHub Repository | github.com/[org]/[repo] |

---

## Feature-Flag Kill-Switch

Um ein Feature sofort zu deaktivieren (ohne Redeploy):

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Variable setzen: `NEXT_PUBLIC_FEATURE_[FLAG_NAME]=false`
3. Redeploy triggern (Vercel Dashboard → Latest → Redeploy)

Beispiel: Exit-Intent-Banner deaktivieren:
```
NEXT_PUBLIC_FEATURE_EXIT_INTENT_BANNER=false
```
