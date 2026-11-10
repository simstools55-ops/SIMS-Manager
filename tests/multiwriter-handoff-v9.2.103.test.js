// Execute actual function body from repository in isolated Node VM. No network or Apps Script.
'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const source=fs.readFileSync(path.join(__dirname,'../apps-script/Code.gs'),'utf8');
const start=source.indexOf('function sbmDoctorAdvanceMultiWriterMonitoring(caseId,action){');
assert(start>=0,'entrypoint missing');
const end=source.indexOf('\n\n\n/** v9.2.97 UAT:',start);
assert(end>start,'function boundary missing');
const extracted=source.slice(start,end);
const CASE='STRATEGY-'+'a'.repeat(24);
let passed=0;
function run(label,settings,action,expected){
  const calls={baseline:0,link:0};
  const meta=Object.assign({workflow_type:'STRATEGY_CASE',work_route:'WRITER_MULTI',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:'PREFLIGHT_ACKNOWLEDGED'},settings.meta||{});
  const ctx={
    sbmDoctorWorkflowReadMeta_:()=>meta,
    sbmDoctorWorkflowReadPayload_:()=>settings.binding||'',
    sbmDoctorAcknowledgeMultiWriterMonitoringBaseline:()=>{calls.baseline++;return settings.baselineResult||{ok:true,alreadyAcknowledged:false}},
    sbmDoctorLinkVerifiedMultiWriterHistories:()=>{calls.link++;return settings.linkResult||{ok:true,changes_written:true,linked_count:2}}
  };
  vm.createContext(ctx);vm.runInContext(extracted,ctx,{timeout:1000});
  const result=ctx.sbmDoctorAdvanceMultiWriterMonitoring(settings.caseId===undefined?CASE:settings.caseId,action);
  for(const [key,val] of Object.entries(expected))assert.strictEqual(result[key],val,`${label}: ${key}: ${JSON.stringify(result)}`);
  if(settings.expectedCalls)assert.deepStrictEqual(calls,settings.expectedCalls,label+' calls');
  console.log('PASS',label);passed++;
}
run('baseline accepted',{expectedCalls:{baseline:1,link:0}},'PREPARE_BASELINE',{ok:true,changes_written:true});
run('baseline idempotent',{baselineResult:{ok:true,alreadyAcknowledged:true},expectedCalls:{baseline:1,link:0}},'PREPARE_BASELINE',{ok:true,changes_written:false,already_done:true});
run('link accepted',{expectedCalls:{baseline:0,link:1}},'LINK_REGISTERED_HISTORIES',{ok:true,changes_written:true});
run('link idempotent after state transition',{meta:{status:'MONITORING_ACTIVE',strategy_monitoring_status:'HISTORY_LINKED'},linkResult:{ok:true,already_linked:true,changes_written:false},expectedCalls:{baseline:0,link:1}},'LINK_REGISTERED_HISTORIES',{ok:true,already_done:true,changes_written:false});
run('reject invalid case ID',{caseId:'STRATEGY-bad',expectedCalls:{baseline:0,link:0}},'PREPARE_BASELINE',{ok:false,changes_written:false});
run('reject implicit action',{expectedCalls:{baseline:0,link:0}},'',{ok:false,changes_written:false});
run('reject wrong workflow',{meta:{workflow_type:'PRECISION_CASE'},expectedCalls:{baseline:0,link:0}},'PREPARE_BASELINE',{ok:false,changes_written:false});
run('reject wrong route',{meta:{work_route:'WRITER'},expectedCalls:{baseline:0,link:0}},'PREPARE_BASELINE',{ok:false,changes_written:false});
run('reject premature baseline after status change',{meta:{status:'MONITORING_ACTIVE'},expectedCalls:{baseline:0,link:0}},'PREPARE_BASELINE',{ok:false,changes_written:false});
run('reject backward baseline with bindings',{binding:'{"already":true}',expectedCalls:{baseline:0,link:0}},'PREPARE_BASELINE',{ok:false,changes_written:false});
run('reject link before acknowledgement',{meta:{strategy_monitoring_status:'PENDING_USER_REGISTRATION'},expectedCalls:{baseline:0,link:0}},'LINK_REGISTERED_HISTORIES',{ok:false,changes_written:false});
run('baseline failure propagates',{baselineResult:{ok:false,message:'blocked'},expectedCalls:{baseline:1,link:0}},'PREPARE_BASELINE',{ok:false,changes_written:false});
run('link failure propagates',{linkResult:{ok:false,message:'blocked'},expectedCalls:{baseline:0,link:1}},'LINK_REGISTERED_HISTORIES',{ok:false,changes_written:false});
console.log(`${passed} tests passed. Offline only; no Google services called.`);
