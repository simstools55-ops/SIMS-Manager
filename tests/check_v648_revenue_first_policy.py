from pathlib import Path
import sys

ROOT=Path(__file__).resolve().parents[1]
p=ROOT/"REVENUE_FIRST_IMPROVEMENT_POLICY.md"
if not p.exists():
    print("FAIL: revenue-first policy missing"); sys.exit(1)
t=p.read_text(encoding="utf-8")
need=[
    "収益ポテンシャル",
    "成長 | エース化",
    "エース | 収益効率最大化",
    "7日目",
    "14日目",
    "21日目",
    "28日目",
    "KEEP",
    "IMPROVE",
    "RESTORE",
    "原状復帰は自動実行しない",
    "SIMS ManagerはHatena/WordPress本文を直接自動更新しない",
]
missing=[x for x in need if x not in t]
if missing:
    print("FAIL:",missing); sys.exit(1)
print("PASS: v6.4.8 revenue-first safe improvement policy")
