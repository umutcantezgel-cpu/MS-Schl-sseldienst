# Project: Price Consistency Analysis
# Scope: Entire codebase (app, components, lib/data)

## Architecture
- Source code search directories:
  - Frontend Pages: `app/**/*.tsx`
  - Components: `components/**/*.tsx`
  - Config Files: `lib/data/**/*.ts`, `lib/data/**/*.json`
- Output: `price_analysis_report.md` at project root

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Initial Exploration | Identify all files referencing prices (e.g., €, Euro, ab) | none | DONE |
| 2 | Extraction & Mapping | Extract service names, exact prices, line numbers, and files | M1 | DONE |
| 3 | Consistency Analysis | Analyze extracted data to find all discrepancies per service | M2 | DONE |
| 4 | Final Reporting & Audit | Write price_analysis_report.md and run review/audit validation | M3 | DONE |

## Interface Contracts
No code modification is allowed. The interface between subagents is strictly file-based handoffs:
- Explorer delivers file paths and raw occurrences.
- Worker structures the price data into groups.
- Reviewer/Critic/Auditor verifies the consistency of the findings and final report.
