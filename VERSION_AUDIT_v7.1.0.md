# SIMS Manager v7.1.0 バージョン整合監査

判定: パッケージ内バージョン整合は合格。実環境UATは未実施。

- Code.gs 5コピー: 同一SHA-256、SBM_VERSION=7.1.0
- ルート VERSION / PRODUCT_IDENTITY / README / README-FIRST: 7.1.0
- 配布用README-FIRST: 現行見出し7.1.0（旧履歴は履歴として保存）
- Shared Editorial Knowledge: Managerと独立した製品バージョン6.8.0。shared/VERSIONとshared/PRODUCT_IDENTITYを一致させた
- 旧リリースノート、CHANGELOG、関数コメントに含まれる旧版番号は歴史情報であり置換しない
- Apps Scriptの動作、ライセンス認証、業務フローの合格を意味しない
