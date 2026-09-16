from pathlib import Path
import sys
code=(Path(__file__).resolve().parents[1]/"Code.gs").read_text(encoding="utf-8")
s=code.find("function sbmDoctorRunHealthCheck()")
e=code.find("\nfunction ",s+50)
f=code[s:e]
checks={
 "function":s>=0,
 "no_start_alert":"ui.alert('サイト健康診断を開始します'" not in f,
 "runner":"sbmDoctorShowHealthCheckRunnerDialog_();" in f,
 "daily_guard":"dailyState && dailyState.running" in f,
 "setup_guard":"!sbmIsSetupComplete_()" in f,
}
bad=[k for k,v in checks.items() if not v]
if bad:print("FAIL:",", ".join(bad));sys.exit(1)
print("PASS: Site Health starts without redundant confirmation")
