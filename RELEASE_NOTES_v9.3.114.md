# M6 v9.3.114 — Existing Doctor case identity guard

- Fix: `sbmS3BindExistingDoctorCaseUat_` now rejects S3 proposal IDs whose embedded article ID differs from the supplied article ID before acquiring a lock or writing.
- Existing read-only approval preview remains HOLD. No approval-to-registration authorization was implemented in this candidate.
- Production v9.3.108 should remain unchanged until end-to-end authorization is tested.
- This patch is local-only, not a GAS UAT pass.
