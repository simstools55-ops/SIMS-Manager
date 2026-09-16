from pathlib import Path
import sys
s=(Path(__file__).resolve().parents[1]/"Code.gs").read_text(encoding="utf-8")
need=["💰 収益改善\\n（流入）","【収益改善モード：流入】","GA4等の行動・収益データが無い限り推測で変更しない","メインクエリが高順位・高CTRならSEOタイトル/H1は原則据え置き","recommended_review_days\": 28","7日目・14日目・21日目・28日目の4回測定"]
miss=[x for x in need if x not in s]
if miss:
 print("FAIL:",miss);sys.exit(1)
if "recommended_review_daysは7・14・30のいずれか" in s:
 print("FAIL: legacy review-day instruction remains");sys.exit(1)
print("PASS: v6.5.1 safe traffic revenue improvement scope")
