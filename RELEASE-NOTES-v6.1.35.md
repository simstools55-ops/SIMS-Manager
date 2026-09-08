# SIMS Manager v6.1.35

## Fix

A numeric Google Sheets date serial (for example `46266`) could lose its date format during schema migration and later be parsed as the year 46266. This produced invalid Improvement Trend dates and `#NUM!` elapsed days.

## Changes

- `sbmEnsureHistoryAndEffectSchemas_()` now uses the non-destructive fast schema check and migrates only on an actual header mismatch.
- `sbmParseDate_()` now recognizes Google Sheets/Excel-compatible serial dates and rejects implausible pure-numeric dates.
- A one-time v6.1.35 repair normalizes the Improvement History `改善日` column to Date values with `yyyy/M/d` formatting.
- Improvement Trend is regenerated from the repaired canonical history values, correcting existing invalid dates.
- Required migrations now preserve `モニター状態`, `観察予定回数`, and `追加測定JSON`.
