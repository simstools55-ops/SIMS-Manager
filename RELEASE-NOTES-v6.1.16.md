# SIMS Manager v6.1.16

## Fixes
- aDoctor V2 の `allowed_scope` / `blocked_scope` が配列ではなく `{ key: true }` 形式でも安全に受け入れられるよう正規化。
- `review_schedule.next_review_after_days` と `review_schedule.next_review_target_date` を正式に解釈し、再診予定日を保持。
- `dependencies.doctor_treatment_allowed` / `lock_reference_id` をDoctor結果のロック情報として解釈。
- 経過観察終了後のDoctor結果登録で `(n.allowed || []).join is not a function` により停止する不具合を修正。

## Edition policy
- Doctor連携基盤の共通修正として Full / Starter の双方へ同時反映。
- Starter の内部リンク候補最大3件、Fullの最大8件というv6.1.15のEdition差分は維持。
