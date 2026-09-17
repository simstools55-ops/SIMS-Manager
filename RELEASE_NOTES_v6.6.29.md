# SIMS Manager v6.6.29 Release Notes

## 目的
改善履歴 `sbmOpenImprovementHistory()` の表示時間 7.433秒を区間計測し、次の高速化対象を特定する診断版です。

## 変更
- 改善の推移に残っていた `[EffectViewPerf]` 一時診断コードを整理。確定済みの軽量表示処理は維持。
- 改善履歴に `[HistoryViewPerf]` を追加。
- `sheetLookup / schema / viewLight / filter / style / showSheet / activate / TOTAL` を実行ログへ出力。
- 表示仕様、履歴データ、判定ロジックは変更しません。

## 実運用試験
改善履歴を1回開き、Apps Scriptの実行ログに出る `[HistoryViewPerf]` の各値を記録してください。特に `style` が大きい場合は、記事管理と同じキャッシュ方式・再適用抑止の追加最適化を検討します。
