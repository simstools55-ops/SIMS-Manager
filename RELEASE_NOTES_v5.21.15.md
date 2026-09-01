# SIMS Manager v5.21.15-dev

## Diagnostic performance change
- Buffers Improvement Navigator feedback trace checkpoints in memory.
- Flushes all checkpoints to `処理ログ` with one `setValues()` call when the public registration bridge returns.
- Removes per-checkpoint `appendRow()` calls from the registration path.
- Keeps the direct paste -> register UX and existing registration semantics unchanged.

This is an operational diagnostic build. Do not publish as the formal repository release until live timing is verified.
