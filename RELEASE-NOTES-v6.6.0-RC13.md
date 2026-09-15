# SIMS Manager v6.6.0

Full / Starterのスクリプト差替運用を廃止するための統一コード候補。

- 実行Code.gsを1本化
- License CenterをEditionの正本に統一
- Homeタイトル、Edition表示など残存していた固定SBM_EDITION参照を実効Editionへ変更
- ライセンス認証要求からpackage edition指定を削除
- Full/Starter互換配置のCode.gsも共通本体と完全同一
- 旧SBM_EDITIONは未認証時bootstrap fallbackとしてのみ残す
- 共通・互換・配布・srcの主要Code.gsを静的監査し、実行時固定Edition参照0件
- 全対象Code.gsの構文検証済み・byte-identical確認済み

試験:
1. STARTERのまま再確認→STARTER
2. 再読み込み→Starter Home/Starter制限
3. License CenterをFULLへ変更→再確認→FULL
4. 再読み込み→Full機能復帰
コード差替は行わない。
