const fs=require('fs');
const s=fs.readFileSync('Code.gs','utf8');
function ok(v,m){if(!v)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.57';"),'version');
ok(s.includes('function sbmPurgeUnfinishedDataForEffectTransferred_()'),'effect-transfer purge exists');
ok(s.includes('sbmRowsAsObjects_(SBM_SHEETS.EFFECT)'), 'purge uses improvement progress as source of truth');
ok(!/function sbmPurgeUnfinishedDataForActiveMonitoring_\s*\(/.test(s),'old ACTIVE-only purge removed');
ok(s.includes("workflow_type||'').trim()==='EFFECT_AFTER_OBSERVATION'&&m.explicit_new_cycle===true"),'explicit new observation cycle preserved');
ok((s.match(/sbmPurgeUnfinishedDataForEffectTransferred_\(\)/g)||[]).length>=4,'shared cleanup used by resume entries');
ok(!s.includes('sbmDoctorPurgeResumeDataAfterMonitoring_('),'old purge function calls removed');
console.log('product6657_effect_transfer_cleanup_test: PASS');
