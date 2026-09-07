# SIMS Manager v6.1.21

- Synchronizes Doctor WAIT/MONITOR transitions across Doctor Case, Improvement History, Improvement Trend, and Article Management.
- Performs a one-time recovery of legacy `WORKFLOW_LOCKED` MONITOR cases and closes duplicate pending legacy re-examination cases.
- Restores complete Improvement History presentation styling on the first v6.1.21 open, while keeping subsequent opens lightweight.
- Keeps new Improvement History rows fully status-styled without reformatting the entire sheet.
- Replaces the low-value visible `データ更新日` column in Article Management with visible `ArticleID`; the update date remains stored internally.
- Full displays `v6.1.21`; Starter displays `v6.1.21-Starter`.
