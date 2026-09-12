from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
checks={
'zero_advice':"sbmShowTodayZeroAdviceDialog_();" in c and "sbmOpenNewArticleOpportunityDialog_(); } catch(eNewOpp)" not in c,
'health_guidance':"健康診断 → 精密診断" in c,
'claude_only':"Claude・Gemini" not in c and "Claude / Gemini" not in c,
'top10':"SERP上位10件" in c and "11位〜20位" in c,
'v2_schema':'SIMS_MANAGER_SERP_ENTRY_REVIEW_V2' in c,
'pink':"code:'PINK'" in c,
'green_creator':"var creatorEligible=grade.code==='GREEN';" in c,
}
bad=[k for k,v in checks.items() if not v]
if bad: print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.3.4 SERP entry workflow')
