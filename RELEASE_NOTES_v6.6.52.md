# SIMS Manager v6.6.52

## 修正
- 「未完了の作業を再開」をCase単位表示から、記事ごとの現在Workflow単位へ変更。
- 同一記事に旧aDoctor/aWriter Caseが複数残っている場合、処理段階を優先し、同段階では更新日時が新しい1件だけを表示。
- aDoctor回答待ちよりaWriter結果待ちなど、より後段の状態を現在地点として採用。
- Merge / Creator は別処置として集約対象外。
- Doctor_Casesの履歴自体は削除しない。

## 目的
A000042のように同一記事の旧Caseが7件並ぶ現象を、表示上の個別補修ではなく未完了Workflow抽出ロジックで解消する。
