# SIMS Manager v9.1.44 — Restore rollback candidate

- Add emergency-snapshot automatic rollback when restore application fails.
- Preserve emergency snapshot ID and set a recovery-required flag if rollback also fails.
- Block daily processing while the recovery-required flag exists.
- Wire the maintenance menu to the interactive restore workflow (test use only).

**Not production approved.** Rollback restores values/formulas only; formatting, validation, protections, and script properties are not restored. Live Google Apps Script integration tests are required before release.
