const fs=require('fs');
const path=require('path');
const code=fs.readFileSync(path.join(__dirname,'..','Code.gs'),'utf8');
const checks=[
 ['current version',code.includes("const SBM_VERSION = '6.2.24';")],
 ['audit bridge',code.includes('function sbmArticleInfoUpdateAuditBridge()')],
 ['fresh audit bridge',code.includes('function sbmArticleInfoUpdateAuditFreshBridge()')],
 ['worker bridge',code.includes('function sbmArticleInfoUpdateWorkerBridge()')],
 ['client audit bridge',code.includes('.sbmArticleInfoUpdateAuditBridge();')],
 ['client worker bridge',code.includes('.sbmArticleInfoUpdateWorkerBridge();')],
 ['no direct private audit client call',!code.includes('.sbmArticleInfoUpdateAudit_();')],
 ['no direct private worker client call',!code.includes('.sbmArticleInfoUpdateWorker_();')],
 ['initial audit spinner',code.includes('記事DBの保存情報を点検しています…') && code.includes('loadAudit(false);')],
 ['update button spinner',code.includes('更新中…') && code.includes('記事ページ確認を続けています…')],
 ['single close marker',code.includes('data-sbm-common-close="1"')],
 ['zero count rendering',code.includes('String(Number(v||0))+"件"')]
];let fail=0;for(const [n,ok] of checks){console.log((ok?'PASS':'FAIL')+' '+n);if(!ok)fail++;}if(fail)process.exit(1);
