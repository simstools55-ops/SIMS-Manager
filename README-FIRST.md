# SIMS Manager v6.7.20

## v6.7.20 変更点

- 利用者確認後のDoctor再診Caseを再開した際、保存済み再診依頼のV2契約番号差で停止する問題を修正。
- 保存値が同一の `SIMS_DOCTOR_SINGLE_CASE_REQUEST_V2` かつ正規の送受信元である場合だけ、CaseID・Evidence・follow_up_contextを保持して現行V2契約へ昇格します。
- 未完了一覧の表示を「aDoctor再診結果の登録」に変更し、現在の工程を利用者に明確化しました。
- 異形式のデータを受け入れる変更ではありません。契約検証は維持します。

詳細は `RELEASE_NOTES_v6.7.20.md` を参照してください。
