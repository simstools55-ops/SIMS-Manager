// Read-only registration dry-run regression against canonical Code.gs.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(__dirname+'/Code.gs','utf8');
const start=source.indexOf('function sbmS3RegistrationDryRunJson(');
if(start<0)throw Error('registration dry-run missing');
const code=source.slice(start,source.indexOf('\n}',start)+2);
function sheet(headers,rows){return {getLastRow:()=>rows.length+1,getLastColumn:()=>headers.length,getRange:()=>({getDisplayValues:()=>[headers,...rows]})};}
function run({items=[{proposal_id:'S3-A000001-abcdef12',article_id:'A000001',next_action:'DOCTOR_CANDIDATE',evidence_complete:true}],sheets={},reviewOverrides={}}={}){
 const ctx={sbmS3RequireUat_:()=>{},sbmS3LiveDecisionPreviewJson:()=>({read_only:true,execution_allowed:false,status:'HOLD',site_id:'site-a',items,...reviewOverrides}),SpreadsheetApp:{getActiveSpreadsheet:()=>({getSheetByName:n=>sheets[n]||null})}};
 vm.runInNewContext(code,ctx);
 return ctx.sbmS3RegistrationDryRunJson('{}');
}
const id='S3-A000001-abcdef12';
const base={Doctor_Cases:sheet(['proposal_id'],[]),Strategy_Cases:sheet(['proposal_id'],[])};
let n=0;function check(label,fn){fn();n++;console.log('PASS',label);}
check('read only / no registration',()=>{const r=run({sheets:base});assert.equal(r.read_only,true);assert.equal(r.write_performed,false);assert.equal(r.summary.registered,0);});
check('missing Doctor_Cases fails closed',()=>assert.equal(run({sheets:{Strategy_Cases:base.Strategy_Cases}}).existing_case_evidence_complete,false));
check('missing Strategy_Cases fails closed',()=>assert.equal(run({sheets:{Doctor_Cases:base.Doctor_Cases}}).existing_case_evidence_complete,false));
check('missing proposal ID column fails closed',()=>assert.equal(run({sheets:{...base,Doctor_Cases:sheet(['ArticleID'],[])}}).existing_case_evidence_complete,false));
check('duplicate in Doctor_Cases',()=>assert.equal(run({sheets:{...base,Doctor_Cases:sheet(['proposal_id'],[[id]])}}).items[0].duplicate_found,true));
check('duplicate in Strategy_Cases',()=>assert.equal(run({sheets:{...base,Strategy_Cases:sheet(['proposal_id'],[[id]])}}).items[0].duplicate_found,true));
check('duplicate in input',()=>assert(run({items:[{proposal_id:id,article_id:'A000001',evidence_complete:true},{proposal_id:id,article_id:'A000002',evidence_complete:true}],sheets:base}).items[1].reasons.some(x=>x.includes('入力内'))));
check('invalid proposal ID',()=>assert(run({items:[{proposal_id:'bad',article_id:'A000001',evidence_complete:true}],sheets:base}).items[0].reasons.some(x=>x.includes('提案ID'))));
check('missing evidence',()=>assert(run({items:[{proposal_id:id,article_id:'A000001',evidence_complete:false}],sheets:base}).items[0].reasons.some(x=>x.includes('証拠'))));
check('existing Doctor case review',()=>assert(run({items:[{proposal_id:id,article_id:'A000001',evidence_complete:true,next_action:'EXISTING_CASE_REVIEW'}],sheets:base}).items[0].reasons.some(x=>x.includes('Doctor'))));
check('unsafe preview rejected',()=>assert.throws(()=>run({sheets:base,reviewOverrides:{execution_allowed:true}})));
check('invalid sheet range fails closed',()=>assert.equal(run({sheets:{...base,Doctor_Cases:{getLastRow:()=>20001,getLastColumn:()=>1}}}).existing_case_evidence_complete,false));
console.log(`RESULT ${n}/${n} PASS (local mocked spreadsheet; no GAS execution)`);
