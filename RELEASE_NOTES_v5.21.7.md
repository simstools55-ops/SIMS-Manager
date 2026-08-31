# SIMS Manager v5.21.7

## Today improvement queue consistency

- Today Improvement remains an unprocessed work queue.
- Exclude articles already in improvement, monitoring, or completed state from the main recommendation selector.
- Apply the same exclusion rule to strict selection, fallback selection, and fast queue refill.
- Prevent previously completed articles from reappearing just to fill five slots.
- If five eligible articles exist, refill with other genuinely eligible articles.
- Distribution artifacts are intentionally not regenerated during operational testing.
