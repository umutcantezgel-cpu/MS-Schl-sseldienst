## 2026-07-26T13:51:02Z
<USER_REQUEST>
You are Worker 1 (`teamwork_preview_worker`) working in `.agents/teamwork_preview_worker_m2_repl/`.
Your task is to implement **Milestone 2: Technical & Meta Tags Optimization (R4 & R1)** for Next.js project MS-Schlüsseldienst.

Read:
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/orchestrator/PROJECT.md`
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/teamwork_preview_explorer_m1_1/handoff.md`

### Mandatory Integrity Requirement:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

### Tasks to Complete:
1. **Technical Fixes (R4)**:
   - **Missing/Unreachable File References (8 files)**:
     - Create valid assets/images in `public/images/blog/` for `abzocke.png` and `einbruchschutz-pillar.png` (or SVG placeholders).
     - Create `public/team/` directory and add images `mustafa.jpg`, `lukas.jpg`, `ahmet.jpg`, `sven.jpg`, `julia.jpg`, `felix.jpg` (or clean PNG/SVG avatars).
     - Fix `app/manifest.ts:19` referencing `/images/icon-192.png` (ensure icon asset exists or update manifest icon path).
   - **Problematic Asset**: Clean up `public/images/logo-neu.svg` by replacing the 155 KB inline Base64 PNG with clean vector SVG markup or lightweight PNG.
   - **Heading Hierarchy Fixes (2 pages)**:
     - `app/embed/einbruchrisiko/page.tsx`: Add a valid `<h1>` heading (e.g. `<h1 className="sr-only">Einbruchrisiko Rechner</h1>`).
     - `app/dev/dashboard/page.tsx`: Replace `<h3>` tags at lines 213 & 237 with `<h2>` tags.
     - `components/legal/LegalLayout.tsx`: Fix `H1` -> `H4` break so legal pages follow proper H1 -> H2 structure.
   - **HTML File Size > 0.5 MB (2 pages)**:
     - `app/(marketing)/servicegebiet/page.tsx` and `app/sitemap-uebersicht/page.tsx`: Remove redundant full-location serialization in JSON-LD schema / DOM inline SVGs so static HTML size stays < 0.5 MB.

2. **Meta-Tags & Titles Optimization (R1)**:
   - Update metadata exports, `lib/metadata.ts`, `app/layout.tsx`, static page metadata, dynamic location route (`(marketing)/[stadtgebiet]/page.tsx`), POI route (`standorte/[poiSlug]/page.tsx`), blog posts, lexikon entries, and case studies.
   - **EVERY SINGLE PAGE TITLE MUST BE 45 TO 65 CHARACTERS (INCLUSIVE)**.
   - **EVERY SINGLE META DESCRIPTION MUST BE 120 TO 155 CHARACTERS (INCLUSIVE)** and contain main keywords.
   - For location title template: use `Schlüsseldienst ${city.name} | 24h Notdienst | Schlüssel Schmiede` (48-62 chars for all city names).

3. **Verification**:
   - Run `npm run build` via `run_command` and confirm exit code 0.

Document all completed edits and build logs in `.agents/teamwork_preview_worker_m2_repl/handoff.md`.
Send a summary back via send_message.
</USER_REQUEST>
