# v9.3.113 M6 UAT candidate - Approval gate hardening

- Fail closed if preflight item is missing, instead of throwing a TypeError.
- Prevent eligibility without verified GSC data matching the proposed query.
- Existing case, monitoring conflict, and identity mismatch remain HOLD.
- This remains a read-only approval preview: no APPROVE or Doctor registration is executed.
- Keep deployed v9.3.108; v9.3.113 requires integration UAT.
