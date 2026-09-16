# SIMS Manager v6.6.9

改善ナビ固有の `Ui.showModalDialog` 障害を確定するための第2段階診断版。

- 最小Modal・共通Modalが正常だった結果を受け、UI権限・共通Modal基盤を原因候補から除外。
- 「実寸Modal」診断を追加し、改善ナビの 820×760 サイズだけを独立検証。
- 「大容量HTML」診断を追加し、約120KBの静的HtmlOutputを共通Modal経路で検証。
- 「大容量Script」診断を追加し、約120KBのクライアントJavaScriptを含むHtmlOutputを検証。
- 各診断は htmlLength / width / height / stage / 例外stack を実行ログへ記録。
- 診断結果が出るまで改善ナビ本体の仕様・ワークフローは変更しない。
