# SIMS Manager v5.21.17

## Improvement Navigator UX / startup responsiveness

- Replaced the aWriter prompt-copy success popup with an inline status directly under the copy button.
- Removed the legacy feedback-registration success alert popup and kept completion status inside the dialog.
- Replaced action-dialog failure alerts in the new-article prompt / article-detail navigator button with inline status text.
- Kept confirmation dialogs (OK/Cancel, Yes/No) because they protect destructive or long-running operations.
- Improvement Navigator now opens before Search Console query retrieval and article-source retrieval finish. Heavy retrieval runs asynchronously after the dialog is visible.
- Added a bounded article lookup for navigator startup and avoids reading the saved top-query table when the fresh Search Console query request succeeds.

## Validation

- JavaScript syntax check passed with node --check.
- Focused static checks passed for public async loader, fast article lookup, inline copy status, and removal of action-result alert popups.
- ZIP integrity checked.
