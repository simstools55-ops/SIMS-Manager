# SIMS Manager v9.3.6 — aDoctor追加診断からaWriterへの再依頼互換性修正

旧形式の保存済み再依頼文を、現行のSIMS_WRITER_TREATMENT_REQUEST_V1に再生成します。新規の再依頼も正規形式を使用し、最終回答SIMS_WRITER_TREATMENT_RESULT_V1を検証・共通改善履歴へ登録します。

既存の未完了案件・記事管理・改善履歴は更新時に移行しません。再開時に対象案件の依頼文だけ再生成します。公開記事の取得に失敗した場合はエラーを表示し、旧形式へフォールバックしません。

詳細は `RELEASE_NOTES_v9.3.6.md` を参照してください。

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
