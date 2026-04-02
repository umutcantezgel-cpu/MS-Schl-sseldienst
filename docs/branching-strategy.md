# Branching-Strategie & Git-Workflow

> MS Schlüsseldienst Wetzlar — Phase 17

## Trunk-Based Development

### Prinzipien
- **`main`** ist IMMER deployable — kein "broken" Code
- Feature-Branches sind kurzlebig (**<1-3 Tage**)
- Regelmäßige Integration auf main (mindestens täglich)
- Code-Review vor Merge erforderlich

### Branch-Naming

| Prefix | Verwendung | Beispiel |
|---|---|---|
| `feature/` | Neue Funktionalität | `feature/contact-form-validation` |
| `fix/` | Bugfix | `fix/mobile-nav-overlap` |
| `chore/` | Refactoring, Dependencies, Build | `chore/update-tailwind` |
| `docs/` | Nur Dokumentation | `docs/update-deployment-guide` |

### Conventional Commits

Format: `type(scope): description`

| Type | Verwendung |
|---|---|
| `feat:` | Neue Funktionalität |
| `fix:` | Bugfix |
| `chore:` | Refactoring, Dependencies |
| `docs:` | Dokumentation |
| `perf:` | Performance-Optimierung |
| `refactor:` | Code-Restrukturierung |
| `test:` | Tests |

**Beispiele:**
```
feat(contact-form): add email validation
fix(nav): resolve mobile menu z-index issue
chore(deps): upgrade tailwind to v4.2
docs: update deployment guide
perf(images): optimize hero image loading
```

## GitHub Branch Protection (Empfehlung)

Für den `main` Branch sollten folgende Regeln aktiviert werden:

- ✅ Require status checks before merging: `lint`, `typecheck`, `build`
- ✅ Require pull request reviews: 1 Approval
- ✅ Dismiss stale approvals on new commits
- ✅ Require branches up to date before merging
- ✅ Require linear history (Squash/Rebase only)
- ✅ Restrict force pushes

## Workflow

```
1. Branch erstellen: git checkout -b feature/my-feature
2. Änderungen committen: git commit -m "feat(scope): description"
3. Push: git push origin feature/my-feature
4. PR erstellen → CI läuft automatisch
5. Review anfordern
6. Nach Approval → Squash & Merge zu main
7. Branch löschen
```
