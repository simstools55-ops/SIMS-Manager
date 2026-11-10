const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const start=code.indexOf('function sbmDoctorMultiWriterHandoffUiStatus(caseId){');
const end=code.indexOf('function sbmDoctorOpenMultiWriterHandoffDialog(){',start);
assert(start>=0&&end>start);
const id='STRATEGY-'+'a'.repeat(24), ids=['A000167','A000022'];
const meta={workflow_type:'STRATEGY_CASE',work_route:'WRITER_MULTI',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:'PREFLIGHT_ACKNOWLEDGED',primary_article_id:ids[0],related_article_id:ids[1]};
const receipt=(a,h)=>({article_id:a,history_id:h,publication_user_confirmed:true});
const payload={STRATEGY_WORK_RESULT:JSON.stringify({outcome:'READY_FOR_PUBLICATION',route:'WRITER_MULTI',affected_articles:ids.map(article_id=>({article_id}))}),STRATEGY_WORK_RECEIPT:JSON.stringify({outcome:'PUBLISHED',published_article_ids:ids}),STRATEGY_MONITORING_PREFLIGHT:'{}'};
const ctx={sbmDoctorWorkflowReadMeta_:()=>meta,sbmDoctorWorkflowReadPayload_:(_,k)=>payload[k]||null};vm.createContext(ctx);vm.runInContext(code.slice(start,end),ctx);
let count=0;function test(name,fn){fn();count++;console.log('PASS',name)}
function set(arr){payload.PRECISION_MULTI_WRITER_REGISTRATION_RECEIPTS_V1=JSON.stringify({articles:arr})}
function status(){return ctx.sbmDoctorMultiWriterHandoffUiStatus(id)}
test('zero receipts blocks linking',()=>{set([]);assert.strictEqual(status().can_link_histories,false)});
test('one receipt blocks linking',()=>{set([receipt(ids[0],'h1')]);assert.strictEqual(status().can_link_histories,false)});
test('two distinct valid receipts enable linking',()=>{set([receipt(ids[0],'h1'),receipt(ids[1],'h2')]);assert.strictEqual(status().can_link_histories,true)});
test('duplicate receipt blocks linking',()=>{set([receipt(ids[0],'h1'),receipt(ids[0],'h2')]);assert.strictEqual(status().can_link_histories,false)});
test('foreign article blocks linking',()=>{set([receipt(ids[0],'h1'),receipt('A000999','h2')]);assert.strictEqual(status().can_link_histories,false)});
test('missing history blocks linking',()=>{set([receipt(ids[0],'h1'),receipt(ids[1],'')]);assert.strictEqual(status().can_link_histories,false)});
test('unconfirmed publication blocks linking',()=>{set([receipt(ids[0],'h1'),{...receipt(ids[1],'h2'),publication_user_confirmed:false}]);assert.strictEqual(status().can_link_histories,false)});
test('no baseline blocks linking',()=>{set([receipt(ids[0],'h1'),receipt(ids[1],'h2')]);delete payload.STRATEGY_MONITORING_PREFLIGHT;assert.strictEqual(status().can_link_histories,false);payload.STRATEGY_MONITORING_PREFLIGHT='{}'});
test('linked history blocks linking',()=>{payload.STRATEGY_HISTORY_BINDINGS='{}';assert.strictEqual(status().can_link_histories,false);delete payload.STRATEGY_HISTORY_BINDINGS});
test('invalid case id rejected',()=>assert.strictEqual(ctx.sbmDoctorMultiWriterHandoffUiStatus('bad').ok,false));
console.log(`${count}/${count} PASS`);
