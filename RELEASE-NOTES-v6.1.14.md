# SIMS Manager v6.1.14

## V6実運用試験修正

- Full / Starter共通の改善ナビ起動処理を修正。
- 「今日の改善」から改善ナビを開く際、ダイアログ表示前に記事管理を同期再検索する処理を廃止。
- 選択行の情報で改善ナビの枠を先に表示し、記事管理・Search Consoleクエリ・記事本文の詳細取得は表示後の既存非同期処理へ委譲。
- 起動時の選択・表示完了・例外を `System_Log` の `ImprovementNaviLaunch` に記録。
- 起動例外時は無反応にせず、利用者へエラーダイアログを表示。
- Starter README / Distribution README に残っていた旧 `v6.1.6` 表記を現行版へ同期。

## Edition方針

Fullを機能正本とし、Starterへ同じ共通修正を同時反映しています。Edition固有の機能境界は変更していません。
