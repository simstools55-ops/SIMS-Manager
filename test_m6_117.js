const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/apps-script/Code.gs','utf8');
const start=src.indexOf('function sbmS3SaveHoldDecisionSnapshotUat_(');
const end=src.indexOf('\nfunction sbmS3BuildDoctorRequestUat_(',start);
assert(start>0&&end>start);
let db={},calls=0;
const props={getProperties:()=>({...db}),setProperties:(v)=>{calls++;Object.assign(db,v)}};
const ctx={sbmS3RequireUat_:()=>{},LockService:{getDocumentLock:()=>({tryLock:()=>true,releaseLock:()=>{}})},
 sbmS3ApprovalGatePreviewJson:()=>({read_only:true,execution_allowed:false,items:[{proposal_id:'S3-A000093-b188051c',article_id:'A000093',decision:'HOLD',reason:'GROUP_REVIEW_PENDING_SBM_APPROVAL'}]}),
 sbmGetSetting_:(k)=>k==='SiteID'?'tonbos55':'',PropertiesService:{getDocumentProperties:()=>props},Date};
vm.createContext(ctx);vm.runInContext(src.slice(start,end),ctx);
let a=ctx.sbmS3SaveHoldDecisionSnapshotUat_('{}');assert.equal(a.status,'HOLD_SNAPSHOTS_SAVED');assert.equal(calls,1);
let b=ctx.sbmS3SaveHoldDecisionSnapshotUat_('{}');assert.equal(b.status,'HOLD_DECISION_RECORD_ALREADY_EXISTS');assert.equal(b.write_performed,false);assert.equal(calls,1);
db['SBM_M6_DECISION_S3-A000093-b188051c']=JSON.stringify({decision:'APPROVE'});
let c=ctx.sbmS3SaveHoldDecisionSnapshotUat_('{}');assert.equal(c.status,'HOLD_DECISION_RECORD_ALREADY_EXISTS');assert.equal(calls,1);assert.equal(JSON.parse(db['SBM_M6_DECISION_S3-A000093-b188051c']).decision,'APPROVE');
console.log('PASS 3 ledger non-overwrite tests');
