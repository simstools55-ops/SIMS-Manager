# SIMS Manager v6.7.11 Release Notes

## 修正内容

実運用で、aDoctorが `workflow_handoff.user_confirmation_items` に具体的な利用者確認事項を返しても、Manager画面に内容が表示されず「この記事を開く」だけになるケースを修正しました。

### 変更
- `workflow_handoff.user_confirmation_items` を読み取り、確認項目を番号付きで表示。
- 転送時・そのまま表示時・正規URL・未登録時など、Doctorが返した条件別案内も表示。
- 確認結果は「すべて完了・問題なし」「対処が必要」「確認不能/不明」から登録。
- 登録結果は既存のUSER_CONFIRMATION follow-up Evidenceに入り、Doctor再診依頼を自動生成。

### 影響範囲
USER_CONFIRMATION表示と確認結果のEvidence化のみ。aWriter登録、改善履歴、モニター処理には変更なし。
