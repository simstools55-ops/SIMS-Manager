# v9.2.80 — Multi-writer resume snapshot (UAT)

- Added `sbmDoctorMultiWriterResumeSnapshot(caseId)` for indexed, read-only partial-resume inspection.
- Checks article identities and saved receipts; returns pending writer requests without changing any workflow.
- Does not integrate into the visible unfinished-work chooser yet.
- Apps Script runtime and UI tests pending.
