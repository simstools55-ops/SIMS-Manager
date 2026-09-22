# SIMS Manager v6.7.1 Release Notes

## Fix

改善ナビの「閉じる」処理を修正しました。v6.7.0では、クリック後に `sbmCheckpointImprovementNaviClose` のサーバー処理が完了するまで `google.script.host.close()` を実行しない構造だったため、ダイアログが数秒間そのまま残ることがありました。

通常改善Workflowは改善ナビを表示する前に `sbmNormalImprovementWorkflowStart_` で保存済みです。そのため閉じる時の同期Checkpointは必須ではなく、重複処理でした。v6.7.1では閉じる操作を即時化し、この同期再保存を行いません。

この変更により、登録完了後にダイアログを閉じた際、完了済みWorkflowを未完了として再生成するリスクも防ぎます。

高速化フェーズ全体を再開する変更ではなく、実運用試験で確認された「閉じる操作の待ち時間」に対する限定修正です。
