# M6 Proposal Column Migration UAT Candidate

- Adds `sbmS3MigrateProposalIdentityColumn_()` to Code.gs.
- Explicit invocation only; no onOpen, intake, or daily processing hook.
- Requires existing UAT guard, document lock, canonical Doctor_Cases, CaseID and ArticleID columns.
- Appends S3ProposalID once; repeat calls return ALREADY_PRESENT.
- No Doctor case creation, article edits, or publication.
- This is a candidate, not an approved production migration. Verify against a backup/copy first.
