# SIMS Manager v5.21.40-dev

## Fix

日次処理 STEP2 (`sbmRunDailyAnalysisStageFromDialog`) から `sbmEnsureArticleListDisplayCompleteness_(20,25)` を分離。

429記事規模の実運用で、STEP1は約121秒で完了した一方、STEP2が約361秒でタイムアウトした。タイトル/H1取得のHTTPアクセスとURL別メインクエリ照会が同期実行されると、アプリ側の25秒判定では個々の外部呼び出しを中断できないため、Apps Scriptの実行上限に到達し得る。

STEP2は取得済みGSCデータのDB反映・ランク更新・今日の改善候補選定に限定する。記事情報補完機能自体は保持する。
