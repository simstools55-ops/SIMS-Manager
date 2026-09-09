# SIMS Manager v6.2.19

## User-facing workflow safety and monitoring classification
- Changes the skip/abort action from internal `処置` terminology to user-facing `今回の改善を取りやめる`.
- Final confirmation explains what happens to the article improvement, article merge, or new-article creation before execution.
- Shows the target article/keyword and uses route-specific continue/cancel labels.
- Keeps the internal `TREATMENT_SKIPPED` state for compatibility, while allowing the shared unfinished-work dialog to close both Site Doctor and normal aDoctor cases safely.
- Renames Writer/Merge result registration controls to describe the actual task: improvement result / merge result / merge completion.
- Fixes Creator Direct new articles being misclassified as `追加経過観察` solely because `next_action` is `monitor`; only aDoctor WAIT/MONITOR evidence now triggers the additional-observation classification.
- Aligns Creator referral monitoring guidance to 7/14/21/28-day measurement.

## Compatibility
- No external contract schema changes.
- Full and Starter remain on the same canonical v6.2.19 code line.
