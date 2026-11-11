# v9.2.136 UAT

- ROLE_SEPARATIONの2記事aWriter依頼でSiteIDをSBM設定から照合し、発行前に共通の必須項目検証を実行。
- 保存済みの複数記事依頼を再表示する際もSiteIDと依頼形式を再検証。不整合があれば再発行せず停止。
- 既存の保存済みデータを自動書換えしない。
- Google Apps Script実機回帰試験は未実施。
