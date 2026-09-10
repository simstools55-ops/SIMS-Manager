# SIMS Manager v6.2.37 Repository Baseline

## v6.2.37の位置付け

「記事情報を更新」の実運用試験で確定した高速・安全な補完フローをRepository正本へまとめた版です。

- 記事管理で必要な「記事タイトル」「メインクエリ」を点検・補完
- 200件規模の点検は実測約1秒
- 未取得メインクエリだけ過去6か月GSCで補完
- 1記事ずつ処理し、ArticleID＋URL＋更新前値で安全照合
- 日次処理、SEOタイトル、メタディスクリプションの既存処理は変更なし
- Full v6.2.37 / Starter v6.2.37-ST

詳細は `GITHUB-RELEASE-NOTES-v6.2.37.md` を参照してください。

---

# SIMS Manager v6.2.6 Repository Baseline

## v6.2.6の位置付け

v6.2.5の未完了Workflow再開順序を維持しつつ、セル保存上限を超えたWriter/Merge紹介状の復元を通常aDoctor / Site Doctor共通で修正したパッチ版です。

- 通常aDoctor案件でも、短縮stubから紹介状全文を復元可能
- Site Doctor案件は従来どおりSite Diagnosis識別情報を保持して復元
- 完全版はセルへ再保存せず、復元時のダイアログへ直接返す
- 「全文を再生成」を「紹介状の全文を復元」へ明確化
- 復元とコピーを二段階に分離し、復元完了を画面で確認可能
- Full v6.2.6 / Starter v6.2.6-ST
