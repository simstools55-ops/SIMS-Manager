# SIMS Manager v6.2.8

## Fixes
- Fixed `Package全文を復元` for Merge workflows created from normal Writer `follow_up_referrals`. These cases use `SIMS_WRITER_FOLLOW_UP_REFERRAL_V1`, not a Doctor V2 result, so the restore path now rebuilds the package directly from the saved synthetic referral and current article/Evidence data.
- `未完了の作業を再開` now opens a loading dialog immediately and shows a spinner while SIMS scans/migrates unfinished workflows.

## Test focus
Use the real A000068 / H000050 Merge workflow. Open `未完了の作業を再開`, confirm the loading spinner appears immediately, then press `Package全文を復元` and verify the full Merge request is displayed.
