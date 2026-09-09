const fs=require('fs');
const s=fs.readFileSync(process.argv[2]||'Code.gs','utf8');
function ok(cond,msg){if(!cond){console.error('FAIL:',msg);process.exit(1)}}
ok(s.includes("function sbmResumeUnfinishedWorkflowCore(){"),'public bridge missing');
ok(s.includes("return sbmResumeUnfinishedWorkflowCore_();"),'bridge delegation missing');
ok(s.includes(".sbmResumeUnfinishedWorkflowCore();</script>"),'client is not calling public bridge');
ok(!s.includes(".sbmResumeUnfinishedWorkflowCore_();</script>"),'client still calls private underscore function');
ok(s.includes("showModelessDialog(HtmlService.createHtmlOutput(html)"),'loader is not modeless');
console.log('PASS product6211_resume_loader_bridge_test');
