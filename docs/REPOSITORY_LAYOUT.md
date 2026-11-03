# Repository layout — SIMS Manager v9.2.3

- `apps-script/Code.gs`: **唯一の実行コード正本**。Apps Scriptに貼り付けるファイル。
- `README-v9.2.3-FIRST.md`: 現行版の導入案内。
- `RELEASE_NOTES_v9.2.3.md`: 現行版の変更内容。
- `VERSION_AUDIT_v9.2.3.json`: 現行版の静的監査記録。
- その他のルート直下ファイル: 従来の開発資料・履歴。古い版の記述は現行版の適用指示ではありません。

本再梱包ではコード以外の旧資料の大規模移動は行いません。過去版ファイルを移動すると参照パスやGit履歴の追跡に影響し得るためです。

廃止した重複コード: ルート直下 `Code.gs`、`distribution/Code.gs`、`src/distribution/Code.gs`、`src/apps-script/Code.gs`。旧 `Code.gs.bak6657` も除外。
