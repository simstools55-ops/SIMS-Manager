# SIMS Manager v7.0.0 — 実運用試験用統合版

## 統合元
- Google DriveのSIMS-Manager-v6.8.5-Repository.zip（実運用修正版）
- SIMS-Manager-v6.8.4-UAT-Repository.zip（P104模擬試験修正候補）
- 共通祖先：Google DriveのSIMS-Manager-v6.8.4-Repository.zip

## 保持・追加した変更
- v6.8.5: 統合吸収元・管理対象外の記事を再診処置候補に再掲しない。
- P104: Doctor Case・Workflowの登録安全性、再実行時の重複防止、統合完了の履歴照合・空ID時の停止。
- v6.8.5側のメニュー構成と再診依頼フローを維持。

## 制約
- 実際のApps Script同時実行・部分書込・記事操作を含む実環境試験は未実施。
- 導入前にスプレッドシートとApps Scriptをバックアップ。テスト環境から開始。
- 旧バージョンのリリースノートは歴史的記録として保持。
