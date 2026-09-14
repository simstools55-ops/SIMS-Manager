const fs=require('fs');
const version=fs.readFileSync('VERSION','utf8').trim();
const files=['Code.gs','apps-script/Code.gs','apps-script/full/Code.gs','distribution/Code.gs','editions/full/Code.gs','src/apps-script/Code.gs','src/distribution/Code.gs','apps-script/starter/Code.gs','editions/starter/Code.gs'];
let ok=true;
function check(name,cond){console.log((cond?'PASS ':'FAIL ')+name);if(!cond)ok=false;}
for(const f of files){const s=fs.readFileSync(f,'utf8');check(f+' version',s.includes("const SBM_VERSION = '"+version+"';"));check(f+' no guide slice3',!s.includes('finalAdvice=(r.improvementAdvice||[]).slice(0,3)'));check(f+' renderer',s.includes('function renderImprovementAdvice(arr,limited)'));check(f+' bold labels',s.includes('<strong>"+eh(m[1])+"：</strong><br>'));check(f+' internal link toggle',s.includes('toggleInternalLinksBtn')&&s.includes('function toggleInternalLinks()'));check(f+' full internal link collapsed expression',s.includes("isFullEdition?'display:none;margin-top:10px':'margin-top:10px'"));}
const root=fs.readFileSync('Code.gs','utf8');
check('guide builder returns necessary themes without fixed slice',root.includes('return out;')&&!root.includes('out.slice(0,1)'));
check('starter stores all guide items',root.includes('starterAdvice=parsedAdvice.map('));
check('writer prompt function still present',root.includes('function sbmBuildImprovementPrompt_(meta, articleData)'));
if(!ok)process.exit(1);
