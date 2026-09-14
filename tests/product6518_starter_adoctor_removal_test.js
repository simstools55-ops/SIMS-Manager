const fs = require('fs');
const code = fs.readFileSync('apps-script/starter/Code.gs', 'utf8');

function ok(value, message) {
  if (!value) throw new Error(message);
}

ok(code.includes("const SBM_VERSION = '6.5.18';"), 'Starter version must be 6.5.18');
ok(code.includes("const SBM_EDITION = 'STARTER';"), 'Starter edition marker is missing');
ok(code.includes("function sbmIsADoctorEnabled_(){return String(SBM_EDITION||'').toUpperCase()==='FULL';}"), 'aDoctor edition gate is missing');
ok(code.includes("if(isFullEdition){\n    healthMenu.addSeparator()"), 'aDoctor health menu must be Full-only');
ok(code.includes("if(!sbmIsADoctorEnabled_())return sbmAlert_('Starter Edition','Starter EditionではaDoctor精密診断を利用できません。改善ナビをご利用ください。');"), 'direct aDoctor request guard is missing');
ok(code.includes("if(!sbmIsADoctorEnabled_()&&(action==='ADDITIONAL_DIAGNOSIS'||action==='DOCTOR'))action='NAVI';"), 'article detail fallback to Starter navi is missing');
ok(code.includes("Starter EditionではaDoctor再診を行わず、改善ナビで現在のデータに基づく改善ポイントを確認します。"), 'post-observation Starter guidance is missing');
ok(code.includes(".addItem(isFullEdition?'3．観察終了後の処置を進める':'3．観察終了後の結果を確認','sbmProcessSelectedEffectAfterObservation')"), 'Edition-specific observation menu label is missing');
ok(code.includes("if(!sbmIsADoctorEnabled_()){\n      if(normal)return sbmResumeNormalImprovementWorkflow_(normal);"), 'Starter unfinished-work dispatcher must exclude aDoctor cases');
ok(code.includes("if(!sbmIsADoctorEnabled_())throw new Error('Starter EditionではaDoctor関連の未完了作業を再開できません。改善ナビをご利用ください。');"), 'Direct aDoctor resume guard is missing');

console.log('PASS product6518_starter_adoctor_removal_test');
