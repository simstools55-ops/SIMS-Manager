# SIMS Manager v6.2.15

## Fixes
- Adds repair coverage for completed legacy Multi-Merge steps.
- Detects absorbed articles whose Article DB state is already excluded but whose monitoring cycle is still ACTIVE/REVIEW_REQUIRED.
- Preserves the recorded no-redirect decision while repairing absorbed articles.
- Re-syncs improvement routes and rebuilds Improvement Trend from the latest active history after repair.
- Keeps v6.2.14 prevention logic for future Merge completions.
