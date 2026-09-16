# SIMS Manager v5.21.3 - Product Edition operational test performance fix

- Fix STEP 3 double execution: daily finalization no longer calls full Home refresh.
- Add daily-fast effectiveness update path.
- Skip legacy Doctor reconciliation, lifecycle normalization and route repair on every daily STEP 3.
- Remove STEP 3 before/after full improvement-history scans used only for measurement counting.
- Preserve Effect sheet formatting instead of clear + full restyle on every daily run.
- Avoid sheet-side sort, autoResizeRows, full styling and SpreadsheetApp.flush on daily fast path.
- Update Home daily status only after STEP 3 completion.
- Synchronize Home version cell on spreadsheet open without rebuilding Home.
- Open Home with light/display-only refresh.
- Replace O(n^2)-style Home treatment-history grouping with alias-indexed grouping.
- Distribution artifacts are intentionally not regenerated during operational testing.
