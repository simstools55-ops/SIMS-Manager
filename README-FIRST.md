# SIMS Manager v6.1.12 Repository Baseline

このZIPは **GitHubリポジトリへ登録するための正本**です。利用者向け配布ZIPではありません。

## v6.1.12の位置付け

v6.0.0で確立したStarter / Full Edition構成を維持したまま、利用者向けメニューUXをv6標準として更新したRepository Baselineです。

- ルート `Code.gs`：Full Editionの機能正本
- `editions/starter/`：Starter Edition派生ソースの管理場所
- 日常入口：`SIMS今日の作業`
- 診断：サイト全体の健康診断を先、記事の精密診断を後に配置
- 診断／設定・メンテナンス：サブメニューを廃止し、1階層から直接実行
- Starter / Full：同一バージョン体系、同一Spreadsheetデータ構造、同一基本UI思想
- 配布物：必要な時だけ別途生成

## Starterの状態

Starterの実行用 `Code.gs` は `editions/starter/Code.gs` に収録済みです。Full正本と同じ実装を同期し、Edition定数だけを `STARTER` に切り替えています。

## GitHubへの反映

このZIP内の `SIMS-Manager/` を既存SIMS Managerリポジトリへ反映してください。既存の履歴ファイルは保持し、同名の現行正本ファイルはv6.1.12で更新します。

## 参照

- `EDITION_POLICY.md` — Edition管理原則
- `RELEASE-NOTES-v6.1.12.md` — v6.1.12の変更内容
- `PRODUCT_IDENTITY.json` — 製品識別情報
- `COMMIT_MESSAGE.txt` — 推奨コミットメッセージ
