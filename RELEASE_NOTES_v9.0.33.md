# SIMS Manager v9.0.33 — UAT

## aWriter確認事項の見える化
- `AWAITING_USER_DECISION` / `USER_DECISION_REQUIRED` または未解決の `publication_result.user_decision_changes` を検出すると、登録を保留します。
- 確認事項をすべて番号付きで表示し、利用者がaWriterへ回答するよう案内します。
- aWriterが返した最終JSONで通常の登録を再開します。SBMは利用者判断を代行しません。
- 公開状況の外部検証は行いません。

## UAT範囲
- 「未完了の作業を再開」からのaWriter回答画面に確認事項一覧を表示。
- サーバー側の登録本体にも未解決事項ガードを設置（他の登録入口を含む）。
- 実際のGoogle Apps Scriptでの操作試験は未実施。
