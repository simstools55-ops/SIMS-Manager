# SIMS Manager v6.1.35

Fixes improvement-history date corruption and far-future dates in Improvement Trend.

- Stops destructive history/effect schema rebuilds when headers already match.
- Parses Google Sheets serial dates such as `46266` as 2026-09-01 instead of year 46266.
- Normalizes legacy improvement dates once and restores `yyyy/M/d` formatting.
- Rebuilds Improvement Trend from repaired canonical history data.
- Preserves Full/Starter parity at v6.1.35 / v6.1.35-ST.
