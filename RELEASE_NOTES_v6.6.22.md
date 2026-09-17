# SIMS Manager v6.6.22

## 日次STEP3 Home Snapshot高速化

- Home Snapshot生成時、改善履歴の各行でBlogName取得のためSettingsシートを繰り返し読んでいた処理を除去。
- BlogNameをSnapshot生成時に1回だけ取得し、履歴タイトル正規化へ再利用。
- Home集計、改善履歴グルーピング、日次判定の仕様は変更なし。
- v6.6.21のSTEP3区間計測を維持し、Home Snapshot時間を実測可能。
