const fs=require('fs');const code=fs.readFileSync('Code.gs','utf8');
function ok(v,m){if(!v){console.error('FAIL:',m);process.exit(1)}}
ok(code.includes("const SBM_VERSION = '6.6.50'"),'version');
ok(code.includes('function sbmDoctorReconcileStaleCasesFromImprovementHistory_()'),'history reconciliation helper');
ok(code.includes("route.indexOf('aDoctor')<0||route.indexOf('aWriter')<0"),'Doctor Writer history evidence');
ok(code.includes("'WRITER_REQUEST_READY':1,'WRITER_IN_PROGRESS':1"),'writer stale states');
ok(code.includes("'SUPERSEDED_TREATMENT_COMPLETED'"),'superseded state');
ok(code.includes("supersede_reason:'IMPROVEMENT_HISTORY_COMPLETED'"),'workflow state synchronized');
ok(code.includes('createdTs>ev.ts'),'newer case guard');
ok(!code.includes("SBM_V6_6_49_WRITER_COMPLETION_STALE_CASE_REPAIR_DONE"),'one-time repair flag removed');
ok(code.includes('sbmDoctorReconcileStaleCasesFromImprovementHistory_();'),'reconcile before resume list');
console.log('v6.6.50 improvement-history stale-case reconciliation static audit PASS');
