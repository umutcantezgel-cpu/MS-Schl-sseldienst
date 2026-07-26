## 2026-07-26T13:26:19Z
You are Worker 2 (`teamwork_preview_worker`) working in `.agents/teamwork_preview_worker_m3/`.
Your task is to implement **Milestone 3: Content, Keywords, Structure & Link Fixes (R2 & R3)** for the Next.js project MS-Schlüsseldienst.

Read:
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/orchestrator/PROJECT.md`
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/teamwork_preview_explorer_m1_2/handoff.md`
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/teamwork_preview_explorer_m1_3/handoff.md`

### Mandatory Integrity Requirement:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

### Instructions:
1. **Content and Keyword Fixes (R2)**:
   - **Duplicate Text Blocks (71 pages / 359 instances)**: Refactor components (`ProcessSteps.tsx`, `EmergencyCTA.tsx`, `LocalFAQ.tsx`, `TrustBadges.tsx`, `PricingSection.tsx`/`PricingFAQ.tsx`) and `lib/contentDifferentiation.ts` so text blocks on location and service pages receive unique, location-specific or page-specific copy props instead of hardcoded identical strings.
   - **Content Extension (18 pages < 500 words)**: Extend content on all 18 identified pages (`danke`, `anfrage`, `termin-buchen`, `ueber-uns/geschichte`, `ueber-uns/karriere`, `ueber-uns/philosophie`, `ueber-uns/team`, `lexikon`, `ratgeber`, `schluessel-schmiede`, `servicegebiet`, `preview-images`, `referenzen`, `sitemap-uebersicht`, `embed/einbruchrisiko`, `cookie-richtlinie`, `impressum`, `widerruf`) so each page contains >= 500 words of high-quality, helpful German text.
   - **Keyword & H1 Body Integration**: Ensure the H1 keyword and Title keyword appear naturally in body text `<p>` paragraphs on every page (especially sub-pages currently missing body keyword reuse).
   - **Typos & Bold Tags**:
     - Fix German legal typos in `app/(legal)/agb/page.tsx:120` ("mechanical Defekt" -> "mechanischer Defekt") and line 12 ("des Schlüssel Schmiede" -> "der Schlüssel Schmiede Wetzlar").
     - Fix space-before-comma punctuation typos in 5 component templates (`LocalHero.tsx`, `LocationContact.tsx`, `LocationScenarios.tsx`, `NeighborGrid.tsx`, `ServicesSection.tsx`).
     - Fix overused/unsemantic `<strong>` and `<b>` tags on 24 pages.

2. **Structure and Internal Links Fixes (R3)**:
   - **Generic Link Texts (26 pages)**: Replace non-descriptive link anchors ("hier klicken", "mehr lesen", "Artikel lesen", "Projekt ansehen", "Zurück zur Übersicht", "Zu {service.title}") with keyword-rich descriptive text across all 26 target pages.
   - **Link Balancing (2 pages)**: Refactor `app/(marketing)/servicegebiet/page.tsx` and `app/sitemap-uebersicht/page.tsx` to encapsulate/paginate or group the 110+ location links into expandable categories/accordions so initial link density remains under 100 links per page.
   - **Fix 5 Broken External Links**:
     - `lib/data/company.ts:62`: Fix FB URL (remove broken `/mentions/` path).
     - `app/(legal)/impressum/page.tsx:115`: Update discontinued EU ODR platform link to modern Verbraucherschlichtung information.
     - `components/growth/RiskCalculator.tsx:271`: Fix raw IDN URL `https://wetzlar-schlüsseldienst.de` by encoding as Punycode `https://xn--wetzlar-schlsseldienst-3lc.de` or using standard domain `https://schluesselschmiede-wetzlar.de`.
     - `app/(marketing)/leistungen/einbruchschutz/page.tsx:266`: Update Hessen police portal URL.
     - `app/(marketing)/leistungen/einbruchschutz/page.tsx:257`: Update KfW portal URL.
   - **Fix 1 Broken Internal Link**:
     - `components/Footer.tsx:249`: Fix `<a href="#cookie-settings">` to trigger cookie consent popup or add `id="cookie-settings"` to the cookie trigger button.

3. **Verification**:
   - Run `npm run build` using `run_command` and confirm the Next.js build succeeds cleanly with exit code 0.

Document all changes and build results in `.agents/teamwork_preview_worker_m3/handoff.md`.
Send a summary back via send_message.
