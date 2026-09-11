# SIMS Manager

> **Current product:** SIMS Manager v6.2.91
> **Version policy:** `vX.Y.Z` (major.minor.patch)  
> **Shared Editorial Knowledge:** v3.5.0

## Current release

- Product Version: `6.2.91`
- Shared Version: `3.5.0`
- Repository Type: `Product`
- Release type: `REPOSITORY_BASELINE`
- Edition model: Full canonical / Starter derived

> Current release: SIMS Manager Product v6.2.91


## v6.2.81 — Repository版管理の整合修正

- Product versionを `6.2.81` に統一
- `VERSION` / `PRODUCT_IDENTITY.json` / README / Distribution / Full / Starterを同期
- Shared Editorial KnowledgeはManagerとは独立した `v3.5.0` として版情報を統一
- ZIP生成前に実行する版整合チェックスクリプトを追加
- 機能ロジックは変更なし

## v6.2.80 — 未発芽aDoctor診断を原因診断優先へ変更

- 未発芽記事を「全面リライト前提」で診断する仕様を廃止しました。
- aDoctorは検索需要・検索意図・インデックス・カニバリ・SERP Gap・現行内容を先に診断します。
- 診断結果から、全面リライト／部分改善／Merge／インデックス対応／管理対象外・noindex／観察の適切な処置を選択します。
- 未発芽判定式、日次GSC取得、14日ゲート、記事情報更新、Merge処理は変更していません。

## v6.2.77 — 未発芽処置導線と診断入口の整理

- 未発芽記事は記事詳細からaDoctor精密診断へ進めます。
- 記事管理の重複するaDoctor直結メニューを削除し、状態連動の主操作へ一本化しました。
- インデックス問題処置の追加診断判定の潜在不具合を修正しました。
- 未発芽判定式・日次処理・14日ゲート・記事情報更新・Merge処理は変更していません。


## v6.2.76 — Repository整合修正

- 機能ロジックは変更せず、Repository内の版番号・Edition定義・管理文書を同期。
- root `Code.gs` / Full派生は `SBM_EDITION = 'FULL'`。
- Starter派生コードは `SBM_EDITION = 'STARTER'`。
- Code先頭製品表記、`SBM_VERSION`、README、PRODUCT_IDENTITY、VERSION、Release Notesをv6.2.76へ統一。
- v6.2.75までのMerge、未発芽、14日ゲート、記事情報更新を維持。

## v6.2.75 — Merge効果測定表示の標準化

- Merge完了画面・処理中表示・完了メッセージを「7日目・14日目・21日目・28日目」に統一。
- 実際の4回測定ロジックは変更なし。

## v6.2.47 — 記事情報更新を不足記事限定方式へ再構築

正常動作確認済みv6.2.37を正本に、点検をArticleID・URL・記事タイトル・メインクエリの保存値確認だけへ簡素化。対象記事だけを更新し、書込後の再確認を追加。日次処理は変更しません。

## v6.2.37 — 記事情報更新の正本化

- 記事タイトルとメインクエリの欠損補完に限定
- メインクエリ未取得記事は過去6か月GSCで補完
- ArticleID＋正規化URL＋更新前値の三重照合で安全書込
- 日次処理、SEOタイトル、メタディスクリプションの既存仕様は維持


## Product 5.6.12 — 改善推移指標・Homeモニター表示

- 改善の推移はクリック数と表示回数を比較表示します。
- Homeにモニター中の記事の判定別件数をコンパクトに表示します。
- Homeの高さは従来どおり24行に維持します。

## Product 5.6.11 — 運用改善

- 改善の推移を経過日数の多い順に表示
- クリック重視・経過日数考慮の段階判定へ更新
- 保存済みBefore／Afterの「修正前を確認」を追加
- 今日の改善は候補10件を保持し、初期5件・1～10件で表示設定

## Product 5.6.10 — Search Console列マッピング緊急修正

Search Consoleのページデータを記事DBへ渡す配列にH1タイトル用の空欄を追加し、数値4項目の列ずれを修正しました。異常値を検出した場合はDB更新を停止します。

# SIMS Manager v6.2.91

Google Search Consoleのデータを使い、改善する記事の選定、改善結果の記録、7日目・14日目・21日目・28日目（1週間ごと）の改善推移確認をGoogleスプレッドシートで管理する製品です。

## 正式バージョン

`6.2.91`

## Creatorで作った新記事の登録

Creatorで新記事を公開したら、`SIMS-Blog-Manager` → `Creatorで作った新記事を登録` を開き、Creatorの回答全文（JSONを含む）を貼り付けて登録します。SBMは公開URL・Creator案件・SiteIDを検証し、Search Consoleにまだ現れていない記事も `検索露出待ち` / `👀 モニター中` として管理します。後日GSCに同じURLが現れたときは、既存ArticleIDへ実績を合流させます。

## v6標準メニュー

上部メニューは、左から次の順に並びます。

1. **SIMS今日の作業**：Home、日次処理、今日の改善、選択記事の改善内容
2. **改善の推移・履歴**：改善効果、観察終了後の処置、改善履歴
3. **記事管理**：記事一覧、要確認記事の処理、記事詳細、改善履歴、管理状態
4. **サイト健康診断**：サイト健康診断、精密診断候補、選択候補のaDoctor診断
5. **新記事関連**：新記事キーワードの参入余地確認、aCreator新記事登録（Full）
6. **設定・メンテナンス**：設定、修復、途中再開、製品情報（サブメニューなし・直接実行）

番号は日常的に順番を意識して操作する項目だけに付けます。参照・任意操作・設定・メンテナンスには原則として番号を付けません。診断と設定・メンテナンスはサブメニューを使わず、セパレーターで区切った1階層の直接実行メニューとします。

## Edition管理と配布物

- GitHubリポジトリは1つだけを使用します。
- ルート `Code.gs` は **Full Editionの機能正本**です。
- Starter Editionは `editions/starter/Code.gs` を使用し、Full正本から派生管理します。
- Starter / Fullは同一バージョン体系・同一Spreadsheetデータ構造を共有します。
- 利用者向けDistribution ZIPは必要になった時だけ生成します。v6.2.77はRepository Baselineであり、配布版リリースではありません。Starterの利用者向け表示は v6.2.77-ST です。

詳細は `EDITION_POLICY.md` を参照してください。

## 初回導入

1. テンプレートをGoogleドライブへアップロードし、Googleスプレッドシートとして開きます。
2. Apps Scriptの`Code.gs`を配布版の内容で全置換します。
3. `appsscript.json`を設定します。
4. スプレッドシートを再読み込みします。
5. **SIMS-Blog-Manager → シートの作成・修復**を1回実行します。
6. **SIMS-Blog-Manager → 初回セットアップ**から接続設定を進めます。

## 既存スプレッドシートの更新

既存データはそのまま継続利用できます。`Code.gs`を更新して再読み込みし、**シートの作成・修復**を1回実行してください。

## リポジトリ構成

- `apps-script/`：開発・管理用Apps Script
- `distribution/`：利用者向け配布元ファイル
- `docs/`：GitHub Pagesマニュアル
- `product/`：製品仕様・設計資料
- `spreadsheet/`：テンプレートとシート仕様
- `tests/`：テスト手順


## Product 5.6.9 — 改善の推移の表示強化

- 現在順位と改善前順位を小数第1位で表示
- 判定をステータス別に色分けして視認性を改善
- シートを開くたびに書式を再適用


## Product 5.6.8 — 記事一覧H1表示・改善の推移表示修正

- 記事一覧で、保存済みH1タイトルをメインクエリとクリック数の間に表示
- 改善の推移で現在順位と判定まで必ず表示
- 日次処理や外部取得処理は変更なし

## Product 5.6.7 — SIMS Writer Contract v4.2対応

改善結果登録は `publication_result.public_ok_changes` を最優先で解析し、存在しない場合のみ旧 `changes` を利用します。`publication_result.user_decision_changes` と `publication_result.change_summary` は改善履歴へ保存します。過去のWriter JSONとの後方互換性を維持しています。

## Product 5.4.3 — changes配列対応

SIMS Writer v1.0.0以降の `changes: []` 配列形式と、従来の `changes: {}` オブジェクト形式の両方を登録できます。`change_flags` と未知フィールドも許容し、元JSONを改善履歴へ保持します。

## Product 5.3.1の改善ナビ

改善ナビは、Search Console上位20クエリ、改善優先順位、記事ランク、変更方針、本文JSON、内部リンク候補をまとめてSIMS-Core向け依頼文へ出力します。内部リンク候補には推奨アンカーテキスト、関連クエリ、関連度が付きます。

改善ナビを開くたびに、選択した記事URLを指定してSearch Consoleから最新クエリを取得します。通常は数秒で完了し、取得した上位20件を依頼文と内部リンク候補の再計算に使用します。

SIMS-Coreは候補を採用・保留・不採用に分類し、テキストリンクはHTMLを埋め込んだコピペ可能な完成形で返します。


## Product 5.3.1 — SIMS Feedback Forward Compatibility

改善結果登録は `SIMS_FEEDBACK_V1`、`SIMS_FEEDBACK_V2` および将来の `SIMS_FEEDBACK_V数字` を受け入れます。SBMが利用する必須項目だけを検証し、`learning`、`swls`、`diagnostics`、`reason_codes`、`warning_codes`、`version_candidate` などの未知フィールドはエラーにしません。

改善履歴には内部管理情報として `Feedback Format` と `Writer Version` を保存します。既存データは「シートの作成・修復」で新しい列構成へ移行できます。

Product 5.3.1では、Writer依頼文のサイト情報を `SiteID / SiteName / SiteURL` に統一しました。また、「シートの作成・修復」の完了後はHomeを更新し、Homeへ戻ります。


## SIMS Article Doctor 記事診断連携（5.7.0 RC2）

選択した1記事について、独立製品SIMS Article Doctor向けの診断依頼JSONを手動生成できます。日次処理や記事ランクには接続していません。
