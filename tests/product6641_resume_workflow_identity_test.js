const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
function ok(v,m){if(!v)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.41';"),'version');
ok(s.includes('function sbmNormalImprovementResumeChooserItem_(entry)'),'normal chooser item missing');
ok(s.includes('function sbmResumeSelectedWorkflow(workflowType,workflowId,virtualFollowUp)'),'identity dispatcher missing');
ok(s.includes('.sbmResumeSelectedWorkflow(x.workflowType||"DOCTOR",x.workflowId||x.caseId,!!x.virtualFollowUp)'), 'chooser does not dispatch selected identity');
ok(s.includes('if(normalItem)resumeItems.push(normalItem);'),'normal workflow not merged into chooser candidates');
ok(s.includes('if(resumeItems.length>1){sbmDoctorShowResumeCaseChooser_(resumeItems);return;}'),'multi-workflow chooser missing');
ok(!s.includes('if(normal&&(!doctorCandidate||normal.ts>=doctorCandidate.ts))return sbmResumeNormalImprovementWorkflow_(normal);'),'timestamp cross-workflow auto selection remains');
ok(!s.includes('staleMergeCleanup&&staleMergeCleanup.count'),'undefined stale cleanup reference remains');
console.log('v6.6.41 workflow identity resume static test: OK');
