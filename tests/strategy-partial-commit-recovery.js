const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const begin=src.indexOf('function sbmStrategyRegisterPublishedFeedbackLocked_('),end=src.indexOf('\nfunction sbmStrategyHandoffStatus(',begin);
assert(begin>=0&&end>begin);const code=src.slice(begin,end);
let writes=0,registers=0,verified=true,baseline=['OLD'],found='NEW',receipt=true;
const context={
 sbmNormalizeImprovementFeedback_:x=>JSON.parse(x),sbmNormalizeUrl_:x=>String(x||'').replace(/\/$/,''),
 sbmDoctorWorkflowReadPayload_:(id,kind)=>({STRATEGY_REGISTRATION_CHECKPOINT:'{}',STRATEGY_WORK_RESULT:JSON.stringify({affected_articles:[{article_id:'A1',url:'https://example.test/a'}]}),STRATEGY_WORK_RECEIPT:JSON.stringify({outcome:'PUBLISHED',published_article_ids:receipt?['A1']:[]}),STRATEGY_MONITORING_PREFLIGHT:JSON.stringify({articles:[{articleId:'A1',url:'https://example.test/a',allHistoryIds:baseline}]})})[kind]||'',
 sbmDoctorWorkflowReadMeta_:()=>({workflow_type:'STRATEGY_CASE',status:'MONITORING_SETUP_PENDING',strategy_monitoring_status:'PREFLIGHT_ACKNOWLEDGED'}),
 sbmFindExistingImprovementFeedback_:()=>({found:true,historyId:found}),
 sbmStrategyVerifyRegisteredArticle_:()=>verified?{ok:true}:{ok:false,message:'old monitor still active'},
 sbmDoctorWorkflowWritePayload_:()=>{writes++},sbmStrategyPreviewFeedbackRegistration:()=>{throw Error('must not preview recovered commit')},
 sbmRegisterImprovementFeedback:()=>{registers++;throw Error('must not register')}
};vm.createContext(context);vm.runInContext(code,context);
const run=()=>context.sbmStrategyRegisterPublishedFeedbackLocked_('CASE',JSON.stringify({article_id:'A1',article_url:'https://example.test/a'}),'A1');
let r=run();assert(r.ok&&r.recovered&&writes===1&&registers===0);
found='OLD';r=run();assert(!r.ok&&writes===1);found='NEW';
verified=false;r=run();assert(!r.ok&&r.partial&&writes===1);verified=true;
receipt=false;r=run();assert(!r.ok&&writes===1);receipt=true;
console.log('4 partial-commit recovery tests passed');
