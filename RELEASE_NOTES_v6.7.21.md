# SIMS Manager v6.7.21

## SERP YELLOW判定の利用者判断導線
- YELLOW（要判断）の判定結果画面に「aCreatorで記事作成へ進む」と「今回は見送る」を追加。
- 「進む」を選択した場合のみ、既存のaCreator紹介状作成処理を実行して新記事作成工程へ接続。
- 「見送る」はYELLOW判定を保持したまま記事作成を行わず終了可能。
- GREENは従来どおりaCreatorへ進行可能。PINK/REDは従来どおりaCreator導線を表示しない。

## 変更範囲
- SERP参入余地チェックのダイアログUIとYELLOW分岐のみ。
- 高速化、未完了Workflow再開、Doctor再診、記事管理、モニター処理には変更なし。
