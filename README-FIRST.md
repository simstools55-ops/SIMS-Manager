# SIMS Manager v9.2.74 UAT

精密診断統合の安全な中間版。保存済みaDoctor診断JSONの `actions` から、対象記事ごとのaWriter依頼文を読取専用で生成。

- `sbmDoctorPreviewSavedMultiWriterRequests(caseId)` を追加。
- `actions` のない旧診断は拒否。自由記述の自動分割をしない。
- 戦略ナビUI・精密診断UI、承認、改善履歴、モニタリングは変更しない。
- 現行運用へ適用せず、後続の統合UI実装・UATまで保留。
