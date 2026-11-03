# SIMS Manager v9.1.55 — Restore metadata verification (UAT candidate)

- Treat only the observed horizontal alignment API readback `general` (backup) vs `general-left` (restored) as equivalent. Other alignments remain strictly checked.
- Report first differing sheet, cell, attribute and values for metadata mismatches.
- Preserve strict cell value/formula and validation verification, including blank-vs-FALSE checkbox semantics.
- No intended changes to daily backup creation, 3-generation retention, or restore selection.
- Static checks only; live restore and rollback remain unverified.
- Scope: managed cell content/selected metadata, not full spreadsheet layout, external properties or conditional formatting.
