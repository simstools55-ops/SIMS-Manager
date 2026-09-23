# SIMS Manager v6.7.23 Release Notes

## 変更内容

SERP参入余地チェックに既存の `Doctor_WorkflowState` チェックポイント基盤を利用した途中保存・再開を追加しました。

### 保存ポイント
- カニバリ確認通過後、ClaudeへのSERP精査依頼文を生成した時点
- Claude回答を登録し、SIMS ManagerのSERP判定が確定した時点
- YELLOWで利用者が「aCreatorで記事作成へ進む」を選択した時点
- aCreator紹介状を生成した時点

### 再開
「未完了の作業を再開」に `SERP参入余地チェック` として表示し、保存済みのキーワード、Claude依頼文、Claude回答、SERP判定、利用者判断、aCreator紹介状を復元します。

### 完了境界
YELLOWで「今回は見送る」を選択した場合、または参入不可判定で終了した場合はWorkflowを完了扱いにし、未完了一覧には残しません。

## 非変更範囲
高速化、Doctor再診、通常改善、新記事作成、および既存の未完了再開DispatcherのDoctor系分岐には機能変更を加えていません。
