# SIMS Manager v6.6.8

## 改善ナビ Modal診断版
- 最小HTMLを `Ui.showModalDialog` へ直接渡す診断を追加。
- SIMS共通テーマ／閉じるボタン経路を通す診断を追加。
- 失敗時に error.name / message / stack / HTML文字数 / width / height / stage を実行ログとシステムログへ記録。
- 通常の改善ナビ起動失敗ログも stack trace を含む完全情報へ拡張。
- 診断以外の改善判定・GSC・aWriter・ライセンス仕様は変更しない。

※原因確定後、診断メニューは正式修正版で削除する。
