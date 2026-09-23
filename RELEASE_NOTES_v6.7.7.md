# SIMS Manager v6.7.7

## aWriter改善履歴登録の内部区間計測表示を修正

- v6.7.5で追加した 03a〜03h の計測配列が `sbmRegisterImprovementFeedback()` から `sbmAppendImprovementHistory_()` へ渡されていなかった不具合を修正。
- aDoctor→aWriter結果登録完了画面で 03a〜03h を外側の区間計測と一緒に表示できるようにした。
- 登録処理・判定・シート更新仕様は変更していない。
- v6.7.6の「対象記事」配置変更を維持。
