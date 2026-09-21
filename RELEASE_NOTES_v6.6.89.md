# SIMS Manager v6.6.89

## 変更内容
- STEP3の処理プロファイル記録をメモリへ蓄積し、終了時に一括書込みする方式へ変更。
- STEP3の処理ログも同様に一括書込みへ変更。
- 処理ログ1件ごとに実行していたシート全面スタイル処理を廃止。
- DailyStepFlowStartedEpoch のプロファイル記録ごとの再読込を廃止し、STEP3開始時にRunIdをキャッシュ。
- 記事管理を状態管理の正本とする設計、候補選定、Workflow、改善判定仕様は変更なし。

## 検証ポイント
- STEP3_PROFILE_OVERHEAD / STEP3_PROCESSLOG_OVERHEAD の大幅減少。
- STEP3_EXIT の所要秒。
- 処理プロファイル／処理ログの記録欠落がないこと。
