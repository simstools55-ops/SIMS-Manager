const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const full = fs.readFileSync(path.join(root, 'Code.gs'), 'utf8');
const starter = fs.readFileSync(path.join(root, 'editions/starter/Code.gs'), 'utf8');
function ok(cond, msg){ if(!cond){ console.error('FAIL:', msg); process.exitCode = 1; } else { console.log('PASS:', msg); } }

ok(full.includes("const SBM_VERSION = '6.2.18';"), 'Full version is 6.2.18');
ok(starter.includes("const SBM_VERSION = '6.2.18';"), 'Starter canonical version is 6.2.18');
ok(starter.includes("const SBM_EDITION = 'STARTER';"), 'Starter edition marker preserved');
ok(full.includes('今回の改善を取りやめる'), 'user-facing cancel action is present');
ok(full.includes('今回の記事改善') && full.includes('今回の記事統合') && full.includes('今回の新記事作成'), 'route-specific final confirmation wording is present');
ok(full.includes('「未完了の作業を再開」には表示されなくなります'), 'final confirmation explains resume-list effect');
ok(full.includes('改善を続ける') && full.includes('記事統合を続ける') && full.includes('新記事作成を続ける'), 'route-specific safe return buttons are present');
ok(!full.includes('onclick="skipCurrentTreatment()">この処置を行わず終了</button>'), 'old ambiguous skip label is removed');
ok(full.includes('aWriterの改善結果を登録'), 'Writer result label is user-facing');
ok(full.includes('aMergeの統合結果を登録'), 'Merge result label is user-facing');
ok(full.includes('記事統合の完了を登録'), 'Merge completion label is user-facing');
ok(!full.includes("changedNow.indexOf('WAIT / MONITOR')>=0 || nextNow==='monitor'"), 'generic next_action monitor no longer triggers Doctor additional observation');
ok(full.includes("doctorMonitoring=(routeNow.indexOf('Doctor再診→経過観察')>=0 || routeNow.indexOf('aDoctor再診→経過観察')>=0 || changedNow.indexOf('WAIT / MONITOR')>=0);"), 'Doctor additional observation is limited to Doctor/WAIT-MONITOR evidence');
ok(full.includes('monitor_days:Number(p.monitor_days||28)||28'), 'Creator referral default monitoring is 28 days');
ok(full.includes('7日目・14日目・21日目・28日目の4回測定'), 'Creator guidance uses standard four measurements');
ok(full.includes("status('処置せず終了')") === false, 'no accidental invalid status-call string introduced');
