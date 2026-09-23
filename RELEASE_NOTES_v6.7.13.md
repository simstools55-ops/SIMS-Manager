# SIMS Manager v6.7.13

## 修正内容
- 利用者確認後に生成したaDoctor再診依頼の直後へ「aDoctorの再診結果をSIMSへ返す」入力欄を表示します。
- 再診依頼の新CaseIDを含む依頼JSONを登録処理へ引き継ぎ、再診結果のCaseID照合後、Doctorの `workflow_handoff.next_action` に従ってWriter/Merge等の次工程へ継続します。
- v6.7.12の未完了重複整理と「未完了の作業を再開」メニュー移動は維持します。

## 実運用確認
A000036の利用者確認Workflowを再開し、再診依頼作成後に再診結果入力欄が表示されることを確認してください。`CASE-20260923-A000036-002` のDoctor再診結果を登録し、Writer紹介状が生成されることを確認します。
