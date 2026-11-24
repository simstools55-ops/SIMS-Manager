# M6 canonical case-store audit candidate (2026-11-22)

- Removed the phantom Strategy_Cases requirement from S3 registration dry-run.
- Doctor_Cases remains the sole existing case store checked by this dry-run.
- Missing proposal ID column in Doctor_Cases still triggers HOLD; no schema migration is performed.
- No writes, registration, publication, or automatic Doctor request.
- Next gate: decide how proposal_id is persisted in Doctor_Cases, confirm schema compatibility, then implement an idempotent registration transaction.
- No Apps Script deployment is required for the existing spreadsheet-bound workflow.
