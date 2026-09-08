# SIMS Manager v6.1.33

## Doctor continuation lifecycle cleanup

- Continuation cases now explicitly supersede the prior Doctor case instead of leaving two apparently active/terminal branches.
- Superseded cases remain stored for audit, but current-state resolvers ignore them.
- `Doctor_Workflow_State` META records the predecessor/successor relationship.
- aWriter completion synchronizes the current workflow META to `TREATMENT_COMPLETED_MONITORING` and records the new Improvement History ID.
- A one-time v6.1.33 repair reconciles continuation records created by v6.1.31/v6.1.32.
