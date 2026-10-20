# Phase 6 — 途中終了の改善率影響試算（読み取り専用）

- `sbmInfoChangeRateImpactPreview({requestId,articleId})` は既存のPhase5監査結果に基づいて、途中終了候補を改善率集計から仮除外した前後を比較する。
- `sbmInfoChangeSimulateRate_` は入力配列を複製し、`INTERRUPTED_INFO_UPDATE` を付与したコピーを集計する。シートは変更しない。
- 実際の終了処理、集計ロジックへの正式な除外条件組み込み、公開完了登録は未実装。
- 注意: 既存 `sbmHomeTreatmentHistoryStats_` は記事単位で成功実績を集約するため、途中終了候補を除外しても過去の成功履歴があれば成功件数は残り得る。これが正しい業務仕様か実データUATで要確認。
- Phase5監査で警告がある場合、試算を停止する。
- UIからは未接続。Apps Script上で関数呼び出しが可能な内部APIとしてのみ追加。
