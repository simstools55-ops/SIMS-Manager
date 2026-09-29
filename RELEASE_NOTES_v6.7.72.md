# SIMS Manager v6.7.72

## 修正内容
- Starter Editionで `aDoctor_精密診断候補` シートが表示状態のまま残るUI不整合を修正しました。
- 起動時にStarterと判定された場合のみ、対象シートを名前で直接取得し、表示中なら非表示にします。
- Full Editionでは既存動作を変更しません。

## 変更範囲
- `onOpen()` のStarter向け表示同期のみ。
- 全シート走査、aDoctor診断処理、日次処理、GSC、ライセンス判定には変更ありません。
