## v6.3.3 — モノクロテーマ最終統一

- aDoctor精密診断候補シートのトップバーを実際の使用列全体へチャコールで統一。
- 動的ダイアログの説明枠・進行中表示・補助情報など、状態を表さない青系装飾をグレースケール化。
- 通常操作の青、成功・良好の緑、注意の黄〜橙、問題・削除の赤は意味色として維持。
- GSC URL解決、健康診断、Doctor/Writer、記事更新等の処理ロジックには変更なし。

## v6.3.2 — GSC URL表現差を吸収する共通解決層

- SIMS内部の正規化URLと、Search Consoleへ問い合わせるURLを分離。
- 初回記事情報補完のメインクエリ取得を段階フォールバック方式へ変更。
  1. キャッシュ済みGSC一致URL、なければ内部正規化URLを一括exact取得
  2. 0件の記事だけ末尾スラッシュ差を一括再取得
  3. まだ0件の記事だけ http/https・www差を一括再取得
- 大量サイトでの遅延を避けるため、一括処理では重いcontains検索を実行しない。
- 「記事情報を更新」の6か月再取得では、上記exact候補の後に対象1記事だけcontains＋正規化再照合まで実施。
- 改善ナビも同じ共通URL解決層へ統一。
- GSCで実際にヒットしたURL表現をDocumentPropertiesへ記事単位で保存し、次回以降は最優先で使用。
- fetchAllは80リクエスト単位で分割し、大規模サイトでも一度に過剰な外部通信を行わない。
- URL表現差だけではメインクエリ未取得と判定しない設計へ変更。
- ランク判定・記事本文・Doctor/Writer処理には変更なし。

## v6.3.1 — モノクロテーマの利用者向け画面を横断統一

- `showModalDialog` を使う利用者向けモーダルを共通テーマラッパー経由に統一。
- 記事情報更新、日次処理、改善ナビ、改善履歴、記事管理、設定、Doctor / Writer / Creator / SERP関連などの動的ダイアログへMONOCHROMEを適用。
- 通常操作=青、良好=緑、注意=黄〜橙、問題=赤の意味色は維持し、背景・カード・表・フォームは白〜グレーへ統一。
- `Doctor_健康診断書` をHomeと同じ階層グレースケールへ対応。健康度は背景色ではなく意味色の文字で表現。
- `aDoctor_精密診断候補` もトップバー/説明/見出し/データ面をモノクロ化し、重症度は文字色で表現。
- 記事情報更新の「過去6か月でもクエリ取得できず」の内訳を修正。
  - 通常ランクを維持
  - 未発芽のまま
  - 未発芽から通常ランクへ復元
  - 更新できず
  を実際の保存後ランクから分類する。
- STANDARDテーマと処理ロジックは変更なし。

## v6.3.0 — サイト健康診断の開始操作を簡素化

- サイト健康診断を選択した直後のOK/キャンセル確認ダイアログを削除。
- 初回セットアップ未完了、Search Console未接続、日次処理中などの安全エラーは従来どおり表示。
- 正常時は新規Health Checkを作成して直ちに8ステップの進捗Runnerを表示。
- v6.2.99の未発芽判定・再確認ロジックは変更なし。

## v6.2.99 — 未発芽誤判定の修正と安全再評価

- 「Search Consoleクエリが取得できない」だけで記事ランクを未発芽へ変更する処理を廃止。
- 未発芽/発芽/通常4ランクは、クリック数・表示回数・CTR・掲載順位のページ実績を正本として判定。
- 200表示以上または10クリック以上の記事は通常4ランクへ評価し、クエリ有無はランク判定に使用しない。
- 既存の誤った未発芽記事を現在のページ実績から再評価する「設定・メンテナンス > 未発芽判定を再確認」を追加。
- 再確認は未発芽記事だけを対象にし、ArticleID＋URL＋更新前ランクの安全ゲートを通して復元。
- Site健康診断では、180日で10クリック以上または200表示以上ある記事を保存済み未発芽ラベルだけで未発芽扱いしない。
- 過去に流入が多く現在急減している記事は「未発芽」ではなく低下・見直し系診断へ回る。
- メインクエリ、本文、URL、Doctor/Writerの処置内容は変更しない。

## v6.2.98 — クエリ0件でもaWriter依頼文を生成

- 改善ナビの生成条件を「本文 + Search Consoleクエリ必須」から「本文必須、クエリは精密化情報」へ変更。
- 本文取得済みでSearch Consoleクエリが0件の場合、`LIMITED` モードでaWriter依頼文を生成。
- LIMITEDモードでは実クエリの推測・捏造を禁止し、記事タイトル・本文構造・保存済みページ指標だけを根拠に改善。
- タイトル、SEOタイトル、メインクエリ、記事テーマの拡張、大規模な見出し再編は原則禁止し、必要なら利用者判断項目へ送る。
- クエリ0件かつメインクエリも不明な場合でも、本文構造からP0/P1/P2の改善ポイントを生成。
- 内部リンク候補も記事タイトル・メインクエリ・本文テーマを使って保守的に抽出。
- 改善ナビ上で「限定モード」を明示し、aWriter依頼文コピーボタンを有効化。
- 通常のFULLモード、Doctor / Writer結果登録、Search Console取得ロジックには変更なし。

## v6.2.97 — 記事情報更新の初期点検エラー修正

- 「記事情報を更新」の初期点検で発生する `Exception: 引数が無効です` を修正。
- 最終行取得を `getLastRow()` 上限 + ArticleID / 記事URL列の実値後方走査へ変更。
- 必要列の列番号を読み取り前に検証。
- 初期点検エラーに工程名を付加し、今後の切り分けを容易化。
- 記事更新ロジック、Search Console取得、表示テーマには変更なし。

## v6.2.96 — UI寸法・ダイアログ統一仕上げ

- 「今日の改善」の見出し行を34pxへ統一し、他の主要一覧と同じ高さへ調整。
- 利用者向け主要一覧のA列「選択」を56pxへ拡張し、文字の左端が見切れないよう修正。
- Home/今日の改善/改善の推移/記事管理/改善履歴の寸法整合を強化。
- `sbmEnsureCloseButton_` 経由の主要ダイアログへ共通CSSを注入し、余白・角丸・見出しサイズ・フォーム・ボタン高さを統一。
- 改善履歴/改善の推移詳細ダイアログも同じ寸法体系へ統一。
- MONOCHROME時はダイアログも白・淡灰・濃灰の階層グレースケールへ調整。
- STANDARDテーマと処理ロジックには変更なし。

## v6.2.95 — モノクロテーマ最終実装

- 白〜淡灰背景へ切り替えた際に不可視になる白文字を、利用者向け主要シート全体で自動補正。
- 改善の推移「判定」列をモノクロ専用の意味色へ明示変換。
- 改善履歴の1週〜4週・最終判定も同じ意味色へ統一。
- 「大きく改善」「改善完了」は濃緑、「見直し候補」「再改善必要」「元に戻す検討」は赤系、「追加経過観察」は青系など、白背景でも必ず読める配色へ変更。
- Homeも共通のモノクロ判定色定義を利用し、画面間の意味色を統一。
- STANDARDテーマの従来配色は変更なし。
- GSC取得、日次処理、記事ランク判定、Doctor / Writer / Merge / Workflowロジックは変更なし。

## v6.2.94 — 階層グレースケールを主要画面へ統一

- v6.2.93で確定したHomeのモノクロ設計を、今日の改善・改善の推移・記事管理・改善履歴へ展開。
- 表見出しはHome最上部より一段弱い中濃度グレー＋白文字。
- データ領域は白を基準に、ごく淡い交互行で視線誘導。
- データの既存文字色・太字・数値書式・意味色は維持。
- 主要再開ダイアログも白・淡灰・濃灰の階層へ統一。
- STANDARDテーマ、GSC、日次処理、Doctor / Writer / Merge / Workflowロジックは変更なし。

## v6.2.93 — モノクロHomeの階層グレースケール化

- 最上部の製品バーだけを濃いグレーで強調。
- サイト情報の項目セルと主要セクション見出しは一段淡いグレーへ変更。
- 「改善が確認できる / 要注意・見直し / まだ判定できない」は淡いグレー見出し＋濃色文字へ変更。
- 記事ランクは白、記事改善状況はごく淡いグレー、改善率は一段濃い淡灰とし、面の階層を追加。
- 改善モニターのデータ領域は白〜淡灰で整理し、意味色は文字色・太字・サイズで維持。
- 「大きく改善」はSTANDARDの白文字をそのまま使わず、白背景でも読める濃緑文字へ補正。
- 標準テーマおよび処理ロジックには変更なし。

## v6.2.92 — モノクロテーマを主要5シートへ統一

- Homeトップバーの濃グレー＋白文字を、主要シートの見出し・項目名の共通デザインとして採用。
- Home、今日の改善、改善の推移、記事管理、改善履歴へ適用。
- データセルは白背景に統一し、既存の文字色・太さ・数値書式は維持。
- Homeの日次処理は項目セルだけトップバー配色、値セルは白背景＋既存ステータス文字色。
- 「改善が確認できる / 要注意・見直し / まだ判定できない」の見出しはトップバー配色。
- 判定データは背景色を白にし、緑・橙・赤・青・グレー等の意味色、太字、文字サイズで状態を表現。
- 改善の推移・改善履歴の判定セルも白背景に統一し、現行の文字色/太字を維持。
- STANDARDテーマは従来配色を維持し、切替時に標準表示へ復元可能。
- GSC取得、日次処理、記事ランク判定、Doctor / Writer / Merge / Workflowには変更なし。

## v6.2.91 — 表示テーマ試作（標準 / モノクロ）

- 設定・メンテナンスに「表示テーマを変更」を追加。
- 現行配色は `STANDARD` としてそのまま維持。
- `MONOCHROME` は黒背景ではなく、白・薄灰・濃灰を中心に装飾面をモノトーン化。
- 青＝通常操作、緑＝完了・良好、黄〜橙＝注意、赤＝問題・削除などの意味色は維持。
- 試作対象は Home、記事管理、未完了作業再開ダイアログ。
- 記事ランクはモノクロ時にセル色で強調せず、アイコン＋文字を中心に表示。
- GSC取得、日次処理、記事ランク判定、未発芽判定、Doctor / Writer / Merge / Workflowには変更なし。

## v6.2.90 — 生成HTML / ブラウザJavaScript監査

- 未完了作業再開まわりの生成HTMLとブラウザ側JavaScriptをまとめて監査。
- 通常aDoctor精密診断ダイアログのWriter follow-up UIに残っていた単一 `\n` 5か所を二重escapeへ修正。
- `未完了一覧 / 待機画面 / 個別再開 / aDoctor精密診断` の主要生成scriptを対象に、危険な単一制御文字escapeをZIP作成前に検出する `tests/check_dialog_script_escaping.py` を追加。
- 既存の `node --check`、版整合チェック、Full/Starter一致確認とあわせて実行。
- 診断ロジック、未発芽判定、日次処理、記事情報更新、Merge判断ロジックは変更なし。

## v6.2.89 — 個別Workflow再開画面の空白表示を修正

- 個別再開ダイアログのメタ情報表示に追加した改行が、HTML出力後のJavaScript文字列内で実改行となり構文エラーになっていた問題を修正。
- `\n` をブラウザ側JavaScriptへ正しく残すよう二重escape化。
- 案件名・ArticleID・作業内容・状態・CaseIDをサーバー側でも先行描画し、client scriptに問題が起きても完全な空白画面にならないfallbackを追加。
- 「再開データを準備しています…」の初期表示を追加し、何をしているか分かるようにした。
- Full / Starterを同一修正・同一バージョンで同期。

## v6.2.88 — 未完了一覧の空白表示を修正

- 「未完了の作業を選ぶ」のクライアントJavaScriptが、整理確認文の改行escape不備で構文エラーになっていた問題を修正。
- 候補カードをサーバー側でも先行描画し、クライアントJavaScriptに問題が起きても一覧自体が空白にならないfallbackを追加。
- v6.2.87で削除した自動整理処理の旧変数参照を除去。
- Full / Starterを同一修正・同一バージョンで同期。

## v6.2.87 — 未完了再開処理を一括読込方式へ高速化

- `Doctor_Workflow_State` をCaseごとに繰り返し全件読込していたN+1処理を廃止し、1回の `getValues()` でMETA/Payload索引を構築。
- MONITORING CaseはWriterのfollow-up referralが実際に必要な場合だけ追加診断情報を参照。
- 通常改善Workflow探索も同じ一括索引を再利用し、WorkflowStateの再読込を廃止。
- 「未完了の作業を再開」では旧Merge referral移行や古いCaseの自動書換えを実行せず、候補抽出と表示だけに限定。
- 待機画面に実際の処理内容を表示し、45秒超過時は待ち続けないよう案内。
- 再開/整理ボタンは押下直後に処理中表示へ切替え、二重押下を防止。
- 日次処理、記事情報更新、未発芽判定、Doctor/Writer/Mergeの判断ロジックは変更なし。

## v6.2.86 — 未完了再開センターの追加診断・整理機能を完成

- 本処置がモニター中でも、Writer `follow_up_referrals` 由来のカニバリ精密診断が未完了なら独立案件として再開一覧に表示。
- 同一記事の古いDoctor診断案件を「整理候補」として理由付き表示。
- 整理は物理削除せず `CANCELLED_BY_USER` として監査履歴を保持。
- 「この作業を再開」「この旧案件を整理」は押下直後に処理中表示・二重押下防止。
- Doctor回答が別Caseのものなら、JSONエラーではなくCase不一致を明示。
- 再開後のDoctor結果登録は通常精密診断と同じcheckpoint処理を継続利用。
- 日次処理、未発芽判定、記事情報更新、Doctor/Writer/Mergeの判断ロジックは変更なし。

## v6.2.85 — 未完了作業の再開・整理センター改善

- 共通「未完了の作業を再開」で複数のDoctor/Writer/Merge/Creator Caseがある場合、最新1件へ自動直行せず一覧から1件選択。
- CaseIDではなく「どんな改善だったか」「現在地」「次にすること」を主表示。
- 同じ記事で新しい未完了案件が進行している古い診断Caseを「整理候補」として理由付き表示。
- 整理は物理削除せず `CANCELLED_BY_USER` として履歴を保持し、未完了一覧から除外。
- 再開ダイアログのDoctor回答登録を通常精密診断と同じcheckpoint登録処理へ統一。
- 日次処理、未発芽判定、記事情報更新、Doctor/Writer/Mergeの診断判定ロジックは変更なし。

## v6.2.84 — aDoctor精密診断ダイアログ主要操作の独立化

- aDoctor依頼JSONのコピー処理を独立した安全ハンドラへ分離。
- Doctor結果登録処理を独立した安全ハンドラへ分離。
- 長文Request表示後に既存の大きなclient scriptで問題が起きても、主要2操作を継続可能にした。
- コピーは `execCommand` を先に試し、Clipboard APIをフォールバックとして使用。
- Doctor結果登録後はWriter / Merge / 追加診断の次工程を安全ハンドラ側でも表示可能。
- Code.gs先頭コメントを版整合チェック対象に追加。
- 診断ロジック、未発芽判定、日次処理、Mergeロジックは変更なし。

## v6.2.83 — カニバリ精密診断依頼JSONの空欄表示を修正

- 長文化する追加診断Requestの表示方式を、Base64化＋ブラウザ側復号からtextareaへのサーバー側直接埋め込みへ変更。
- JSONはHTML escapeして安全に表示し、画面表示内容とコピー対象を一致。
- 保存済みaDoctor回答の復元も同じ直接埋め込み方式へ統一。
- Request生成、Doctor/Writer判定、未発芽判定、日次処理、Mergeロジックは変更なし。

## v6.2.82 — 既存Caseのカニバリ精密診断依頼をオンデマンド復元

- Writer結果に `follow_up_referrals: MERGE` がある既存Caseで `FOLLOW_UP_REQUEST` が未保存でも、追加診断依頼をその場で再生成。
- 保存済みWriter結果、Doctor_Cases、記事DBから元のArticle Doctor requestを再構築し、同一CaseIDを維持。
- 再生成したRequestはWorkflow payloadへ保存し、次回以降も再利用。
- 記事詳細とWriter結果登録直後の両方から同じ復元処理を利用。
- 復元失敗時は元ダイアログを維持し、具体的なエラーを表示。
- 日次処理、未発芽判定、14日ゲート、記事情報更新、Doctor/Writer処置判定、Merge判定ロジックは変更なし。

## v6.2.81 — Repository版管理の整合修正

- `VERSION`、`PRODUCT_IDENTITY.json`、README、Distribution、Full/Starter版情報を同期。
- Shared Editorial KnowledgeはManagerと独立した v3.5.0 に統一。
- ZIP作成前の版整合チェックを追加。
- 機能ロジックは変更なし。

## v6.2.80

- 未発芽aDoctor診断を全面リライト前提から原因診断優先へ変更。
- 検索需要・検索意図・インデックス・カニバリ・SERP Gap・現行内容を確認後、全面リライト／部分改善／Merge／インデックス対応／管理対象外／観察から処置を選択。
- 未発芽判定式、日次GSC取得、14日ゲート、記事情報更新、Merge処理は変更なし。

## v6.2.77

- 未発芽記事の主操作を記事詳細へ統合。
- 記事管理の重複aDoctor直結メニューを削除。
- インデックス問題処置の追加診断判定変数欠落を修正。
- 未発芽判定式、日次処理、14日ゲート、記事情報更新、Merge処理は変更なし。

## v6.2.76

- Repository版管理の整合修正。機能ロジックは変更なし。
- Code.gs系の製品コメントと `SBM_VERSION` を v6.2.76 へ同期。
- Full Editionは `SBM_EDITION = 'FULL'`、Starter Edition派生コードは `SBM_EDITION = 'STARTER'` へ是正。
- README / Starter README / PRODUCT_IDENTITY / VERSION / GitHub Release Notesをv6.2.76へ同期。
- v6.2.75までのMerge、未発芽、14日ゲート、記事情報更新の処理をそのまま維持。

## v6.2.75

- Merge完了時の効果測定案内を、実処理と一致する「7日目・14日目・21日目・28日目」に統一。
- Merge完了処理・未完了再開処理・重複Case整理の機能ロジックは変更なし。
- 日次GSC取得、14日ゲート、記事ランク判定、記事情報更新は変更なし。

## v6.2.74
- 後続Merge完了済みの吸収記事に残った古いaDoctor診断待ちCaseを、安全条件一致時のみ `SUPERSEDED_COMPLETED_MERGE` へ整理。
- 未完了作業・個別精密診断の再開時に、処置完了済みの重複Caseへ戻る問題を修正。
- 再開系ダイアログの内側に重複表示されていたタイトルを削除。
- 日次処理・14日ゲート・ランク判定・記事情報更新・Merge完了ロジックは変更なし。

## v6.2.73
- 未完了再開でMerge利用者処置を最優先表示し、⑤へ直接復帰。

## v6.2.72
- Merge完了の安全照合を、Case記事=Primary固定から「Case記事がPrimaryまたはabsorbedに存在」へ修正。
- A000156 → A000164のような吸収元Caseを正常に完了可能にした。
- 最終モニタリングは統合先Primaryへ登録し、吸収元は既存のMerge管理対象外処理へ送る。
- 統合先・吸収記事を開くボタンは維持。
- 日次処理・14日ゲート・ランク判定・記事情報更新は変更なし。

## v6.2.71
- 記事詳細で保存済みDoctor結果の「追加診断待ち」を最優先で認識。
- インデックス要確認記事で単体aDoctor診断を再発行せず「カニバリ精密診断へ進む」へ切替。
- v6.2.69でMONITORへ入った既存Caseも、保存済みDoctor結果と元依頼から同一Caseの追加診断依頼をオンデマンド復元。
- 日次GSC取得・14日ゲート・記事ランク判定・記事情報更新は変更なし。

## v6.2.70
- aDoctor WAIT + 追加診断指定を単純な追加経過観察から分離。
- カニバリ精密診断が必要なケースでは、類似記事本文とGSC Evidenceを自動収集した追加診断依頼を生成。
- 追加診断は同一Caseで継続し、同じダイアログから再診結果を登録可能。
- 記事詳細の二重タイトルを解消。
- 日次GSC取得、14日ゲート、記事ランク判定、記事情報更新は変更なし。

## v6.2.69
- 記事詳細の主操作を記事状態連動へ変更。
- 通常記事では不要な処理ボタンを非表示。
- インデックス要確認・要確認・要改善・改善中・モニター中ごとに次の操作を切替。
- インデックス要確認記事からaDoctor精密診断へ進む専用処置ダイアログを追加。
- 要確認画面の「問題なし・改善対象へ」「インデックス問題として登録」はSearch Console選択に応じて排他的に表示。
- GSC取得、14日ゲート、記事ランク判定、記事情報更新は変更なし。

## v6.2.68
- 要確認記事のSearch Console確認を「Googleに登録／未登録」の選択式へ変更。
- Google未登録の場合に、クロール済み未登録・検出未登録・noindex・重複canonical・404等の理由を記録可能にした。
- 未登録記事は「インデックス要確認」として保持し、日次処理で同じ未取得理由から要確認へ戻さない。
- Google登録済みの場合のみ通常の改善対象へ送る。
- GSC取得本体、14日ゲート、記事ランク判定、記事情報更新は変更なし。

## v6.2.67
- 「要確認記事の処理」の対象から、改善中・モニター中・今日の改善・処置中など既存改善フロー中の記事を除外。
- 日次処理の14日未取得判定でも、既存改善フロー中の記事は「要確認」にせず「管理中」を維持。
- 古いダイアログから誤処置しないよう、処置登録側にも改善フロー中の記事を拒否する安全確認を追加。
- GSC取得本体、14日ゲート、記事ランク判定、記事情報更新は変更なし。

## v6.2.66
- 「要確認記事の処理」ダイアログで記事カードが表示されず空白になる不具合を修正。
- 原因は、処置ボタンの onclick 文字列引数がダイアログHTML内JavaScriptへ展開される際に引用符が崩れ、初期 `render()` が実行されないクライアント側構文エラー。
- 処置ボタンを数値ディスパッチ方式へ変更し、HTML内の入れ子引用符を排除。
- 14日ゲート、要確認抽出、要改善/管理対象外への処置、日次GSC取得、記事情報更新は変更なし。

## v6.2.65
- GSCページデータを最後に取得できた日から14日以上経過した記事を「要確認」とする判定へ統一し、従来の連続3回未取得条件を廃止。
- 記事管理メニューに「要確認記事の処理」を追加。対象を1件ずつ確認し、問題なしは「要改善」、意図的なnoindex・非公開・URL変更・統合は管理対象外へ整理。
- 要改善へ処置済みの記事は、データを再取得するまで同じ理由で毎日要確認へ戻さない。
- 選択記事詳細の「データ更新日」を「最終データ取得日」に変更し、連続未取得日数・管理状態を表示。最終取得日時の重複表示を省略。
- GSC取得処理、記事ランク判定、記事情報更新処理は変更なし。


## v6.2.64
- 記事情報更新ダイアログのクライアントJavaScript構文エラーを修正し、点検が開始されない回帰を解消。
## v6.2.63
- 記事情報更新の取得不可記事ごとに「この記事を確認」を追加。
- 同一ダイアログ内で記事管理の詳細内容を確認し、更新結果へ戻れるようにした。
- 「安全照合・保存確認で保留」を「更新できず」へ簡略化。
- 更新処理本体・日次処理は変更なし。

## v6.2.62 - 2026-09-11
- 「記事情報を更新」の6か月クエリ未取得内訳を3状態へ分離。
- 「未発芽へ変更」「未発芽のまま」「安全照合・保存確認で保留」を集計欄でも明示。
- 6か月GSC取得・安全書込・日次処理ロジックは変更なし。

## v6.2.60

## v6.2.61 - 2026-09-11
- 「記事情報を更新」の完了結果を整理。
- 過去6か月でもメインクエリを取得できない記事をArticleID・記事タイトル・URL・処置結果付きで表示。
- 「未発芽へ変更」「未発芽のまま」「安全照合・保存確認で保留」を区別。
- 完了画面から「記事管理を開く」を追加。
- 日次処理・6か月クエリ取得・安全書込ロジックは変更なし。
- v6.2.59の公開関数欠落を復旧し、Home未取得の軽量再集計を安全実装。

## v6.2.58
- Home snapshot version invalidation and J1 version sync fix.

## v6.2.57 - 2026-09-11

- Homeの未取得集計を管理フラグ「データ未取得」「要確認」優先へ修正。
- 未取得記事が旧ランクを保持していてもランク側へ二重計上せず、未取得へ排他的に集計。
- HomeのmissingCountも同じ未取得定義へ統一。
- 日次処理・ランク判定基準・サイト健康診断・aDoctor連携は変更なし。
- Full / Starterを同期。

## v6.2.56 - 2026-09-10

- Homeのセクション間に残っていた空白行を詰め、情報を上方へ集約。
- 「今週のアドバイス」をA23:J30の8行メッセージ領域へ拡張。
- アドバイス本文を13pt・上寄せ表示にし、長文でも見切れにくい表示へ改善。
- 日次処理、記事ランク判定、改善判定ロジックは変更なし。


## v6.2.55 - 2026-09-10
- Homeの記事ランクに「未取得」を追加し、7区分合計が総記事数と一致するよう可視化。
- 改善率の説明コメントを削除。
- モニター内訳を「改善が確認できる」「要注意・見直し」「まだ判定できない」の3群へ再配置。
- 判定待ち／経過観察／再判定待ち／データ不足を右列へ整理。
- アドバイス欄をモニター表直下へ移動し、表示領域を拡張。
## v6.2.55
- Homeの記事改善状況を全記事の排他6区分へ変更し、合計＝総記事数を保証。
- 記事ランクと改善状況の色味を分離。改善率を右欄KPIへ移動。
- モニター内訳を判定可能／判定待ちに分離し、経過観察系の表示名を明確化。
- Home横幅とアドバイス欄を拡張。

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
