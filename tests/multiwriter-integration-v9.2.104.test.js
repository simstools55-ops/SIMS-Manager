'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(path.join(__dirname,'../apps-script/Code.gs'),'utf8');
const names=['sbmDoctorConfirmMultiWriterLegacyPublication','sbmDoctorAcknowledgeMultiWriterMonitoringBaseline','sbmDoctorAdvanceMultiWriterMonitoring'];
function extract(name){
  const begin=source.indexOf('function '+name+'(');assert(begin>=0,name+' missing');
  const open=source.indexOf('{',begin);let depth=0,quote='',escaped=false,line=false,block=false;
  for(let i=open;i<source.length;i++){
    const c=source[i],n=source[i+1];
    if(line){if(c==='\n')line=false;continue;}
    if(block){if(c==='*'&&n==='/'){block=false;i++;}continue;}
    if(quote){if(escaped){escaped=false;continue;}if(c==='\\'){escaped=true;continue;}if(c===quote)quote='';continue;}
    if(c==='/'&&n==='/'){line=true;i++;continue;}if(c==='/'&&n==='*'){block=true;i++;continue;}
    if(c==='"'||c==="'"||c==='`'){quote=c;continue;}
    if(c==='{')depth++;if(c==='}'&&--depth===0)return source.slice(begin,i+1);
  }throw Error('unclosed '+name);
}
const code=names.map(extract).join('\n');
const CASE='STRATEGY-'+'b'.repeat(24),ids=['A000167','A000022'],urls=['https://example.test/167','https://example.test/022'];
function scenario(opts={}){
  let writes=0,confirmCalls=0,preCalls=0,ackCalls=0,linkCalls=0;
  const meta={workflow_type:'STRATEGY_CASE',work_route:'WRITER_MULTI',work_prepared_at:'2026-11-10',status:'WORK_CONFIRMATION_PENDING',strategy_monitoring_status:'PENDING_USER_REGISTRATION',primary_article_id:ids[0],related_article_id:ids[1],primary_article_url:urls[0],related_article_url:urls[1]};
  const result={format:'SIMS_STRATEGY_WORK_RESULT_V1',case_id:CASE,route:'WRITER_MULTI',outcome:'READY_FOR_PUBLICATION',affected_articles:ids.map((id,i)=>({article_id:id,url:urls[i]}))};
  const pubs={format:'PRECISION_MULTI_WRITER_PUBLICATION_RECEIPTS_V1',case_id:CASE,articles:ids.map((id,i)=>({article_id:id,article_url:urls[i],user_confirmed:true,publication_date:'2026-11-10',detail:'公開確認 '+id}))};
  const payload={'STRATEGY_WORK_RESULT':JSON.stringify(result),'PRECISION_MULTI_WRITER_PUBLICATION_RECEIPTS_V1':JSON.stringify(pubs)};
  if(opts.mutate)opts.mutate({meta,result,pubs,payload});
  if(!opts.mutate){ /* no-op */ }
  // Re-serialize mutated objects unless test explicitly replaces the raw payload.
  if(opts.mutate){if(payload.STRATEGY_WORK_RESULT!==undefined)payload.STRATEGY_WORK_RESULT=JSON.stringify(result);if(payload.PRECISION_MULTI_WRITER_PUBLICATION_RECEIPTS_V1!==undefined)payload.PRECISION_MULTI_WRITER_PUBLICATION_RECEIPTS_V1=JSON.stringify(pubs);}
  const pre={ok:true,articles:ids.map((id,i)=>({articleId:id,url:urls[i]}))};
  const ctx={
    sbmNormalizeUrl_:x=>String(x||'').replace(/\/$/,''),
    sbmDoctorWorkflowReadMeta_:()=>meta,
    sbmDoctorWorkflowReadPayload_:(_,key)=>payload[key]||'',
    sbmStrategyConfirmWorkResult:(_,r)=>{confirmCalls++;if(r.published_article_ids.join(',')!==ids.join(','))throw Error('IDs');meta.status='MONITORING_SETUP_PENDING';payload.STRATEGY_WORK_RECEIPT=JSON.stringify({outcome:'PUBLISHED',published_article_ids:ids});writes++;return {ok:true};},
    sbmStrategyMonitoringPreflight:()=>{preCalls++;return pre;},
    sbmStrategyAcknowledgeMonitoringPlan:()=>{ackCalls++;meta.strategy_monitoring_status='PREFLIGHT_ACKNOWLEDGED';payload.STRATEGY_MONITORING_PREFLIGHT=JSON.stringify({articles:pre.articles});writes++;return {ok:true};},
    sbmDoctorLinkVerifiedMultiWriterHistories:()=>{linkCalls++;return {ok:true,linked_count:2,changes_written:true};}
  };
  vm.createContext(ctx);vm.runInContext(code,ctx,{timeout:2000});
  return {ctx,meta,payload,get stats(){return {writes,confirmCalls,preCalls,ackCalls,linkCalls};}};
}
let passed=0;
function test(label,fn){fn();console.log('PASS',label);passed++;}
test('valid publication then baseline through real entrypoint',()=>{const x=scenario();assert(x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);const r=x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'PREPARE_BASELINE');assert(r.ok,JSON.stringify(r));assert.equal(x.stats.confirmCalls,1);assert.equal(x.stats.ackCalls,1);assert.equal(x.stats.writes,2);});
test('baseline cannot precede publication',()=>{const x=scenario();const r=x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'PREPARE_BASELINE');assert(!r.ok);assert.equal(x.stats.writes,0);});
test('missing publication evidence blocks confirmation',()=>{const x=scenario({mutate:({payload})=>{delete payload.PRECISION_MULTI_WRITER_PUBLICATION_RECEIPTS_V1;}});assert(!x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);assert.equal(x.stats.confirmCalls,0);});
test('duplicate publication ID blocks confirmation',()=>{const x=scenario({mutate:({pubs})=>{pubs.articles[1].article_id=ids[0];}});assert(!x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);assert.equal(x.stats.confirmCalls,0);});
test('mismatched publication URL blocks confirmation',()=>{const x=scenario({mutate:({pubs})=>{pubs.articles[1].article_url='https://wrong.test';}});assert(!x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);assert.equal(x.stats.confirmCalls,0);});
test('mismatched work result blocks confirmation',()=>{const x=scenario({mutate:({result})=>{result.affected_articles[1].url='https://wrong.test';}});assert(!x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);assert.equal(x.stats.confirmCalls,0);});
test('registration checkpoint blocks retrospective baseline',()=>{const x=scenario();assert(x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);x.payload.PRECISION_MULTI_WRITER_REGISTRATION_RECEIPTS_V1=JSON.stringify({articles:[{article_id:ids[0]}]});const r=x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'PREPARE_BASELINE');assert(!r.ok);assert.equal(x.stats.ackCalls,0);});
test('baseline repeated after acknowledgement does not rewrite',()=>{const x=scenario();assert(x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);assert(x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'PREPARE_BASELINE').ok);const r=x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'PREPARE_BASELINE');assert(r.ok);assert(r.already_done);assert.equal(x.stats.ackCalls,1);});
test('link requires prior acknowledgement',()=>{const x=scenario();assert(x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);const r=x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'LINK_REGISTERED_HISTORIES');assert(!r.ok);assert.equal(x.stats.linkCalls,0);});
test('link after baseline calls existing adapter',()=>{const x=scenario();assert(x.ctx.sbmDoctorConfirmMultiWriterLegacyPublication(CASE).ok);assert(x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'PREPARE_BASELINE').ok);const r=x.ctx.sbmDoctorAdvanceMultiWriterMonitoring(CASE,'LINK_REGISTERED_HISTORIES');assert(r.ok);assert.equal(x.stats.linkCalls,1);});
console.log(`${passed} tests passed (isolated multi-function contract; downstream legacy gates mocked).`);
