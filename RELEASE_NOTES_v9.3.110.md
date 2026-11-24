# SIMS Manager v9.3.110 — M6 proposal identity propagation (UAT candidate)

- Fixes lost `proposal_id` in live decision preview, which otherwise causes every registration dry-run to report invalid/empty proposal identity.
- Approval gate checks proposal/article ID pairing, cross-stage preflight identity and duplicate IDs, always fail-closed HOLD.
- No APPROVE path, Doctor case write, publication, or response registration added in this release.
- v9.3.108 remains the installed production baseline; v9.3.110 is an uninstalled UAT candidate.
- Requires Apps Script runtime verification; local regression only.
