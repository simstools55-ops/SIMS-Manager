# SIMS Manager v6.6.72

- v6.6.71 のステージ遷移監査ログが「処理ログ」に出力され、「処理プロファイル」には表示されない問題を修正。
- STEP1_EXIT / STEP2_ENTER / STEP2_WORK_READ / STEP2_EXIT / STEP3_ENTER / STEP3_EFFECT_BEGIN / STEP3_EXIT を「処理プロファイル」にも記録。
- STEP3 の主要区間（改善の推移更新、今日の改善整合、未完了整理）も「処理プロファイル」に記録。
- 日次処理の業務ロジック、記事管理を状態管理の正本とする設計、候補判定条件は変更しない。
