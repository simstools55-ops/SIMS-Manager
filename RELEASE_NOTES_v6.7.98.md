# SIMS Manager v6.7.98

## 変更内容
- 記事詳細の「利用者判断で改善する場合」に「aDoctorで診断する」を追加。
- Full Editionのみ表示し、既存の `sbmDoctorCreateRequestFromArticleIdentity` を利用して正式なaDoctor診断依頼を作成。
- 「利用者判断で改善ナビを開く」は従来どおり併設。
- モニター中、改善中、処置中、再診処置中、急落、管理対象外、要確認、要改善など、任意改善を許可しない状態では両ボタンを表示しない。
- Starter EditionではaDoctorボタンを表示しない。

## 非変更範囲
- aDoctor診断ロジック
- 改善ナビ本体
- 記事管理の判定・ランク・作業状態
- GSC取得・効果測定
