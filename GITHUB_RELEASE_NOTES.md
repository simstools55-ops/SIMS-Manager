# SIMS Manager v6.2.14

## Fix

3記事以上のSequential Multi-Mergeで中間Stepを完了した後、`MULTI_MERGE_STEP_COMPLETED` のCaseが旧Merge recovery fallbackに拾われ、「未完了の作業を再開」へ再表示される問題を修正しました。

- `MULTI_MERGE_STEP_COMPLETED` を未完了Merge復旧対象から除外
- `SUPERSEDED_*` も同じfallbackから除外
- `MERGE_REQUEST_READY / MERGE_IN_PROGRESS / MERGE_RESULT_RECEIVED / MERGE_USER_ACTION_REQUIRED` 等の実際の未完了状態は従来どおり再開
- Step 1完了後に生成されたStep 2 Caseの継続処理には影響なし

今回の実運用ケースでは、完了済み `CASE-20260909-A000068-001` が残件一覧から消え、A000082 / A000070 のWriter案件だけが残ることを期待します。

Version:
- Full: v6.2.14
- Starter: v6.2.14-ST
