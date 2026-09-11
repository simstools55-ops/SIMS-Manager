# SIMS Manager v6.2.86 Repository Baseline

## v6.2.81の位置付け

v6.2.80の機能を維持したまま、Repository内の版管理情報を再監査・同期した整合修正版です。

- Full v6.2.86 / Starter v6.2.86-ST
- Repository root `Code.gs` がFull Editionの機能正本
- Fullは `SBM_EDITION = 'FULL'`
- Starter派生コードは `SBM_EDITION = 'STARTER'`
- Shared Editorial KnowledgeはManagerとは独立して v3.5.0
- Spreadsheetスキーマと共通ロジックはFull / Starterで共有
- 日次GSC取得、14日ゲート、未発芽判定、記事情報更新、Doctor/Writer/Merge処理の機能ロジックは変更なし

ZIP生成前に `tests/check_version_consistency.py` を実行し、版番号不一致が0件であることを確認します。
