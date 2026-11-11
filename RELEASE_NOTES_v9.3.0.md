# SIMS Manager v9.3.0 — Release Candidate

## 内容
- 精密診断の追加課題・複数記事処置のユーザー向け旧試験表記を整理。
- Code.gs先頭のリリース概要・実行時バージョンを更新。
- PRODUCT_IDENTITY.json、README-FIRST.md、CHANGELOG.mdを同期。
- v9.2.143で確認した2記事の改善登録と親案件終了処理を維持。

## 安全性
- シート列、保存済みCase、プロパティキー、JSON契約、関数名は変更しない。
- 読取専用の実際の機能・安全注意書きは削除しない。
- 未使用関数の削除は未実施（動的参照があるため）。
- Apps Scriptでの実運用回帰試験は未実施。
