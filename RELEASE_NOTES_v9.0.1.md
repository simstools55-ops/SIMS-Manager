# SIMS Manager v9.0.1 — Article Update Dialog UX

Date: 2026-10-20

## Changes
- Show the Doctor request button only during Doctor response / rediagnosis stages.
- Place the Close button at the bottom of the article update dialog after all results and response fields.
- After successful completion, hide registration and editing controls, leaving the completion summary.
- Keep single-session, history registration, monitoring schedule, and legacy-session data untouched.

## Verification
- JavaScript syntax validation for Code.gs and the generated dialog script.
- Repository ZIP CRC and all five Code.gs copies verified.
- Live spreadsheet verification is pending.

## Known follow-up
- Multiple legacy unfinished records (A000005 / A000066) are retained intentionally; cleanup must not discard work without a separate verified migration policy.
