# SIMS Manager v9.3.119 — M6 Transition Site/Freshness Guard (UAT candidate)

- `sbmS3CheckDecisionTransitionUat_` now requires a separately resolved SBM site ID and rejects mismatches.
- Rejects absent, malformed, future-dated (>1 minute), and older-than-24-hour HOLD snapshots.
- Read-only eligibility check; no APPROVE writer or Doctor registration enabled.
- Existing v9.3.108 production installation should remain unchanged.
