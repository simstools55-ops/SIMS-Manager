# SIMS Manager v7.1.11 UAT

- Article management, improvement effect and improvement history use active single-row selection.
- Their legacy "選択" columns are hidden when an article action is executed. Columns, checkbox values, validation and column indices are retained for compatibility; no physical deletion.
- Legacy onEdit checkbox scanning is skipped for these three sheets only. Other workflow sheets retain their behavior.
- The selected article is resolved from the active range; multi-row selection remains blocked with centered dialog.

## UAT
1. In test copy, select a title cell and run the corresponding article detail command. Confirm correct article and hidden legacy selection column.
2. Select an entire row and repeat.
3. Select multiple rows; confirm centered error and no article action.
4. Confirm completion/status checkboxes on other workflow sheets still work.
5. Confirm article management, effect and history records are unchanged.

## Limitation
Some existing sheet rebuild/style routines may unhide or recreate the legacy column. This release hides it again when an article action runs; complete elimination of every legacy UI generator requires separate regression review.
