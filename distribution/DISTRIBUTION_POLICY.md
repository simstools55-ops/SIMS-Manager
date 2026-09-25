# SIMS Manager Distribution Policy

`distribution/` is part of the official SIMS Manager release surface.

For every version release, the release is incomplete until all of the following are checked:

1. `distribution/Code.gs` matches root `Code.gs` byte-for-byte.
2. `src/distribution/Code.gs` matches root `Code.gs` byte-for-byte.
3. `distribution/appsscript.json` is present and valid JSON.
4. `distribution/README-FIRST.md` identifies the current product version.
5. `distribution/TEMPLATE_REFERENCE.json` identifies the official Google Sheets distribution template and whether its bound Apps Script has been synchronized to the current release.
6. Repository ZIP is created, re-opened, and the above checks are repeated against the ZIP contents.

## Native Google Sheets note

A Google Sheets file with a container-bound Apps Script project is a native Drive object. Exporting it as `.xlsx` does not preserve the bound Apps Script project. Therefore the Repository ZIP keeps the authoritative Apps Script distribution sources plus a reference to the Drive template. The Drive template must be updated separately when a release is promoted for end-user distribution.
