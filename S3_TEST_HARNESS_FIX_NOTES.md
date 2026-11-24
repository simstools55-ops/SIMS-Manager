# SBM v9.3.105 テストハーネス修正候補
- 実行コード・バージョン定数・既存機能は変更していません。
- SBM_S3_STATE_GATE_TEST.js は実在しない独立GSではなく、正本Code.gsの純粋関数を抽出して検証します。
- README-FIRSTのデプロイ記載を実際の紐づけスクリプト方式に修正しました。
- UAT未実施。運用版への適用は不要（テスト修正のみ）。

GitHub commit message: test(sbm): load S3 state-gate functions from canonical Code.gs
