const fs=require('fs'),path=require('path');
const files=['Code.gs','apps-script/Code.gs','distribution/Code.gs','apps-script/full/Code.gs','editions/full/Code.gs','apps-script/starter/Code.gs','editions/starter/Code.gs'];
function ok(c,m){if(!c)throw new Error(m)}
for(const f of files){const s=fs.readFileSync(path.join(__dirname,'..',f),'utf8');
 ok(s.includes("const SBM_VERSION = '6.5.5';"),f+' version');
 ok(s.includes('自分で修正する場合の改善ガイド'),f+' guide title');
 ok(s.includes('なぜ：')&&s.includes('どこを：')&&s.includes('どうする：')&&s.includes('完了の目安：'),f+' guide structure');
 ok(s.includes('toggleImprovementGuide()'),f+' full toggle');
 ok(s.includes("isFullEdition?'display:none;margin-top:10px':'margin-top:10px'"),f+' edition visibility');
 ok(s.includes('aWriter Contract v4.2準拠'),f+' writer contract retained');
}
console.log('PASS product655_improvement_guide_test');
