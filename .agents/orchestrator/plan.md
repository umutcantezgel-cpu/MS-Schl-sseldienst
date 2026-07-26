# SEO Optimization Plan

## Objectives
Systematically optimize the Next.js codebase for MS-Schlüsseldienst to achieve a 100/100 Onpage score in Seobility for Technik & Meta, Struktur, and Inhalt.

## Milestone Decomposition
1. **M1: Codebase Exploration & SEO Audit Baseline**
   - Identify all 123 pages / routes and how metadata (title/description) is generated.
   - Locate 7 unreachable files + 1 problematic file.
   - Identify 2 pages with >0.5MB HTML size.
   - Locate 2 pages with bad heading hierarchy (H1 -> H2 -> H3).
   - Locate 71 pages with duplicate text blocks (359 instances).
   - Locate 18 pages requiring content extension (>=500 words).
   - Identify 26 pages with generic link text ("hier klicken", "mehr lesen").
   - Identify 2 pages with link imbalance.
   - Locate 5 broken external links and 1 broken internal redirect.
   - Identify pages needing typo fixes (2 pages) and strong/bold tag fixes (24 pages).

2. **M2: Technical & Meta Tags Optimization (R4 & R1)**
   - Fix 7 unreachable files + 1 problematic file.
   - Reduce HTML file size below 0.5MB for the 2 identified heavy pages.
   - Correct heading structures (strictly one H1 per page, proper H2/H3 nesting) on identified pages.
   - Optimize Meta Titles (45-65 chars) and Meta Descriptions (120-155 chars with primary keyword) across all 123 pages.

3. **M3: Content, Keyword, Structure & Link Fixes (R2 & R3)**
   - Rewrite duplicate content blocks (359 instances across 71 pages).
   - Extend content on 18 pages to >=500 helpful words.
   - Integrate H1 and Title keywords into the body text across all pages.
   - Fix typos on 2 pages and correct strong/bold tag usage on 24 pages.
   - Replace generic internal link anchors ("hier klicken", "mehr lesen") with keyword-rich text on 26 pages.
   - Balance internal link counts on 2 pages with excessive links.
   - Repair 5 broken external links and 1 internal redirect.

4. **M4: Build, Programmatic Verification & Forensic Integrity Audit**
   - Execute `npm run build` cleanly.
   - Develop and execute a comprehensive verification script inspecting built HTML files (`.next/server/...`).
   - Validate title lengths (45-65 chars), description lengths (120-155 chars), absence of Lorem Ipsum/duplicate blocks, single H1 per page reused in body text.
   - Perform independent Review and Forensic Integrity Audit.
