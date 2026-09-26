# SIMS Manager v6.7.59 Release Notes

## 修正内容
日次処理で4週測定を完了し、記事管理が `🔄 再診処置` へ遷移した記事が「今日の改善」に表示されない問題を修正しました。

原因は、STEP2で退避した過去の「今日の改善」の終了/完了ArticleID・URLが、STEP3で新たに生成された再診処置候補にも適用され、候補統合時に除外される場合があったことです。

## 変更範囲
- `sbmRebuildTodayQueueAfterDaily_()` の候補統合条件のみ局所修正。
- `EFFECT_AFTER_OBSERVATION` / `OBS_END:` / 再診処置候補は、過去の終了/完了除外キーより優先して表示。
- 通常候補の終了済み再掲防止は維持。
- v6.7.58の週次測定一括キャッチアップ、4週最終判定、aDoctor/aWriter Workflowは変更なし。
