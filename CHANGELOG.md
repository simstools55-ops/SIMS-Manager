## v9.3.92 (2026-11-19)

FULL限定でカニバリ停止後に「利用者判断でSERPを精査する」を表示。サーバー側でライセンスを確認し、既存候補と続行記録を依頼文・再開データへ引き継ぐ。判定基準とマニフェストは変更なし。実機試験待ち。

## v9.3.91 (2026-11-19)

改善履歴のタイトル225px、改善概要365px、週別判定53px。概要・判定9pt。通常の文字列に限り句点の後に改行を追加し、原文の文字は削除しない。数式・複合リッチテキスト・リンク付きセルは対象外。行高は既存方式で調整。実機試験待ち。

## v9.3.90 (2026-11-19)

改善履歴の改善概要を10pt・上詰め・折り返し、判定欄を10ptに設定。表示内容・列幅が変化した場合のみ行高を自動調整。列幅・データ・マニフェストは維持。実機試験待ち。

## v9.3.89 (2026-11-19)

Three primary tables use compact widths and 9pt wrapped headers. Effect daily and repair widths are aligned. Strict timezone-bearing ISO history strings are converted to Date without changing their instant; formulas and unrecognized values are untouched. Existing new-row date normalization retained. Live UAT pending.

## v9.3.88 (2026-11-19)
- Article and history widths consolidated; improvement route hidden, summary visible, history URL hidden. One-time visual migration on version sync. No schema or measurement changes. Live Apps Script UAT pending. Existing view formatting paths retained.

## v9.3.87 (2026-11-19)
- History detail and all history use the selected history row; no data mutation. Effect detail uses selected effect row.
- Upper and sidebar effect navigation share the view-only path.
- Sidebar opens only 今日の作業 and displays runtime version.
- Correct stale version metadata and replace obsolete multi-edition version audit with single-source audit.
- Live Apps Script UAT pending.

## v9.3.86 (2026-11-19)
- Combine Doctor response and final registration in one dialog; require explicit publication confirmation, serialize submissions, preserve checkpoints.

## v9.3.85 (2026-11-19)
- v9.3.85: conservative resolved-warning triage; follow-up dialog styling, receipt and copy feedback; explicit final registration retained.

## v9.3.84 (2026-11-18)
- Fix nested newline escaping in generated diagnostic JavaScript.
- Show immediate receipt and elapsed time; lock operations after timeout until response or dialog close.
- Add generated HTML regression tests with mocked server responses. No Apps Script live test.

## v9.3.83 (2026-11-18)
- Hide chart data and rank history after updates; hide new internal sheets via common helper.
- Hide improvement route column in trend views.
- Accept short metric headers and preserve aliases during migration. Existing missing values are not restored.
- Apps Script runtime not tested. Explicit maintenance views can still display internal sheets.

## v9.3.82 (2026-11-18)
- Home C6:C12に残る旧ランク件数表示を除去し、日次更新による再発を防止。

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

