# SIMS Manager v6.6.48 Release Notes

## aDoctor V2契約への一本化と旧未完了案件の救済
- aDoctor v1.5.3の受付正本 `SIMS_DOCTOR_SINGLE_CASE_REQUEST_V2` にManager側も一本化しました。
- v6.6.47で追加した `[SIMS_REQUEST]` / `SIMS-A/1` 外部エンベロープは、V2契約との二重化になるため外部出力から廃止しました。
- 初回診断・追加診断・利用者確認後の再診は、V2 JSON本文をそのままaDoctorへ渡します。
- v6.6.47以前に保存された未完了aDoctor案件は、再開時に現行V2へ正規化または現在の記事・Case情報から再生成します。
- CaseIDは維持するため、過去の未完了Workflowを別案件として作り直しません。
- StarterのaDoctor利用不可仕様、診断ロジック、License Center認証には変更ありません。

## Compatibility
- SIMS aDoctor Claude v1.5.3 のV2受付ゲートに対応。
- 旧SIMS-A/1付き保存値は再開時のみ後方互換として読み取り、外側エンベロープを除去してV2へ移行します。
