# v9.3.20: Optional SIMS Manager sidebar pilot; existing top menus retained.

## v9.3.19 — 記事の管理状態ダイアログ改善
理由3択を単一選択にし、最終確認を独立表示。登録ボタンは確認完了まで無効。

## v9.3.18

- 旧Case保守用の3メニューを既定非表示に変更（保守時のみScript Propertyで表示）。関数本体は維持。
- バージョン表記と配布メタデータを同期。

## v9.3.17 (2026-11-12)
- 精密診断のaWriter結果登録は、APPROVEに加えて正式な記事別依頼2件の保存完了（WORK_REQUEST_READY / WRITER_MULTI）を必須化。
- 承認直後や依頼の一部保存状態での登録を拒否。既存の完了Caseとモニタリングは変更しない。

## v9.3.16 (2026-11-12)
- Harden precision diagnosis approval: reject non-REVIEW_READY state instead of reporting false success.
- Require a saved aDoctor response before approval; idempotent retry only for the same decision.
- No changes to existing cases, article history, or monitoring data.
- Local mock regression: 7 approval state tests passed.

## v9.3.15 (2026-11-12)
- 精密診断の利用者承認をaWriter依頼発行・改善結果登録の必須条件に変更。
- REVIEW_READYで診断方針の承認ボタンを表示。未承認の診断プレビューでは正式紹介状を返さない。
- 既存の完了Case、改善履歴、モニター状態は移行・変更しない。

## v9.3.14 — 2026-11-12
- Close only a provably mispaired OPEN legacy precision Case when the recovered successor is COMPLETED and both article registration receipts exist.
- Preserve legacy diagnosis evidence, successor Case, improvement histories and monitoring. Add explicit confirmation and revalidation under lock.
- Add Full Edition maintenance menu; no automatic mass closure.

## v9.3.13
- 初回精密診断の保存ボタンを再承認専用APIから分離。
- 保存済み・作業開始済みのCaseへの誤上書きを抑止。
- aDoctor回答のプレビューと正式保存・利用者承認を区別。

## v9.3.12 — aDoctor response template contract alignment
- ROLE_SEPARATION prompt now includes two article-specific actions matching the preview validator.
- No changes to saved cases, articles, monitoring, or approval state.

## v9.3.11 — Saved precision diagnosis pair audit and safe recovery
- Reject aDoctor request/response on a case whose saved article identities disagree with the two URLs in its warning.
- Add a dedicated, confirmation-gated saved-warning recovery for the known A000096/A000140 legacy case; generate A000140/A000157 independently, idempotently.
- Do not edit legacy cases, article content, improvement histories, or monitoring.
- Existing single-URL legacy cases are conservatively blocked from new referrals.

## v9.3.10
- Require exactly two explicitly named URLs in aWriter warning before creating a precision diagnosis pair.
- Resolve both URLs against article DB and persist canonical article URLs; never infer a pair from the improvement source.
- Preserve existing cases and monitoring; no manual pair-selection menu.

## v9.3.9
- Guard precision-diagnosis case creation against mismatched article pairs.
- Resolve both explicitly named URLs to article IDs; hold ambiguous/unmatched pairs.
- Preserve existing cases and registrations without overwriting metadata.

## v9.3.8
- Fix generated precision-additional-case dialog JavaScript syntax; restore automatic aWriter referral loading.

## v9.3.7 — 精密診断の追加課題：依頼文表示停止対策

- 依頼文準備の45秒待機上限、エラー案内、再試行操作を追加。
- 初期表示の起動をDOMContentLoaded/readyState両対応にし、画面側の例外を可視化。
- 登録処理・既存案件・改善履歴の保存形式は変更しない。

## v9.3.6 — 精密診断の再開画面整理
- 利用者確認待ちでは不要なaWriter結果入力欄を表示しない。
- 利用者確認の登録後は完了した確認欄を閉じ、再診依頼→回答入力の順に表示する。
- aDoctor回答登録後は完了した回答入力欄を閉じ、Doctorの次の処置がWRITER/MERGEの場合に限り対応する登録欄を表示する。
- 既存のCase保存形式、改善履歴、記事状態は変更しない。

## v9.3.5
- Copy confirmation and target-article navigation for aWriter referral dialogs; normal follow-up stage labels localized.

## v9.3.4
- aDoctor追加診断後のaWriter再依頼を正規のJSON契約に統一。旧保存済み依頼は再開時に再生成。
- 最終aWriter処置結果をCaseID・記事ID・公開状態で検証し、共通改善履歴へ変換して登録。
- 本文取得に失敗した場合は旧形式を表示せず、登録を停止。

## v9.3.3
- 通常改善の登録後に独立課題を保存。利用者向け旧「戦略案件」表示を整理。

## v9.3.1
- Fix aDoctor singular `workflow_handoff.user_confirmation_item` display and confirmation choices.

## v9.3.0
- 精密診断画面のユーザー向けUAT／読取専用表示を整理。
- 既存の登録・親案件終了・経過観察ロジックを維持。
- 実行時バージョン、製品識別、READMEを9.3.0に統一。
- 旧コードと過去のRelease Notesは互換性・追跡性のため保持。

## v9.2.143
- 精密診断の再開0件通知を中央ダイアログに変更。

## v9.2.142
- 精密診断2記事の改善登録完了で親の未完了作業を終了。旧版登録済みも読取時に除外。

## v9.2.141 UAT
- Fix embedded modal JavaScript syntax: escape newline in completion receipt.
- Auto-load saved precision writer requests without a manual reload button; show empty-request error.
- Preserve precision writer feedback registration.

## v9.2.140
- Fix legacy precision writer preview skipped due to REVIEW_READY-only UI gate.

## v9.2.139 UAT
精密診断追加課題のaWriter結果JSON登録・完了表示の修正。

## v9.2.138 UAT: aWriter記事本文の自動添付
公開記事の本文をSBMから取得し、依頼文に添付。取得不能時は発行停止。

## v9.2.137
- Legacy precision read-only resume: show progress and callback result.

# SIMS Manager v9.2.136 UAT

- 複数記事aWriter依頼のSiteID照合と必須項目検証を追加。

精密診断の追加課題の記事タイトルを記事管理シートから読取専用で補完。

## v9.2.131 (UAT)
正規aWriter依頼形式・コピー操作・記事別一体表示を追加。

# SIMS Manager v9.2.129 — 通常の精密診断導線への復帰（第一段階）

- 保存済み診断を利用してaWriter依頼文を2件表示し、再貼付・再保存・再承認を不要にした。
- 古い「利用者が処置先を選ぶ」案内を変更。
- 既存の診断状態・改善履歴・記事管理には書き込まない。
- aWriter回答の登録・進捗連携は未実装（次段階）。

# SIMS Manager v9.2.128 — 精密診断の再承認受付 UAT

- v9.2.127で確認済みのaDoctor回答プレビューから、既存の `sbmDoctorSubmitMultiArticleForReapproval` を呼び出す明示的な保存ボタンを追加。
- 保存前に利用者へ確認し、旧承認を無効化して `REVIEW_READY` に戻す。旧診断・承認は既存バックアップ機構で保全。
- 記事変更、公開、改善履歴登録、aWriterへの作業依頼は実行しない。
- 次段階で既存承認ゲートと複数aWriter依頼保存を接続する。
- Google Apps Script実機試験は未実施。

## v9.2.127 — 精密診断・複数記事aWriter依頼の読取専用プレビュー
- aDoctor回答JSONを既存の照合関数で検証し、記事別aWriter依頼文を2件生成するUIを追加。
- 既存の案件・改善履歴・経過観察・承認状態は変更しない。
- 実機UAT待ち。

## v9.2.126 (UAT)
- 精密診断の推奨する次工程を表示し、MERGE_REVIEW等は既存aDoctor依頼文を利用して迅速に判断。
- 手動計画編集を通常画面から非表示。保存済み試験計画は保全し実行に使用しない。
- 既存の改善履歴・経過観察・CaseIDは変更しない。

## v9.2.125 (UAT)
- 精密診断の追加課題ダイアログで、CaseIDをonclick属性に埋め込む際の二重引用符をHTMLエスケープ。
- v9.2.124の「形式が正しくないHTMLコンテンツ」エラーへの対策。既存保存データは変更しない。

## v9.2.124 (UAT)
- 精密診断の追加課題に複数記事処置計画案の保存・再開を追加。既存Doctor_Workflow_Stateを再利用。
- CaseID・記事ID照合、重複排除、改訂番号、統合候補の複数記事チェック。
- 診断承認・Writer/Merge依頼・記事公開・改善登録は行わない。

## v9.2.123 — 精密診断・複数記事の読取専用処置計画共通化（UAT）
- 既存の追加課題表示をN記事対応の共通プレビュー関数へ整理。保存データの変更なし。
- Manager VERSIONを修正。Sharedコンポーネント版は独立管理。

## v9.2.122 (UAT)
- 精密診断の追加課題に、既存の診断情報から導く複数記事の処置候補を読取専用で表示。
- MERGE_REVIEWを統合確定として扱わず、aWriter複数／aMerge／変更なしを候補として表示。
- 既存CaseID・診断結果・公開・改善履歴・経過観察に変更なし。

## v9.2.121 (UAT)
- 精密診断の未完了再開から旧追加課題をCaseIDで選択し、保存済みの診断判断を読取専用で表示。既存処理を再利用しデータ更新なし。

## v9.2.120 (2026-11-10)
- 精密診断の未完了一覧に旧追加課題を読取専用で統合。旧状態とCaseIDを保全。

# SIMS Manager v9.2.119 — 精密診断の追加課題を読取専用で確認

- 旧STRATEGY_CASEを既存sbmStrategyListCasesで読み取り、精密診断メニューから記事ID・状態・処置先・CaseIDを確認できる。
- 誤解を招く「精密診断案件を今日の改善へ反映」のメニュー導線を読取専用確認に置換。旧関数は互換維持。
- 保存・移行・再構築・改善履歴更新は行わない。実機UAT未実施。

## v9.2.118
- fix(doctor): restore persisted initial Doctor request on precision-diagnosis resume, preserving RequestID.
- Fail safely when the saved request is absent or identity does not match.
- Apps Script live UAT pending.

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


## v9.2.130 (UAT)
- Connect precision multi-writer per-article feedback to normal registration flow; keep existing follow-up gate.

## v9.2.132
- Guard precision aWriter referrals against missing/mismatched SiteID and incomplete payloads.
- Auto-load precision next-step recommendations in additional-issues dialog.

## v9.2.134
- Improve saved precision case title and treatment-status display (read-only).
