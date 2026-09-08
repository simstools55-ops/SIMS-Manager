# SIMS Manager v6.1.29

## Fix: observation-complete treatment target isolation

- The selected Improvement Trend item is now fixed by ArticleID + Improvement History ID.
- A stale Doctor Case from a different/legacy cycle can no longer close the current cycle.
- REVIEW_REQUIRED on the current completed monitoring cycle takes precedence over unrelated historical Doctor terminal states.
- A one-item action no longer rebuilds the whole Improvement Trend sheet, preventing neighboring rows/check states from appearing to be processed.
- Articles incorrectly marked Complete by the v6.1.28 legacy-case bug are restored to Monitoring when re-entering the current review-required workflow.
- Full display version: v6.1.29. Starter display version: v6.1.29-ST.
