const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
function extract(name){let start=src.indexOf('function '+name+'(');assert(start>=0,name);let brace=src.indexOf('{',start),depth=0,quote=null,esc=false;for(let i=brace;i<src.length;i++){let c=src[i];if(quote){if(esc)esc=false;else if(c==='\\')esc=true;else if(c===quote)quote=null;continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;else if(c==='}'&&!--depth)return src.slice(start,i+1);}throw Error('unclosed '+name)}
const name='sbmStrategyRegisterPublishedFeedbackLocked_';
let calls={preview:0,register:0,verify:0,writes:0}, checkpoint={}, valid=true, existing=false, history='H1';
const ctx={
 sbmNormalizeImprovementFeedback_:x=>JSON.parse(x),sbmNormalizeUrl_:x=>String(x).replace(/\/$/,''),
 sbmDoctorWorkflowReadPayload_:(id,type)=>type==='STRATEGY_REGISTRATION_CHECKPOINT'?JSON.stringify(checkpoint):type==='STRATEGY_WORK_RESULT'?JSON.stringify({affected_articles:[{article_id:'A1',url:'https://a.test/post'}]}):'',
 sbmDoctorWorkflowReadMeta_:()=>({workflow_type:'STRATEGY_CASE'}),
 sbmFindExistingImprovementFeedback_:()=>({found:false,historyId:''}),
 sbmStrategyPreviewFeedbackRegistration:()=>{calls.preview++;return {ok:true,articleId:'A1',articleUrl:'https://a.test/post'}},
 sbmStrategyVerifyRegisteredArticle_:()=>{calls.verify++;return valid?{ok:true}:{ok:false,message:'monitor mismatch'}},
 sbmRegisterImprovementFeedback:()=>{calls.register++;return {ok:true,historyId:history,alreadyRegistered:existing}},
 sbmDoctorWorkflowWritePayload_:(id,type,data)=>{calls.writes++;checkpoint=JSON.parse(data)}
};vm.createContext(ctx);vm.runInContext(extract(name),ctx);
const run=(id='A1',url='https://a.test/post')=>ctx[name]('CASE',JSON.stringify({article_id:id,article_url:url}),id);
let r=run();assert(r.ok&&checkpoint.A1==='H1'&&calls.register===1);
r=run();assert(r.ok&&r.alreadyRegistered&&calls.register===1&&calls.preview===1);
valid=false;r=run();assert(!r.ok&&r.partial&&calls.register===1);
valid=true;r=run('A2');assert(!r.ok&&calls.register===1);
r=run('A1','https://a.test/other');assert(!r.ok&&calls.register===1);
checkpoint={};ctx.sbmStrategyPreviewFeedbackRegistration=()=>({ok:false,message:'blocked'});r=run();assert(!r.ok&&calls.register===1);
console.log('6 strategic registration regression cases passed');
