# SIMS Manager v5.21.4 - Home refresh performance

- Home refresh is display-only by default; maintenance work requires explicit maintenance:true.
- Read Article DB, Effect, and Improvement History only once per Home refresh.
- Reuse the same Improvement History snapshot for treatment history and weekly activity.
- Remove repeated judgment-cell styling from every refresh; apply fixed colors when Home layout is built.
- Remove repeated merge/breakApart operations during normal refresh.
- Update merged ranges through their top-left cells only.
- Keep only the daily-status row as dynamic styling.
- Distribution artifacts are intentionally not regenerated during operational testing.
