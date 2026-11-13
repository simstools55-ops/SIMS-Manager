# SIMS Manager v9.3.23 — aMerge partial-result resume

- Restore CaseID/result-ID-verified saved aMerge drafts even when `publication_ready` is false.
- Separate draft existence from publication approval. Do not change stored aMerge response or Google Drive artifacts.
- Resume into explicit user-action review status for non-publication-ready drafts; no automatic publication or redirect.
- Preserve missing-content and identity-mismatch safety stops.
- Regression tests: partial draft, ready draft, wrong CaseID, wrong result ID, empty content.
- Validation is mocked; Google Apps Script live integration must be verified in the user's environment.
