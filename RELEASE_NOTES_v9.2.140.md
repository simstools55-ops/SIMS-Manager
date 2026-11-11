# SIMS Manager v9.2.140 — Precision writer preview gate UAT

- ROLE_SEPARATION cases request saved writer preview even when legacy status differs from REVIEW_READY.
- Preview server validates saved doctor result and shows explicit failure instead of silently skipping.
- No mutation of diagnosis or article state. v9.2.139 registration handler retained.
