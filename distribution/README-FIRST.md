# SIMS Manager v6.2.76 Repository Baseline

## v6.2.76の位置付け

v6.2.75までの実運用機能を維持したまま、Repository内の版番号・Edition定義・管理文書を同期した整合修正版です。

- Full v6.2.76 / Starter v6.2.76-ST
- Repository root `Code.gs` がFull Editionの機能正本
- Fullは `SBM_EDITION = 'FULL'`
- Starter派生コードは `SBM_EDITION = 'STARTER'`
- Spreadsheetスキーマと共通ロジックはFull / Starterで共有
- 日次GSC取得、14日ゲート、記事ランク判定、未発芽判定、記事情報更新、Merge処理の機能ロジックは変更なし

StarterはFull正本からEdition定義のみを派生させ、同一バージョンラインで管理します。
