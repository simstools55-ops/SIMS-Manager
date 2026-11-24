# M6 canonical Doctor persistence UAT candidate

- Adds S3ProposalID to canonical Doctor_Cases header definition.
- Existing sbmDoctorUpsertCaseFromRequest_ preserves all extension columns.
- Optional payload.source_proposal_id / payload.s3_proposal_id binds proposal to case without resetting existing case status.
- Conflicting article/case/proposal identity fails closed.
- No S3 proposal execution endpoint, automatic aDoctor dispatch, or answer registration added.
- Keep UAT only; GAS integration and full workflow regression pending.

Commit: fix(sbm): preserve S3 proposal identity in canonical Doctor persistence
