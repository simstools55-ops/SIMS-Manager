# SIMS Manager v6.6.6

## 改善ナビ起動の回帰修正
- v6.6.5で発生した `Ui.showModalDialog` 起動エラーを修正。
- ダイアログ表示を実績のある共通同期UI経路 `sbmShowThemedModalDialog_` に統一。
- Checkpoint保存はダイアログ描画後に `google.script.run` で非同期実行。
- Search Consoleクエリ取得・記事本文取得も表示後の非同期処理を維持。
- 表示前にはネットワークアクセス、WorkflowState全件検索、Checkpoint書込を置かない。
- 今日の改善・記事管理からの通常改善入口は共通起動処理を使用。
- Doctor / Writer / Creator / Mergeおよび今日の改善選定ロジックは変更なし。
