# v9.3.57 — サンプルデータ撤去・Homeグラフ安定化

- 記事ランクの28日分の仮データ生成を廃止。実際の日次履歴だけを表示。
- Homeグラフデータシートに残っているサンプル値を消去（実際の日次履歴は保持）。
- 実履歴がないときは「日次処理によるデータ収集中」を表示。
- データに変化がない場合、既存のグラフ画像を差し替えず保持して表示消失リスクを低減。
- Homeのレイアウト、円グラフ、記事管理、日次履歴収集処理は維持。

# v9.3.56 — Homeグラフ更新の安全化

- 円・棒両方のPNG生成成功後に画像を差し替え、失敗時は従来画像を保持。
- 画像の高さを160pxに調整し、改善モニター見出しとの重なりを防止。
- Home更新時の画像生成・配置結果をログに記録。
- 日次履歴・記事管理・集計ロジックは変更なし。

# v9.3.54 — Home画像位置修正
- 円・棒グラフ画像を高さ172pxに収め、行13の見出しへの重なりを回避。
- 棒グラフ画像をF6へ明示的に固定し、生成ログを追加。

## v9.3.53 (2026-11-15)
- Compact Home layout: daily status beside last update; monitoring below charts; message at bottom.

## v9.3.53 (2026-11-15)
- Home: remove weekly advice title and contents; hide unused rows.
- Home: render pie slice labels in dark text.
- Home: normalize rank series before stacked column rendering and log failures separately.
- Version metadata aligned.

## v9.3.51 (2026-11-15)
- Homeの埋め込みグラフ空白問題を回避するため、Chartsサービスで描画したPNG画像を配置。既存データと日次履歴は維持。
- バージョン整合性監査を実施。

## v9.3.50 (2026-11-15)
- Home chart: keep source sheet visible, force hidden-dimension strategy, declare headers, flush source before embedding.
- Synchronize Code.gs header, version constants, product identity and distribution instructions.
- Actual Google Sheets display requires user verification.

## v9.3.49 (2026-11-15)
- Homeの旧上部数値カードを廃止し、上段に円・100%積み上げ棒グラフを配置。
- 実績履歴なしの場合のみ28日サンプルを表示。日次履歴は改変しない。
- コンパクトな24行レイアウトと円グラフの指定色を適用。

## v9.3.48 (2026-11-15)
- Homeに改善状況の円グラフと記事ランク構成の100%積み上げ縦棒グラフを追加。
- 日次処理完了時からランク構成を日付別に保存。既存Homeの業務表示は維持。

## v9.3.47 (2026-11-15)
- onOpenでライセンス判定を先行させず、軽量なサイドバー枠を表示。メニュー内容は表示後に非同期で読み込む。
- 手動表示とStarter/Fullの権限フィルタは維持。
- 起動時失敗ログをconsole.errorへ変更。

## v9.3.46 (2026-11-15)
- onOpenのサイドバー自動表示を初期メニュー登録直後へ移動。Home更新・Edition別メニュー構築・シート表示制御より先に表示を要求する。
- 自動表示が失敗した場合も上部「SIMS Manager > 操作パネルを開く」で復旧できる。
- 表示処理・日付・データ構造・Starter/Fullの機能権限は変更しない。

## v9.3.45 (2026-11-15)
- 改善履歴の1週〜4週・最終判定を中央揃え（連続5列に対する単一操作）。
- v9.3.44の軽量な閲覧処理を維持。日付補正・並び替え・全行高さ変更は実行しない。

## v9.3.44 (2026-11-15)
- 改善履歴の閲覧はシート表示のみとし、日付補正・全行ソート・全行書式再設定・スキーマ移行を閲覧から分離。
- 従来の日付補正・整形処理は明示的メンテナンス関数 sbmMaintainImprovementHistoryV9344_ に保持（自動実行なし）。
- サイドバーとトップメニューは同じ軽量ハンドラーを使用。データ・登録処理は変更しない。

## v9.3.44 (2026-11-15)
- サイドバーの全表示アクションをトップメニューの公開ハンドラーと静的照合。
- 改善履歴のショートカットを廃止し、日付補正・表示修復を含む正規処理へ統一。
- サイドバー専用の例外処理を削除。

## v9.3.42 (2026-11-15)
- 改善履歴の日付がISO文字列で登録されていた行だけを日付型へ補正。既存の日付型セルは保持。
- 改善日列を yyyy/M/d 表示へ統一。

## v9.3.41
- 精密診断候補シートのタイトル列300→240px、URL列260→182px。
- 上部メニューとサイドバーの操作名称を簡潔化。
- スプレッドシート再読み込み時に操作パネルを自動表示。

## v9.3.39 (2026-11-15)
- 改善履歴：記事タイトル282px、改善概要378px。改善概要を折り返し、先頭60行は高さを自動調整。改善経路は非表示を維持。
- シートのデータ、列構成、診断・登録ロジックは変更なし。
- サイドバー・実行時バージョンをv9.3.39に統一。

## v9.3.38 (2026-11-15)
- 精密診断候補の列幅をv9.3.35の構成に戻し、「傾向」のみ非表示。
- 改善履歴の改善概要を表示し、一覧は原文非破壊のクリップ表示。改善経路は非表示。
- サイドバーの各操作グループを初期状態で展開。
- 実行時・表示・配布情報のバージョンを同期。

## v9.3.37 (2026-11-15)
- 今日の改善の主要11項目を再表示。非表示対象は記事URL・候補IDのみ。
- 記事管理のメインクエリ再表示、H1タイトル列を315pxへ拡張。
- 改善履歴の改善経路非表示、aDoctor候補の傾向非表示は維持。
- サイドバーの固定バージョン表記をv9.3.37へ同期。
- 列データ・列順・診断/登録処理は変更しない。

## v9.3.36 (2026-11-15)
- Sidebar-first compact sheet layouts for five operational sheets.
- Auto-route blocking Writer issues to aDoctor instead of user three-way decision.
- Keep underlying sheet data/headers unchanged; effect delta conversion deferred pending non-destructive view design.

## v9.3.35 (2026-11-15)
- aWriter回答の次回改善向け注意事項を現在の登録保留判定から除外。元の注意事項は履歴に保持。
- 既存のUSER_DECISION_PENDINGを再評価し、現在の回答が登録可能なら正常登録へ進む。進行中のDoctor/Writer処理は維持。
- サイドバー改善登録画面でdecisionRequiredを登録完了と誤表示しない。履歴IDなしの成功表示を抑止。
- 改善履歴IDの保存後照合、重複登録時の改善中状態復旧、今日の改善更新エラーログを追加。
- 実機の保存動作は未確認。

## v9.3.34 (2026-11-14)
- サイドバーと上部メニューの精密診断起動を共通の先行表示処理に統一。
- 診断生成・保存ロジックは変更なし。

## v9.3.33 (2026-11-14)
- 精密診断の中央ダイアログを先行表示し、完了後に従来の依頼文UIへ切り替える。
- 診断ロジック・保存順序は変更なし。

## v9.3.32 (2026-11-14)
- Query-filtered GSC query/page request for Doctor cannibalization evidence, with full-batch and per-query fallback.
- Add `SBM_DOCTOR_CANNIBAL_TIMING` logs; preserve evidence scoring and workflow.
- JavaScript syntax and mock normal/fallback regression checks passed; live Apps Script pending.

## v9.3.31 (2026-11-14)
- Instrument Evidence Package acquisition stages with `SBM_DOCTOR_EVIDENCE_TIMING`; no business-logic changes.

## v9.3.30
- 精密診断依頼の生成・保存工程を7区間に細分化してログ記録。動作変更なし。

## v9.3.29
- 精密診断候補のサイドメニュー起動を正規ハンドラへの直接呼び出しに変更。処理時間を画面と実行ログに記録。診断条件・保存処理は維持。

## v9.3.28
- 通常改善のaWriter回答において、対処済みの注意事項による不要なaDoctor分岐を抑止。
- 未解決の正確性問題・明示的な利用者判断は従来の安全ゲートを維持。
- 通常改善の登録後に不適切な精密診断ボタンを表示しない。
- 既存のA000053データは変更しない。

## v9.3.26
- Normalize improvement dates to Date objects at selected new-history insertion paths; reject invalid dates instead of substituting today.
- Preserve existing history rows and read-only sidebar navigation.
- Existing two anomalous history cells were repaired separately in the user environment; no migration is run.
- Live Apps Script regression remains pending.

## v9.3.25
- Sidebar improvement-history navigation now directly activates the existing sheet without sorting, formatting, or modifying stored history.
- Existing top-menu behavior and aMerge completion remain unchanged.

## v9.3.24
- Fix completion registration for absorption-free aMerge results; enforce saved-context verification and preserve redirect requirements for actual absorption.

# v9.3.24

# SIMS Manager v9.3.24 — aMerge partial-result resume

- Restore CaseID/result-ID-verified saved aMerge drafts even when `publication_ready` is false.
- Separate draft existence from publication approval. Do not change stored aMerge response or Google Drive artifacts.
- Resume into explicit user-action review status for non-publication-ready drafts; no automatic publication or redirect.
- Preserve missing-content and identity-mismatch safety stops.
- Regression tests: partial draft, ready draft, wrong CaseID, wrong result ID, empty content.
- Validation is mocked; Google Apps Script live integration must be verified in the user's environment.

## v9.3.22 — Merge result resume artifact recovery

Registered long aMerge results are recovered from the case-linked Drive result JSON, with CaseID/result identity checks. No re-registration, publication, redirect or history changes occur automatically.

## v9.3.21
- Merge結果受領済みCaseの再開導線を修正。登録済み結果の再登録を防止し、完成原稿が検証できる場合のみ利用者処置待ちへ復元。

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

## v9.3.28
- Fixed normal follow-up dialog generated JavaScript URL validation syntax.

## v9.3.40
- Effect view compact metric headers and 65px columns; preserve canonical metric mappings.
- History view shows article URL rather than long improvement summary; underlying data unchanged.
