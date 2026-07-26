## 2026-07-26T14:08:26Z
You are Worker Audit Fix (`teamwork_preview_worker`) working in `.agents/teamwork_preview_worker_audit_fix/`.
Your task is to fix the build failure and non-conformance findings reported by the Forensic Auditor and Reviewer 2 for MS-Schlüsseldienst.

### Forensic Auditor Evidence & Fix Required:
- **Build Error**: `npm run build` fails during static page trace collection for `_not-found` (`ENOENT: .../.next/server/app/_not-found/page.js.nft.json`).
- **Root Cause**: `app/not-found.tsx` calls `await headers()` inside the 404 logger block, triggering dynamic server mode during static generation export.
- **Fix**: Safely refactor `app/not-found.tsx` so it does NOT invoke `headers()` or dynamic server APIs at build time. Ensure static page generation for `_not-found` completes cleanly.

### Reviewer 2 Findings & Fixes Required:
1. **Space-before-comma (` ,`) Typos**:
   - Inspect and fix all instances of space-before-comma (`" ,"` -> `","`) in:
     - `components/locations/LocalHero.tsx`
     - `components/locations/LocationContact.tsx`
     - `components/locations/LocationScenarios.tsx`
     - `components/locations/NeighborGrid.tsx`
     - `components/sections/home/ServicesSection.tsx`

2. **Generic Link Anchor Text ("Artikel lesen")**:
   - In `app/(marketing)/blog/page.tsx` (around line 141) and `app/(marketing)/ratgeber/page.tsx` (around line 107), replace `"Artikel lesen"` with descriptive keyword-rich anchor text (e.g., `"Ratgeber-Artikel zu ${post.title} lesen"`).

### Verification:
- Run `npm run build` using `run_command` and verify that Next.js production build completes with **exit code 0**.

Write your changes and build log in `.agents/teamwork_preview_worker_audit_fix/handoff.md`.
Send a summary back via send_message.
