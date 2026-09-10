# SIMS Manager v6.2.40

## Article information update redesign

- Returned the Article Info Update flow to the deficiency-list model: identify only rows whose article title or main query is missing/invalid, keyed by ArticleID + URL.
- Audit no longer performs web requests, GSC requests, H1/title mismatch analysis, SEO-title analysis, or impression-based branching.
- Update target preparation uses the same simple deficiency rules as the audit.
- Added three safety gates around Article DB writes: identity check before retrieval, identity + previous-value check immediately before write, and post-write value verification.
- Preserved the six-month main-query lookup and the completion list for URLs whose query still cannot be retrieved.
- Daily processing and ungerminated-article logic are unchanged.
- Full: v6.2.40 / Starter: v6.2.40-ST.
