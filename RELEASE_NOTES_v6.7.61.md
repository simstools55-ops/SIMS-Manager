# SIMS Manager v6.7.61 Release Notes

## 修正
初回セットアップ STEP2 のGoogle Cloudプロジェクト導線を修正しました。

- 「プロジェクト番号を確認」: このSIMS Manager自身のApps Scriptプロジェクト設定を直接開きます。
- 「Google Search Console APIを開く」: 入力したGoogle Cloudプロジェクト番号を指定してSearch Console API概要画面を開きます。
- 未入力・数字以外のプロジェクト番号ではAPI画面を開きません。

これにより、Cloud Consoleで直前に選択されていた別プロジェクトへ誤ってAPIを有効化するリスクを低減します。
