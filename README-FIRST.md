# SIMS Manager v6.6.54

## v6.6.54 変更点

- 「改善の推移」へ移管済みの記事は、その改善処置に属する旧aDoctor/aWriter Caseを「未完了の作業を再開」に表示しません。
- Case作成日時ではなく、「改善の推移」への移管をDoctor→Writer処置の完了境界として判定します。
- 経過観察終了後に「改善の推移」から正式開始した再診（`EFFECT_AFTER_OBSERVATION`）は、新しいWorkflowとして再開対象に残します。
- Merge / Creator系Workflowは従来どおり別処置として保持します。
- Doctor_Casesの履歴自体は削除しません。

詳細は `RELEASE_NOTES_v6.6.54.md` を参照してください。
