# SIMS Manager v6.6.0-RC12

RC11の共通ライセンスゲート欠落を解消するため、正常なRC10から再構築。

- RC10の主要業務機能ライセンスゲートを完全維持
- RC11で成功したFULL→STARTER再確認処理だけを移植
- License Center由来の実効Edition判定を追加
- sbmLicenseRequireForProcessing_ を含む必須ライセンス関数の実在を静的監査
- ゲート呼出しがあるのに定義がない状態をビルド時に検出
- 共通 / Full / Starter の3 Code.gsをNode構文検証
- RC12では診断用の「確認用情報」表示を一時的に維持

次の試験:
License CenterはSTARTERのまま。
1. ライセンスを再確認 → Edition STARTER
2. 今日の改善 → ReferenceErrorが出ず、Starterとして通常処理へ進む
