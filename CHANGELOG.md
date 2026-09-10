## v6.2.52
- 日次処理STEP3でHomeスナップショット更新後、記事ランク件数表示セルのみを軽量同期する処理を追加。
- Article DBではv6.2.51の新ランク判定が反映されている一方、Homeが旧件数のまま残る不整合を修正。
- 追加GSC取得・ランク判定条件・サイト健康診断ロジックは変更なし。

## v6.2.51 - 2026-09-10
- 日次ランク判定を90日データの評価可能性優先へ再構成。
- 表示200以上またはクリック10以上は通常4ランク、未達はクリック3以上を育成、0〜2を未発芽。
- 未発芽固定を廃止し、日次で自動再評価。

## v6.2.50
- 未発芽記事は表示回数100以上で「🌱 育成」へ復帰するよう変更。
- Homeの旧モニター集計説明文を削除し、改善率説明のみ残す。
- Code.base.gsを含む全Code正本を同期。

# v6.2.47

- Site Doctor健康診断に `UNGERMINATED`（未発芽）判定を追加。
- 既存の未発芽ランク記事を精密診断候補へ優先送付。
- 後半90日クリック5以下＋直近28日クリック0＋過去表示実績ありの記事を新規未発芽として検出。
- ArticleID＋URL＋更新前ランクで安全照合し、書込み後も保存値を再確認。
- 健康診断書と精密診断候補画面に未発芽を表示。
- v6.2.42の記事情報更新・日次処理は変更なし。

## v6.2.48
- Homeの記事ランクまとめに未発芽件数を追加。
- Homeの改善率説明を追記。
- 診断メニューをサイト健康診断サブメニュー化し「サイト健康診断を実施」を追加。
- 健康診断所見の日本語接続を修正。
- 未発芽判定・aDoctor・記事情報更新・日次処理ロジックは変更なし。

## 6.2.37 - 2026-09-10

- 記事情報更新の安全書込インターフェース不整合を修正。
- 記事タイトル・メインクエリの補完をArticleID＋正規化URL＋更新前値で三重照合。
- メインクエリ未取得時の過去6か月GSC取得を正本化。
- 日次処理、SEOタイトル、メタディスクリプションの既存処理は変更なし。

## v6.2.19 - 2026-09-10

- 「処置を行わず終了」を利用者目線の「今回の改善を取りやめる」へ変更し、記事改善・記事統合・新記事作成ごとに最終確認内容を明示。
- 最終確認で対象記事/キーワード、実行後に予定作業を行わず未完了一覧から外れることを表示。
- 共通再開ダイアログのWriter/Merge登録文言を「改善結果」「統合結果」「記事統合の完了」へ統一。
- Creator Directの `next_action=monitor` だけでaDoctor「追加経過観察」と判定していた誤分類を修正。
- aCreator紹介状の測定基準を7日目・14日目・21日目・28日目へ統一。

## v6.2.14 - 2026-09-09

- `MULTI_MERGE_STEP_COMPLETED` を未完了WorkflowのMerge recovery fallbackから除外。
- 完了済みSequential Multi-Merge中間Stepが「未完了の作業を再開」に再表示される問題を修正。
- `SUPERSEDED_*` もfallback対象外とし、完了・置換済みCaseの再浮上を防止。
- activeなMerge復旧とStep 1→Step 2継続処理は維持。

## v6.2.12 - 2026-09-09

- aMerge結果登録をSite Doctor専用receiverから共通Merge receiverへ統一。
- Writer follow-up由来のMulti-Merge Caseでも `SIMS_MERGE_TREATMENT_RESULT_V1` を正規登録可能に修正。
- 既存のSite Doctor向け公開関数は互換ラッパーとして維持。
- Merge利用者処置完了も共通公開bridgeへ統一し、Step 1完了後のStep 2生成経路を維持。

## v6.2.11 - 2026-09-09
- 未完了Workflow待機ダイアログのsuccess handler欠落を修正。サーバー処理完了後にローダーを閉じる。
- failure/45秒timeout時にスピナーを終了し、無限待機を防止。

## v6.2.9 - 2026-09-09

- 3件以上のMerge referralを2記事単位の連続aMerge Workflowへ分解。
- Step完了ごとに次Pairを自動生成し、最終Stepのみモニタリングへ移行。
- 既存v6.2.7/v6.2.8の多記事Caseを結果受付前に安全アップグレード。

# CHANGELOG

## v6.2.8 - 2026-09-09
- Promote normal-improvement Writer `follow_up_referrals: MERGE` into the formal Doctor_Cases/aMerge workflow.
- Recover previously saved Merge follow-ups, including A000068/H000050-style cases, when unfinished work is resumed.
- Generate the aMerge Package from the selected target articles and their current article/Evidence data without fabricating test state.
- Preserve idempotency by linking the generated Merge Case to the originating improvement history ID.

# Changelog

## v6.2.6 - 2026-09-09

- 共通「未完了の作業を再開」で、通常aDoctor案件の長文Writer紹介状がSiteDiagnosisCaseID必須判定により復元できない問題を修正。
- Site Doctor由来はSite Diagnosis source、通常aDoctor由来はArticle Doctor sourceから紹介状/Packageを再構築するよう共通化。
- 復元した完全版はGoogle Sheetsセルへ再保存せず、ダイアログへ直接返す方式へ変更。
- 「全文を再生成」を「紹介状の全文を復元 / Package全文を復元」へ変更し、復元とコピーを明確な二段階操作に分離。
- 復元中・復元完了・復元失敗をダイアログ内で明示。

# CHANGELOG

## v6.2.5 - 2026-09-09

- Fix unified unfinished-work resume ordering: the Dispatcher-selected latest Doctor Case is now shown first in the shared treatment dialog.
- Preserve other pending treatment cases and sort remaining actions by updated timestamp descending.

## v6.2.4 - 2026-09-09
- Unified normal-improvement launch through a single checkpoint-before-display entry for Today and Article Management detail flows.
- Article Management detail -> Improvement Navi now records NORMAL_IMPROVEMENT before opening the dialog.
- Resume validates saved ArticleID/URL against the restored article and stops instead of opening a stale article on mismatch.


## v6.2.2 - 2026-09-09
- 「今日の改善」「記事管理」から開始する通常改善を `NORMAL_IMPROVEMENT` として軽量Checkpoint保存。
- aWriter依頼文準備完了時に `WRITER_IN_PROGRESS` へ更新し、改善結果登録成功時にWorkflowを完了化。
- 「未完了の作業を再開」が通常改善とDoctor系Workflowの更新時刻を比較し、最後に操作した未完了作業を再開。
- 通常改善の再開時は元入口に依存せず改善ナビを直接復元。


## v6.2.1 - 2026-09-09
- データ整合性ダイアログを検出結果連動UIへ変更し、0件の修復ボタンを非表示化。
- Merge吸収記事の補正候補を非破壊で事前検出し、件数を点検結果へ追加。
- Creator Direct重複、Merge補正、改善履歴確認は対象がある場合だけ表示。
- 全項目0件の場合は「修復操作は必要ありません」と明示し、「再点検」「閉じる」のみ表示。

# v6.2.0

- Workflow再開/復旧を正式再編。
- 「未完了の作業を再開」を共通Dispatcher化し、通常aDoctor/Site Doctorの経路選択を自動化。
- 再開時の共通処置ダイアログから新規診断結果登録欄を非表示化。
- 「データ整合性を点検・修復」を追加し、Doctor/Writer/Merge/Creator Directの不整合検出を集約。
- 旧aWriter再登録・個別Merge/Creator修復項目を利用者メニューから撤去し、互換関数は保持。

# v6.1.43

- 「未完了の作業を再開」を共通Workflow Dispatcherへ統合。
- 通常aDoctor / Site Doctorを利用者に選ばせず、Case状態からDoctor回答・利用者確認・Writer・Merge・Creatorの再開先を自動判定。
- MONITORING / SUPERSEDEDは再開対象から除外し、TREATMENT_FAILEDは通常再開ではなく復旧対象として案内。
- Site Doctor用に継ぎ足されていた処置再開スキャナを通常aDoctor案件にも利用できる共通処置スキャナへ拡張。
- 旧再開関数は互換入口として残し、新Dispatcherへ委譲。

# v6.1.42

- aWriter結果の `COMPLETED_WITH_REPORTED_EXCEPTION` を、紹介状違反がない場合は正常な処置完了として受理するよう修正。
- 実施不能だった許可タスクの理由はWriter結果JSONへ保持したまま、完了済みの公開処置を改善履歴へ登録しモニタリングを開始。
- `COMPLETED` のみを成功扱いしていたため `TREATMENT_FAILED` へ誤遷移する不具合を解消。

## v6.1.41

- aDoctor未完了処置の再開入口を一本化。
- 通常aDoctorの WRITER_IN_PROGRESS 等を正しく検出して再開ダイアログを表示。
- 通常aDoctor案件がない場合のみSite Doctor共通処置UIへフォールバック。
- サーバー関数の戻り値だけで終了し、何も表示されないメニュー回帰を修正。

## v6.1.40 - 2026-09-09

- aDoctor結果抽出でCaseIDを必須化し、依頼JSON内の`return_contract`を診断結果として誤認する不具合を修正。
- 依頼JSON誤貼付時のエラーを明確化し、不正payloadをRESPONSE checkpointへ保存しないよう改善。
- Full/Starterおよび製品メタデータのバージョン表記を同期。

## v6.1.24

## v6.1.27 - 2026-09-08

- Improvement History: widen weekly/final judgment columns so status labels remain on one line.
- Improvement History: vertically center visible data cells and judgment cells.
- Starter: synchronize existing Home A1 title to `SIMS Manager Starter Home` without requiring a Home rebuild.
- Starter display version remains compact: `v6.1.27-ST`.

- Stabilize additional monitoring labels and add ArticleID/filter UX to Improvement Trend and Improvement History.

## v6.1.21 — 2026-09-08

- Doctor WAIT/MONITOR登録時の状態遷移をDoctor Case・改善履歴・改善の推移・記事管理で一体同期。
- v6.1.20以前に`WORKFLOW_LOCKED`で止まったMONITOR案件を起動時に一度だけ自動復旧し、旧版の重複再診Caseを終了扱いに整理。
- 改善履歴はv6.1.21初回だけ既存行をまとめて装飾し、以後は高速表示＋新規行のみ装飾。
- 記事管理の利用者向け一覧から「データ更新日」を隠し、代わりに`ArticleID`を表示。データ更新日は内部データとして保持。
- Fullは`v6.1.21`、Starterは`v6.1.21-Starter`表示。

# Changelog

## v6.1.20
- aDoctorのWAIT / MONITOR判定は `doctor_treatment_allowed=false` 等の治療ロックがあっても、処置を行わず追加経過観察へ正しく遷移するよう修正。
- v6.1.19以前にWAIT / MONITORが `WORKFLOW_LOCKED` として保存されたCaseを追加経過観察サイクルへ救済。
- 改善履歴を開く通常操作から、全行タイトル修復・日付修復・再装飾・チェックボックス再生成を除外。
- 改善履歴の新規行は追加時に1行だけ整形し、通常表示時の待ち時間を削減。
- 改善履歴の選択UIは既存値を消さず、必要時も入力規則のみを保証する方式へ変更。
- Fullは `v6.1.20`、Starterは `v6.1.20-Starter` として表示。

## v6.1.19
- Repository内のFull/Starter/Apps Script/Distribution各Code.gsを同一の6.1.19へ同期。
- Fullの利用者向け表示を `v6.1.19`、Starterを `v6.1.19-Starter` に統一。
- VERSION / shared/VERSION / PRODUCT_IDENTITY / README / manifest類の版表記を同期。
- v6.1.18の旧aDoctor重複Case救済機能を維持。

## v6.1.16 - 2026-09-08

## v6.1.17
- 経過観察終了後のaDoctor再診にチェックポイント／再開機構を追加。
- 回答登録エラー後はEvidence再準備をせず、保存済み回答から登録工程を再開。
- 旧再診待ちCaseの軽量復旧に対応。
- Fixed Doctor V2 scope normalization for object-form allowed_scope / blocked_scope.
- Added next_review_after_days / next_review_target_date compatibility.
- Added dependencies-based Doctor treatment-lock interpretation.

# v6.1.14

- V6実運用試験で判明した改善ナビの無応答問題を修正。
- ダイアログ表示前の同期的な記事DB再検索を廃止し、改善ナビを先に表示。
- 詳細データは表示後に既存の非同期ローダーで取得。
- `ImprovementNaviLaunch` ログと利用者向け起動エラー表示を追加。
- Full / Starterへ同時反映し、Starter/Distribution READMEの旧版表記も同期。

## v6.1.12

## v6.1.13
- Full / Starter共通：改善履歴の「改善経路」「1週〜4週」「最終判定」をステータス背景色で視覚化。
- 1週〜4週のうち次に測定する「測定待ち」を青で強調し、その後の未測定週はグレー表示。
- 改善履歴詳細の「記事タイトル」に旧HTMLリンク文字列が残る経路を共通タイトル正規化へ統一。
- Full / StarterのCode.gs、VERSION、PRODUCT_IDENTITY、README系を同一バージョンへ同期。

- 改善履歴のタイトル・日時・一覧装飾を統一。
- Starter改善ナビの具体的P0/P1/P2を履歴へ保存。

## v6.1.11

- 改善ナビのP1/P2が同一・類似クエリや同じ見出しに偏る場合、重複候補を除外して次点のクエリへ切り替えるよう改善。
- Starterの「改善完了を登録」は、改善履歴作成後に専用の軽量upsertで「改善の推移」1行を作成し、書き込み確認まで行う方式へ変更。
- Starterで過去に「モニター中」なのに「改善の推移」が欠けた案件は、「改善の推移」を開く際にACTIVE履歴だけを軽量修復。

## v6.1.10
- 記事管理の軽量タイトル補完と表示書式を復元。
- 内部リンク候補タイトルのHTML混入を修正。
- Starter改善完了登録後の改善の推移を対象1件だけ即時同期。

## v6.1.9
- 改善ナビのタイトル正規化、GSC/本文並列取得、証拠取得完了後の改善案生成へ修正。

# v6.1.8

- 記事管理／今日の改善に残るHTML形式の記事タイトルを共通サニタイズし、表示時にも既存セルを軽量補正。
- 改善ナビは記事本文とSearch Consoleクエリの両方が揃うまで改善ポイントと内部リンク候補を生成しない。
- 改善ナビは日次処理で取得済みのクエリを優先し、存在しない場合だけSearch Console APIへフォールバック。記事本文は1時間キャッシュして再表示を高速化。
- Full / Starter共通修正。Spreadsheet schema と appsscript.json は変更なし。

#
## v6.1.7
- Starter改善ナビを本文H2/H3＋GSCクエリに基づく具体的編集指示へ強化。
- Starter改善完了登録と7/14/21/28日目の効果測定導線を追加。
- 今日の改善タイトルHTML表示と初回セットアップSTEP6 UIを修正。

# v6.1.6 - 2026-09-07

- 初回セットアップSTEP1〜STEP6の生成後クライアントJavaScriptを構文検証。
- v6.1.5で追加したspinner/fallback用HTML文字列の引用符が、最終HTMLで壊れてJavaScript全体が構文エラーとなり、実行・スキップ・終了を含む全ボタンが無反応になる根本原因を修正。
- spinner/fallback表示をinnerHTML依存からDOM生成へ変更し、同種の引用符事故を防止。
- セットアップナビゲーターと記事情報補完継続ダイアログのイベント処理を整理し、処理中表示を統一。
- Full / StarterのCode.gsを同一実装へ同期し、Edition定数だけを分岐。appsscript.jsonとSpreadsheetスキーマは変更なし。

## v6.1.5 - 2026-09-07

- 初回セットアップ関連ダイアログを全監査し、ボタンイベントを明示登録方式へ修正。
- STEP1〜6の実行・スキップ・終了、STEP2補助ボタン、処理中表示、失敗時復帰を修正。
- Full / Starter のバージョン表示を同期。

## v6.1.4
- 初回セットアップSTEP2の「プロジェクト番号を確認」「Google Search Console APIを開く」を実クリック可能なボタンとして実装。
- Wizardの処理中無効化対象をアクションボタンのみに限定し、補助リンク操作と処理制御を分離。
- 外部ページを開けない場合のフォールバックリンクを追加。

# v6.1.3 — Starter initial setup guard and progress UX

- STEP2でGoogle Cloudプロジェクト番号を確認・入力する導線を追加。
- Google Cloudのプロジェクト設定ページとSearch Console APIページへのジャンプボタンを追加。
- プロジェクト番号未確認のままSTEP3接続テストへ進めないガードを追加。
- 初回セットアップの実行・スキップ処理にスピナーを追加し、処理中であることを明示。
- Full / Starterの共通セットアップ実装へ同じ改善を反映。

## v6.1.2 - 2026-09-07

- Full / Starter の製品バージョン表示を v6.1.2 に同期。
- 「SIMS Managerについて」の主な役割をEdition別表示に変更。
- StarterではaWriter / aCreator / aMergeなどFull専用機能を製品説明に表示しない。
- Spreadsheetスキーマ、メニュー構成、appsscript.jsonはv6.1.1から変更なし。

# v6.1.1

- Full / Starter共通Spreadsheet正本をv6.1.1へ統一。
- 旧Product5.0 / Product5.4.3 Spreadsheetテンプレートを正本から廃止。
- distribution配下の旧Spreadsheetテンプレートを削除。
- 現行Code.gsスキーマに合わせた `SIMS-Manager-Template-v6.1.1-Official.xlsx` を追加。

# v6.1.0

- Starter Editionの実コードを `editions/starter/Code.gs` として追加。
- Full正本とStarterを同一スキーマ・同一バージョンラインで管理。
- Edition定数によりStarterでは「新記事関連」トップメニューを非表示。
- StarterではaWriter/aMerge/Creator DirectおよびSite Doctor高度処置のメンテナンス導線を非表示。
- 「選択記事の改善内容を見る」はStarterでも改善ポイント・内部リンク候補を表示し、aWriter依頼文/回答登録だけを非表示。
- Full Editionの既存機能・データ構造は維持。

## v6.0.1

- 日常作業のトップメニュー名を「今日の作業」から「SIMS今日の作業」へ変更。
- 「診断」はサイト全体の健康診断を先、記事の精密診断を後に配置。
- 「診断」の2段階サブメニューを廃止し、全処理を1階層から直接実行できる構成へ変更。
- 「設定・メンテナンス」の「設定」「修復・途中から再開」「情報」サブメニューを廃止し、セパレーターで区切った1階層の直接実行構成へ変更。
- Apps Script標準メニューでは非クリックの太字見出しを作成できないため、表示区分はセパレーターで表現。
- Full正本の内部関数名・Spreadsheetデータ構造・Edition管理方針は変更なし。

## v6.0.0

- Starter / Full Edition構成をSIMS Managerの正式な製品ベースラインとして導入。
- Full EditionのCode.gsを機能正本として維持し、Starter Editionは同一リポジトリ内の派生Code.gsとして管理する方針を確立。
- Starter / Fullは同一バージョン体系、同一Spreadsheetデータ構造、同一基本UI・メニュー思想を共有する。
- FullからStarterを分岐開発せず、共通修正は必ずFull正本からStarterへ反映する。
- v5.24.1で確定した目的ベースのメニュー構成と改善ガイダンスをv6系標準UIとして継承。

## v5.24.1
- 利用者目的ベースの正本メニュー構成へ再編。
- 改善ナビの改善ポイントと内部リンク候補説明を具体化。
- 内部関数名・シート構造・データ契約は維持。

# CHANGELOG

## v5.24.0 - 2026-09-07

- v5.23.1の検証済み実運用Code.gsを正式Repository正本へ昇格。
- SERP参入余地チェックのAI依頼文／aCreator紹介状コピー完了表示を継承。
- aCreator紹介状コピー後、新記事作成・公開後のManager新記事登録へ直接進む導線を継承。
- Code.gs全配置、VERSION、PRODUCT_IDENTITY、README、README-FIRST、Release Notes、Manifestをv5.24.0へ同期。
- Starter Edition設計の派生元となるFull Manager正本を確定。

## v5.23.0 - 2026-09-06

- 1件SERP参入余地チェックを追加。
- Manager内の既存クエリ・記事情報によるカニバリ事前ゲートを追加。
- Claude/Gemini向け上位30件SERP精査依頼と回答検証を追加。
- 到達順位からGREEN / YELLOW / PALE_PINK / REDをManager側で判定。
- PALE_PINK以上からaCreator紹介状を生成可能にした。
- v5.22.4〜v5.22.8のaDoctor実運用修正をRepository全配置へ同期。
- 利用者向け精密診断候補名をaDoctorへ統一。


## v5.22.3 - 2026-09-05

- Repository正本をDrive上の検証済みv5.22.3 runtimeへ同期。
- v5.22.1: aDoctor WAIT / MONITORを新規モニターとして開始可能にし、効果測定を7日目・14日目・21日目・28日目（1週間ごと）へ標準化。
- v5.22.2: Creator新規記事登録で公開URLを必須化し、「SIMS Managerについて」を情報ダイアログ化。
- v5.22.3: 「SIMS Managerについて」の二重「閉じる」ボタンを解消。
- VERSION / PRODUCT_IDENTITY / README / distribution / Code.gs各配置をv5.22.3へ同期。

## 5.20.0
- Personal Knowledgeの過剰なCTR/クリック拒否を修正。
- Home表示時の重いDoctor/効果測定再計算を省略。
- 起動時の日次処理状態を軽量再判定し、翌日の「本日完了」残留を修正。


## 5.18.3
- Personal Knowledge bootstrap errors are surfaced to the registration dialog and Cloud Logging.
- Added a non-routine Personal Knowledge connection/self-check command.
- Prevent silent SITE candidate rejection when PK context initialization itself fails.
- Correct single Article Doctor result completion label in the Site Doctor intake dialog.

## v5.18.2 - 2026-08-30

- Article Doctor単票結果をSite Doctor追跡IDなしで安全に受理する回帰修正。
- Site Doctor追跡案件の厳格なCase/Batch ID検証は維持。
- Site Doctor処置ダイアログ経由でもPersonal Knowledge候補を取り込む。

# v5.18.1 - 2026-08-30

- Fix Personal Knowledge root initialization so `SIMS-Personal-Knowledge` is created even when the spreadsheet site context must be resolved from the active Doctor request.
- Resolve SITE-scoped Personal Knowledge using trusted SBM request identity (`site_id`, site name, blog/article URL) before accepting AI output site identifiers.
- Accept `HIGH` / `MEDIUM` / `LOW` confidence labels from Article Doctor candidates and normalize them to numeric admission values.
- Keep candidate ingestion non-blocking and preserve replay-safe `confirmation_event_id` handling.

## v5.13.0

## v5.14.10
- 「選択」チェックボックスを単一選択へ統一。Doctor精密診断候補など見出し行が1行目以外の派生シートにも対応。
- 記事一覧からnoindex・非公開等を管理対象外へ変更し、後から通常管理へ復帰できる可逆な管理UIを追加。
- 管理対象外状態を日次更新で保持し、改善・Doctor・内部リンク候補への再混入を防止。
- 301非対応ブログのMerge吸収記事を「統合済み（リダイレクト不可）」として管理対象外へ移すルートを追加。

- 改善の推移に「観察終了後の処置を進める」を追加。
- 改善完了案件を現役推移一覧から卒業し、履歴は保持。
- 再改善必要／確定不能案件をDoctor再診へ接続。
- Doctor WAIT / MONITOR を正式な追加経過観察サイクルとして登録。
- Apps Script・配布コード・VERSION・PRODUCT_IDENTITYをv5.13.0へ同期。

## v5.12.1

- Creator回答に公開記事URLが含まれない通常運用でも登録できるよう、Creator新規記事登録ダイアログに「公開した記事のURL」補完欄を追加。
- Creator回答内にURLがある場合は従来どおり自動取得し、URL欄は空欄のままで登録可能。
- 回答内にURLがない場合だけ利用者入力URLをフォールバックとして使用。SiteID・Creator case・ブログホスト・重複URL等の既存安全検証は維持。
- ダイアログのボタン領域を固定し、長いCreator回答を貼り付けても登録ボタンが見失われにくいレイアウトへ改善。

# CHANGELOG

## v5.12.0

- Added a user-facing "Creatorで作った新記事を登録" flow that accepts the full Creator response and registers the published article before GSC exposure.
- Reused the existing Creator publication pipeline so ArticleID, monitoring state, review schedule, improvement history, and later GSC URL reconciliation remain consistent.
- Added guards for SiteID mismatch, invalid/missing published URLs, unknown Creator cases, and invalid workflow state.
- Prevented numeric-only URL slugs such as WordPress `/1223/` from being used as H1/article-title fallbacks; unresolved titles remain `タイトル取得待ち`.

## v5.10.22

- Normalized the product header/version metadata against the currently deployed Code.gs.
- Re-synchronized all distributed Code.gs runtime mirrors from the current deployed script.
- No functional workflow change from the currently deployed v5.10.21 behavior.

## v5.10.21

- Removed manual "前回の処置を再読み込み" UI from Site Diagnosis treatment dialog.
- Preserved automatic resume of unfinished treatment state.
- Clear Writer result input and previous registration status when switching referrals.

## v5.10.20

- Site-wide Precision ResultのSBM登録を1案件ずつ分割実行。
- ブラウザ側で登録対象件数を先に確定し、進捗 `0/N → 1/N → ...` を即時表示。
- 現在処理中の診断テーマ/CaseIDを進捗表示へ反映。
- Writer処置結果登録成功後に③入力欄を自動クリア。
- v5.10.19までのREF URL解決・Doctor V2 scope互換を維持。

## v5.10.19

- `SIMS_DOCTOR_CASE_RESULT_V2` のトップレベル `allowed_scope` / `blocked_scope` を受理。
- Site Diagnosis個別精密診断からWriter紹介状を生成する際の治療範囲欠落を修正。
- `treatment_plan.actions` をWriter紹介状のinstructions / treatment_tasksへ引き継ぎ。
- v5.10.18までのREF URL照合・複数CASE_RESULT抽出・1件ずつ分割登録・進捗UIは維持。

## v5.10.18

- Site Diagnosis処置ダイアログのsubmitDoctor()差し替え不具合を修正。
- 進捗オーバーレイがクリック直後に表示されない問題を修正。
- 外側Code.gsに加え、ブラウザ側submitDoctor()単体の構文チェックを追加。

## v5.10.17

- Doctor複数個別結果を1件ずつの分割実行へ変更。
- 登録ボタン押下直後に専用進捗オーバーレイを表示。
- `0/9 → 1/9 → ... → 9/9` の進捗とプログレスバーを表示。
- エラー時に処理済み件数を表示し、待ち続ける状態を解消。
- v5.10.15/v5.10.16のREF URL照合・複数CASE_RESULT抽出は維持。

## v5.10.16

- Doctor個別精密診断の複数結果登録を2件ずつの分割実行へ変更。
- 1回で9件処理する長時間実行を廃止。
- 進捗を2/9、4/9、6/9、8/9、9/9のように画面表示。
- 「ボタン入力を検出しました」のまま長時間待つUIを改善。
- v5.10.15のREF URL照合・複数CASE_RESULT抽出は維持。

## v5.10.15

- Site DiagnosisのURL surrogate ArticleID (`REF-*`) を記事URLでSBM正式ArticleIDへ解決。
- `REF-*` はDoctorケース追跡用として許容するが、SBMの記事管理IDとして保存しない。
- 複数の `SIMS_DOCTOR_CASE_RESULT_V2` を含むDoctor回答全文を一括取込。
- 一括登録前に全件のSiteID・URL・正式ArticleIDをpreflight。
- 単件結果、Site-wide precision、Writer/Merge/Creator/Monitorの既存経路は互換維持。

## v5.10.14

- Site Diagnosis v0.7.3 Creator handoff semanticsをSBM内で欠落なく保持。
- `new_article_target` / `reference_articles` / `article_identity_semantics` を一括診断展開後の単案件JSONへ引き継ぐよう修正。
- Creator紹介状にも上記3項目を保持し、新規記事対象と既存関連記事（参照専用）の境界を明示。
- Writer / Merge / Monitor / Creator公開登録など既存フローは変更なし。


## v5.10.13
- Site Diagnosis由来のCreator案件に「新記事の公開を登録」を追加。
- 公開URLを新規記事として記事管理へ登録し、ArticleIDを採番。
- Creator案件をモニター中へ移行し、Creator planのmonitor_daysを再診予定日に反映。
- 既存記事の内部リンク候補URLを新記事URLとして扱わない。
- apps-script/Code.gs と distribution/Code.gs を同一内容で同期。

## v6.2.20
- 改善の推移・記事別改善履歴・全改善履歴・改善履歴詳細のUIを共通設計へ統一。
- 記事情報→状態/経路→改善内容→測定結果の順に整理し、判定バッジ・カード・閉じる操作を統一。
