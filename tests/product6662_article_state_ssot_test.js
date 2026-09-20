const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
function ok(x,m){if(!x)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.62'"),'version');
ok(s.includes("'管理フラグ','作業理由','状態更新日','最終改善完了日','再評価予定日'"),'article state columns');
ok(s.includes("if(s.indexOf('今日の改善')>=0)return '🔥 今日の改善';"),'today normalization');
ok(s.includes('function sbmRecycleCompletedArticlesForReview_()'),'90d recycle');
ok(s.includes("'✔️ 完了','改善効果確認完了',{reviewAfterDays:90}"),'completion schedule');
ok(s.includes("'🔥 今日の改善','経過観察終了'"),'observation transition reason');
ok(s.includes("String(a['作業理由']||'').trim()!=='経過観察終了'"),'today observation source of truth');
ok(s.includes('表示シートは記事管理の状態を変更しない'),'view non-mutating');
console.log('product6662_article_state_ssot_test: PASS');
