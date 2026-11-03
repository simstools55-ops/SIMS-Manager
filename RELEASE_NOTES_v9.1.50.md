# SIMS Manager v9.1.50 — OAuth scope correction (development candidate)

- Replace `spreadsheets.currentonly` with full `spreadsheets` scope in both Apps Script manifests.
- Required because `SpreadsheetApp.create()` creates a separate backup spreadsheet.
- Retain existing Drive, GSC, external request and UI scopes.
- Google will request renewed authorization when the updated manifest is applied.
- No change to license logic, GSC data acquisition or backup algorithms.
- NOT production approved: authorization and backup creation require real Apps Script testing.
- Source base: v9.1.49 version-corrected candidate.
