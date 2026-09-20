# SIMS Manager v6.6.49

## 修正内容
- aWriter処置登録完了後も同一記事の旧aDoctor/aWriter Caseが「未完了の作業」に残る問題を修正。
- 正式にMONITORINGへ移行したCaseを根拠に、同一記事の旧 `DOCTOR_DIAGNOSIS_PENDING` / `FOLLOW_UP_REQUEST_READY` / `USER_ACTION_REQUIRED` / `USER_DECISION_REQUIRED` / `WRITER_REQUEST_READY` / `WRITER_IN_PROGRESS` を監査保持のままSUPERSEDED化。
- 完了後に新規作成されたCase、Merge/Creator系Caseは自動整理しない。
- v6.6.48以前から残る不整合は、未完了再開の初回実行時に一度だけ修復。
