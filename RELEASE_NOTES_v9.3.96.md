# v9.3.96 — S3連携試験の本番隔離

- S3連携メニューが日次データ取得の確認ダイアログ内に誤挿入されていた配置不具合を修正。
- 通常のonOpenで、Script Properties `SBM_S3_INTEGRATION_UAT=ON` の場合だけ試験メニューを表示。
- 受付UI・照合APIをサーバー側でもフラグで保護。既定OFF、既存記事・案件・履歴に書き込みなし。
- `sbmS3EnableUat` / `sbmS3DisableUat` は実機試験時の明示的な切り替え用。
- 本番GAS実機、ライセンス、既存メニューの回帰試験は未実施。
