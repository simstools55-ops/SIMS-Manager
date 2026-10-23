# SIMS Manager v9.0.34 — UAT

A000006: INFO_CHANGE の aWriter 完了JSONで publication_result.status が PUBLIC_OK の場合に、完了前検査が decision のみを参照して拒否する不具合を修正。status を優先し、旧フィールド decision / publication_decision をフォールバックとして維持。

構文・ZIP整合性の静的確認のみ。Google Apps Script 実機での完了登録、改善履歴、モニター開始は未検証。
