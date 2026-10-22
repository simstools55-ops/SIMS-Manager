# SIMS Manager v9.0.28 — UAT candidate

- Accept `C1`, `C2`, `C3` Writer change identifiers in addition to `1`, `CHG-1`, and `変更1`.
- Use a shared validator at Writer answer save and read-only completion audit.
- Report which required field is missing rather than an ambiguous combined error.
- Preserve saved Writer responses, publication gate, monitoring/history transitions and all previously accepted identifiers.
- Live UAT pending: inspect A000046 completion preflight, and only complete after publication is independently confirmed.
