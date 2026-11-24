const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(__dirname+'/Code.gs','utf8');
const sandbox={};vm.createContext(sandbox);
vm.runInContext(source.slice(source.indexOf('/** M6 approval gate v1.')),sandbox);
sandbox.sbmS3RequireUat_=()=>{};
sandbox.sbmS3LiveDecisionPreviewJson=()=>({read_only:true,items:[
 {proposal_id:'S3-A000026-b188051c',article_id:'A000026',evidence_complete:true,next_action:'EXISTING_CASE_REVIEW'},
 {proposal_id:'S3-A000093-b188051c',article_id:'A000093',evidence_complete:true,next_action:'GROUP_DOCTOR_CANDIDATE'},
 {proposal_id:'S3-A000195-b188051c',article_id:'A000195',evidence_complete:true,next_action:'MONITOR_WITH_GROUP_REVIEW'}]});
sandbox.sbmS3RegistrationBatchPreflightJson=()=>({read_only:true,items:[
 {proposal_id:'S3-A000026-b188051c',status:'HOLD_NOT_REGISTERED'},
 {proposal_id:'S3-A000093-b188051c',status:'HOLD_NOT_REGISTERED'},
 {proposal_id:'S3-A000195-b188051c',status:'HOLD_NOT_REGISTERED'}]});
let r=sandbox.sbmS3ApprovalGatePreviewJson('{}');
assert.equal(r.items.length,3);assert.equal(r.summary.approved,0);assert(r.items.every(x=>!x.registration_allowed&&!x.write_performed));
assert.equal(r.items[0].reason,'EXISTING_DOCTOR_CASE_PRIORITY');
assert.equal(r.items[1].reason,'GROUP_REVIEW_PENDING_SBM_APPROVAL');
assert.equal(r.items[2].reason,'MONITORING_CONFLICT_REQUIRES_ADJUDICATION');
sandbox.sbmS3RegistrationBatchPreflightJson=()=>({read_only:false,items:[]});
r=sandbox.sbmS3ApprovalGatePreviewJson('{}');assert.equal(r.reason,'INCOMPLETE_PREFLIGHT');
console.log('PASS: 3-item hold, existing case, monitoring conflict, incomplete preflight');
