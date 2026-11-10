## v9.2.116
- Final offline regression: 11 related Node test scripts, 114 assertions/cases passed.
- Repository version metadata synchronized; no runtime business-logic changes.
- Licensed-environment Apps Script UAT still pending; not a production release.

## v9.2.115
- Two-article monitoring handoff completion offline regression (10 cases); no production runtime changes.
- All existing multiwriter test scripts passed. Apps Script UAT pending.

## v9.2.114
- test: add 9 offline regression cases for multi-writer interrupted/resumed workflow. No production workflow changes.

## v9.2.113
- Add a guarded registration checkpoint action in the standard precision diagnosis multi-writer dialog.
- Use existing read-only registration preflight and existing server-side checkpoint writer.
- No license, article publication, history creation, or monitoring schedule changes.
- Offline-only validation; live UAT pending.

## v9.2.112
- 複数記事の通常画面で、2記事の有効な登録証跡が揃うまで履歴紐付け操作を無効化。
- 状態取得エラー時のボタン無効化と、操作直前の再照合を追加。
- 既存の履歴登録・経過観察・ライセンス処理は変更なし。

## v9.2.111
- 通常の精密診断画面でWRITER_MULTIの事前ベースライン保存と履歴紐付けを順序案内。旧処理は維持。

## v9.2.111 — 精密診断UATメニューの通常非表示
- Full版の「サイト健康診断」にある開発用UATメニュー3件を既定で非表示。
- 開発用Script Property `SBM_SHOW_MULTIWRITER_UAT_MENU=true` の場合のみ表示。Starterは常に非表示。
- 既存の関数・保存データ・公開確認・改善履歴・モニタリング処理は変更なし。
- Google Apps Script実機試験は未実施。

## v9.2.109 (UAT candidate)
- Consolidated saved strategy case and Today refresh menu entries under Site Health / Precision Diagnosis (Full only).
- Renamed legacy navigator presentation only; preserved workflow functions, data schema, and registration/monitoring gates.
- No licensed Apps Script runtime verification.

## v9.2.108
- Added 12 source-level daily-finalize→weekly-recording wiring assertions; no business logic changes.

## v9.2.107
- Test actual weekly due-date and overdue functions offline with independent multi-article histories. Runtime unchanged.

## v9.2.106 — Offline completion-gate regression
- Added 10 executable tests of the existing monitoring completion gate. No runtime behavior changed.

## v9.2.105
- Add executable offline test of actual legacy monitoring linkage gate with mocked storage/lock.
- Fix root VERSION file drift from v9.2.103. Runtime unchanged.

## v9.2.104 — Multi-function offline integration regression (UAT)
- Test real multi-writer publication confirmation, baseline acknowledgement and handoff entrypoint together in an isolated Node VM.
- Validate rejection of missing/duplicate/mismatched evidence and prevention of retrospective baselines.
- No runtime workflow changes; Google Apps Script real environment still untested.

## v9.2.103 — executable offline regression
- Add deterministic Node.js mocks for the actual multi-writer handoff entrypoint. No runtime behavior change; no license bypass.
- Test rejects invalid IDs, wrong workflow, unacknowledged baseline, wrong status, forbidden backward transition, and checks idempotent read-only resume.
- Apps Script live integration and 28-day monitoring remain unverified.

## 9.2.102 — License-aware UAT preparation

- コピー環境限定の試験手順を廃止。ライセンス制約を試験の必須前提に変更。
- `VERSION` ファイルの古い値も現行バージョンに同期。
- 業務ロジックは変更なし。実機試験未実施。

## v9.2.101 UAT — 既存履歴紐付けの実関数回帰試験と実機試験手順

既存 `sbmStrategyLinkRegisteredHistories` をモック依存で直接実行し、正常な2記事紐付け・後付けベースライン拒否・履歴ID重複拒否・状態ガードを確認。実機用チェックリストを追加。実運用環境への適用は禁止。

## v9.2.100 UAT — 履歴紐付け済み案件の再開検証

履歴紐付け後に案件状態が変化した場合も、LINK_REGISTERED_HISTORIES の再実行を読み取り照合に限定して許可。PREPARE_BASELINE の後戻りは禁止。モック回帰試験を追加。実機結合試験は未実施。

## v9.2.99 UAT — 複数記事引き継ぎ画面の非同期応答・実行中保護

案件切替中に旧案件の照合応答が戻ってもボタンを有効化しない。書き込み処理中は案件IDと再確認ボタンをロックし、完了後に再照合する。既存の監視・履歴登録ロジックは変更しない。実機試験前。

## v9.2.98 — MultiWriter handoff UI safety (UAT)
- Disable baseline action until existing two-article publication evidence matches case IDs.
- Invalidate inspected case on input edit to avoid stale controls.
- No changes to monitoring data or existing linker.

## v9.2.97 — UAT

- 精密診断メニューに2記事経過観察引き継ぎダイアログを追加。
- 事前確認と履歴紐付けの操作を別ボタンに分離し、実行前に確認する。
- Google Apps Script実機結合試験は未実施。

## v9.2.96 (UAT candidate)
- Added explicit two-stage multi-writer monitoring handoff entrypoint.
- Reuses existing pre-registration baseline and locked history linkage; no automatic publication or registration.
- Requires explicit action, validates workflow and state, supports idempotent resume.
- Apps Script integration test pending.

## v9.2.95 (UAT)
- Add guarded two-article pre-registration monitoring baseline acknowledgement using existing legacy gate.
- Reject retrospective snapshots after registration receipts and avoid overwriting existing acknowledgements.
- No synthetic histories or monitoring changes; Apps Script integration test pending.

## v9.2.94 (UAT)
- Two independently acknowledged publications are validated against the real accepted WRITER_MULTI result before calling the existing publication confirmation gate.
- No fabricated work result, preflight, improvement history or monitoring data.

## v9.2.93 (UAT)
- Added read-only legacy gate readiness inspection for multi-writer handoff, including baseline conflict detection.
- No production deployment or runtime integration test.

# SIMS Manager v9.2.92 UAT — Existing history-linkage adapter

- Adds `sbmDoctorLinkVerifiedMultiWriterHistories(caseId)` to invoke the existing strategy history-linkage writer only after strict read-only two-article validation.
- Preserves original writer locking and fresh checks for baseline timing, real history identity, lifecycle, and competing monitors.
- No fabricated legacy work result/receipt/preflight. Does not initiate 28-day monitoring or complete a case.
- Google Apps Script integration testing is pending; do not deploy to production.

# SIMS Manager v9.2.91 UAT — 既存履歴紐付けの厳格な事前照合

- `sbmDoctorMultiWriterExistingLinkageDryRun(caseId)` を追加（読取専用）。
- 公開申告・登録証跡と既存作業結果・公開確認・保存済み事前確認を記事別に照合。
- 事前確認より後の履歴ID、既存履歴の保持、現在の有効モニター、旧モニターの競合を検査。
- 事前確認の遡及作成、履歴作成、経過観察開始、状態変更は行わない。
- Apps Script実機結合試験と画面接続は未実施。運用環境に適用しない。

