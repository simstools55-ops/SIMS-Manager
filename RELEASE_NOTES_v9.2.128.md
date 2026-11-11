# SIMS Manager v9.2.128 — 精密診断の再承認受付 UAT

- v9.2.127で確認済みのaDoctor回答プレビューから、既存の `sbmDoctorSubmitMultiArticleForReapproval` を呼び出す明示的な保存ボタンを追加。
- 保存前に利用者へ確認し、旧承認を無効化して `REVIEW_READY` に戻す。旧診断・承認は既存バックアップ機構で保全。
- 記事変更、公開、改善履歴登録、aWriterへの作業依頼は実行しない。
- 次段階で既存承認ゲートと複数aWriter依頼保存を接続する。
- Google Apps Script実機試験は未実施。
