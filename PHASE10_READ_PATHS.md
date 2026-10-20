# Phase 10: 途中終了の読み取り側接続

既存集計の3経路に `sbmInfoChangeHistoryIsInterrupted_` を追加。

1. HOME: `sbmHomeTreatmentHistoryStats_` の記事単位集計・累計改善実績から途中終了行だけを除外する。過去の別サイクルは保持。
2. 改善の推移: `sbmUpdateEffectivenessCore_` の候補生成時に途中終了行を除外する。
3. 今日の改善: `sbmTodayHistoryExclusionMap_` で最新履歴が途中終了なら、過去の監視を理由にブロックしない。記事管理の作業状態など他の条件は従来どおり。

既存データに `INTERRUPTED_INFO_UPDATE` が存在しない限り挙動は変わらない。状態書込み・公開完了登録・日次処理の全経路監査は未完了。Google Apps Script実動作未検証。通常運用環境への導入は禁止。
