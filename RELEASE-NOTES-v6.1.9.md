# SIMS Manager v6.1.9

- 改善ナビのタイトル表示を共通サニタイズ経由へ統一。
- Search Consoleクエリ取得と記事本文取得をクライアントから並列実行。
- 両方の取得完了後にだけ改善ポイント・内部リンク候補を生成。
- SearchConsole_Data参照を対象URLに必要な列へ限定し、全件オブジェクト化を廃止。
- 12秒を超える取得では「時間がかかっています」と状態表示を更新。
- Spreadsheet schema / appsscript.json に変更なし。
