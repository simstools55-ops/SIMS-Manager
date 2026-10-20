# Phase 17 — UAT-only write engine (NOT APPROVED FOR EXECUTION)

A write function is now present but intentionally not connected to a menu. It is disabled unless DocumentProperties SIMS_V9_UAT_WRITE_ENABLED=TRUE and a separate UAT token is passed. Furthermore, the current completion gate returns blockers, so **it cannot execute** until those blockers are resolved in later work. This is deliberate. No spreadsheet has been modified.

Before enabling: complete acceptance tests for rate aggregation and monitoring normalization, confirm actual publication or simulated UAT publication, and implement operator-reviewed journal recovery. Do not use on production spreadsheets.

The commit engine checks unique article/history rows, takes cell snapshots, writes a compact recovery journal and attempts rollback on errors. Spreadsheet writes are not truly atomic; journal remains after success. Do not interpret this as a production-ready transaction.
