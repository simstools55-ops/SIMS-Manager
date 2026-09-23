# SIMS Manager v6.7.28 Release Notes

## 修正内容

「今日の改善」のArticleID列にArticleIDではない文章が表示される不整合を修正しました。記事管理をArticleIDの正本とし、記事URL一致で正しいArticleIDを復元します。

## 高速化への配慮

通常表示では「今日の改善」のArticleID列だけを軽量確認します。異常IDが存在する場合に限って記事管理のArticleID列・記事URL列を読み、対象列だけを書き戻します。全シート再構築、全行書式再適用、Web/GSCアクセスは行いません。

## 保守整理

Code.gs先頭に累積していた過去バージョンの改修ログを削減しました。現行版の要約だけを残し、詳細履歴はCHANGELOGとRelease Notesを正本とします。関数周辺の保守用技術コメントは維持しています。
