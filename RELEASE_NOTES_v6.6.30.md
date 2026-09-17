# SIMS Manager v6.6.30 Release Notes

## 改善履歴の表示高速化

`sbmOpenImprovementHistory()` の区間計測で、`viewLight` 約2秒、`style` 約1秒が主要コストと判明しました。

`sbmEnsureImprovementHistoryViewLight_()` は従来、キャッシュ済みでもヘッダー背景色が `#0b8043` か確認していました。しかしMONOテーマ適用後はヘッダー色が変わるため、正常なキャッシュを毎回破棄し、全行の行高・折返し・配置・判定色などを再適用していました。

v6.6.30では、既存の完了フラグを正本として通常表示時の全行再書式を停止します。ヘッダー構造の整合確認は `sbmEnsureVisibleMeasurementSchemasV623_('history')` が引き続き担当します。

`[HistoryViewPerf]` は今回の高速化効果を確認するため残しています。改善履歴を開き、TOTAL / viewLight / style の実測値を確認してください。
