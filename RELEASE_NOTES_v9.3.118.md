# SIMS Manager v9.3.118 — M6 Decision Transition Guard (UAT candidate)

- Added pure `sbmS3CheckDecisionTransitionUat_` to validate proposed HOLD transitions.
- Requires matching proposal/article identity across saved HOLD record, live evidence, and registration preflight.
- Refuses APPROVE eligibility without verified query GSC, complete evidence, no existing case, and a group-Doctor candidate route.
- Does **not** issue APPROVE, persist decisions, or register Doctor cases. All registration remains blocked.
- Production v9.3.108 should remain deployed pending integrated UAT.
