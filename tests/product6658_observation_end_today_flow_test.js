const fs=require('fs');
const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');
function ok(v,m){if(!v)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.58';"),'version');
ok(s.includes('function sbmObservationEndedTodayCandidates_()'),'observation candidate builder');
ok(s.includes("candidateId:'OBS_END:'"),'observation candidate id');
ok(s.includes("return sbmStartEffectAfterObservationFromToday_(record);"),'today dispatch');
ok(s.includes("workflow_type:'EFFECT_AFTER_OBSERVATION'"),'new observation workflow');
ok(s.includes("explicit_new_cycle:true"),'explicit new cycle');
ok(s.includes("sbmFindArticleDbByIdentity_(articleIdFromSource,url)"),'ArticleID URL resolution');
const menu=s.slice(s.indexOf("ui.createMenu('改善の推移・履歴')"),s.indexOf("ui.createMenu('記事管理')"));
ok(!menu.includes('観察終了後の処置を進める'),'old effect menu entry removed');
ok(s.includes("if(resolvedLife==='REVIEW_REQUIRED')"),'review required transition');
console.log('PASS product6658_observation_end_today_flow_test');
