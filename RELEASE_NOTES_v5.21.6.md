# SIMS Manager v5.21.6

## Today improvement queue fix

- Fixed a condition mismatch between candidate selection and the fast Today queue refresh.
- Articles whose previous improvement cycle is already complete can be selected again when current GSC data shows new improvement opportunity.
- Only articles currently in an active improvement/monitoring cycle are excluded from refill.
- If saved Today candidates are fewer than the fixed display count of 5, the queue refills from current eligible recommendations.
- Distribution artifacts are intentionally not regenerated during operational testing.
