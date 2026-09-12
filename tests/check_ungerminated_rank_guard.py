from pathlib import Path
import sys,re
code=(Path(__file__).resolve().parents[1]/"Code.gs").read_text(encoding="utf-8")
checks={
 "canonical_helper":"function sbmExpectedArticleRank_" in code,
 "enough_data":"var hasEnoughRankData=(imps>=200||clicks>=10);" in code,
 "no_query_force":"patch.updates['記事ランク']='未発芽'" not in code[code.find("function sbmArticleInfoUpdateOne_"):code.find("function sbmSupplementNewArticlesManual")],
 "restore_only":"if(currentRank==='未発芽')" in code and "expectedRank!=='未発芽'" in code,
 "manual_recheck":"function sbmRecheckUngerminatedRanks()" in code,
 "menu_removed":"addItem('未発芽判定を再確認','sbmRecheckUngerminatedRanks')" not in code,
 "health_evidence":"var strongPageEvidence=(m.full.c>=10 || m.full.i>=200);" in code,
 "health_gate":"var accessUngerminated=!strongPageEvidence" in code,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print("FAIL:",", ".join(bad));sys.exit(1)
print("PASS: ungerminated rank guard")
