# SIMS Manager v6.2.52 Repository Baseline

## v6.2.52の位置付け

v6.2.51を基準に、日次処理後のHome記事ランク件数が古い表示のまま残る問題だけを修正した版です。

- Full v6.2.52 / Starter v6.2.52-ST
- 日次処理STEP2のv6.2.51記事ランク判定ロジックは変更しない
- STEP3でHomeスナップショットを再生成した直後、そのスナップショットから記事ランク件数表示だけを軽量同期
- Article DBの再読込や追加GSC取得は行わない
- Home全体の再集計・再装飾は行わず、日次処理の高速経路を維持
- サイト健康診断・aDoctor連携・記事情報更新は変更しない

Repository root `Code.gs` がFull Editionの機能正本です。Starterは同一コードから `SBM_EDITION = 'STARTER'` のみを派生させています。
