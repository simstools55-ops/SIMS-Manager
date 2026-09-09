const fs = require('fs');
const path = require('path');
const code = fs.readFileSync(path.join(__dirname,'..','Code.gs'),'utf8');
const checks = [
  ["version", code.includes("const SBM_VERSION = '6.2.23';")],
  ["audit bridge", code.includes('function sbmArticleInfoUpdateAuditBridge()')],
  ["worker bridge", code.includes('function sbmArticleInfoUpdateWorkerBridge()')],
  ["client audit bridge", code.includes('.sbmArticleInfoUpdateAuditBridge();')],
  ["client worker bridge", code.includes('.sbmArticleInfoUpdateWorkerBridge();')],
  ["no direct private audit client call", !code.includes('.sbmArticleInfoUpdateAudit_();')],
  ["no direct private worker client call", !code.includes('.sbmArticleInfoUpdateWorker_();')],
  ["initial audit spinner", code.includes('記事情報の更新状況を点検しています…') && code.includes('loadAudit();')],
  ["update button spinner", code.includes('更新中…') && code.includes('数十秒〜数分かかることがあります')],
  ["single close marker", code.includes('data-sbm-common-close="1"')],
  ["zero count rendering", code.includes('String(v)+"件"')],
];
let fail=0;
for (const [name,ok] of checks) { console.log((ok?'PASS':'FAIL')+' '+name); if(!ok) fail++; }
if (fail) process.exit(1);
