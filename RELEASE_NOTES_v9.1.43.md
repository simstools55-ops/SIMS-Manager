# SIMS Manager v9.1.43 — Restore Candidate (UAT NOT PASSED)

- Add manual restore selection and confirmation, preserving existing sheet IDs.
- Take and verify an emergency snapshot before writes; record its ID in document properties.
- Restore cell values and formulas. Formatting, protections, external properties and sheet dimensions are NOT fully restored.
- This is a development candidate. Google Apps Script integration testing is required.
- If a partial failure occurs, stop and use the emergency snapshot; automatic rollback is not provided.
