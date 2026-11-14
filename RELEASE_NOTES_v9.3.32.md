# SIMS Manager v9.3.32

- Main observed bottleneck: `cannibalization` 46.189s in v9.3.31.
- Fetch only top-15 selected query/page rows using an anchored, escaped RE2 filter instead of unfiltered site-wide rows.
- Preserve full-batch and per-query fallback on API error or truncation.
- Diagnostic rules and persistence unchanged.
- Cloud log: `SBM_DOCTOR_CANNIBAL_TIMING`.
- Validation: Node syntax check, mock targeted and fallback tests; live performance unverified.
