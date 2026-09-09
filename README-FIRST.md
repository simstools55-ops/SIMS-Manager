# SIMS Manager v6.2.4 Repository Baseline

## v6.2.4の位置付け

v6.2.3で統合したWorkflow再開機構の精密診断再開不具合を修正した保守版です。

- Full v6.2.4 / Starter v6.2.4-ST
- aDoctor単一Case再開ダイアログで発生していた `resumeOnly is not defined` を修正
- 精密診断候補の説明を、Site Doctor健康診断の最新結果から候補を再生成する現行仕様に合わせて更新
- 診断済み・モニター中を除外し、優先度の高い未処理記事を候補表示することを明示
- v6.2.3までの通常改善／Doctor系の共通再開機構は維持

