# v9.3.112 M6 — Approval eligibility (UAT candidate)

- Separate `eligible_for_future_approval` from `decision=HOLD` and `registration_allowed=false`.
- Existing Doctor case: never auto-register. Monitoring conflict: require adjudication. Group review: eligible only for future SBM approval, not approved.
- Validate proposal/article identity and preflight identity, fail closed on duplicate/conflict and incomplete evidence.
- Fix ambiguous conditional precedence in the prior approval preview.
- No sheet write, Doctor registration, publication, or automatic approval added.
- Local syntax and unit tests only. Keep production v9.3.108 until integrated registration release is tested.
