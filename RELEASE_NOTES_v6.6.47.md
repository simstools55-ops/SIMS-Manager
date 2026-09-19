# SIMS Manager v6.6.47 Release Notes

## SIMS Request Protocol v1
- Full EditionのaDoctor精密診断依頼へ `[SIMS_REQUEST]` エンベロープを自動付与します。
- `PROTOCOL=SIMS-A/1` / `SOURCE=SIMS_MANAGER` / `EDITION=FULL` / `TARGET=ADOCTOR` と RequestID・CaseID・SiteID・ArticleID を出力します。
- 初回診断、カニバリ追加診断、利用者確認後の再診依頼を対象にします。
- Manager内部では従来の診断JSONを正本として保持し、コピー時の外部受け渡しだけをプロトコル化します。
- Starter EditionのaDoctor利用不可仕様、診断ロジック、License Center認証、Manager移管機能には変更ありません。

## Compatibility
- aDoctor Claude v1.5.2 のSIMS Request Protocol v1受付ゲートに対応します。
- エンベロープ後段には従来のJSON本文をそのまま保持するため、Manager側のJSON抽出・回答登録処理は継続利用できます。
