# SBM9 UAT — Info Change Writer handoff

- The Writer request now uses the existing `SIMS_WRITER_TREATMENT_REQUEST_V1` contract.
- `case_id` is namespaced `INFOCHANGE-<request_id>` to avoid collision with precision diagnosis cases.
- The existing article extractor supplies `article.source_content` on demand.
- `doctor_referral.allowed_scope` comes from registered Doctor findings; no inference is added.
- The existing `SIMS_WRITER_TREATMENT_RESULT_V1` response contract is requested, but the special-change UI does not yet implement a result-registration workflow. Do not attempt to register the result through precision-diagnosis Case registration.
- No monitoring, publication, or article state is modified.
- Writer copy button added to the special-change dialog.
- Pending UAT: Writer accepts contract; missing-source handling; long request payload; UI copy behavior.
