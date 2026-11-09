const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const begin=src.indexOf('function sbmStrategyRegistrationProgress('),end=src.indexOf('\n/** Read-only status of strategic monitoring handoff.',begin);
assert(begin>=0&&end>begin);
const code=src.slice(begin,end);
let meta={workflow_type:'STRATEGY_CASE'},checkpoint={},work={outcome:'READY_FOR_PUBLICATION',affected_articles:[{article_id:'A1',url:'https://example.test/1'},{article_id:'A2',url:'https://example.test/2'}]},receipt={outcome:'PUBLISHED',published_article_ids:['A1','A2']},verified={H1:true,H2:true},checks=0,writes=0;
const context={
 sbmDoctorWorkflowReadMeta_:()=>meta,
 sbmDoctorWorkflowReadPayload_:(id,kind)=>({STRATEGY_WORK_RESULT:JSON.stringify(work),STRATEGY_WORK_RECEIPT:JSON.stringify(receipt),STRATEGY_REGISTRATION_CHECKPOINT:JSON.stringify(checkpoint)})[kind],
 sbmNormalizeUrl_:x=>String(x||'').replace(/\/$/,''),
 sbmStrategyVerifyRegisteredArticle_:(id,url,hid)=>{checks++;return verified[hid]?{ok:true}:{ok:false,message:'履歴不整合'}},
 sbmDoctorWorkflowWritePayload_:()=>{writes++;throw Error('read-only method wrote payload')}
};
vm.createContext(context);vm.runInContext(code,context);
const run=()=>context.sbmStrategyRegistrationProgress('CASE');
let r=run();assert(r.ok&&!r.readyToLink&&r.articles.every(a=>a.stage==='NOT_REGISTERED'));
checkpoint={A1:'H1'};r=run();assert(r.ok&&!r.readyToLink&&r.articles[0].stage==='VERIFIED'&&r.articles[1].stage==='NOT_REGISTERED');
checkpoint={A1:'H1',A2:'H2'};r=run();assert(r.ok&&r.readyToLink&&r.articles.every(a=>a.stage==='VERIFIED'));
verified.H2=false;r=run();assert(r.ok&&!r.readyToLink&&r.articles[1].stage==='REVIEW_REQUIRED');verified.H2=true;
meta={workflow_type:'OTHER'};r=run();assert(!r.ok);meta={workflow_type:'STRATEGY_CASE'};
receipt={outcome:'PENDING'};r=run();assert(!r.ok);receipt={outcome:'PUBLISHED',published_article_ids:['A1','A2']};
work={outcome:'READY_FOR_PUBLICATION',affected_articles:[]};r=run();assert(!r.ok);
work={outcome:'READY_FOR_PUBLICATION',affected_articles:[{article_id:'A1',url:'https://example.test/1'},{article_id:'A2',url:'https://example.test/2'}]};
receipt={outcome:'PUBLISHED',published_article_ids:['A1']};r=run();assert(!r.ok);
receipt={outcome:'PUBLISHED',published_article_ids:['A1','A1']};r=run();assert(!r.ok);
receipt={outcome:'PUBLISHED',published_article_ids:['A1','A2','A3']};r=run();assert(!r.ok);
receipt={outcome:'PUBLISHED',published_article_ids:['A1','A2']};work.affected_articles[1].article_id='A1';r=run();assert(!r.ok);
work.affected_articles[1].article_id='A2';work.affected_articles[1].url='';r=run();assert(!r.ok);
assert(writes===0&&checks>=5);
console.log('12 multi-article progress regression cases passed');
