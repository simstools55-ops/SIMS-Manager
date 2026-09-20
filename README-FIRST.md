# SIMS Manager v6.6.57

## v6.6.57 変更点

- 未完了処理の開始時に「改善の推移」のArticleID / URLを正本として照合します。
- 「改善の推移」へ移管済みの記事に残る旧 `Doctor_Cases` / `Doctor_Workflow_State` / 通常改善Workflowを物理削除してから未完了一覧を生成します。
- ACTIVE・要再診・経過観察終了などの測定状態を、未完了側では判定しません。
- 観察終了後に明示的に新規開始した `EFFECT_AFTER_OBSERVATION`（`explicit_new_cycle=true`）だけは別サイクルとして保持します。
- 再診は旧Caseを復活させず、新しいWorkflowとして開始します。

詳細は `RELEASE_NOTES_v6.6.57.md` を参照してください。
