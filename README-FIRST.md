# SIMS Manager v5.21.0

## 今回の変更

- 利用者向け製品名を **SIMS Manager** に整理しました。内部の `sbm...` 関数、シート物理名、設定キー、Contract、Case IDは変更しません。
- 上部メニューを利用目的別に再編しました。
  - SIMS Manager
  - 記事改善
  - 記事診断・処置
  - サイト健康診断
  - 記事管理
  - 設定・メンテナンス
- 記事診断はチェックした記事から **診断・処置スタート** を実行し、既存の連続ダイアログで aDoctor → 処置担当 → 結果登録まで進めます。
- サイト健康診断は **健康診断スタート** を通常入口とし、途中再開・復旧操作は特別操作へ分離しました。
- 「今日の改善」は **5件固定** とし、表示件数設定を利用者向け設定から削除しました。旧設定キーは互換性のため残します。
- 主な利用者向け表示で「ブログ」より「サイト」を正式用語として使う方向へ整理しました。
- 記事系製品の利用者向け短縮名称は `aDoctor / aWriter / aCreator / aMerge` を使用します。

## 互換性

既存の `SIMS_DOCTOR_*`、`sbm...`、シート物理名、Google Apps Script設定、Personal Knowledge、Writer / Merge / Creator Contractには破壊的変更はありません。

## Apps Script適用

`distribution/Code.gs` と `distribution/appsscript.json` を既存Apps Scriptプロジェクトへ同期し、Spreadsheetを再読み込みしてください。

## 推奨コミットメッセージ

`feat(sbm): consolidate product UI as SIMS Manager (v5.21.0)`
