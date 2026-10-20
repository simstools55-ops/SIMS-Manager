# v9.0.0 UAT Phase 2

- 記事内容の変更・更新: 受付内容の保存、aDoctor依頼文生成、保存済み依頼文再表示。
- 保存先: SpreadsheetのDocumentProperties (`SIMS_INFO_CHANGE_V9_<ArticleID>`)、記事ごと1件。
- 重複保存を拒否。正式な履歴・ステータス遷移・Doctor回答取り込み・Writer連携は次フェーズ。
- 既存の改善履歴、記事管理、モニターは読み取りのみ。公開操作なし。
- セキュリティ: 受付時と保存時に記事選択を再照合、入力長・URL・カテゴリ検査、ドキュメントロック。
- UATではGoogle Apps Script実動作未検証。実データへの導入は行わないこと。
