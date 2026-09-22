# SIMS Manager v6.7.0

## 修正
- 旧未完了CaseでaWriter紹介状を復元できなくても、記事修正がすでに完了し `SIMS_FEEDBACK_V*` が返っている場合は、その完成済み回答を直接復旧登録できるようにしました。
- 復旧登録では ArticleID / URL を再開中の記事と照合し、誤登録を防止します。
- 改善履歴を確定し、「改善の推移」への1行反映を確認した後に、同一記事の古い Doctor Case / Workflow 再開データを整理します。
- aDoctor再診、aWriter再実行、新Case発行は行いません。
- 通常の `SIMS_WRITER_TREATMENT_RESULT_V1` 登録経路は維持します。

## 実運用試験
A000103 のように「記事は修正・公開済みだが、SIMS側の履歴移管だけ失敗した案件」を復旧するための修正です。
