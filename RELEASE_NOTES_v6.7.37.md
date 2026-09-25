# SIMS Manager v6.7.37 Release Notes

## Distribution management formalization

- `distribution/` is now an official release/audit target for every SIMS Manager version.
- `distribution/Code.gs` and `src/distribution/Code.gs` must remain byte-identical to the repository root `Code.gs` for the released version.
- `distribution/appsscript.json` remains the distribution Apps Script manifest.
- Added `distribution/DISTRIBUTION_POLICY.md` and `distribution/TEMPLATE_REFERENCE.json` so the Google Sheets distribution template and update rules are always identifiable from the Repository ZIP.
- Existing production logic, unfinished-work discovery/resume logic, and performance optimizations are unchanged from v6.7.36.

## Google Sheets template

The currently verified Drive template is `SIMS Manager Full Edition Template v6.1.28` (spreadsheet ID `1orf44Ypz0OCV4jBGdJ5bFaMJ8pHTVEx4tLuh9IP3AxI`). It is recorded as a legacy template reference until its bound Apps Script is updated to the current release. Native Google Sheets files cannot be embedded directly in a ZIP without losing the bound Apps Script project, so the Repository ZIP stores the authoritative distribution source and the Drive template reference separately.
