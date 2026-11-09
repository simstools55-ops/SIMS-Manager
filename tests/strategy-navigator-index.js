const fs=require('fs'),assert=require('assert'),vm=require('vm');
const src=fs.readFileSync(__dirname+'/../apps-script/Code.gs','utf8');
const body=src.slice(src.indexOf('function sbmStrategyListCases('),src.indexOf('\nfunction sbmStrategyDecide('));
function run(rows,id){
 let findArg='',entire=false,regex=false,bulkRead=false;
 const matches=rows.map((r,i)=>({...r,row:i+2}));
 const sh={getLastRow:()=>rows.length+1,getRange:(row,col,n,span)=>({
  createTextFinder:(q)=>{findArg=q;return {matchEntireCell(x){entire=x;return this},useRegularExpression(x){regex=x;return this},findAll(){return matches.filter(r=>entire?r.id===q:(regex&&new RegExp(q).test(r.id))).map(r=>({getRow:()=>r.row,getValue:()=>r.id}))}}},
  getValue:()=>col===2?rows[row-2].kind:rows[row-2].payload,
  getValues:()=>{bulkRead=true;throw Error('full scan prohibited')}
 })};
 const context={SpreadsheetApp:{getActiveSpreadsheet:()=>({getSheetByName:()=>sh})},SBM_SHEETS:{DOCTOR_WORKFLOW_STATE:'x'},sbmHeaderMap_:()=>({CaseID:1,'種別':2,Payload:3}),console,Date};
 vm.runInNewContext(body,context);
 const result=context.sbmStrategyListCases(id);
 assert.strictEqual(bulkRead,false);return {result,findArg,entire,regex};
}
const rows=[{id:'NORMAL-1',kind:'META',payload:'{}'},{id:'STRATEGY-abc',kind:'META',payload:JSON.stringify({workflow_type:'STRATEGY_CASE',status:'REVIEW_READY',primary_article_id:'A000167',related_article_id:'A000022',doctor_decision:'MERGE_REVIEW'})},{id:'STRATEGY-abc',kind:'DOCTOR_RESPONSE',payload:'x'.repeat(50000)}];
let a=run(rows,'');assert(a.result.ok);assert.strictEqual(a.result.cases.length,1);assert(a.regex);
let b=run(rows,'STRATEGY-abc');assert(b.result.ok);assert.strictEqual(b.result.cases[0].doctorDecision,'MERGE_REVIEW');assert(b.entire);
let d=run([{id:'STRATEGY-abc',kind:'STRATEGY_DOCTOR_RESPONSE',payload:'large response'},{id:'STRATEGY-abc',kind:'META',payload:JSON.stringify({workflow_type:'STRATEGY_CASE',status:'REVIEW_READY',primary_article_id:'A000167',doctor_decision:'MERGE_REVIEW'})}],'');assert(d.result.ok);assert.strictEqual(d.result.cases.length,1);
let c=run(rows,'STRATEGY-missing');assert(c.result.ok);assert.strictEqual(c.result.cases.length,0);
console.log('strategy-navigator-index: 7 checks passed');
