# SIMS Manager v6.7.68

## 修正内容

aWriterが処置を完了している一方、スクリーンショット撮影・挿入など利用者側の作業が残る場合に返す `treatment_status: COMPLETED_WITH_USER_DEPENDENCY` を、SIMS Managerが完了状態として受理できるようにしました。

v6.7.67ではこの値が完了状態一覧に無く、正常なaWriter結果でも「完了状態として判定できません」として登録を停止していました。

## 変更範囲

- `sbmDoctorNormalizeWriterTreatmentStatus_()` の完了状態一覧へ `COMPLETED_WITH_USER_DEPENDENCY` を追加。
- その他の処理・UI・運用フローは変更していません。

## 実運用確認

同じaWriter回答を再度貼り付け、赤字エラーが出ず「aWriterの改善結果を登録」から既存フローを継続できることを確認してください。
