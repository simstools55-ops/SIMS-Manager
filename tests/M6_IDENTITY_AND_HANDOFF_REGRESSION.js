'use strict';
// Execute: node tests/M6_IDENTITY_AND_HANDOFF_REGRESSION.js
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('apps-script/Code.gs','utf8');
function extract(name){const start=code.indexOf('function '+name+'(');assert(start>=0,'missing '+name);let open=code.indexOf('{',start),depth=0;for(let i=open;i<code.length;i++){if(code[i]==='{')depth++;if(code[i]==='}'&&!--depth)return code.slice(start,i+1);}throw Error('unbalanced '+name);}
const ctx=vm.createContext({});for(const name of ['sbmS3CaseIdentityIndex_','sbmS3RegistrationBatchPreflightJson','sbmS3DoctorHandoffPreviewJson'])vm.runInContext(extract(name),ctx);
let n=0;function check(name,fn){fn();n++;console.log('PASS '+name);}
const header=['CaseID','記事ID','S3ProposalID'];const pid='S3-A000001-1234abcd';
check('empty identity index',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_(header,[]).ok,true));
check('valid identity',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_(header,[['C1','A000001',pid]]).by_proposal[pid].case_id,'C1'));
check('duplicate proposal rejected',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_(header,[['C1','A000001',pid],['C2','A000001',pid]]).reason,'DUPLICATE_EXISTING_PROPOSAL'));
check('missing proposal column rejected',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_(['CaseID','記事ID'],[]).ok,false));
check('duplicate proposal columns rejected',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_([...header,'ProposalID'],[]).ok,false));
check('invalid existing article id rejected',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_(header,[['C1','BAD',pid]]).reason,'INVALID_EXISTING_IDENTITY'));
check('missing existing case id rejected',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_(header,[['','A000001',pid]]).ok,false));
check('malformed proposal id rejected',()=>assert.equal(ctx.sbmS3CaseIdentityIndex_(header,[['C1','A000001','bad']]).ok,false));
const rows=[header,['C1','A000001',pid]];
ctx.sbmS3RequireUat_=()=>{};ctx.sbmS3RegistrationDryRunJson=()=>({items:[{proposal_id:pid,article_id:'A000001'},{proposal_id:pid,article_id:'A000001'},{proposal_id:'S3-A000002-abcdef12',article_id:'A000002'}]});
ctx.SpreadsheetApp={getActiveSpreadsheet:()=>({getSheetByName:()=>({getLastRow:()=>rows.length,getLastColumn:()=>3,getRange:()=>({getDisplayValues:()=>rows})})})};
check('reuse existing case',()=>assert.equal(ctx.sbmS3RegistrationBatchPreflightJson('{}').items[0].status,'REUSE_EXISTING_CASE'));
check('duplicate input held',()=>assert.equal(ctx.sbmS3RegistrationBatchPreflightJson('{}').items[1].status,'HOLD_INPUT_DUPLICATE'));
check('unregistered proposal held',()=>assert.equal(ctx.sbmS3RegistrationBatchPreflightJson('{}').items[2].status,'HOLD_NOT_REGISTERED'));
check('no write allowed',()=>assert.equal(ctx.sbmS3RegistrationBatchPreflightJson('{}').write_performed,false));
ctx.sbmS3IntakePreviewJson=()=>({items:[{proposal_id:pid,query:'example'}]});
check('handoff preview is not dispatch',()=>{const r=ctx.sbmS3DoctorHandoffPreviewJson('{}');assert.equal(r.dispatch_performed,false);assert.equal(r.items[0].dispatch_allowed,false);});
console.log('TOTAL '+n+'/'+n);
