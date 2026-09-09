# SIMS Manager v6.2.3 Repository Baseline

## v6.2.3の位置付け

- 今日の改善／記事管理から始める通常改善も `NORMAL_IMPROVEMENT` として途中状態を保存し、「未完了の作業を再開」から復元します。

Workflow再開・復旧アーキテクチャの正式再編版です。

- Full v6.2.3 / Starter v6.2.3-ST
- 設定・メンテナンスの再開入口を「未完了の作業を再開」へ統一
- 通常aDoctor / Site Doctorを同じCase状態Dispatcherで再開
- 再開時は新規Doctor結果登録欄を隠し、保存済みの現在地点から直接再開
- 個別修復メニューを「データ整合性を点検・修復」へ集約
- TREATMENT_FAILED、依頼JSON欠落、履歴参照欠落、Creator Direct重複/不完全履歴を監査
- Creator Direct重複整理はバックアップ後に安全実行
- Merge吸収記事補正は統合点検画面から既存安全処理を起動
- 旧公開関数は互換用に残し、利用者メニューからは整理
