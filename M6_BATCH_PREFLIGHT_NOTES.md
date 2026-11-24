# M6 batch preflight candidate

- Canonical identity index for Doctor_Cases; duplicate/malformed IDs fail closed.
- Registration dry-run now recognizes S3ProposalID (previously omitted).
- New sbmS3RegistrationBatchPreflightJson() returns REUSE_EXISTING_CASE for matching identity but does not create or modify cases.
- No automatic migration, no Doctor request dispatch, no publication, no production activation.
- Formal registration and aDoctor workflow integration remain pending; require explicit case schema and GAS UAT.
- Runtime version unchanged (v9.3.105 UAT candidate).
