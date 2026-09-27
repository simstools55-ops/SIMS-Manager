# SIMS Manager v6.7.69

## 修正内容

aWriterが正規ステータス `treatment_status: PARTIALLY_COMPLETED` を返した場合、SIMS Managerが未知の未完了状態として停止していた問題を修正しました。

`PARTIALLY_COMPLETED` はSIMS Treatment Resultの正規Enumに含まれているため、現在実施済みの処置を改善履歴へ登録し、通常のモニタリングへ進められる完了系ステータスとして受理します。

## 変更範囲

- `sbmDoctorNormalizeWriterTreatmentStatus_()` の完了状態一覧へ `PARTIALLY_COMPLETED` を追加。
- 元の `treatment_status` はWriter結果JSONにそのまま保存されるため、完全完了との区別は保持されます。
- follow-up生成、Merge、利用者判断待ち、その他のWorkflow分岐は変更していません。

## 実運用確認

A000094で同じaWriter回答を再登録し、エラーなく改善履歴へ登録され、Caseおよび記事管理が「モニター中」へ遷移することを確認してください。将来条件付きのD01は、現在の未完了Workflowとして保持しません。
