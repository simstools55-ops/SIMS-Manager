# SIMS Manager v6.2.89

## v6.2.89 — 個別Workflow再開画面の空白表示を修正

- 個別再開ダイアログのメタ情報表示に追加した改行が、HTML出力後のJavaScript文字列内で実改行となり構文エラーになっていた問題を修正。
- `\n` をブラウザ側JavaScriptへ正しく残すよう二重escape化。
- 案件名・ArticleID・作業内容・状態・CaseIDをサーバー側でも先行描画し、client scriptに問題が起きても完全な空白画面にならないfallbackを追加。
- 「再開データを準備しています…」の初期表示を追加し、何をしているか分かるようにした。
- Full / Starterを同一修正・同一バージョンで同期。

