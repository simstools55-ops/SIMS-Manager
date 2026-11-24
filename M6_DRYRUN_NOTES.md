# M6 registration dry-run candidate (v9.3.105)

- Added `sbmS3RegistrationDryRunJson(json)` to canonical `apps-script/Code.gs`.
- Reuses existing live evidence preview; performs no writes and does not authorize registration.
- Reads existing proposal IDs from Doctor_Cases and Strategy_Cases where supported; absent columns or sheets fail closed.
- Duplicate checking is only a preview, not atomic registration or an exhaustive check of all possible stores.
- No menu entry or production activation; UAT toggle required.
- Do not treat this as completed registration, aDoctor request creation, or GAS validation.
