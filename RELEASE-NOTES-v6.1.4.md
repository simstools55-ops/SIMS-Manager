# SIMS Manager v6.1.4

## Fix
- 初回セットアップSTEP2のGoogle Cloud補助導線を、見た目だけのリンクではなく実操作可能なボタンとして実装。
- `window.open()` による外部ページ表示と、ポップアップブロック時のフォールバックリンクを追加。
- 処理開始時はSTEP実行系ボタンのみを無効化し、補助ボタンまで一括で無効化しないよう修正。
- Full / Starter双方へ同一修正を反映。

Spreadsheet schema / appsscript.json に変更はありません。
