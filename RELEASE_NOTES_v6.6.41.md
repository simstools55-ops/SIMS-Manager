# SIMS Manager v6.6.41

## 修正内容
- `sbmResumeUnfinishedWorkflowCore_()` の通常改善とDoctor系Workflowの選択ロジックを修正。
- 通常改善WorkflowをDoctor系Caseと同じ「未完了の作業」候補へ統合。
- 複数の未完了Workflowがある場合、最終更新時刻だけで自動的に別系統へ進まず、利用者が選んだWorkflowを再開。
- 選択時は `workflowType` と `workflowId` を引き継ぎ、通常改善では選択したWorkflow IDのMETAを再検証してから改善ナビを表示。
- 未完了0件時の未定義変数参照も併せて除去。

## 期待結果
「未完了の作業を再開」で選択した案件と、実際に開く改善ナビ／Doctor系画面が一致し、別Workflowの記事へ誤遷移しません。

## 互換性
- Full: 通常改善 + aDoctor/Writer/Merge/Creator系を統合選択。
- Starter: 従来どおり通常改善Workflowのみ再開対象。
