# SIMS Manager v6.7.49 Release Notes

- Home画面を開く／更新する処理で発生していた `ReferenceError: profiler is not defined` を修正しました。
- 原因は `sbmOpenHome()` が profiler を生成していないにもかかわらず、管理用シート非表示処理の直後で `profiler.lap(...)` を呼び出していたことです。
- `profiler.lap(...)` だけを除去し、`sbmHideOptionalAdminSheets_()`、Homeレイアウト判定、必要時のHome再構築、テーマ維持、Homeへの画面遷移は維持しています。
- v6.7.48で確認されたバージョン不整合（Code.gs先頭コメントが6.7.46、VERSIONが6.7.33）も修正し、主要リリース表記を6.7.49へ同期しました。
- v6.7.48の孤立 `✏️ 改善中` 整合処理には変更を加えていません。
