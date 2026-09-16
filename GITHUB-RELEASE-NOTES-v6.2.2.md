# SIMS Manager v6.2.2

## Summary

v6.2.2 extends the unified unfinished-work resume mechanism to the normal improvement route used by **Today** and **Article Management**. Normal aWriter improvements are now checkpointed even though they do not create Doctor Cases.

## Changes

- Adds a lightweight `NORMAL_IMPROVEMENT` workflow checkpoint in `Doctor_Workflow_State`.
- Saves the selected article, source entry, improvement kind, and reason when Improvement Navi opens.
- Updates the checkpoint to `WRITER_IN_PROGRESS` when the aWriter request becomes ready.
- Marks the normal workflow `COMPLETED` when `SIMS_FEEDBACK_Vx` registration succeeds, including idempotent re-registration.
- `未完了の作業を再開` now compares normal-improvement checkpoints with Doctor Case updates and resumes the most recently touched workflow.
- Interrupted normal improvements reopen Improvement Navi directly, regardless of whether they started from Today or Article Management.
- Doctor, Merge, Creator, monitoring, and integrity-audit behavior from v6.2.1 remains unchanged.

## Versions

- Full Edition: v6.2.2
- Starter Edition: v6.2.2-ST
