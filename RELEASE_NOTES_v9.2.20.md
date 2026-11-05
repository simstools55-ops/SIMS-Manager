# SIMS Manager v9.2.20 — UAT candidate

- Initial aWriter response: automatic Doctor follow-up decision before registration.
- Doctor needed: registration held, referral request generated, diagnosis accepted as `SIMS_FOLLOWUP_DOCTOR_V1`.
- Doctor `NO_REVISION`: register initial Writer response. `REVISION_REQUIRED`: generate final Writer referral, register final Writer response without further diagnosis.
- Resume from the unfinished workflow list with saved requests/responses.
- Normal registration and 7/14/21/28 monitoring continue through existing handler.

**Test status:** JavaScript syntax and isolated follow-up flow tests PASS. Apps Script UI / real Sheets integration NOT YET VERIFIED.
