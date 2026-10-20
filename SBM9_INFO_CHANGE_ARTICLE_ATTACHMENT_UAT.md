# SBM9 UAT — Article source attachment for information-change handoffs

- Uses existing `sbmFetchArticleSource_(url)` and its `SIMS_ARTICLE_SOURCE_V1` payload.
- Appends article source to both aDoctor and aWriter request text in the `記事内容の変更・更新` workflow.
- If fetching fails, shows explicit failure and instructs the agent not to fabricate edits.
- This patch is read-only regarding article publication, improvement history and monitoring state.
- **Limit:** The existing extractor uses a one-hour script cache. After expiry, Doctor and Writer requests may fetch different snapshots. This patch does **not** guarantee an immutable common snapshot; that would require a separate durable evidence store. Existing registered Doctor responses are not overwritten.
- **UAT checks:** generate a Doctor request and a Writer request, verify article source and `truncated` fields, test inaccessible article URL, and verify no monitoring-state changes. Static syntax check passed; Apps Script runtime testing remains outstanding.
