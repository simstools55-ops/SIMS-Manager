# v9.2.61 — 戦略ナビのHTTP検査UI
- aMerge吸収元処置の画面に「吸収元URLのHTTP応答を確認（読取専用）」を追加。
- ArticleID入力と外部HTTPアクセスの確認ダイアログを必須化。
- `sbmStrategyProbeMergeSourceHttp` の結果を読取専用テキスト欄に表示。
- GAS UrlFetchAppの実接続試験は未実施。HTTP観測は処置完了の証明ではない。
- Node回帰試験11スイート＋UI連携検査6件を実施。
