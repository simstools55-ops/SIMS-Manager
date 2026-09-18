const fs=require('fs');const s=fs.readFileSync('Code.gs','utf8');
function ok(c,m){if(!c)throw new Error(m)}
ok(/SBM_VERSION\s*=\s*['"]6\.6\.44['"]/.test(s),'version');
ok(s.includes('function sbmNormalImprovementSameArticle_'),'same article helper');
ok(s.includes("current_stage:'SUPERSEDED_DUPLICATE'"),'start duplicate cleanup');
ok(s.includes('seen.some(function(m){return sbmNormalImprovementSameArticle_'),'resume list dedupe');
ok(s.includes('Object.keys(index.meta||{}).forEach(function(id)'),'complete scans all workflows');
ok(s.includes("current_stage:'COMPLETED',registration_status:'COMPLETED',active:false"),'complete all matching');
console.log('v6.6.44 normal workflow dedupe static test: OK');
