# UAT rediagnosis answer registration fix

- Show a registration button in DOCTOR_NEEDS_EVIDENCE as well as DOCTOR_REQUEST_READY.
- Permit a new Doctor response in DOCTOR_NEEDS_EVIDENCE and append the prior diagnosis to rediagnosisHistory.
- Preserve existing request ID, article ID, and URL validation.
- No article publication or monitoring changes.
- Known outstanding: 8500-character DocumentProperties record limit, especially for lengthy Doctor replies and accumulated history; not resolved by this patch.
- Static syntax and ZIP integrity only; live Apps Script verification pending.
