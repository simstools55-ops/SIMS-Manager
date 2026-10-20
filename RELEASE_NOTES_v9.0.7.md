# SIMS Manager v9.0.7

- aDoctor回答欄はMarkdown・説明・出典を含む回答全文の貼り付けに対応。
- 現在の依頼ID・記事ID・URLと一致するSIMS_INFO_CHANGE_DOCTOR_RESPONSE_V1 JSONのみを抽出。
- 重複候補が複数ある場合は誤登録防止のため拒否。
- 保存する回答は検証済みJSONに正規化し、既存の後続処理を維持。
- 受付画面の案内を全文貼り付け対応に更新。
