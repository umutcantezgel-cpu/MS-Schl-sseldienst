## 2026-07-26T13:54:31Z
You are Worker 4 (`teamwork_preview_worker`) working in `.agents/teamwork_preview_worker_m4/`.
Your task is to write and execute a programmatic verification script that inspects generated build/HTML files to verify all SEO Acceptance Criteria for MS-Schlüsseldienst.

Read:
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/.agents/orchestrator/PROJECT.md`
- `/Users/umurey/Downloads/MS-Schl-sseldienst-main/ORIGINAL_REQUEST.md`

### Acceptance Criteria to Programmatically Verify:
1. `npm run build` succeeds cleanly with exit code 0.
2. Create and run a verification script (e.g. `scripts/verify-seo-build.mjs` or `scripts/verify-build-html.js`) using `run_command` (`node scripts/...`) that inspects the generated HTML files in `.next/server/app/` or `.next/server/pages/` across all 120+ pages:
   - **Title Length**: Checks every HTML page `<title>` tag. Asserts title length is strictly between 45 and 65 characters (inclusive).
   - **Meta Description Length**: Checks every HTML page `<meta name="description" content="...">`. Asserts description length is strictly between 120 and 155 characters (inclusive).
   - **Absence of Duplicates / Placeholders**: Asserts no "Lorem Ipsum" or hardcoded duplicate block strings exist across generated pages.
   - **Heading Hierarchy & Keyword Reuse**: Asserts every page has exactly one `<h1>` tag, and the `<h1>` keyword text is reused/present in body paragraph text (`<p>`).

### Requirements:
- Execute `npm run build` first to ensure fresh build artifacts exist in `.next/`.
- Run your node verification script against `.next/server/app/` HTML files.
- If any page fails any criteria, log exact URL/file and failing value, fix the source code file if needed, rebuild, and re-verify until 100% of checked pages pass.

Write your script, test results, and final report in `.agents/teamwork_preview_worker_m4/handoff.md`.
Send a detailed summary back via send_message.
