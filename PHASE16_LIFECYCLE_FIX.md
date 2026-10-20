# Phase 16: targeted lifecycle correction

## Problem
`sbmMonitoringLifecycleFromHistory_` did not recognize `INTERRUPTED_INFO_UPDATE`, so `sbmNormalizeMonitoringLifecycle_` could rewrite interrupted history to ACTIVE or REVIEW_REQUIRED.

## Change
Preserve `INTERRUPTED_INFO_UPDATE` as an explicit terminal lifecycle status. This is the sole production logic change in this phase.

## Not implemented
No write/commit workflow for publication completion. No change to article work state. No production deployment. Test against a cloned spreadsheet before enabling completion.

## Required integration checks
- interrupted history remains interrupted after normalization
- regular ACTIVE/REVIEW_REQUIRED unaffected
- history measurement fields unchanged
- HOME denominator excludes interrupted records
- new completion commit not yet enabled
