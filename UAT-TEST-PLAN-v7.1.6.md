# v7.1.6 UAT

1. 試験用スプレッドシートで既存の `DOCTOR_PENDING` CaseID `EMG-20261018-100926-71348506` を確認。
2. `中断案件を確認・破棄` から確認後に破棄し、成功通知に CaseID が表示されること。
3. `特別改善V71` の当該行が `ABANDONED` に変化すること。
4. Apps Script 実行ログの `SIMS_EMERGENCY_CANCEL_BEGIN` と `...VERIFY` で spreadsheet_id / sheet_id / row / before / after を照合。
5. `記事管理` と `改善履歴` の A000006 の通常状態が変化しないこと。
6. 失敗時は再実行を止め、ログと対象スプレッドシートを照合。
