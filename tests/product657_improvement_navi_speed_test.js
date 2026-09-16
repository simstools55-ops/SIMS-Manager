const fs=require('fs');
const version=fs.readFileSync('VERSION','utf8').trim();
const files=['Code.gs','apps-script/Code.gs','distribution/Code.gs','src/apps-script/Code.gs','src/distribution/Code.gs','apps-script/full/Code.gs','editions/full/Code.gs','apps-script/starter/Code.gs','editions/starter/Code.gs'];
let ok=true;
for(const f of files){
 const s=fs.readFileSync(f,'utf8');
 const checks=[
  ["version",s.includes("const SBM_VERSION = '"+version+"';")],
  ["textfinder",/createTextFinder\(v\)\.matchEntireCell\(true\)\.findAll\(\)/.test(s)],
  ["parallel gsc",/sbmGscFetchAllChunked_\(req,80\)/.test(s)],
  ["snapshot",/articleSnapshot:snap/.test(s)],
  ["narrow article rows",/function sbmInternalLinkArticleRows_/.test(s)]
 ];
 for(const [n,v] of checks){if(!v){console.error('FAIL',f,n);ok=false;}}
}
if(!ok)process.exit(1); console.log('PASS product657 speed guards');
