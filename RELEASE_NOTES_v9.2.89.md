# SIMS Manager v9.2.89 UAT — 複数記事の公開申告を記事別に保存

- `sbmDoctorConfirmMultiWriterPublication(caseId,articleId,articleUrl,publicationDate,detail)` を追加。
- 利用者の明示的な公開申告を記事別に保存し、同一内容の再登録は冪等に扱う。
- 記事ID・URL・承認済みaWriter依頼を照合し、異なる内容への上書きを拒否。
- `sbmDoctorInspectMultiWriterPublications(caseId)` で記事別の申告状況を確認。
- 公開申告は外部サイトの公開検証ではなく、改善履歴・測定データは変更しない。
- Apps Script実機試験・画面接続は未実施。運用環境へ適用しない。

