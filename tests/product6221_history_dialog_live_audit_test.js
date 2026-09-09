const fs=require('fs');
const s=fs.readFileSync('Code.gs','utf8');
const checks=[
  ['version 6.2.21', /const SBM_VERSION = '6\.2\.21';/],
  ['no duplicate in-body dialog title', /function sbmHistoryDialogArticleHeaderHtml_[\s\S]*?var html='<div class="sbm-head"><div class="sbm-title">'/],
  ['legacy missing title detection', /function sbmHistoryTitleLooksMissing_/],
  ['Article DB title recovery', /function sbmHistoryResolvedTitle_[\s\S]*?sbmFindArticleDbByIdentity_/],
  ['pending week excluded from measured', /judge !== '測定待ち'/],
  ['pending week UI', /状態：<\/span>測定待ち[\s\S]*?測定予定：/],
  ['date-only standard', /Utilities\.formatDate\(d, SBM_DEFAULTS\.TIMEZONE, 'yyyy\/M\/d'\)/],
  ['midnight suppression', /hm==='00:00'\?'yyyy\/M\/d':'yyyy\/M\/d HH:mm'/],
  ['effect due date standardized', /次回予定：<\/span>'\+e\(sbmHistoryDateOnlyText_\(o\['次回測定予定日'\]\)\)/],
  ['history due date standardized', /sbmHistoryDateOnlyText_\(effect\['次回測定予定日'\]\)/]
];
let ok=true;
for(const [name,re] of checks){const pass=re.test(s);console.log((pass?'PASS':'FAIL')+' '+name); if(!pass) ok=false;}
if(!ok) process.exit(1);
