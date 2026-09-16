const fs=require('fs');
const s=fs.readFileSync('src/apps-script/Code.gs','utf8');
const checks=[
 ['version', /const SBM_VERSION = '6\.2\.[0-9]+';/.test(s)],
 ['active-cycle helper',s.includes('function sbmHasActiveMonitoringCycleForArticle_')],
 ['active lifecycle detection',s.includes("life==='ACTIVE'||life==='REVIEW_REQUIRED'")],
 ['audit completed multi step',s.includes('function sbmDoctorIsMergeRepairCandidateRow_')&&s.includes("code==='MULTI_MERGE_STEP_COMPLETED'")],
 ['audit catches lifecycle-only drift',s.includes('!done||sbmHasActiveMonitoringCycleForArticle_')],
 ['repair completed multi step',s.includes('if(!sbmDoctorIsMergeRepairCandidateRow_(row,hm))return;')],
 ['preserve no redirect',s.includes("redirectMode='NO_REDIRECT'" )],
 ['repair passes redirect mode',s.includes('sbmDoctorFinalizeMergeAbsorbedArticles_(caseId,ctx,sbmNowText_(),redirectMode)')],
 ['repair rebuilds trend view only',s.includes("sbmUpdateEffectivenessCore_(false,{viewOnly:true,dailyFast:true})")],
 ['future prevention remains',s.includes('sbmDoctorRefreshEffectCacheAfterMerge_()')],
 ['multi route remains',s.includes("sbmDoctorCaseIsMultiMerge_(c)?'連続aMerge':'aDoctor→aMerge'")]
];
let bad=0;for(const [n,ok] of checks){console.log((ok?'PASS ':'FAIL ')+n);if(!ok)bad++;}if(bad)process.exit(1);
