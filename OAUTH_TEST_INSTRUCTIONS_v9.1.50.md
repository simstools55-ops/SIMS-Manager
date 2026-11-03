# v9.1.50 OAuth test

1. Preserve the existing script and spreadsheet before any changes.
2. Apply the Code.gs and `appsscript.json` from the same v9.1.50 distribution set. Updating Code.gs alone DOES NOT update OAuth scopes.
3. In Apps Script: Project Settings > Show `appsscript.json` manifest file; edit manifest as needed.
4. Confirm `oauthScopes` includes `https://www.googleapis.com/auth/spreadsheets` and `https://www.googleapis.com/auth/drive`; remove `spreadsheets.currentonly` (it is replaced, not required).
5. Save and run the read-only preflight first.
6. Run the backup creation test ONCE and approve Google's new permission prompt if presented.
7. Return the full execution log; do not execute restore.

Security note: full spreadsheets scope permits broader access than currentonly. This scope is needed for `SpreadsheetApp.create()`; do not grant it unless you trust the code and its deployment.
