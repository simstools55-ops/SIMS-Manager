# SIMS Manager v5.21.39-dev

## 修正
- aCreator新規記事登録で、改善履歴追加直後に `sbmUpdateEffectivenessCore_(false)` が全件実行されていた問題を修正。
- Creator Direct / Doctor→aCreator の双方で `sbmAppendImprovementHistory_` に `deferDerivedRefresh:true` を渡し、登録トランザクション内の「改善の推移」全件再生成を停止。
- 登録は対象記事・改善履歴・必要な案件状態の保存だけで完結し、派生表示の再構築は通常の表示/更新処理へ分離。

## 背景
- v5.21.38では末尾の明示的な全件同期を除去したが、`sbmAppendImprovementHistory_()` の既定動作が内部で全件再生成を行っていたため、数分の停止が残っていた。
