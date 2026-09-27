# SIMS Manager v6.7.65

## 変更点
- Search Consoleデータが0件の場合、最初に設定確認画面を表示します。
- 日次処理ダイアログから「Search Consoleを確認」「Search Console APIを確認」「Apps Script設定を確認」へ直接移動できます。
- 設定確認後の再実行でもデータが0件の場合は「データ待ち」とし、約1週間後の再実行を案内します。
- v6.7.64で使用した `LastSuccessfulDailyUpdateEpoch` によるGSC取得実績判定は廃止しました。
- GSCデータを正常取得した場合は、0件確認状態を自動解除します。
