const fs=require('fs');
const code=fs.readFileSync('Code.gs','utf8');
function must(s){if(!code.includes(s)){throw new Error('missing: '+s)}}
must("const SBM_VERSION = '6.6.52';");
must('未完了一覧はCase単位ではなく、記事ごとの現在Workflow単位で表示する');
must("'WRITER_IN_PROGRESS':50");
must('items=items.filter(function(x){return !hidden[x.caseId];});');
must('collapsedDuplicateCount');
// Algorithm regression: seven stale Writer cases for one article collapse to one.
const states={DOCTOR_DIAGNOSIS_PENDING:10,FOLLOW_UP_REQUEST_READY:20,USER_ACTION_REQUIRED:30,USER_DECISION_REQUIRED:30,WRITER_REQUEST_READY:40,WRITER_IN_PROGRESS:50};
function collapse(items){const keep={},hidden={};items.forEach(x=>{if(!states[x.state])return;const k=x.articleId||x.articleUrl;if(!k)return;const p=keep[k];if(!p){keep[k]=x;return;}const xr=states[x.state]+(x.virtualFollowUp?100:0),pr=states[p.state]+(p.virtualFollowUp?100:0);const choose=xr>pr||(xr===pr&&x.updatedTs>p.updatedTs);const loser=choose?p:x;if(choose)keep[k]=x;hidden[loser.caseId]=1;});return items.filter(x=>!hidden[x.caseId]);}
let seven=Array.from({length:7},(_,i)=>({caseId:'c'+i,articleId:'A000042',state:'WRITER_IN_PROGRESS',updatedTs:i}));
if(collapse(seven).length!==1)throw new Error('A000042 seven cases did not collapse to one');
let mixed=[{caseId:'d',articleId:'A',state:'DOCTOR_DIAGNOSIS_PENDING',updatedTs:9},{caseId:'w',articleId:'A',state:'WRITER_IN_PROGRESS',updatedTs:1}];
if(collapse(mixed)[0].caseId!=='w')throw new Error('workflow progress did not beat timestamp');
let merge=[{caseId:'w',articleId:'A',state:'WRITER_IN_PROGRESS',updatedTs:1},{caseId:'m',articleId:'A',state:'MERGE_IN_PROGRESS',updatedTs:2}];
if(collapse(merge).length!==2)throw new Error('Merge must remain separate');
console.log('product6652 unfinished workflow collapse test passed');
