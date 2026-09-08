# SIMS Manager v6.1.37

- Spreadsheet timezone is normalized to `Asia/Tokyo`, matching `appsscript.json` and SIMS canonical date handling.
- Improvement History date repair uses `AI改善結果JSON.completed_at` as authoritative when available.
- Google Sheets serial dates are converted into canonical Tokyo calendar dates.
- Improvement Trend self-heals and rebuilds only when timezone/date repair is required.
- Prevents one-day shifts caused by Spreadsheet timezone mismatches such as `America/Los_Angeles`.
