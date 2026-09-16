# SIMS Manager v5.21.0

## Product UI consolidation

- User-facing product name: `SIMS Manager`.
- Task-oriented top menus replace the older product/worksheet-oriented menu layout.
- `記事診断・処置` exposes one normal entry: `診断・処置スタート`; recovery operations are separated.
- `サイト健康診断` exposes `健康診断スタート`, report/candidate views, and a recovery submenu.
- `記事管理` consolidates article list, improvement trend, improvement history, and sorting.
- `設定・メンテナンス` contains site settings, detailed settings, sheet repair, and Personal Knowledge diagnostics.
- Daily improvement display is fixed at five items. User-facing count configuration is removed while legacy keys remain compatible.
- Primary visible terminology begins migration from blog-oriented wording to site-oriented wording.
- Article-specialist display names use `aDoctor`, `aWriter`, `aCreator`, and `aMerge`.

## Compatibility

No changes to internal `sbm...` function names, physical sheet names, `SIMS_DOCTOR_*` identifiers, Case/Batch IDs, stored contracts, or Personal Knowledge storage contracts.
