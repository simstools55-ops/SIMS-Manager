# SIMS Manager v6.6.50

## v6.6.50 変更点

- 「未完了の作業を再開」の候補抽出前に、改善履歴とDoctor_Casesをローカル照合します。
- aDoctor→aWriterで正式登録済みの改善履歴を根拠に、改善登録以前の旧aDoctor/aWriter未完了Caseを監査保持のまま終了同期します。
- v6.6.49の一回限り修復フラグを廃止し、0件修復だった環境でも次回以降に再照合します。
- 改善登録後に開始されたCase、Merge/Creator系Caseは整理しません。
- GSC取得、記事ページアクセス、診断処理は行いません。

詳細は `RELEASE_NOTES_v6.6.50.md` を参照してください。
