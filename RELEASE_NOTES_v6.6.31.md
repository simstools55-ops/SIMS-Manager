# SIMS Manager v6.6.31

## 変更内容
- 改善履歴高速化で使用した `[HistoryViewPerf]` 一時診断ログを撤去。
- aDoctor精密診断ダイアログ表示のボトルネック特定用に `[DoctorDialogPerf]` 区間計測を追加。
- 計測区間: buildRequestEvidence / validate / jsonSerialize / rememberRequest / upsertCase / workflowSave / showDialog / TOTAL。
- 本版ではaDoctorの診断ロジック・Evidence取得方式・保存方式は変更しない。計測専用版。
