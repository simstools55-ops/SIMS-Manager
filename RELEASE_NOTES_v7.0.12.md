# SIMS Manager v7.0.12 UAT
- 特別改善のWriter処置完了は `SPECIAL_TREATMENT_COMPLETED` として保存し、通常改善の `MONITORING` と区別。
- 特別改善結果の重複登録を冪等化。
- 通常改善の旧モニター履歴を終了する直前にCase種別と特別改善履歴リンクを検証し、特別改善による終了を禁止。
- 既存の通常改善測定履歴・記事管理の作業状態は変更しない。
- 実Google Apps Scriptでの回帰試験は未実施。特別改善登録画面・Case一覧の新状態表示を要確認。
