# SIMS Manager v6.2.7

## Fix
Normal-improvement Writer feedback can return `analysis_extensions.follow_up_referrals` with `type: MERGE` after the user chooses article consolidation. v6.2.7 promotes that saved decision into the formal aMerge workflow instead of leaving it only inside Improvement History.

Existing saved feedback is also recovered when **未完了の作業を再開** is opened. This allows real cases such as A000068 / H000050 to become a resumable aMerge case without editing spreadsheet state manually.
