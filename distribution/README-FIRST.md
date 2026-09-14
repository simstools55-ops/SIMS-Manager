# SIMS Manager v6.5.19 Repository Baseline

## v6.5.19

- Full Editionの改善ガイドをaWriter依頼文由来の説明へ統一しました。
- Starter Editionの自己修正向け改善ガイドは維持します。
- CTR改善余地を平易に説明し、「今回の方針」の定型表示を削除しました。

## v6.5.18

- Starter EditionからaDoctor精密診断・追加診断・再診の利用者導線を除外しました。
- Starterの要見直し記事は改善ナビへ接続します。
- サイト健康診断は維持し、Full EditionのaDoctor連携動作は変更していません。

v6.5.1 triage: 記事詳細で未発芽・発芽をaDoctor優先へ自動分岐し、任意診断を抑制します。

## v6.2.81の位置付け

v6.2.80の機能を維持したまま、Repository内の版管理情報を再監査・同期した整合修正版です。

- Full v6.5.19 / Starter v6.5.19-ST
- Repository root `Code.gs` がFull Editionの機能正本
- Fullは `SBM_EDITION = 'FULL'`
- Starter派生コードは `SBM_EDITION = 'STARTER'`
- Shared Editorial KnowledgeはManagerとは独立して v3.5.0
- Spreadsheetスキーマと共通ロジックはFull / Starterで共有
- 日次GSC取得、14日ゲート、未発芽判定、記事情報更新の共通ロジックは変更なし

ZIP生成前に `tests/check_version_consistency.py` を実行し、版番号不一致が0件であることを確認します。
