from pathlib import Path
s=Path('Code.gs').read_text()
checks={
 'version': "const SBM_VERSION = '6.4.9';" in s,
 'exclude_ungerminated': "rankCode === 'UNGERMINATED'" in s,
 'exclude_sprout': "rankCode === 'SPROUT'" in s,
 'growth_first': "return growth.concat(ace,nurture,stable).slice(0,10);" in s,
 'stable_gate': "rankCode === 'STABLE' && !(imps >= 1000 && gap >= 0.008 && expected >= 10)" in s,
 'growth_comment': '今回の方針：エース化を狙い' in s,
 'ace_comment': 'エース評価を最優先で保護し' in s,
 'opportunity_wording': 'クリック分の改善余地があります' in s,
 'no_old_forced_fallback': '厳格条件で2件未満の場合も' not in s,
}
failed=[k for k,v in checks.items() if not v]
if failed: raise SystemExit('FAIL: '+', '.join(failed))
print('PASS: v6.4.9 revenue-first Today Improvement priority and comments')
