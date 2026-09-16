# SIMS Manager v6.6.7

## 改善ナビ起動のトリガー回帰修正
- simple `onEdit(e)` から `Ui.showModalDialog()` へ到達する経路を廃止。
- 今日の改善の「詳細」操作は対象行だけを記録し、同期UIコンテキストの「SIMS今日の作業 → 4．選択記事の改善内容を見る」から改善ナビを開く。
- 選択行はDocumentPropertiesへ保存し、チェックをFALSEへ戻した後でも正しい記事を復元する。
- 改善の推移等に残っていた同種のonEdit→Modal UI経路も除去。
- 改善ナビ本体の表示後Checkpoint/GSC/本文取得の非同期高速化は維持。
