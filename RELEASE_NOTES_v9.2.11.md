# v9.2.11 Release Notes

## Changes
- サイト設定に閲覧環境3択を追加。設定値 `ReadingDevicePolicy` は `BALANCED`、`MOBILE_FIRST`、`DESKTOP_FIRST`。
- 既存サイトは未設定時 `BALANCED` を適用。
- 変更時のみ `ReadingDevicePolicyPrevious` と `ReadingDevicePolicyChangedAt` を記録。
- 保存処理では記事・改善サイクル・モニターを変更しない。
- Starter/Full共通。

## Scope
- aCreator/aWriter/aDoctorへの引き継ぎとShared Editorial Knowledge改修は次段階。現段階では出力を変更しない。
- 静的検査のみ。Apps Script実機での動作確認は未実施。
