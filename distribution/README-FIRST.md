# SIMS Manager v6.1.42 Repository Baseline

## v6.1.42の位置付け

v6.1.38を正本として、aDoctor回答登録時の結果JSON抽出を修正した版です。

- Doctor RESULTはCaseID必須。CaseIDを持たない`return_contract`雛形を結果として採用しない
- aDoctor依頼JSON内の`return_contract`を診断結果と誤認する不具合を修正
- 依頼JSONを回答欄へ貼った場合は、CaseID空欄の誤った不一致表示ではなく専用メッセージを表示
- 正しいDoctor回答全文では、対象CaseIDの`SIMS_DOCTOR_*_RESULT`だけを抽出
- 前版までのタイムゾーン・日付修復を維持
- Full v6.1.42 / Starter v6.1.42-ST

このZIP内の `SIMS-Manager/` を既存SIMS Managerリポジトリへ反映してください。
