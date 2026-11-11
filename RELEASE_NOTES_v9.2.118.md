# SIMS Manager v9.2.118 (UAT candidate)

A000103で再開時にRequestIDが `REQ-RESUME-...` に変わる問題を修正。保存済みDoctor Workflow REQUESTを読み戻し、初回RequestIDを保持します。欠落や識別情報不一致時は再開を停止します。既存のCase行・改善履歴・ライセンスには変更しません。Google Apps Script実機での動作確認が必要です。
