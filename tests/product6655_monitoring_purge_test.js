const fs=require('fs');const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
function ok(v,m){if(!v)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.55';"),'version');
ok(s.includes('function sbmDoctorPurgeResumeDataAfterMonitoring_'),'purge helper');
ok(s.includes("sbmDoctorPurgeResumeDataAfterMonitoring_(String(o.article_id||''"),'writer purge');
ok(s.includes('sbmDoctorPurgeResumeDataAfterMonitoring_(articleId,url,[caseId])'),'creator purge');
ok(s.includes("meta.explicit_new_cycle===true"),'explicit observation cycle gate');
ok(!s.includes("chosen.legacyDuplicateCount=legacy.length"),'legacy observation rescue removed');
ok(s.includes("explicit_new_cycle:!!(meta&&meta.explicit_new_cycle)"),'explicit cycle saved');
ok(s.includes("sbmDoctorWorkflowSaveRequest_(payload,{workflow_type:'EFFECT_AFTER_OBSERVATION'")&&s.includes('explicit_new_cycle:true'),'new observation cycle marked');
ok(s.includes("v6.6.55: 通常改善も改善登録完了後は再開用Workflowを保持しない"),'normal workflow purge');
console.log('PASS product6655_monitoring_purge_test');
