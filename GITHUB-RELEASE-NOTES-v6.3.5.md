# SIMS Manager v6.3.5

## v6.3.5 — SERPレビューJSON V2受信修正

- `SIMS_MANAGER_SERP_ENTRY_REVIEW_V2` を正式に受信可能に修正。
- 旧 `SIMS_MANAGER_SERP_ENTRY_REVIEW_V1` も後方互換で受け付け。
- 生成依頼がV2なのに受信側がV1しか受け付けない不整合を解消。
- JSON抽出のエラーメッセージもV2/V1対応へ更新。
- 依頼formatと受信formatの整合性を検証する回帰テストを追加。
