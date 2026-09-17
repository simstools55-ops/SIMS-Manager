# SIMS Manager v6.6.33

## 変更内容
- aDoctor精密診断ダイアログ高速化の最終診断版。
- `[DoctorBuildPerf]` を追加し、Personal Knowledge Context と Evidence 前後の未計測時間を可視化。
- `[DoctorCannibalPerf]` を追加し、カニバリEvidenceの各GSC query→page API呼び出し時間と合計時間を可視化。
- `[DoctorWorkflowPerf]` を追加し、REQUEST保存・META保存の所要時間を分離。
- 診断ロジック、Evidence内容、Workflow仕様は変更しない。
