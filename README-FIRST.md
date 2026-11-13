# SIMS Manager v9.3.26 — improvement-history date normalization

- For a saved completion context with zero absorbed articles, require only article publication confirmation.
- Actual absorbed articles still require redirect or search exclusion confirmation.
- Saved Merge result and Drive artifacts remain unchanged.
- Integration test on the live spreadsheet is still required.

# SIMS Manager v9.3.24

# SIMS Manager v9.3.24 — aMerge partial-result resume

- Restore CaseID/result-ID-verified saved aMerge drafts even when `publication_ready` is false.
- Separate draft existence from publication approval. Do not change stored aMerge response or Google Drive artifacts.
- Resume into explicit user-action review status for non-publication-ready drafts; no automatic publication or redirect.
- Preserve missing-content and identity-mismatch safety stops.
- Regression tests: partial draft, ready draft, wrong CaseID, wrong result ID, empty content.
- Validation is mocked; Google Apps Script live integration must be verified in the user's environment.

## v9.3.22 — Merge result resume artifact recovery

Registered long aMerge results are recovered from the case-linked Drive result JSON, with CaseID/result identity checks. No re-registration, publication, redirect or history changes occur automatically.

# SIMS Manager v9.3.21

Merge結果受領済みCaseの再開を、完成原稿の保存内容が検証できる場合に限り公開・301確認工程へ進める修正。既存のv9.3.20機能は維持。

# v9.3.20: Optional SIMS Manager sidebar pilot; existing top menus retained.

SIMS Manager v9.3.19：記事の管理状態ダイアログの理由選択と最終確認を分離。詳細は RELEASE_NOTES_v9.3.19.md を参照。

# SIMS Manager v9.3.18

旧Case保守用の3メニューを通常表示から除外しました。処理関数は保持しています。必要な保守時のみ Script Properties の `SBM_SHOW_LEGACY_PRECISION_MAINTENANCE_MENU=true` で表示できます。

詳細：`RELEASE_NOTES_v9.3.18.md`

# SIMS Manager v9.3.17

精密診断の初回保存と既存承認の再承認を状態別に振り分けます。初回Caseは診断保存のみで、承認・公開・改善登録を自動実行しません。

詳細：`RELEASE_NOTES_v9.3.17.md`

# SIMS Manager v9.3.12

保存済み警告と精密診断対象記事の不一致を検出し、誤ったaDoctor依頼を停止します。既存Caseは保持したまま、警告に明示された2記事から新規診断Caseを作成できます。

# SIMS Manager v9.3.10 — aWriter警告による記事誤選定の防止

警告内に明示された2件のURLのみを記事管理で照合し、元の改善対象記事を自動的に追加しません。URLが1件または3件以上、照合不能な場合は診断Caseを作成せず保留します。記事2件を利用者に指定させるメニューは追加しません。

既存のCase、改善履歴、公開記事、モニター状態は変更しません。静的・モック回帰試験を実施。Google Apps Script実機での試験は未実施です。

詳細：`RELEASE_NOTES_v9.3.10.md`

# SIMS Manager v9.3.9 — 精密診断の対象記事ペア検証

警告文に明示された2件のURLを記事管理と照合し、元の改善記事へ無条件に置き換えないようにしました。記事を特定できない警告は新しい精密診断Caseを作成せずログへ記録します。既存Case、aDoctor回答、aWriter依頼、改善履歴、モニター状態は変更しません。

静的検査のみ実施。実機での対象記事選定・重複防止試験が必要です。

詳細：`RELEASE_NOTES_v9.3.9.md`

# SIMS Manager v9.3.8 — 追加課題の依頼文表示停止対策

旧形式の保存済み再依頼文を、現行のSIMS_WRITER_TREATMENT_REQUEST_V1に再生成します。新規の再依頼も正規形式を使用し、最終回答SIMS_WRITER_TREATMENT_RESULT_V1を検証・共通改善履歴へ登録します。

既存の未完了案件・記事管理・改善履歴は更新時に移行しません。再開時に対象案件の依頼文だけ再生成します。公開記事の取得に失敗した場合はエラーを表示し、旧形式へフォールバックしません。

詳細は `RELEASE_NOTES_v9.3.8.md` を参照してください。

---

# SIMS Manager v9.3.3 — 独立課題の非ブロッキング化

精密診断の複数記事処置、aWriter登録、親案件の終了判定、中央ダイアログの実運用確認を反映。画面内の旧試験表記を整理しました。

**互換性優先:** 保存データ、過去の精密診断Case、改善履歴、経過観察を維持。旧コード・診断関数の削除は参照関係の確認後に実施します。

詳細は `RELEASE_NOTES_v9.3.3.md` と `CLEANUP_AUDIT_v9.3.0.md` を参照してください。

---

## 過去のリリース案内（履歴）

# SIMS Manager v9.2.143 UAT

精密診断の再開候補が0件の場合、右下のトーストではなく中央の閉じるボタン付きダイアログで案内します。

# SIMS Manager v9.2.142 UAT

2記事の改善登録後に精密診断の親案件を未完了一覧から除外します。過去の登録済み案件も読取時に除外し、28日間の効果測定は記事別に継続します。

# SIMS Manager v9.2.141 UAT

精密診断の追加課題：画面内JavaScriptの改行エスケープを修正し、自動読込を復旧。手動の再読み込みボタンを削除。結果登録はv9.2.139を維持。

## v9.2.138 UAT: aWriter記事本文の自動添付
公開記事の本文をSBMから取得し、依頼文に添付。取得不能時は発行停止。

# SIMS Manager v9.2.140 UAT

精密診断の追加課題の記事タイトルを記事管理シートから読取専用で補完。

SIMS Manager v9.2.129 UAT: 保存済みROLE_SEPARATION診断（REVIEW_READY）から2件のaWriter依頼文を直接再表示。回答JSONの再貼付・診断再保存・再承認を要求しない。依頼文プレビューのみ。回答登録・改善登録は未接続。

SIMS Manager v9.2.128 UAT: aDoctor回答JSONのプレビュー後、既存の再承認受付機構で診断を保存する操作を追加。旧承認を保全してREVIEW_READYに戻す。aWriter依頼保存・公開・改善登録は未実施。

SIMS Manager v9.2.127 UAT: aDoctor回答JSONを既存の精密診断照合処理で検証し、記事別aWriter依頼文を2件プレビュー。読取専用で未承認・未登録。

SIMS Manager v9.2.125 UAT: 精密診断の追加課題ダイアログのHTML属性引用符を修正。処置計画案の保存処理はv9.2.124と同じです。

SIMS Manager v9.2.124 UAT: 精密診断の複数記事処置計画案を既存Workflow Stateへ保存・再開。作業依頼・公開・改善登録は実行しません。

SIMS Manager v9.2.123 UAT: 精密診断の複数記事処置計画を共通の読取専用モデルで表示。記事別の処置は未確定であり、自動変更しません。

SIMS Manager v9.2.122 UAT: 精密診断の追加課題に読取専用の複数記事処置候補を表示。診断結果・処置先・履歴は変更しません。

# SIMS Manager v9.2.121 — 精密診断追加課題の保存済み判断を個別表示（読取専用）

- 再開画面から選択した旧追加課題だけを表示。別案件を誤って開かない。
- 保存済みの診断理由、推奨方針、aDoctor判断、判断理由、状態、CaseIDを表示。
- 既存のsbmStrategyListCasesを再利用し、書込・再構築・移行は行わない。
- Google Apps Script実機UAT未実施。

# SIMS Manager v9.2.120 — 精密診断の追加課題を読取専用で確認

- 旧STRATEGY_CASEを既存sbmStrategyListCasesで読み取り、精密診断メニューから記事ID・状態・処置先・CaseIDを確認できる。
- 誤解を招く「精密診断案件を今日の改善へ反映」のメニュー導線を読取専用確認に置換。旧関数は互換維持。
- 保存・移行・再構築・改善履歴更新は行わない。実機UAT未実施。

# SIMS Manager v9.2.118 — 精密診断再開時のRequestID維持

- 未完了精密診断の再開時はDoctor_Workflow_Stateの保存済みREQUESTを使用。
- CaseID/ArticleID/RequestIDと記事URLを照合し、IDを再生成しない。
- 保存済みREQUESTが欠落・不整合の場合は安全停止。既存Case/改善履歴を変更しない。
- Apps Script実機での回帰試験は未実施（UAT候補）。

# SIMS Manager v9.2.117 — 最終ローカル回帰・配布前監査

- 11個の関連テストスクリプト、計114項目を再実行。全てPASS。
- ライセンス認証済みの既存SBMにおける実機UATは未実施。正式リリースではない。
- 今回の変更は版管理・監査文書のみ。業務ロジックは変更していない。
- `SHARED_VERSION` は別の共有コンポーネントのバージョンとして現状維持。
- 本番反映前にバックアップ、復元手段、実施案件と検証手順の確認が必要。

# SIMS Manager v9.2.115 — ローカル引き継ぎ完了判定試験（UAT候補）

# SIMS Manager v9.2.115 — 経過観察引き継ぎ完了判定のローカル試験

- 既存 `sbmStrategyVerifyMonitoringAndComplete` を抽出して10項目の実関数ローカル試験を追加。
- 2記事の有効な履歴、片方の観察終了、改善の推移欠落、公開確認欠落・重複、旧モニター競合、URL不一致、MERGE経路拒否、二重完了防止を確認。
- 合格時の `COMPLETED` は精密診断案件の引き継ぎ完了であり、7/14/21/28日測定の終了ではない。測定結果は生成しない。
- 既存の複数記事関連8テストファイルを再実行してPASS。
- Google Apps Script/License Center/実スプレッドシートへのアクセスなし。実機試験は未実施。
- 本版は開発候補。正規ライセンス環境にはまだ反映しない。

実行: `node tests/multiwriter-handoff-completion-v9.2.115.test.js`


Current UAT candidate: v9.2.134. See RELEASE_NOTES_v9.2.134.md.
