# SIMS Manager v5.21.10-dev

## Purpose

Diagnostic patch for the aWriter feedback registration path after v5.21.9-dev still exceeded 90 seconds in real operation.

## Changes

- Add durable `改善結果登録診断` checkpoints to `処理ログ`.
- Trace starts before raw aWriter response normalization, so stalls before the main registration function are visible.
- Trace normalization, article identity lookup, duplicate check, article DB row lookup/write, improvement history write, Personal Knowledge start/end, and completion.
- No change to the registration data contract or publication semantics.

## Expected use

Run the same A000046 registration once. If it stalls, inspect the last `改善結果登録診断` row in `処理ログ`; the last completed checkpoint identifies the slow phase.
