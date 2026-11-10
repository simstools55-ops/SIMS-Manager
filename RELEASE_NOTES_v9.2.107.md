# SIMS Manager v9.2.107 — Weekly measurement schedule offline regression (UAT)

- Added executable offline tests of actual `sbmHistoryMeasurementState_`, `sbmNextWeeklyDueDate_`, and `sbmMeasurementDueStatus_` functions for 7/14/21/28-day schedule, overdue cases, and two independent article histories.
- Existing runtime workflow logic unchanged. No copied Manager or license bypass.
- These tests do not verify Apps Script triggers, GSC acquisition, or real daily jobs.
