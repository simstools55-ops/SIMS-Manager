# SIMS Manager v9.3.109 — M6 Approval Gate Preview (UAT candidate)

- Adds `sbmS3ApprovalGatePreviewJson(json)` as a read-only, fail-closed approval preview.
- Distinguishes existing Doctor case priority, group Doctor review awaiting approval, and monitoring conflicts.
- No APPROVE decision, Doctor case creation, dispatch, response registration, publication, or sheet mutation added by this function.
- S3 site ID differs from SBM site ID in supplied test data; identity mapping and canonical context resolution remain open blockers.
- Local syntax check and isolated gate regression passed. No GAS runtime test of this new candidate yet.
- Keep production v9.3.108 until explicit UAT verification; do not deploy this candidate merely to register cases.
