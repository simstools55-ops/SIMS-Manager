# SIMS Manager v9.2.41 (UAT)

- 登録後に改善履歴ID・記事ID・URLを再検証。
- 改善の推移に対象履歴の観察行があることを確認。
- 旧モニターがACTIVE/REVIEW_REQUIREDのままならチェックポイント確定を拒否。
- 不整合時は部分完了として履歴を保持し、同じWriter JSONで再実行する。
- Nodeによる6ケースの検証を通過（実GAS環境未検証）。
- aMerge連携、複数記事中断復旧、GAS UATは未検証。
