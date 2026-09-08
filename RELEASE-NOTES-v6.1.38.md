# SIMS Manager v6.1.38

## Fix

- Improvement History date integrity now compares `改善日` against `AI改善結果JSON.completed_at` during the lightweight Improvement Trend open check.
- This catches one-day shifts even when the spreadsheet timezone has already been changed to Asia/Tokyo before the view is opened.
- JSON cells are read with `getValues()` so the canonical `completed_at` payload is used directly.
- When a mismatch is detected, history dates are repaired idempotently and Improvement Trend is regenerated in lightweight/view-only mode.
- Normal views remain lightweight when dates are already consistent.

Full: v6.1.38  
Starter: v6.1.38-ST
