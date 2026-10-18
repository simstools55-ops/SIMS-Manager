# v7.1.2 UAT

- 正常系：Doctor findings → Writer revised_article → 公開確認 → COMPLETED
- 異常系：ID不一致、空のfindings、短い原稿、保存失敗、同記事再受付、旧案件無効化
- 非干渉：記事管理・改善履歴H000030・改善効果の差分がゼロであること
- 中断：再受付時に旧案件をABANDONEDにする。画面閉鎖では状態は残る。
- 公開確認は自己申告であり、公開サイトの自動照合は未実装。
