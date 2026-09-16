from pathlib import Path
import sys

code=(Path(__file__).resolve().parents[1]/"Code.gs").read_text(encoding="utf-8")
checks={
    "source_is_required": "ready=sReady" in code,
    "limited_mode": "limitedMode=sReady&&!qReady" in code,
    "prompt_generated": "prompt:ready?sbmBuildImprovementPrompt_" in code,
    "query_mode_meta": "queryEvidenceMode:limitedMode?'LIMITED':'FULL'" in code,
    "no_query_fallback": "Search Consoleの実クエリを取得できていないため" in code,
    "limited_safety": "【重要：クエリ未取得の限定モード】" in code,
    "button_status": "限定モードのaWriter依頼文を準備しました。" in code,
}
failed=[k for k,v in checks.items() if not v]
if failed:
    print("FAIL:", ", ".join(failed))
    sys.exit(1)
print("PASS: Improvement Navi LIMITED mode")
