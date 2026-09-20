const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
function ok(cond,msg){if(!cond)throw new Error(msg)}
ok(s.includes("const SBM_VERSION = '6.6.54';"),'version');
ok(s.includes('var items=sbmDoctorResumeChooserItems_(vals,hm,active,wfIndex).filter(function(x){'),'precision diagnosis must use canonical resume candidates');
ok(s.includes('var resumeItems=sbmDoctorResumeChooserItems_(vals,hm,resumeActive,resumeIndex),resumeCaseMap={}'),'treatment UI must use canonical resume candidates');
ok(s.includes('if(!resumeCaseMap[caseId])return;'),'treatment UI must reject rows outside canonical candidate set');
ok(s.includes('function sbmDoctorCaseBelongsToTransferredImprovement_'),'transfer completion boundary must remain');
console.log('PASS product6654_unfinished_resume_unification_test');
