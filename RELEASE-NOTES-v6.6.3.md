# SIMS Manager v6.6.3

## F5・Home表示の高速化
- onOpenをメニュー生成＋Home軽量同期に限定。
- onOpenの強制flush、全シート表示/非表示走査、旧版互換修復、TZ補正を通常起動から除外。
- Home通常更新時のモノクロテーマ全体再描画を停止。
- Home表示時のToday選定仕様migration確認を除外。
- setActiveSheet + activateの二重呼出を解消。
- RC6通信障害テストの利用者向けメニュー項目を削除。
- 日次処理、今日の改善4区分×2件、記事ランク、Doctor/Writer/Creator/Mergeの判定ロジックは変更なし。
