# SIMS Manager v6.6.36 Release Notes

## 変更内容
- aDoctor精密診断ダイアログ高速化の実運用確認を完了しました。
- `[DoctorEvidencePerf]`、`[DoctorBuildPerf]`、`[DoctorWorkflowPerf]`、`[DoctorDialogPerf]` の一時性能診断コードを撤去しました。
- v6.6.35までに導入したSettings重複読込の集約、Personal Knowledge高速参照、カニバリEvidence取得集約はそのまま維持します。

## 確認済み実測（診断コード撤去前）
- aDoctor精密診断ダイアログ TOTAL: 17秒
- buildRequestEvidence: 9秒
- Evidence Package: 約8.1秒

診断内容・Evidence・保存フローの仕様変更はありません。
