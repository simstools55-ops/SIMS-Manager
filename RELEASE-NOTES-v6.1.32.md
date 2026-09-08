# SIMS Manager v6.1.32

- Fix Doctor-result continuation for legacy observation cycles whose Improvement History ID is blank.
- Require same ArticleID, normalized URL, SiteID, observation workflow, improvement date, baseline metrics, and changed sections before adopting a prior Case result.
- Keep strict Improvement History ID matching for modern cycles.
- Backfill a stable Improvement History ID before creating a new re-examination request when a legacy history row has none.
- Preserve explicit Doctor WRITER/MERGE/MONITOR routing from v6.1.30.
- Full: v6.1.32 / Starter: v6.1.32-ST.
