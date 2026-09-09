# SIMS Manager v6.2.11

## Fixes
- Fixed the unfinished-work loading dialog remaining on screen even after the menu-side server call had completed.
- Added a public `sbmResumeUnfinishedWorkflowCore()` bridge because Apps Script client calls cannot invoke server functions whose names end in `_`.
- Changed the initial loading window to modeless so the server-side resume workflow can open the actual treatment/resume modal without competing with the loader modal.
- Kept success, failure, and timeout feedback so the loading window cannot remain as an unexplained spinner indefinitely.
- Preserved the v6.2.9 sequential multi-merge workflow without changing its business logic.

## Versions
- Full: v6.2.11
- Starter: v6.2.11-ST
