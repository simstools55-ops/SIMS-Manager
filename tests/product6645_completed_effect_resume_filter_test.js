const fs=require('fs');const s=fs.readFileSync(__dirname+'/../Code.gs','utf8');function ok(c,m){if(!c)throw new Error(m)}
ok(s.includes("const SBM_VERSION = '6.6.45';"),'version');
ok(s.includes('function sbmNormalImprovementRegisteredEffectIndex_()'),'effect index helper');
ok(s.includes("r['改善・治療開始日']"),'requires registered effect cycle');
ok(s.includes('function sbmNormalImprovementAlreadyRegistered_(meta,effectIndex)'),'registered matcher');
ok(s.includes('if(sbmNormalImprovementAlreadyRegistered_(e.meta,effectIndex))return;'),'resume list filters registered workflow');
ok(s.includes("String(r['ArticleID']||'').trim()"),'ArticleID matching');
ok(s.includes("sbmNormalizeUrl_(String(r['記事URL']||''))"),'URL matching');
console.log('v6.6.45 completed effect resume filter static test: OK');
