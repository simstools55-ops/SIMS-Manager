# v9.4.9 — Daily rank chart final placement UAT
- Defer rank image placement until after daily cleanup and log writes; retain manual placement and pie logic. Verify rank anchor after final flush. GAS rendering unverified.

# v9.4.8 — Daily Home refresh UAT
- Daily finalization uses full Home rendering with a fresh shared snapshot; changed images are removed and flushed before insertion. GAS verification pending.

# v9.4.7 — Home refresh diagnostics UAT
- Manual refresh preserves unchanged correctly placed images; removes redundant outer flush; logs image metadata at refresh boundaries. GAS rendering unverified.

# v9.4.6 — Home image replacement UAT
- Complete cleanup before rendering; replace existing over-grid images in place. GAS rendering pending.

# v9.4.5 — Home manual redraw UAT
- Force fresh PNG on manual refresh and pie refresh without rank history; restrict rank image cleanup to tagged rank images.
- GAS rendering pending.

# v9.4.4 — Home pie anchor and no-history isolation UAT
- Validate image anchor and offsets; invalidate old pie signature once; protect pie from rank cleanup. GAS rendering pending.

# v9.4.3 — Home PNG diagnostics UAT
- Restore v9.3.127 data-table builder invocation; report chart failures in manual refresh and verify image objects.
- GAS rendering pending.

# v9.4.2 — Home PNG recovery UAT
- Restore in-memory PNG charts, explicitly build data tables, stage new images before removing old objects.
- Pie 230px; rank 425px; preserve cell legend and actual history.
- GAS rendering not verified.

# v9.4.1 — Home chart same-sheet source UAT
- 非表示シートを直接参照せず、Homeの非表示列K:Tをグラフの参照元にする。SHOW_BOTHを維持。
- 凡例、横幅、実履歴、ライセンス制御は維持。
- GAS実機描画は未確認。

# v9.4.0 — Home native chart recovery UAT
- PNG画像方式を廃止し、シート埋め込みグラフに変更。凡例セルと横幅は維持。
- 既存グラフを更新し、登録確認後に旧画像を除去。実履歴なしの場合はランクグラフを表示しない。
- GAS実機未検証。

# v9.3.128 — Home chart layout repair UAT
- 円グラフを230pxに固定し、D:Eのセル凡例との間に余白を確保。
- Homeレイアウト識別子更新で旧画像を除去し再構築。画像の寸法・アンカー・重複を確認してから再利用。
- ライセンス・記事データ・M6処理は変更なし。GAS実機の描画確認は未実施。

## v9.3.127 — S3 Edition license integration UAT
- License Center v0.6.0 の STARTER / FULL / S3 を認識。S3はFULL機能を継承。
- S3専用メニューは有効な認証キャッシュがある場合のみ表示。実行時は毎サーバー実行でオンライン認証、通信猶予では許可しない。既存UAT ON/OFFゲート維持。
- 再認証後Home版表示を同期。F5でメニュー更新（GASの既存メニューを即時削除できないため）。
- 既存記事・履歴・M6業務ロジック変更なし。S3本体の認証は別工程。
- Node構文検査、実コード抽出によるメニュー・権限・降格・通信猶予・OFF試験合格。GAS実機未試験。本番配布不可、試験用ライセンスのみ。

## v9.3.126 — メニュー整理 UAT
- サイドバー7分類、トップ4分類。既存処理・Edition制御を維持。

## v9.3.125 — Home legend and edition UAT
- 件数・割合のセル凡例と実効エディション表示。

## v9.3.124 — Home dashboard UAT
- 紺色Home、モニター集計照合、実績ベースの案内。

## v9.3.123 (2026-11-23) — 公開済み改善の復旧UI改善 UAT候補
- A000289の確認画面に登録できる理由、登録後の動作、公開更新チェックを明記。
- aDoctor原文は通常不要な詳細に格納。
- 保存済みPARTIAL / PUBLIC_OK_READYが適合する場合のみ復旧ボタンを表示。
- チェック前の登録ボタンを無効化。既存の登録API・状態遷移は変更なし。

## v9.3.121 (2026-11-23) — PARTIAL公開確認ゲート修正 UAT候補
- PARTIAL / PUBLIC_OK_READYを無条件に完了扱いせず、実際の公開更新の明示確認を必要とする。
- 既存の利用者判断待ちCaseに保存された同形式のaWriter回答を再利用し、再診をやり直さずモニターへ移行できる復旧操作を追加。
- 未公開の場合は公開待ちとして保持。既存の通常完了・Merge・他の判断条件は変更しない。
- ローカル構文・契約分岐試験済み、GAS実機試験未実施。

## v9.3.120 (2026-11-23) — M6統合UAT候補
承認判定・署名検証・Doctor登録/復旧/回答受付を統合。実機未検証、本番適用禁止。

## v9.3.96
- S3連携試験メニューの配置修正、既定OFFのScript Propertiesフラグとサーバー側ガードを追加。

## v9.3.93 (2026-11-20)

FULLのカニバリ続行案件に限り、利用者判断と候補を紹介状に自動反映。指定語を維持し、代替企画等は判定画面に分離。SERP依頼文の改行を修正。順位判定・他製品・マニフェストは変更なし。実機試験待ち。

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


### v9.3.117
- Prevent diagnostic HOLD snapshots from overwriting existing decision records.
