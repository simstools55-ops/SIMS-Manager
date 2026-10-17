# SIMS Manager v7.0.3 — UAT

- Correct special intake progress: an `受付済` record without a Case link is `Doctor依頼待ち`, not a Case-link failure.
- Add an action in the progress dialog to navigate to the exact article-management row for the intake. Navigation is read-only and validates intake identity and uniqueness.
- Keep the existing menu-based Doctor request creation. The new action does not issue a Doctor request or modify Case links.
- Do not auto-repair A000001 follow-up Case relationships; unresolved cases remain guarded.
- The official-source URL input validation and full case-specific action flow remain future work.
- JavaScript syntax checked; Google Apps Script live execution not yet tested.
