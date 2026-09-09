# SIMS Manager v6.2.14

## Fixes

- Close ACTIVE/REVIEW_REQUIRED monitoring cycles when an article is absorbed by Merge.
- Refresh the derived Improvement Trend cache immediately after each Merge step without recording weekly measurements.
- Preserve `連続aMerge` when synchronizing improvement routes from Multi-Merge Doctor Cases.
- Keep the final primary article linked to the newest Merge history cycle while absorbed articles disappear from active monitoring.

## Regression scope

- Sequential Multi-Merge Step 1 -> Step 2 continuation remains unchanged.
- Merge pair validation and result receiver behavior remain unchanged.
- Daily measurement recording is not triggered by Merge cache refresh (`viewOnly=true`).
