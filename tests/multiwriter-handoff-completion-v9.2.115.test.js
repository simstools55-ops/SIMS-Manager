'use strict';
const assert=require('assert'),fs=require('fs'),vm=require('vm'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'../apps-script/Code.gs'),'utf8');
const begin=src.indexOf('function sbmStrategyVerifyMonitoringAndComplete(caseId){');
const end=src.indexOf('/** v9.2.36: read-only cutover readiness.',begin);
assert(begin>=0&&end>begin);
const fn=src.slice(begin,end);
const caseId='STRATEGY-'+'d'.repeat(24),ids=['A000167','A000022'],urls=['https://example.test/167','https://example.test/022'],hids=['H167','H022'];
function fixture(change){
 let writes=0;
 const meta={workflow_type:'STRATEGY_CASE',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:'HISTORY_LINKED',work_route:'WRITER_MULTI'};
 const pairs=ids.map((articleId,i)=>({articleId,url:urls[i],historyId:hids[i]}));
 const work={affected_articles:ids.map((article_id,i)=>({article_id,url:urls[i]}))};
 const receipt={outcome:'PUBLISHED',published_article_ids:[...ids]};
 const histories=ids.map((ArticleID,i)=>({ArticleID,'記事URL':urls[i],'改善履歴ID':hids[i],lifecycle:'ACTIVE',measurement_count:0}));
 const effects=hids.map(x=>({'改善履歴ID':x}));
 const state={meta,pairs,work,receipt,histories,effects};if(change)change(state);
 const payload={STRATEGY_HISTORY_BINDINGS:JSON.stringify(pairs),STRATEGY_WORK_RESULT:JSON.stringify(work),STRATEGY_WORK_RECEIPT:JSON.stringify(receipt)};
 const ctx={sbmDoctorWorkflowReadMeta_:()=>meta,sbmDoctorWorkflowReadPayload_:(_,key)=>payload[key]||'',sbmNormalizeUrl_:s=>String(s||'').replace(/\/$/,''),sbmRowsAsObjects_:sheet=>sheet==='EFFECT'?effects:histories,SBM_SHEETS:{EFFECT:'EFFECT',FEEDBACK_HISTORY:'HISTORY'},sbmDoctorFindHistoryByIdForSelectedEffect_:id=>histories.find(h=>h['改善履歴ID']===id),sbmMonitoringLifecycleFromHistory_:h=>h.lifecycle,sbmDoctorWorkflowWriteMeta_:(_,patch)=>{Object.assign(meta,patch);writes++},sbmNowText_:()=> '2026-11-10'};
 vm.createContext(ctx);vm.runInContext(fn,ctx,{timeout:2000});return {state,run:()=>ctx.sbmStrategyVerifyMonitoringAndComplete(caseId),writes:()=>writes};
}
let n=0;function test(label,change,pass){const f=fixture(change),r=f.run();assert.strictEqual(r.ok,pass,`${label}: ${r.message}`);assert.strictEqual(f.writes(),pass?1:0);if(pass){assert.strictEqual(f.state.meta.status,'COMPLETED');assert.strictEqual(f.state.meta.strategy_monitoring_status,'VERIFIED_ACTIVE');assert(f.state.histories.every(h=>['ACTIVE','REVIEW_REQUIRED'].includes(h.lifecycle)&&h.measurement_count===0),'must not synthesize weekly measurements');const again=f.run();assert.strictEqual(again.ok,false,'closed case must reject repeat completion');assert.strictEqual(f.writes(),1,'repeat must not write');}else assert.strictEqual(f.state.meta.status,'MONITORING_SETUP_PENDING');console.log('PASS '+label);n++;}
test('two active article histories hand off without inventing measurements',null,true);
test('review-required is a valid ongoing monitor',s=>s.histories[1].lifecycle='REVIEW_REQUIRED',true);
test('second article not active blocks completion',s=>s.histories[1].lifecycle='COMPLETED',false);
test('missing second effect record blocks completion',s=>s.effects.pop(),false);
test('missing second binding blocks completion',s=>s.pairs.pop(),false);
test('missing second publication confirmation blocks completion',s=>s.receipt.published_article_ids.pop(),false);
test('duplicate publication confirmation blocks completion',s=>s.receipt.published_article_ids[1]=ids[0],false);
test('old active monitor blocks completion',s=>s.histories.push({ArticleID:ids[1],'記事URL':urls[1],'改善履歴ID':'OLD','lifecycle':'REVIEW_REQUIRED'}),false);
test('wrong article URL blocks completion',s=>s.pairs[1].url='https://example.test/other',false);
test('merge route cannot be completed by writer handoff',s=>s.meta.work_route='MERGE',false);
console.log(`${n}/${n} offline handoff-completion tests passed (mocked sheet persistence; not Apps Script UAT).`);
