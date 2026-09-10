# SIMS Manager v6.2.39

「記事情報を更新」の点検速度をコードレベルで見直したRepository Baselineです。

## Changes
- Article DB全27列の `getDataRange()` を廃止し、D:Tの必要範囲だけを1回取得
- 必要な7項目だけを軽量構造へ変換
- 正常タイトル行ではSEOタイトルの分解・判定を行わない
- 更新対象準備も同じ軽量経路へ統一
- v6.2.38で追加した6か月クエリ未取得記事のArticleID・記事タイトル・URL表示を維持

## Unchanged
- 日次処理
- 過去6か月GSC取得ロジック
- 1件だけ診断
- 未発芽判定（未実装）
