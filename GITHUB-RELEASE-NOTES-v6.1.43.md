# SIMS Manager v6.1.43 Release Notes

## Workflow Resume Dispatcher

- 利用者向け再開入口を「未完了の作業を再開」へ統合しました。
- Case状態を読み、aDoctor回答待ち・利用者確認待ち・aWriter・aMerge・aCreatorを自動判定します。
- 通常aDoctorとSite Doctorの違いは内部Identity検証へ寄せ、利用者に経路選択を要求しません。
- MONITORINGとSUPERSEDED Caseは再開対象外です。
- TREATMENT_FAILEDは正常再開せず、次段階の「データ整合性を点検・修復」対象として明示します。

## Compatibility

既存の再開関数は内部互換のため残しています。処置結果の保存契約やモニタリング登録処理は変更していません。
