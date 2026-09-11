from pathlib import Path
import re, json, hashlib, sys

ROOT = Path(__file__).resolve().parents[1]
EXPECTED = (ROOT/"VERSION").read_text(encoding="utf-8").strip()
SHARED = (ROOT/"SHARED_VERSION").read_text(encoding="utf-8").strip()
errors=[]

def text(p):
    return (ROOT/p).read_text(encoding="utf-8")

# Product identity
pid=json.loads(text("PRODUCT_IDENTITY.json"))
for k in ("current_version","version"):
    if str(pid.get(k,"")) != EXPECTED:
        errors.append(f"PRODUCT_IDENTITY.json {k}={pid.get(k)!r} expected {EXPECTED}")
if str(pid.get("starter_display_version","")).replace("v","") != EXPECTED+"-ST":
    errors.append("PRODUCT_IDENTITY.json starter_display_version mismatch")

# Code versions / edition model
full_paths=["Code.gs","apps-script/Code.gs","distribution/Code.gs","src/apps-script/Code.gs","src/distribution/Code.gs","apps-script/full/Code.gs","editions/full/Code.gs"]
starter_paths=["apps-script/starter/Code.gs","editions/starter/Code.gs"]
def sha(p): return hashlib.sha256((ROOT/p).read_bytes()).hexdigest()
if len({sha(p) for p in full_paths}) != 1:
    errors.append("Full Code.gs copies are not identical")
if len({sha(p) for p in starter_paths}) != 1:
    errors.append("Starter Code.gs copies are not identical")
full=text(full_paths[0]); starter=text(starter_paths[0])
m=re.search(r"const SBM_VERSION = '([^']+)'",full)
if not m or m.group(1)!=EXPECTED:
    errors.append(f"SBM_VERSION mismatch: {m.group(1) if m else 'missing'} expected {EXPECTED}")
if "const SBM_EDITION = 'FULL';" not in full:
    errors.append("Full edition marker missing")
if "const SBM_EDITION = 'STARTER';" not in starter:
    errors.append("Starter edition marker missing")
if starter.replace("const SBM_EDITION = 'STARTER';","const SBM_EDITION = 'FULL';",1) != full:
    errors.append("Full/Starter differ by more than SBM_EDITION")

# Current documentation (history entries may contain older versions)
readme=text("README.md")
required=[
    f"Current product:** SIMS Manager v{EXPECTED}",
    f"Product Version: `{EXPECTED}`",
    f"Current release: SIMS Manager Product v{EXPECTED}",
    f"Shared Editorial Knowledge:** v{SHARED}",
    f"Shared Version: `{SHARED}`",
]
for s in required:
    if s not in readme: errors.append(f"README current field missing: {s}")

dist=text("distribution/README-FIRST.md")
for s in (f"SIMS Manager v{EXPECTED} Repository Baseline",f"Full v{EXPECTED} / Starter v{EXPECTED}-ST"):
    if s not in dist: errors.append(f"distribution README mismatch: {s}")

# Shared identity independently versioned
sid=json.loads(text("shared/PRODUCT_IDENTITY.json"))
for k in ("current_version","version"):
    if str(sid.get(k,"")) != SHARED:
        errors.append(f"shared/PRODUCT_IDENTITY.json {k} mismatch: {sid.get(k)!r} expected {SHARED}")
if text("shared/VERSION").strip()!=SHARED:
    errors.append("shared/VERSION mismatch")

if errors:
    print("FAIL")
    for e in errors: print("-",e)
    sys.exit(1)
print(f"PASS: SIMS Manager {EXPECTED} / Shared {SHARED}")
