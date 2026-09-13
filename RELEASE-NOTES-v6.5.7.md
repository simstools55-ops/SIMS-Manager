# SIMS Manager v6.5.7

## 改善ナビ高速化
- SearchConsole_Dataの対象URLクエリ取得を、全件走査優先からTextFinderによる対象行検索優先へ変更。
- Search Console APIのURL候補照会を逐次実行から並列実行へ変更。候補の優先順位と採用結果は従来どおり。
- 内部リンク候補生成では、記事DB・SearchConsole_Dataとも必要列だけを読み込むよう軽量化。
- クエリ取得時の記事DBスナップショットを最終生成へ引き継ぎ、同一記事の再検索を削減。
- aWriter依頼文生成、aWriter Contract、改善判定、内部リンク候補の評価ロジックは変更していません。
