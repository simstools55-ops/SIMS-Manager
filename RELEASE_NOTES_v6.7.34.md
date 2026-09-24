# SIMS Manager v6.7.34

## 修正内容

aWriterが処置完了後に追加確認事項を返す場合の `treatment_status: COMPLETED_WITH_FOLLOW_UP` を、SIMS Managerが完了状態として受理できるようにしました。v6.7.33ではこの値が完了状態一覧に無く、正常なaWriter結果でも「完了状態として判定できません」として登録を停止していました。

## 実装範囲

- `sbmDoctorNormalizeWriterTreatmentStatus_()` の完了状態一覧へ `COMPLETED_WITH_FOLLOW_UP` を追加。
- 完了後は既存の改善履歴・改善の推移・モニタリング登録経路を使用。
- `follow_up_referrals` はWriter結果JSONに保持。既存実装が対応するMERGEフォローアップは従来どおり追加診断候補として扱います。
- 非MERGEのfollow-upを新しい自動Workflowへ変換する追加改修は今回行いません。
- GSC取得、全シート再構築、全体書式再適用などの重い処理は追加していません。

## 実運用確認

`COMPLETED_WITH_FOLLOW_UP` を含む同じaWriter回答を再登録し、エラーにならず処置結果が登録され、既存フローどおりモニタリングへ進むことを確認してください。
