# SIMS Manager v6.6.50

## 修正内容
- aWriter処置を登録済みなのに同一記事の旧aDoctor/aWriter Caseが「未完了の作業」に複数残る過去データ不整合を修正。
- v6.6.49の「Doctor_CasesにMONITORING+Writer結果が残る場合だけ」「初回1回だけ」の修復条件を廃止。
- 「未完了の作業を再開」の候補抽出前に、改善履歴の aDoctor→aWriter 正式登録を正本としてDoctor_Casesを軽量照合。
- 改善登録日以前の DOCTOR_DIAGNOSIS_PENDING / FOLLOW_UP_REQUEST_READY / USER_ACTION_REQUIRED / USER_DECISION_REQUIRED / WRITER_REQUEST_READY / WRITER_IN_PROGRESS を監査保持のまま SUPERSEDED_TREATMENT_COMPLETED へ同期。
- 改善登録後に新規作成されたCase、Merge/Creator系Caseは自動整理しない。
- GSC取得、記事ページアクセス、診断処理は修復時に実行しない。
