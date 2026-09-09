# SIMS Manager v6.2.11

- 「未完了の作業を再開」でサーバー処理完了後も待機スピナーが残り続けるUI回帰を修正しました。
- `sbmResumeUnfinishedWorkflowCore_()` の成功時に待機モーダルを明示的に閉じ、サーバー側で生成済みの再開ダイアログを前面表示します。
- failure handlerに加え45秒のUIタイムアウトを追加し、無限スピナー状態を防止します。
- v6.2.9の連続Merge Workflow機能は変更していません。
