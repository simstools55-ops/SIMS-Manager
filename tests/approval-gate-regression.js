const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const start=code.indexOf('function sbmStrategyReviewDecision(caseId,action){');
const end=code.indexOf('/** v9.2.29:',start);
assert(start>0&&end>start);
const fn=code.slice(start,end);
function run(status,decision,hasPayload,action){
 let row={workflow_type:'STRATEGY_CASE',status,decision,doctor_decision:'ROLE_SEPARATION',doctor_requires_change:true};
 let writes=0;
 const cell={setValue(v){row=JSON.parse(v);writes++},getValue(){return JSON.stringify(row)}};
 const ctx={
  LockService:{getDocumentLock:()=>({tryLock:()=>true,releaseLock:()=>{}})},
  sbmStrategyReadMetaNarrow_:()=>({meta:row,sheet:{getRange:()=>cell},row:1,payloadCol:1}),
  sbmDoctorWorkflowReadPayload_:()=>hasPayload?'{"format":"SIMS_STRATEGY_DOCTOR_V1"}':'',
  sbmNowText_:()=> '2026-11-12 19:40',SpreadsheetApp:{flush:()=>{}},console,
 };
 vm.createContext(ctx);vm.runInContext(fn,ctx);
 const result=ctx.sbmStrategyReviewDecision('STRATEGY-'+'a'.repeat(24),action);
 return {result,writes,row};
}
let x=run('OPEN','',true,'ACCEPT');assert(!x.result.ok&&x.writes===0);
x=run('REVIEW_READY','',false,'ACCEPT');assert(!x.result.ok&&x.writes===0);
x=run('REVIEW_READY','',true,'ACCEPT');assert(x.result.ok&&x.row.status==='APPROVED_ACTION_PENDING'&&x.writes===1);
x=run('APPROVED_ACTION_PENDING','ACCEPT',true,'ACCEPT');assert(x.result.ok&&x.result.alreadyProcessed&&x.writes===0);
x=run('CANCELLED','CANCEL',true,'ACCEPT');assert(!x.result.ok&&x.writes===0);
x=run('REVIEW_READY','',true,'HOLD');assert(x.result.ok&&x.row.status==='ON_HOLD');
x=run('REVIEW_READY','',true,'CANCEL');assert(x.result.ok&&x.row.status==='CANCELLED');
console.log('PASS: 7 approval state / idempotency tests');
