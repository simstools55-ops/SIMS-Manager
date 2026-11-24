# M6 S3 proposal identity UAT

- Baseline: SBM v9.3.105 M6 Canonical Case Audit Candidate
- Added `sbmS3ProposalIdentitySchemaPreview_()` as **read-only** schema inspection.
- The function checks `Doctor_Cases` CaseID / ArticleID headers, and whether a proposal-ID column already exists.
- Returns `APPEND_COLUMN_REQUIRED` if the new column is absent; **does not add it**.
- Existing S3 dry-run, article management and case registration remain unchanged.
- Follow-up: validate real sheet headers and backup, then add controlled schema migration and durable idempotent case registration.
- No GAS deployment required. No production application before UAT.
