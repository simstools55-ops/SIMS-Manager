const fs=require('fs');
const files=['Code.gs','editions/full/Code.gs','editions/starter/Code.gs','apps-script/full/Code.gs','apps-script/starter/Code.gs'];
for(const f of files){
  const s=fs.readFileSync(f,'utf8');
  if(!s.includes("const SBM_VERSION = '6.2.14';")) throw new Error(f+': version');
  if(!s.includes("state!=='MULTI_MERGE_STEP_COMPLETED'")) throw new Error(f+': completed step exclusion missing');
  if(!s.includes("state.indexOf('SUPERSEDED_')!==0")) throw new Error(f+': superseded exclusion missing');
  if(!s.includes("rec.values[rec.hm['状態コード']-1]='MULTI_MERGE_STEP_COMPLETED'")) throw new Error(f+': completion state writer missing');
}
console.log('PASS product6213_completed_multi_merge_resume_filter_test: '+files.length+' code copies');
