# SIMS Manager v6.0.0 Repository Baseline

このZIPは **GitHubリポジトリへ登録するための正本**です。利用者向け配布ZIPではありません。

## v6.0.0の位置付け

SIMS Managerに Starter / Full Edition構成を正式導入する新しい製品ベースラインです。

- ルート `Code.gs`：Full Editionの機能正本
- `editions/starter/`：Starter Edition派生ソースの管理場所
- Starter / Full：同一バージョン体系、同一Spreadsheetデータ構造、同一基本UI思想
- 共通修正：必ずFull正本からStarterへ反映
- 配布物：必要な時だけ別途生成

## 現在の状態

Full Editionはv5.24.1の実運用正本を継承し、v6.0.0としてEdition管理基盤を追加しています。Starterの実行用 `Code.gs` は、Starter機能境界を確定・検証した後にFull正本から生成します。未検証のStarterコードは正本に含めません。

## GitHubへの反映

このZIP内の `SIMS-Manager/` を既存SIMS Managerリポジトリへ反映してください。既存の履歴ファイルは保持し、同名の現行正本ファイルはv6.0.0で更新します。

## 参照

- `EDITION_POLICY.md` — Edition管理原則
- `RELEASE-NOTES-v6.0.0.md` — v6.0.0の変更内容
- `PRODUCT_IDENTITY.json` — 製品識別情報
- `COMMIT_MESSAGE.txt` — 推奨コミットメッセージ
