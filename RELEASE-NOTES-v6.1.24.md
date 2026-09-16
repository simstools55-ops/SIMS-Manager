# SIMS Manager v6.1.24

## Fixes
- Added overdue weekly-measurement catch-up detection using Japan-local calendar dates.
- Improvement Trend now shows `測定期限超過` when a scheduled measurement date has passed but the slot is still unrecorded.
- Daily measurement processing rechecks overdue active cycles and records the next missing weekly slot when eligible.
- Measurement registration failures now log a concrete reason to `System_Log` (`MeasurementCatchup`) for diagnosis.
- Full display version: `v6.1.24`; Starter display version: `v6.1.24-Starter`.
