# SIMS Manager v6.6.79

## STEP2 changedCells column profiling
- `STEP2_DB_MERGE` の `changedCells` を列名別に集計して処理プロファイルへ記録。
- 435記事×3セル=1305セルの正体を特定するための計測版。
- 記事DBの書き戻し条件、候補選定、ランク判定、状態管理ロジックは変更なし。
- v6.6.78のSettings一括I/O最適化と既存のSTEP2/STEP3区間計測は継続。
