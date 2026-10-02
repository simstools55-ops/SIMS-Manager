# SIMS Manager v6.7.97

## 変更内容
- aCreatorで新記事を登録した直後の記事管理表示を、通常の「記事一覧」と同じ正本処理へ統合。
- Creator登録行だけ末尾へ残る状態を解消し、`sbmSortArticleDbRows_`で既存記事と同じ規則で並べ替える。
- 選択列のチェックボックス、行高、列幅、数値書式、状態色を`sbmStyleArticleDbSheet_`で統一。
- Creator専用の独自ソート・独自表示処理は追加せず、既存の記事一覧表示ロジックを再利用。

## 影響範囲
- Creator Direct登録
- Site Doctor→aCreator登録
- 記事管理の表示・並び順のみ。改善判定・GSC取得・モニタリング判定は変更なし。
