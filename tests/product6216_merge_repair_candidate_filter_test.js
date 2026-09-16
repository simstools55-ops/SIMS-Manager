const fs=require('fs');
const path=require('path');
const code=fs.readFileSync(path.join(__dirname,'../Code.gs'),'utf8');
const checks=[
  ["version 6.2.x", /const SBM_VERSION = '6\.2\.[0-9]+';/.test(code)],
  ["candidate helper exists", /function sbmDoctorIsMergeRepairCandidateRow_\(/.test(code)],
  ["merge level signal", /level==='MERGE'/.test(code)],
  ["merge destination signal", /dest\.indexOf\('MERGE'\)>=0/.test(code)],
  ["merge json signal", /mergeReq\|\|mergeRes/.test(code)],
  ["multi merge signal", /SIMS_MULTI_MERGE_WORKFLOW_V1/.test(code)],
  ["repair uses helper", /if\(!sbmDoctorIsMergeRepairCandidateRow_\(row,hm\)\)return;\n\s*var raw=/.test(code)],
  ["audit uses helper", /if\(!sbmDoctorIsMergeRepairCandidateRow_\(row,hm\)\)return;\n\s*var ctx=null,raw=/.test(code)],
  ["confirmation wording preserves redirect decision", /既存の301可否は維持/.test(code)],
  ["old misleading confirmation removed", !/吸収元記事を「301統合済み・管理対象外」へ補正します/.test(code)],
  ["unresolved label is Merge-specific", /Merge情報を復元できないCase/.test(code)],
  ["old generic skipped label removed", !/確認できなかった記事：/.test(code)]
];
let failed=0; for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'}: ${name}`); if(!ok)failed++;}
if(failed)process.exit(1);
