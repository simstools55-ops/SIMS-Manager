## v9.3.81 (2026-11-18)
- Major-sheet read-only diagnosis now displays repair necessity and safe next actions. No automatic history or article changes.

## v9.3.80 (2026-11-18)
- Fix generated sheet diagnostic dialog JavaScript; add execution feedback, elapsed timer, timeout warning, duplicate-click prevention, and safe error recovery.
- No changes to monitoring data or repair engine.

## v9.3.79 (2026-11-18)
- 主要シートの読み取り専用一括診断を追加。
- 改善履歴・記事管理の推測による削除・統合・復元は行わない。
- 改善の推移の既存診断・修復を維持。

## v9.3.78 (2026-11-17)
- 初回セットアップ完了時と更新後初回起動時のタブ表示同期を追加。データ非破壊。

## v9.3.77 (2026-11-17)
- 現行バージョン識別と配布案内を整理。実行ロジック変更なし。
- Homeのモニター件数修正はv9.3.76の実機試験待ち。

## v9.3.76
- Refresh Home current monitoring totals from live Improvement Trends on lightweight Home open.
- Invalidate Home snapshot after explicit Improvement Trends repair.
- Preserve article/history data and existing monitoring measurements.

## v9.3.75
- Recognize both 👀 モニター中 and モニター中 in sheet-repair inspection.
- Display active ArticleIDs and prohibit repair when monitoring count is zero.
- Synchronize runtime and package identity version to 9.3.75.

## v9.3.73
- Improve individual effect-trend diagnosis: read only required article columns, use exact monitoring status, and show a 120-second client-side warning.
- Remove redundant dialog heading.
- No automatic sheet repair on view.

## v9.3.72
- 設定・メンテナンスのシート修復を対象別ダイアログ化（改善の推移）。
- モニター中の正本照合、診断、バックアップ、測定値保持を優先した再構築。
- 閲覧時の自動行削除を廃止。

## v9.3.71
- 改善の推移のモニター対象整合と400px/60px表示を統一。

