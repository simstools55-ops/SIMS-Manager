# SIMS Manager v6.1.18

## Purpose

V6実運用試験で発見した、v6.1.16以前の「経過観察終了後のaDoctor再診」を複数回実行した際に旧Caseが重複し、v6.1.17が誤って最新Caseを再開してしまう互換性問題を修正します。

## Changes

- checkpointを持つ現行Caseは従来どおり保存済み工程を優先して再開。
- checkpointのない旧 `DOCTOR_DIAGNOSIS_PENDING` Caseが同一記事に複数存在する場合、最初に発行されたCaseを復旧対象として選択。
- 復旧時に再度Search Console / Evidence収集へ進まず、aDoctor回答登録工程へ戻す。
- 重複旧Case検出を `DoctorEffectLegacyRescue` としてSystem_Logへ記録。
- Starterの利用者向けバージョン表示を `v6.1.18-Starter` とし、Fullの `v6.1.18` と明確に区別。
- 内部契約・正本バージョンはFull/Starter共通で `6.1.18` を維持。

## Edition policy

FullとStarterは同じ正本バージョンラインを共有します。Starterの `-Starter` は利用者向けEdition識別子であり、SemVer正本番号そのものには含めません。
