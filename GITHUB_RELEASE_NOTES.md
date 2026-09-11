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

## v6.2.80 — Writer follow-upカニバリ精密診断候補の保持

- aWriter結果の top-level `follow_up_referrals` で `MERGE` が返った場合、自動Mergeせずカニバリ精密診断候補として保存。
- Writer本処置は従来どおりモニター中へ正常完了し、追加診断を別枝として保持。
- 登録直後に「カニバリ精密診断へ進む」「今回は保留」を表示。
- 保留しても記事詳細・途中再開から同一Caseの追加診断を再開可能。
- 日次処理、未発芽判定、14日ゲート、記事情報更新、Merge完了ロジックは変更なし。

# SIMS Manager v6.2.80

- 未発芽記事のaDoctor診断を「全面リライト前提」から「原因診断優先」へ変更しました。
- 検索需要・検索意図・インデックス状態・カニバリ・SERP Gap・現行記事内容を確認します。
- 診断後は、全面リライト／部分改善／Merge／インデックス対応／管理対象外・noindex／観察から適切な処置を選択します。
- aDoctor依頼JSONの `treatment_posture` / `treatment_policy.mode` を `CAUSE_DIAGNOSIS` に統一しました。
- 未発芽判定式、日次GSC取得、14日ゲート、記事情報更新、Merge処理は変更していません。

# SIMS Manager v6.2.77

- 未発芽記事の次の処置を、記事管理の「選択記事の詳細を見る」へ統合しました。
- 未発芽かつ他の改善Workflowに入っていない記事は、記事詳細に「未発芽をaDoctorで精密診断する」を表示します。
- 記事管理メニューの重複操作「選択記事をaDoctorで精密診断」を削除し、記事状態に応じた主操作へ一本化しました。
- インデックス問題の処置ダイアログで追加診断判定変数が未定義になる潜在不具合を修正しました。
- 既存の `sbmDoctorCreateRequestFromArticleList` は互換用に残し、既存Workflowや保存済み案件を壊しません。
- 未発芽の判定条件、日次GSC取得、14日ゲート、記事情報更新、Merge処理は変更していません。

# SIMS Manager v6.2.76

- Repository管理情報の整合を修正しました。機能ロジックは変更していません。
- Code.gs系の製品コメントと `SBM_VERSION` をv6.2.76へ同期しました。
- Full Editionは `SBM_EDITION = 'FULL'`、Starter Edition派生コードは `SBM_EDITION = 'STARTER'` として正しいEdition境界へ戻しました。
- README、Starter README、PRODUCT_IDENTITY、VERSION、GitHub Release Notesをv6.2.76へ同期しました。
- v6.2.75までのMerge完了、未完了再開、未発芽判定、14日ゲート、記事情報更新はそのまま維持します。
