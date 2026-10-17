# SIMS Manager v7.0.4 UAT

Fix P56_INVALID_DECISION:UNRECOGNIZED_DECISION for verified aDoctor V2 special-improvement Writer/Merge referrals when explicit special_improvement_decision is absent. Requires matching intake, CaseID, RequestID, treatment referral and verified assessment. Does not change Doctor JSON, existing monitoring history, or explicit no-change behavior.
