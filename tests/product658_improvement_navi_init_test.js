const fs=require('fs');
const paths=['Code.gs','apps-script/Code.gs','apps-script/full/Code.gs','apps-script/starter/Code.gs','distribution/Code.gs','editions/full/Code.gs','editions/starter/Code.gs','src/apps-script/Code.gs','src/distribution/Code.gs'];
for(const p of paths){
 const s=fs.readFileSync(p,'utf8');
 const current=fs.readFileSync('VERSION','utf8').trim();
 if(!s.includes("const SBM_VERSION = '"+current+"';")) throw new Error(p+': version');
 if(!s.includes('var detailLoadStarted=false;')) throw new Error(p+': guard missing');
 if(!s.includes('document.readyState==="loading"')) throw new Error(p+': readyState missing');
 if(!s.includes('setTimeout(startImprovementDetailLoad,0)')) throw new Error(p+': fallback missing');
 if(s.includes('document.addEventListener("DOMContentLoaded",loadDetail);</script>')) throw new Error(p+': old fragile init remains');
}
console.log('PASS: improvement navi init guard');
