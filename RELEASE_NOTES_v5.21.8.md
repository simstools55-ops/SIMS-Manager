# SIMS Manager v5.21.8

## Improvement Navi / aWriter registration UI

- Rename "AIでリライトするための依頼文" to "aWriterへの改善依頼文".
- Rename the copy action to "aWriter依頼文をコピー".
- Embed the aWriter response paste area directly in Improvement Navi.
- Remove the analyze/preview/user-confirmation step from the normal Improvement Navi flow.
- Register pasted aWriter response directly with internal normalization and article identity validation.
- Show an in-dialog spinner and disable the registration button while registration is running.
- Keep pasted text on validation/registration errors so the user can retry.
- Show completion status in the same dialog after successful registration.
- Keep the separate re-registration dialog for the special "aWriter回答を登録・再登録" menu.
- Distribution artifacts are intentionally not regenerated during operational testing.
