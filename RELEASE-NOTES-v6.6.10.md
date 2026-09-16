# SIMS Manager v6.6.10

## Purpose
改善ナビModal障害の切り分けを、実際に選択した記事データまで進める診断版。

## Changes
- 「改善ナビ表示診断（実データPayload）」を追加。
- 今日の改善／記事管理で選択した実記事から、改善ナビと同じseed項目を生成。
- 現行改善ナビと同じ `JSON.stringify(...).replace(/</g, "\\u003c")` 方式でJavaScriptへ埋め込み、最小HTML＋共通Modal経路で表示する。
- 実データPayloadが正常なら、原因を改善ナビ本体の複合HTML/JavaScript構造へさらに限定できる。
- 改善ナビ本体の業務ロジックは変更しない。
