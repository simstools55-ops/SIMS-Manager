# Version Management Policy

SIMS Manager and Shared Editorial Knowledge use independent version lines.

- SIMS Manager current product version: `6.2.81`
- Full display: `v6.2.81`
- Starter display: `v6.2.81-ST`
- Shared Editorial Knowledge: `v3.5.0`

Before every Repository ZIP is created:

1. Run `python tests/check_version_consistency.py`.
2. The script must exit with `PASS`.
3. Confirm Full code copies are byte-identical.
4. Confirm Starter code copies are byte-identical.
5. Confirm Full/Starter differ only in `SBM_EDITION`.
6. Confirm ZIP filename, `VERSION`, `SBM_VERSION`, `PRODUCT_IDENTITY.json`, README current-release fields and release notes all match.
7. Do not change the Shared version when only Manager code changes.
