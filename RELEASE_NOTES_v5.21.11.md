# SIMS Manager v5.21.11-dev

## Improvement Navigator feedback transport fix

- Extracts the `SIMS_FEEDBACK_Vn` JSON from the pasted aWriter response in the browser before calling Apps Script.
- Sends only the extracted JSON to `google.script.run` instead of the full Human + Machine response.
- Keeps the accepted direct-registration UX; no preview or confirmation step is added.
- Adds `CLIENT_JSON_RECEIVED` as the first server-side trace checkpoint.
- Shows a client-side status after JSON extraction so transport stalls can be distinguished from extraction failures.

This is a development test build for the A000046 live registration investigation.
