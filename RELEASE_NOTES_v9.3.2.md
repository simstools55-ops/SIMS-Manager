# SIMS Manager v9.3.2

- Restore resumability of Doctor USER_CONFIRMATION cases previously stored as WORKFLOW_LOCKED.
- Prefer USER_ACTION_REQUIRED over workflow lock when Doctor explicitly requests user confirmation.
- Recovery is limited to matching stored Doctor result/CaseID and actionable confirmation; does not touch article management or monitoring history.
