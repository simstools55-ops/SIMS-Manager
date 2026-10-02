# SIMS Manager v6.7.95

## 表示処理の一元化
- 「改善の推移」の表示正本を `sbmStyleEffectSheetViewOnly_()` に統一し、旧 `sbmStyleEffectSheetV2_()` は正本へ委譲。競合していた行高・列幅・自動リサイズを廃止。
- 既存セルの `測定待ち（予定日超過）` を表示時に `測定待ち\n（予定日超過）` へ正規化。判定ロジックは変更しない。
- 「改善履歴」の表示正本を `sbmRepairImprovementHistoryPresentationV6792_()` に統一。改善経路を200px・折り返し、データ行を76px固定。
- 旧表示処理の130px/58px/autoResizeRows等の競合設定を正本への委譲に整理。
- 新規履歴行も同じ表示契約で整形。

データ判定・改善効果測定ロジックには変更ありません。
