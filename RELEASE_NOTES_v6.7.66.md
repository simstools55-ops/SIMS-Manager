# SIMS Manager v6.7.66

## 修正
- 「確認後に再実行」が反応しない不具合を修正しました。
- 原因は、HTML Service の `google.script.run` から末尾 `_` のprivate関数を直接呼び出していたことです。公開ラッパーを追加して再実行できるようにしました。
- GSC / Search Console API / Apps Script 設定の3つの確認ボタンを緑枠表示にし、通常テキストとの区別を明確にしました。
