# SIMS Manager v9.2.2 Candidate

Use `src/distribution/Code.gs` (or the identical `src/apps-script/Code.gs`) for Apps Script.
`Code.base.gs` is retained as historical source only and is **not** v9.2.2.

Before installing: make a copy of the active spreadsheet and Apps Script source. Do not overwrite the live v9.2.1 until the candidate passes review.

Changes: folder identity guard; checks site name, optional URL, spreadsheet/site ID and folder ancestry. Existing v9.2.1 binding is migrated on first successful access.

Known limitations: renaming a blog stops backups pending manual migration; daily scheduling and rollback failure UAT pending.
