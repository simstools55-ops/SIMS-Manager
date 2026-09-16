const fs=require('fs');
const c=fs.readFileSync('Code.gs','utf8');
function ok(v,m){if(!v){console.error('FAIL:',m);process.exit(1)}}
ok(c.includes("const SBM_VERSION = '6.2.9';"),'version');
ok(c.includes("SIMS_MULTI_MERGE_WORKFLOW_V1"),'multi merge contract');
ok(c.includes('function sbmFeedbackMultiMergeDoctor_'),'multi merge metadata builder');
ok(c.includes('function sbmDoctorCreateNextMultiMergeStep_'),'next-step generator');
ok(c.includes("MULTI_MERGE_STEP_COMPLETED"),'intermediate completed state');
ok(c.includes('最終Stepが完了するまでモニタリングへは移しません'),'no monitoring before final step');
ok(c.includes('sbmFeedbackMultiMergeRepairExisting_'),'upgrade pre-6.2.9 multi target case');
ok(c.includes('merge_plan={target_article:'),'pairwise explicit merge plan');
console.log('PASS product629_multi_merge_workflow_test');
