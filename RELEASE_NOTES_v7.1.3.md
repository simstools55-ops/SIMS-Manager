# v7.1.3 UAT candidate

- Immutable payload retry now accepts only byte-identical content and rejects partial/corrupt data.
- Same-article active emergency cases block new intake until explicit cancellation.
- Doctor/Writer/complete transitions verify unique active case.
- Status transition is written last after prerequisite metadata.
- Emergency operations never modify ordinary improvement sheets.
- Not tested in Apps Script; not production-ready.
