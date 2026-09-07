# VERSION AUDIT — v6.1.12

Release gate executed before repository ZIP creation.

## Required current-version checks

- Code.gs product header: v6.1.12
- `SBM_VERSION`: 6.1.12
- Full Code.gs canonical copies: identical SHA256
- Starter Code.gs: identical to Full after normalizing only `SBM_EDITION`
- root `VERSION`: 6.1.12
- `shared/VERSION`: 6.1.12
- root/shared `PRODUCT_IDENTITY.json`: version/current_version 6.1.12
- README / README-FIRST / GITHUB_RELEASE_NOTES current headings: v6.1.12
- `RELEASE-NOTES-v6.1.12.md`: present
- `appsscript.json`: Full/Starter common manifest; repository copies byte-identical
- Spreadsheet schema: unchanged in this patch

Historical release notes retain their historical version numbers and are excluded from current-version mismatch detection.
