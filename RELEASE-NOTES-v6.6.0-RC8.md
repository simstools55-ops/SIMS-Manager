# SIMS Manager v6.6.0-RC8

RC7の構文エラーを解消するため、構文正常なRC6から作り直した修正版。

- licenseSite未定義参照を修正
- ライセンス再確認で明示的な無効回答を即時表示
- 利用者画面に内部Codeを表示しない
- onOpen、通常メニュー、業務機能はRC6のまま
- Full / Starter / 共通 Code.gs の3本すべて Node --check で構文検証済み

次の試験:
License CenterをSUSPENDEDのまま「ライセンスを再確認」。
期待結果は「ライセンスを利用できません」で、7日猶予には入らない。
