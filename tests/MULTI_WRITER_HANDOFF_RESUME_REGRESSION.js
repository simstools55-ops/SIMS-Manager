/* node tests/MULTI_WRITER_HANDOFF_RESUME_REGRESSION.js
 * Extracts the production function; all collaborators are in-memory mocks.
 * Does not test Apps Script services, real Sheets or actual 28-day monitoring.
 */
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync(require('path').join(__dirname,'../apps-script/Code.gs'),'utf8');
const start=code.indexOf('function sbmDoctorAdvanceMultiWriterMonitoring(caseId,action){');
assert(start>=0,'entrypoint missing');
let depth=0,end=-1,inString=null,escaped=false;
for(let i=code.indexOf('{',start);i<code.length;i++){
 const c=code[i];
 if(inString){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c===inString)inString=null;continue;}
 if(c==='"'||c==="'"||c==='`'){inString=c;continue;}
 if(c==='{')depth++;else if(c==='}'){depth--;if(depth===0){end=i+1;break;}}
}
assert(end>start);
const id='STRATEGY-'+'a'.repeat(24);
let status='MONITORING_SETUP_PENDING', monitoring='PREFLIGHT_ACKNOWLEDGED', writes=0,linkCalls=0,baselineCalls=0;
const ctx={
 sbmDoctorWorkflowReadMeta_:()=>({workflow_type:'STRATEGY_CASE',work_route:'WRITER_MULTI',status,strategy_monitoring_status:monitoring}),
 sbmDoctorWorkflowReadPayload_:()=>null,
 sbmDoctorAcknowledgeMultiWriterMonitoringBaseline:()=>{baselineCalls++;writes++;return {ok:true,message:'baseline'}},
 sbmDoctorLinkVerifiedMultiWriterHistories:()=>{linkCalls++;if(monitoring==='HISTORY_LINKED'||monitoring==='VERIFIED_ACTIVE')return {ok:true,already_linked:true,changes_written:false,linked_count:2};writes++;return {ok:true,changes_written:true,linked_count:2}},
};
vm.createContext(ctx);vm.runInContext(code.slice(start,end),ctx);
const advance=ctx.sbmDoctorAdvanceMultiWriterMonitoring;
let r=advance(id,'PREPARE_BASELINE');assert(r.ok&&r.changes_written&&baselineCalls===1);
r=advance(id,'LINK_REGISTERED_HISTORIES');assert(r.ok&&r.changes_written&&linkCalls===1);
monitoring='HISTORY_LINKED';status='MONITORING_ACTIVE';
r=advance(id,'LINK_REGISTERED_HISTORIES');assert(r.ok&&r.already_done&&!r.changes_written&&writes===2);
r=advance(id,'PREPARE_BASELINE');assert(!r.ok&&baselineCalls===1);
monitoring='PREFLIGHT_ACKNOWLEDGED';
r=advance(id,'LINK_REGISTERED_HISTORIES');assert(!r.ok&&linkCalls===2);
assert(!advance(id,'UNSAFE_ACTION').ok);
console.log('PASS: baseline, first linkage, idempotent resume, status guard, action guard');
