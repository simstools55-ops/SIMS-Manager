# SIMS Manager v6.2.77 Repository Baseline

## v6.2.77の位置付け

v6.2.76を正本に、未発芽記事の処置導線を記事詳細へ統合し、重複するaDoctor直結メニューを整理したRepository Baselineです。

- Full v6.2.77 / Starter v6.2.77-ST
- Repository root `Code.gs` がFull Editionの機能正本
- Fullは `SBM_EDITION = 'FULL'`
- Starter派生コードは `SBM_EDITION = 'STARTER'`
- Spreadsheetスキーマと共通ロジックはFull / Starterで共有
- 日次GSC取得、14日ゲート、未発芽判定式、記事情報更新、Merge処理は変更なし

StarterはFull正本からEdition定義のみを派生させ、同一バージョンラインで管理します。
