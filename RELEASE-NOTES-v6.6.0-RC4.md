# SIMS Manager v6.6.0-RC4

RC3のonOpen/menu構造を変更せず、認証基盤だけを追加。

- 通常確認は最終成功から24時間以内なら通信せずキャッシュ利用
- 24時間経過後はLicense Centerへオンライン確認
- 通信エラーの場合のみ、最終成功から7日以内なら猶予
- License CenterがSUSPENDED/REVOKED/EXPIRED等を明示した場合は猶予しない
- 「ライセンス状態を確認」を追加
- 「ライセンスを再確認」は従来どおり強制オンライン確認
- RC4では業務機能のブロックはまだ行わない
- onOpen/menu生成には変更なし
