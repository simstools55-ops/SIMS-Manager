# SIMS Manager v5.21.12-dev

## Fix
- Improvement Navigator now calls the public server function `sbmRegisterImprovementFeedbackJson` from `google.script.run`.
- v5.21.11 called `sbmRegisterImprovementFeedbackJson_`; Apps Script treats trailing-underscore functions as private, so the browser call never appeared in the execution history.
- Internal helper functions remain private.
- Existing direct paste → register UX is unchanged.

## Test focus
- Public bridge exists without a trailing underscore.
- Client calls the public bridge.
- Private raw helper remains internal.
