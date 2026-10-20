# SIMS Manager v9.0.0 — UAT Phase 1

Base: v6.8.5 Repository. No v7.1.x special-improvement implementation imported.

- Added selected-article information update entry in Article Management and Improvement Trend/History menus.
- Resolves exactly one selected data row from Article Management, Improvement Trend, or Improvement History against the canonical Article Management database.
- Rejects multiple checkboxes, checkbox/active-row mismatch, ambiguous IDs/URLs, headers, multi-row selection, and out-of-scope records.
- Read-only intake preview supports multi-select change types and multiline official URLs. No data persistence, Doctor dispatch, or monitoring state changes in Phase 1.
- Existing '記事情報を更新' daily data-refresh action remains unchanged; new action is '選択記事の情報を更新'.
- Full/Starter gating for future Doctor workflow remains to be defined; this preview does not invoke AI.
