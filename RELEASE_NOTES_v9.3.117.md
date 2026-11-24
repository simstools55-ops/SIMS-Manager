# v9.3.117 M6 decision ledger overwrite protection

- Refuse to overwrite any existing decision record when saving diagnostic HOLD snapshots.
- Preserve existing approval or HOLD records on retries.
- No APPROVE writer, no registration authorization; production remains v9.3.108.
- Local syntax and three targeted ledger tests passed; Apps Script UAT pending.
