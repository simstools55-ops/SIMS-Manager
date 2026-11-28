# Version Management Policy

SIMS Manager and Shared Editorial Knowledge use independent version lines.

- SIMS Manager current product version: `5.0.0`
- Full display: `v5.0.0`
- Starter display: `v5.0.0（エディション別表示は実行時ライセンス）`
- Shared Editorial Knowledge: `v3.5.0`

Before every Repository ZIP is created:

1. Run `python tests/check_version_consistency.py`.
2. The script must exit with `PASS`.
3. Confirm the single canonical apps-script/Code.gs.
4. Confirm unified runtime licensing.
5. Do not create separate edition source copies.
6. Confirm ZIP filename, `VERSION`, `SBM_VERSION`, `PRODUCT_IDENTITY.json`, README current-release fields and release notes all match.
7. Do not change the Shared version when only Manager code changes.

配布系列は5.0.0から開始。旧開発系列9.4.12を基準とする。
