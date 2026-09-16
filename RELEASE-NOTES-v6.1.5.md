# SIMS Manager v6.1.5

- 初回セットアップ STEP1〜STEP6 のダイアログ実装を横断監査。
- 実行／スキップ／終了ボタンを明示的な addEventListener 登録へ変更。
- STEP2 のGoogle Cloudプロジェクト確認／Search Console APIボタンも同じイベント方式へ統一。
- 処理中スピナー、失敗時のボタン再有効化、Home移動時のエラー復帰を確認。
- サイト設定ダイアログの失敗時復帰処理にあった未定義関数参照も修正。
- Full / Starter の現行バージョン表記を v6.1.5 に同期。
- Spreadsheet schema / appsscript.json は変更なし。
