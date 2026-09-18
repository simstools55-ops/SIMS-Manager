const fs=require("fs");
const s=fs.readFileSync("Code.gs","utf8");
function ok(c,m){if(!c)throw new Error(m);}
ok(s.includes("const SBM_VERSION = '6.6.42';"),"version");
ok(s.includes("function sbmCheckpointImprovementNaviClose(seed,state)"),"close checkpoint");
ok(s.includes("closeImprovementNavi()"),"close bridge");
ok(s.includes("CLOSED_UNFINISHED"),"unfinished marker");
ok(s.includes("workflow_type:'NORMAL_IMPROVEMENT',current_stage:'NAVI_OPEN'"),"open checkpoint");
ok(s.includes("sbmResumeNormalImprovementWorkflow_({id:workflowId"),"identity resume");
console.log("v6.6.42 improvement navi checkpoint static test: OK");
