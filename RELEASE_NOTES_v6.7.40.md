# SIMS Manager v6.7.40 Release Notes

## 診断追加
- 日次処理 STEP3 の「今日の改善」再構築について、原因特定用の診断ログを追加。
- 再構築前に「今日の改善」で完了扱いになっている ArticleID と、記事管理上の作業状態を記録。
- 通常候補、経過観察終了候補、統合後候補の ArticleID を記録。
- シート書込み後に「今日の改善」を再読込し、ArticleID と選択状態を記録。
- 診断ログの Action は `DailyTodayQueueDiag`、Status は `BeforeWrite` / `AfterWrite`。

候補選定ルール、完了除外条件、件数上限、シート書込みロジック、未完了再開ロジック、高速化済み処理には変更ありません。
