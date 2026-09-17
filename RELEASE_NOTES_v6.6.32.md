# SIMS Manager v6.6.32 Release Notes

## 目的
aDoctor精密診断ダイアログ表示で約19秒を占めた `buildRequestEvidence` の内部ボトルネックを特定します。

## 変更
`sbmDoctorBuildEvidencePackage_()` に一時診断ログ `[DoctorEvidencePerf]` を追加しました。診断ロジック、Evidence内容、保存フローは変更していません。

## 確認方法
aDoctor精密診断を1件実行し、Cloudログの `[DoctorEvidencePerf]` と `[DoctorDialogPerf]` を確認します。
