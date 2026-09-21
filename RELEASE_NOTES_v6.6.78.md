# SIMS Manager v6.6.78

## STEP2 settings I/O optimization
- STEP2末尾の設定取得を1回の設定Map読込へ集約。
- STEP2末尾の6設定値を `sbmSetSettingsBatch_()` で一括保存。
- 記事DB MERGE後の4集計設定値も一括保存。
- 記事管理を状態管理の正本とする設計、候補選定・ランク・未完了判定ロジックは変更なし。
- v6.6.77のSTEP2/STEP3区間計測は継続。
