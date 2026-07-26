## 2026-07-26T13:26:17Z
You are Worker 1 (`teamwork_preview_worker`) working in `.agents/teamwork_preview_worker_m2/`.
Your task is to implement **Milestone 2: Technical & Meta Tags Optimization (R4 & R1)** for the Next.js project MS-Schlüsseldienst.

Read:
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/orchestrator/PROJECT.md`
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/teamwork_preview_explorer_m1_1/handoff.md`

### Mandatory Integrity Requirement:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

### Instructions:
1. **Technical Fixes (R4)**:
   - **8 Unreachable / Missing File References**: Create real/clean SVG or image assets in `public/images/blog/` and `public/team/` for missing blog images (`abzocke.png`, `einbruchschutz-pillar.png`) and team avatars (`mustafa.jpg`, `lukas.jpg`, `ahmet.jpg`, `sven.jpg`, `julia.jpg`, `felix.jpg`).
   - **Problematic Asset**: Clean up `public/images/logo-neu.svg` by replacing the 155 KB Base64 inline PNG with a clean vector SVG or lightweight graphic.
   - **Heading Hierarchy Fixes (2 pages)**:
     - `app/embed/einbruchrisiko/page.tsx`: Add a valid `<h1>` heading (e.g., `<h1 className="sr-only">Einbruchrisiko Rechner</h1>`).
     - `app/dev/dashboard/page.tsx`: Replace `<h3>` tags (lines 213 & 237) with `<h2>` tags so the structure follows `<h1>` -> `<h2>`.
   - **Reduce HTML File Size > 0.5 MB (2 pages)**:
     - `app/(marketing)/servicegebiet/page.tsx` and `app/sitemap-uebersicht/page.tsx`: Optimize JSON-LD schema generation and component DOM rendering of location lists to eliminate excessive duplicate inline SVG/payloads and keep static HTML size under 0.5 MB.

2. **Meta-Tags & Titles Optimization (R1)**:
   - Optimize title and meta description exports across static pages, `lib/metadata.ts`, dynamic location routes (`(marketing)/[stadtgebiet]/page.tsx`), POI routes (`standorte/[poiSlug]/page.tsx`), blog posts, lexikon entries, and case studies.
   - **STRICT TITLE LENGTH RULE**: Every page `<title>` MUST be between 45 and 65 characters (inclusive).
   - **STRICT DESCRIPTION LENGTH RULE**: Every page `<meta name="description">` MUST be between 120 and 155 characters (inclusive) and contain primary keywords.
   - Fix all static pages currently failing (e.g. `/datenschutz` title is 20 chars -> update to e.g. "Datenschutzerklärung | Schlüssel Schmiede Wetzlar" = 51 chars; `/cookie-richtlinie` desc is 88 chars -> expand to 125–140 chars).
   - Fix dynamic location and POI title templates so long city names do not exceed 65 chars.

3. **Verification**:
   - Run `npm run build` using `run_command` and confirm the Next.js build succeeds with exit code 0.

Document all changes and build results in `.agents/teamwork_preview_worker_m2/handoff.md`.
Send a summary back via send_message.
