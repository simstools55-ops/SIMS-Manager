# SIMS Manager v6.2.12

## Fix

Multi-Merge Step 1 のaMerge結果を共通「未完了の作業を再開」ダイアログから登録した際、Site Doctor経路ではないことを理由に拒否されるルーティング漏れを修正しました。

- 通常aDoctor → aMerge
- Site Doctor → aMerge
- Writer follow-up → aMerge
- 3記事以上のMulti-Merge

上記を同じMerge結果受信処理へ統一しています。旧Site Doctor向け公開関数は互換ラッパーとして残します。

Version:
- Full: v6.2.12
- Starter: v6.2.12-ST
