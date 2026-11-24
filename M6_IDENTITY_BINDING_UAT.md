# M6 existing-case identity binding (UAT only)

Adds `sbmS3BindExistingDoctorCaseUat_(proposalId, caseId, articleId)`. It writes only the S3ProposalID cell on a unique existing Doctor case after strict identity checks and a document lock. Repeated identical calls are idempotent. Conflicts and missing schema fail closed. This does NOT create cases, generate aDoctor referrals, receive responses, or finish M6. Not wired to a user-facing menu. Do not install in production before GAS UAT and full regression.

Base: SBM v9.3.105 M6 Handoff Guard candidate. Runtime version unchanged.
