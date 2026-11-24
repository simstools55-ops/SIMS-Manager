# v9.3.108 M6 テスト資材修正（UAT候補）

- 製品コードは元候補ZIPと完全同一。
- tests/m6_response_test.js の絶対パス依存を解消し、同梱 apps-script/Code.gs を読み込む。
- LockServiceモックを追加し、ロック解放回数を検証。
- GAS実機試験は未実施。実運用シートへのコード更新はHOLD。
- 実行: node tests/m6_response_test.js

GitHub commit: test(m6): make response gate regression self-contained and lock-aware
