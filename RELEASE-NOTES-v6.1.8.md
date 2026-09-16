# SIMS Manager v6.1.8

## Fixes
- 記事タイトル欄へHTMLアンカー文字列が露出する問題を共通サニタイズで修正。既存の汚染セルも記事管理／今日の改善を開く際に補正します。
- 改善ナビの初期表示から一般論のP0/P1/P2を撤去し、本文H2/H3とSearch Consoleクエリの取得完了後にのみ具体的な改善ポイントを生成します。
- 内部リンク候補も同じ根拠情報が揃った後に生成します。
- 日次取得済みクエリを優先利用し、毎回のSearch Console API呼び出しを避けます。本文取得は1時間キャッシュします。

## Compatibility
- Full / Starter共通。
- Spreadsheet schema変更なし。
- appsscript.json変更なし。
