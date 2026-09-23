# SIMS Manager v6.7.25 Release Notes

## 変更内容

「未完了の作業を再開」ダイアログの全候補に、利用者が作業継続不要と判断した場合の「取りやめる」を追加しました。

- 「この作業を再開」と並べて「取りやめる」を表示。
- 取りやめ時は確認ダイアログを表示。
- 確定後は Workflow / Case を `CANCELLED_BY_USER` 相当の終了状態にし、未完了一覧から除外。
- 記事、改善履歴、Doctor診断結果など既存の登録データは削除しない。
- SERP参入余地チェックは Workflow を完了扱い、通常改善は inactive、Doctor／新記事系Caseは状態コードを `CANCELLED_BY_USER` として履歴を保持。
- 既存の整理候補専用「この旧案件を整理」は変更なし。

## 変更しない範囲

高速化、未完了再開Dispatcher、Doctor再診、SERP判定ロジック、aCreator連携には変更を加えていません。
