# SIMS Manager v9.3.1 — User confirmation extraction fix

- `workflow_handoff.user_confirmation_item` (single string) is accepted alongside `user_confirmation_items` (array).
- The concrete instruction is displayed in the aDoctor confirmation section instead of the non-actionable fallback.
- Explicit completed / incomplete / unclear choices are provided.
- The single item is included in the follow-up request context for the next aDoctor review.
- Existing case records, monitoring data, article content and publication state are unchanged.
- Important: the current confirmation registration workflow still generates an aDoctor follow-up case. It does not automatically mark the original article as monitored.

UAT: Reopen CASE-20261111-A000164-001 and verify that the instruction to check the absorbed 2025-12-25 article is shown. Do not submit a completion response until the action has been performed and checked.
