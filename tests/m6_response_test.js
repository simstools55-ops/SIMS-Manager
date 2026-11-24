const fs=require('fs'),vm=require('vm'),assert=require('assert');
const path=require('path');
const src=fs.readFileSync(path.resolve(__dirname,'../apps-script/Code.gs'),'utf8');
function extract(name){let pos=src.indexOf('function '+name+'(');assert(pos>=0,name);let start=src.indexOf('{',pos),depth=0,quote='',esc=false,comment='';for(let i=start;i<src.length;i++){let c=src[i],n=src[i+1];if(comment==='line'){if(c==='\n')comment='';continue}if(comment==='block'){if(c==='*'&&n==='/'){comment='';i++}continue}if(quote){if(esc){esc=false;continue}if(c==='\\'){esc=true;continue}if(c===quote)quote='';continue}if(c==='/'&&n==='/'){comment='line';i++;continue}if(c==='/'&&n==='*'){comment='block';i++;continue}if(c==='"'||c==="'"||c==='`'){quote=c;continue}if(c==='{')depth++;if(c==='}'&&!--depth)return src.slice(pos,i+1)}throw Error('unterminated '+name)}
const proposal='S3-A000123-abcdef12',caseId='CASE-TEST',article='A000123';
const request={case_id:caseId,source_proposal_id:proposal,article:{article_id:article},request:{request_id:'REQ-1'}};
let meta={workflow_type:'S3_DOCTOR_REVIEW',current_stage:'WAITING_RESPONSE',registration_status:'WAITING'};
let saved=JSON.stringify(request),registerCalls=0;
const sheet={getLastRow:()=>2,getLastColumn:()=>3,getRange:()=>({getDisplayValues:()=>[['S3ProposalID','CaseID','記事ID'],[proposal,caseId,article]]})};
let lockReleased=0;
const ctx={LockService:{getDocumentLock:()=>({tryLock:()=>true,releaseLock:()=>{lockReleased++}})},sbmS3RequireUat_:()=>{},SpreadsheetApp:{getActiveSpreadsheet:()=>({getSheetByName:()=>sheet})},sbmS3CaseIdentityIndex_:()=>({ok:true,by_proposal:{[proposal]:{case_id:caseId,article_id:article}}}),sbmDoctorExtractJsonText_:x=>x,sbmDoctorExtractResultJsonText_:x=>x,sbmDoctorWorkflowReadPayload_:()=>saved,sbmDoctorWorkflowReadMeta_:()=>meta,sbmDoctorRegisterResultWithCheckpoint:()=>{registerCalls++;return {ok:true}},JSON};
vm.createContext(ctx);for(let n of ['sbmS3WorkflowRequestConsistency_','sbmS3DoctorResponsePreflightUat_','sbmS3RegisterDoctorResponseUat_'])vm.runInContext(extract(n),ctx);
let total=0;function test(name,fn){fn();total++;process.stdout.write('PASS '+name+'\n')}
const call=(r=request,result={case_id:caseId})=>ctx.sbmS3DoctorResponsePreflightUat_(proposal,caseId,JSON.stringify(r),JSON.stringify(result));
test('valid response preflight',()=>assert.strictEqual(call().ok,true));
test('missing workflow meta HOLD',()=>{meta=null;assert.strictEqual(call().status,'HOLD_WORKFLOW_META_MISSING');meta={workflow_type:'S3_DOCTOR_REVIEW',current_stage:'WAITING_RESPONSE',registration_status:'WAITING'}});
test('wrong workflow type HOLD',()=>{meta.workflow_type='LEGACY';assert.strictEqual(call().status,'HOLD_WORKFLOW_STAGE');meta.workflow_type='S3_DOCTOR_REVIEW'});
test('wrong stage HOLD',()=>{meta.current_stage='REQUEST_PREPARED';assert.strictEqual(call().status,'HOLD_WORKFLOW_STAGE');meta.current_stage='WAITING_RESPONSE'});
test('follow up stage HOLD',()=>{meta.current_stage='FOLLOW_UP_REQUEST_READY';assert.strictEqual(call().status,'HOLD_ALREADY_PROCESSED');meta.current_stage='WAITING_RESPONSE'});
test('already registered HOLD',()=>{meta.registration_status='DONE';assert.strictEqual(call().status,'HOLD_ALREADY_PROCESSED');meta.registration_status='WAITING'});
test('request identity mismatch HOLD',()=>assert.strictEqual(call({...request,source_proposal_id:'S3-A000123-11111111'}).status,'HOLD_REQUEST_IDENTITY'));
test('stored request mismatch HOLD',()=>{saved=JSON.stringify({...request,request:{request_id:'OTHER'}});assert.ok(call().status.startsWith('HOLD_SAVED_REQUEST_'));saved=JSON.stringify(request)});
test('result case mismatch HOLD',()=>assert.strictEqual(call(request,{case_id:'OTHER'}).status,'HOLD_RESULT_CASE_MISMATCH'));
test('canonical adapter only invoked after preflight',()=>{meta.current_stage='REQUEST_PREPARED';const r=ctx.sbmS3RegisterDoctorResponseUat_(proposal,caseId,JSON.stringify(request),JSON.stringify({case_id:caseId}));assert.strictEqual(r.ok,false);assert.strictEqual(registerCalls,0);meta.current_stage='WAITING_RESPONSE';const good=ctx.sbmS3RegisterDoctorResponseUat_(proposal,caseId,JSON.stringify(request),JSON.stringify({case_id:caseId}));assert.strictEqual(good.ok,true);assert.strictEqual(registerCalls,1);assert.strictEqual(lockReleased,2)});
console.log('TOTAL '+total+'/'+total);
