# SIMS Manager v9.2.20 — WIP (導入禁止)

## この段階で実装した内容
- 改善ナビの実登録経路 (`sbmRegisterImprovementFeedbackRaw_`) に初回Writer診断ゲートを接続。
- 記事ID/URLの照合後、通常登録前に診断判定を行う。
- 診断が必要な場合は初回回答と候補を Doctor_Workflow_State に保存し、登録を保留。
- 改善ナビの成功表示を「登録済み」と誤表示しないよう分岐。
- 画面の非同期 `sbmMarkNormalImprovementWriterReady` による診断ステージ上書きを防止。
- 既存の診断中Workflowに初回回答を再登録しない。

## 未実装のため配布不可
- aDoctor向けの正式な診断依頼文生成・コピー画面
- aDoctor回答の解析・保存・Writer再依頼文生成
- 最終Writer回答の専用受付と診断スキップ登録
- 未完了再開時の各ステージに対応した画面復元
- Apps Script実環境での結合試験

このZIPをSBMへ導入しないこと。v9.2.19を引き続き使用。
