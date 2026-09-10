# SIMS Manager v6.2.38 Repository Baseline

## v6.2.38の位置付け

「記事情報を更新」の実運用試験で確定した高速・安全な補完フローをRepository正本へまとめた版です。

- 記事管理で必要な「記事タイトル」「メインクエリ」を点検・補完
- 200件規模の点検は実測約1秒
- 未取得メインクエリだけ過去6か月GSCで補完
- 1記事ずつ処理し、ArticleID＋URL＋更新前値で安全照合
- 日次処理、SEOタイトル、メタディスクリプションの既存処理は変更なし
- Full v6.2.38 / Starter v6.2.38-ST

詳細は `GITHUB-RELEASE-NOTES-v6.2.38.md` を参照してください。

---

# SIMS Manager v6.2.1 Repository Baseline

## v6.2.1の位置付け

Workflow再開・復旧アーキテクチャの正式再編版です。

- Full v6.2.1 / Starter v6.2.1-ST
- 設定・メンテナンスの再開入口を「未完了の作業を再開」へ統一
- 通常aDoctor / Site Doctorを同じCase状態Dispatcherで再開
- 再開時は新規Doctor結果登録欄を隠し、保存済みの現在地点から直接再開
- 個別修復メニューを「データ整合性を点検・修復」へ集約
- TREATMENT_FAILED、依頼JSON欠落、履歴参照欠落、Creator Direct重複/不完全履歴を監査
- Creator Direct重複整理はバックアップ後に安全実行
- Merge吸収記事補正は統合点検画面から既存安全処理を起動
- 旧公開関数は互換用に残し、利用者メニューからは整理
