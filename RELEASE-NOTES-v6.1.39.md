# SIMS Manager v6.1.39 Release Notes

## 修正内容

- aDoctor回答抽出時、`SIMS_DOCTOR_*_RESULT` 形式でも CaseID を持たないオブジェクトは診断結果として扱わないようにしました。
- aDoctor依頼JSON内の `return_contract`（結果形式の雛形）を、実際の診断結果JSONと誤認する不具合を修正しました。
- 回答欄へ依頼JSONを貼り付けた場合は、「別記事のCaseID不一致」ではなく、依頼JSONが貼られていることを明示します。
- 不正な依頼JSONを `Doctor_Workflow_State` の RESPONSE として保存しないようにしました。
- ファイル先頭製品コメント、`SBM_VERSION`、PRODUCT_IDENTITY、VERSION、README、Full/Starter表示版を v6.1.39 に同期しました。

## バージョン

- Full: v6.1.39
- Starter: v6.1.39-ST
