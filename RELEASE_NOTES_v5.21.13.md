# SIMS Manager v5.21.13-dev

## Purpose
Runtime tracing on A000046 showed feedback registration reached the server normally, but `REGISTER_HISTORY_WRITTEN` took about 33 seconds.

## Changes
- Added a fast supersede path that reads only identity/lifecycle columns and performs at most one lifecycle write.
- Added a fast history-ID allocator that avoids hydrating the full history sheet.
- Added a fast improvement-plan snapshot path that avoids a second full Article DB scan during history append.
- Replaced `appendRow` plus synchronous format copying with one bounded `setValues` commit; formatting is left to normal maintenance.
- Preserved direct paste -> register UX and existing idempotency/Personal Knowledge behavior.

## Test target
Use the next eligible improvement item. Do not re-register A000046, which is already registered. Compare `REGISTER_DB_WRITTEN` to `REGISTER_HISTORY_WRITTEN` in the process log.
