# SIMS Manager v6.2.46

## Changes
- aDoctor依頼JSONで記事ランク「未発芽」を `UNGERMINATED` として明示します。
- `article_rank_label` にArticle DBの表示ランクを保持します。
- Site Doctorの一次検査コードを `health_screening_code` として渡します。
- 未発芽の場合だけ `treatment_posture: FULL_REWRITE_DEFAULT` と専用 `treatment_policy` を付与します。
- 専用方針では、部分修正ではなく検索意図・ターゲットクエリ・SERP・タイトル・構成・本文全体の再設計を原則とします。
- テーマ/需要が不適切な場合はターゲット変更、Merge、noindex/非公開なども診断対象とします。

## Unchanged
- 通常記事のaDoctor診断方針
- v6.2.44の精密診断候補表示
- v6.2.43の未発芽判定
- 記事情報更新
- 日次処理
