# SIMS Manager v9.2.22

改善ナビの登録ボタン直下に処理状況を表示します。追加診断が必要な場合は自動的にモーダルを置き換えず、保存完了後に「aDoctor追加診断へ進む」ボタンを表示します。未完了再開の既存経路を維持します。

**Apps Script実環境での動作確認前です。** 既存の登録未完了案件を再登録せず、未完了の作業から再開してください。

# SIMS Manager v9.2.20

初回aWriter回答の追加診断要否をSBMが自動判定し、必要時は登録を保留します。aDoctor診断→aWriter再依頼→最終登録の経路を追加しました。2回目のaWriter回答では再診断しません。途中経過は既存WorkflowStateに保存し「未完了の作業を再開」から復元します。

**Apps Scriptでの実運用試験前です。** 通常の公開確認を行ってから改善登録してください。

# SIMS Manager v9.2.19

aWriter回答のwarningsからaDoctor追加診断候補を読み取り専用で表示します。診断Caseの自動作成・保存・送信は行いません。既存の改善登録とモニター処理は維持します。

# SIMS Manager v9.2.18

既存の内部リンク候補抽出機能を新記事aCreator依頼文へ連携します。閲覧環境2択は維持します。

# SIMS Manager v9.2.13

最新版の導入手順は README-v9.2.11-FIRST.md を参照してください。

# SIMS Manager v9.2.8 — Starter記事管理メニュー制御

Starterではインデックス関連2項目と記載サービス・広告の変更・更新を非表示にします。Fullでは従来通りです。

# SIMS Manager v9.2.7 — Starter SERP判定対応

- Starter/Fullとも「新記事キーワードの参入余地を確認」を表示します。
- Starterは判定結果まで。aCreator紹介状・新記事登録はFull限定です。
- 本版は静的検査済み、実機試験前です。

> Live backup, retention and restore checks passed. Automatic rollback on restore failure remains unverified.

# SIMS Manager v9.2.0 — Backup and restore management release candidate

- Treat only the observed horizontal alignment API readback `general` (backup) vs `general-left` (restored) as equivalent. Other alignments remain strictly checked.
- Report first differing sheet, cell, attribute and values for metadata mismatches.
- Preserve strict cell value/formula and validation verification, including blank-vs-FALSE checkbox semantics.
- No intended changes to daily backup creation, 3-generation retention, or restore selection.
- Static checks only; live restore and rollback remain unverified.
- Scope: managed cell content/selected metadata, not full spreadsheet layout, external properties or conditional formatting.

## v9.1.54 — Restore empty checkbox fidelity (UAT candidate)
- After restoring validation, clear snapshot-empty checkbox cells so Sheets does not leave FALSE instead of blank.
- Apply in both normal restore and emergency rollback through shared apply path.
- Strict value/type/formula verification remains enabled. Real Apps Script verification pending.

# SIMS Manager v9.1.52 — Restore Verification Hardening Candidate

候補版・復元実機試験未実施。実ブログへの導入・復元実行は禁止。
変更点: フォント色と水平・垂直配置の復元後照合を追加。旧データ範囲の入力規則残存を防止。
復元範囲は管理データ中心であり、列幅・行高・シート全体の書式を含む完全復元ではありません。
バックアップ・3世代管理の処理は変更していません。

# SIMS Manager v9.1.51 — Backup/Restore Validation Check Candidate

開発候補版です。Apps Script実機試験未実施。実環境への導入前にバックアップと検証を行ってください。

# SIMS Manager v9.1.35 — Clipboard Reliability Fix

「経過観察終了後の処置」のaWriter依頼文コピーを修正。配布用Code.gsは全コピーを同一内容に統一。実機でコピーを検証してください。

# SIMS Manager v9.1.28 — Production Candidate

履歴の自動再構築を抑止し、52列・ArticleID位置・履歴ID重複の書き込みガードを維持。UAT自己診断と一時修復メニューは削除。既存シートは自動削除しません。

# SIMS Manager v9.1.7 — UAT candidate

再診候補と実行条件を一致させ、再診依頼作成前の作業状態変更を廃止。既存データは変更しません。実機検証が必要です。

変更: 広告URLと広告HTMLコードを分離。旧replacementScope内の広告HTMLは表示時・保存時に移行します。
