# SIMS Manager v9.0.27 — UAT candidate

- STEP 6: add 「ライセンス認証へ進む」 button when no recorded active license exists; delegate to existing `sbmLicenseActivationTest()`.
- STEP 6: clarify setup completion versus license readiness; keep daily entry restricted to setup-complete + recorded license.
- Update `docs/setup.html` to the six-step flow and current product name.
- Existing license validation, daily processing, Search Console and article logic unchanged.
- Live tests: verify STEP 6 display on the existing registered FULL environment. Unregistered branch remains untested in live environment.
