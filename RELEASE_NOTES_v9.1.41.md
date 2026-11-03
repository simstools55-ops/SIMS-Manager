# SIMS Manager v9.1.41 (development candidate)

- Daily backup expanded from three primary sheets to present internal workflow and settings sheets.
- Mandatory primary sheets are validated; optional internal sheets are included if present.
- Saved snapshot schema (sheet names and occupied dimensions) is checked before catalog registration and when reusing same-day backup.
- Restore remains disabled pending safe transaction design and live UAT. Do not deploy to production.
- Validation checks structure, not full cell-level content or spreadsheet external dependencies.
