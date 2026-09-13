const fs=require('fs');
const path=require('path');
const files=[
  'Code.gs','apps-script/Code.gs','distribution/Code.gs',
  'apps-script/full/Code.gs','editions/full/Code.gs',
  'apps-script/starter/Code.gs','editions/starter/Code.gs'
];
function assert(cond,msg){if(!cond)throw new Error(msg)}
const current=fs.readFileSync(path.join(__dirname,'..','VERSION'),'utf8').trim();
for(const f of files){
  const s=fs.readFileSync(path.join(__dirname,'..',f),'utf8');
  assert(s.includes("const SBM_VERSION = '"+current+"';"),`${f}: version`);
  assert(s.includes('function sbmRemoveDuplicateDialogHeading_(output,title)'),`${f}: helper missing`);
  assert(s.includes('var cleaned=sbmRemoveDuplicateDialogHeading_(output,title);'),`${f}: wrapper not guarded`);
  assert(s.includes("if(headingText===dialogTitle)"),`${f}: exact-match guard missing`);
}
console.log('PASS product654_dialog_title_dedup_test');
