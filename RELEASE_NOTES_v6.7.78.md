# SIMS Manager v6.7.78

- 「改善の推移」を開く際に、改善履歴にACTIVE/REVIEW_REQUIREDで存在するのに改善の推移へ欠落している案件を軽量復旧します。
- 既存の `sbmRepairMissingActiveEffectRows_()` を接続するだけの局所修正で、最大30件の確認上限と重複防止を維持します。
