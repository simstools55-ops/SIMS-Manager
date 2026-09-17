# SIMS Manager v6.6.23

## 改善の推移 表示高速化

- `sbmOpenImprovementStatus()` を閲覧専用経路へ整理しました。
- 画面を開くたびに全履歴・全推移を読む `sbmRepairMissingActiveEffectRows_()` を通常表示から外しました。
- 旧Creator Directラベル補正 `sbmRepairStaleCreatorDirectEffectLabels_()` も通常表示から外しました。
- 両修復関数は削除せず、互換性メンテナンス用として保持します。
- 改善登録時の履歴／改善の推移同期、7日目・14日目・21日目・28日目の効果測定、判定ロジックは変更していません。

## 性能確認基準

v6.6.22での実測 `sbmOpenImprovementStatus = 35.382秒` を基準に、v6.6.23更新後の同関数実行時間を比較します。
