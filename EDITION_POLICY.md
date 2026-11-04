# SIMS Manager Edition Policy

## Product model

SIMS Manager uses one repository and one synchronized version line for all Editions.

- **Full Edition**: canonical implementation and development source.
- **Starter Edition**: derived Edition for the existing-article improvement workflow.

## Canonical rule

The repository root `Code.gs` is the Full Edition canonical source. Shared fixes are always made in Full first, then reflected in Starter. Starter-specific changes must not create a separate schema or incompatible workflow.

## Compatibility rule

Starter and Full share the same Spreadsheet data/schema and core menu philosophy. A future upgrade from Starter to Full should require only the Edition code replacement whenever technically possible.

## Version rule

Starter and Full always use the same SIMS Manager version number. Edition names are not encoded as separate version lines.

## Repository layout

- `Code.gs` — Full Edition canonical source
- `editions/starter/Code.gs` — Starter Edition source used by Starter users
- `editions/starter/README.md` — Starter-specific usage and boundary notes
- distribution artifacts — created only when explicitly requested

## v6.1.0 implemented boundary

Starter uses the same executable body as Full with `SBM_EDITION = 'STARTER'`. Edition-aware UI hides Full-only routes while preserving the shared Spreadsheet schema and common improvement/diagnosis engine.

Starter-visible core: SIMS今日の作業、改善の推移・履歴、記事管理、サイト健康診断、aDoctor精密診断、設定・基本修復。

Full-only UI: 新記事作成・aCreator新記事登録、aWriter改善結果登録、Merge補正、Creator Direct整理、Site Doctor advanced treatment routes.

## v9.2.7 exception
「新記事関連 → 新記事キーワードの参入余地を確認」は両Editionで利用可能。Starterは参入余地判定のみで、aCreator紹介状生成と新記事登録は不可。
