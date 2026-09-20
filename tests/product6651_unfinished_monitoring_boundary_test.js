const fs=require('fs');
const s=fs.readFileSync('Code.gs','utf8');
function ok(x,m){if(!x)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.51'"),'version');
ok(s.includes('function sbmDoctorActiveMonitoringCutoffMap_()'),'monitor map helper');
ok(s.includes("sbmMonitoringLifecycleFromHistory_(h)!=='ACTIVE'"),'active monitoring only');
ok(s.includes('function sbmDoctorCasePredatesActiveMonitoring_'),'case boundary helper');
ok(s.includes("'DOCTOR_DIAGNOSIS_PENDING','FOLLOW_UP_REQUEST_READY','USER_ACTION_REQUIRED','USER_DECISION_REQUIRED','WRITER_REQUEST_READY','WRITER_IN_PROGRESS'"),'doctor writer scope');
ok(s.includes('if(sbmDoctorCasePredatesActiveMonitoring_(row,hm,monitorMap))continue;'),'chooser exclusion');
ok(s.includes("if(!state||state==='MONITORING'||state.indexOf('SUPERSEDED_')===0||state==='CANCELLED_BY_USER')continue;"),'monitoring excluded dispatcher');
console.log('PASS product6651_unfinished_monitoring_boundary_test');
