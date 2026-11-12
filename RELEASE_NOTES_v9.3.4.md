# SIMS Manager v9.3.4

## 対応
- A000024のような旧版で保存されたWRITER_FINAL_REQUEST_READY案件を再開すると、保存済みaDoctor診断を用いて現行のaWriter紹介状を再生成します。
- 新規の追加診断経由でも同じ形式を発行します。
- aWriterからのSIMS_WRITER_TREATMENT_RESULT_V1を本人確認・公開確認して、SIMS_FEEDBACK_V2に変換し通常の改善履歴に登録します。

## 安全策
- 旧Caseや改善履歴の一括移行・削除は行いません。
- 記事本文が取得できなければ正規紹介状を発行せず、処置を保留します。
- 本修正のApps Script実運用試験は未実施です。
