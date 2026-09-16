from pathlib import Path
import re, sys

ROOT=Path(__file__).resolve().parents[1]
CODE=(ROOT/"Code.gs").read_text(encoding="utf-8")

TARGETS=[
    "sbmDoctorShowResumeCaseChooser_",
    "sbmResumeUnfinishedWorkflow",
    "sbmDoctorShowSingleCaseResumeDialog_",
    "sbmDoctorBuildCopyDialogHtml_",
]

errors=[]
for idx,name in enumerate(TARGETS):
    start=CODE.find("function "+name)
    if start<0:
        errors.append(f"missing function: {name}")
        continue
    # Find next top-level function. This is sufficient for the generated-dialog builders checked here.
    m=re.search(r"\nfunction\s+[A-Za-z0-9_]+\s*\(",CODE[start+50:])
    end=start+50+m.start() if m else len(CODE)
    frag=CODE[start:end]

    if "<script" not in frag:
        errors.append(f"{name}: generated <script> not found")
        continue

    # A single \n in the Apps Script source becomes an actual newline after server-side
    # string evaluation. If it sits inside a browser-side JS quoted string, it breaks
    # that generated script. Dialog builders must therefore use \\n at this layer.
    for hit in re.finditer(r"(?<!\\)\\n",frag):
        context=frag[max(0,hit.start()-80):hit.start()+120].replace("\n"," ")
        errors.append(f"{name}: unsafe single \\\\n escape near: {context}")

    # Same policy for CR/TAB escapes in generated client JS strings.
    for esc in ("r","t"):
        for hit in re.finditer(r"(?<!\\)\\"+esc,frag):
            context=frag[max(0,hit.start()-80):hit.start()+120].replace("\n"," ")
            errors.append(f"{name}: unsafe single \\\\{esc} escape near: {context}")

if errors:
    print("FAIL: generated dialog script escaping")
    for e in errors:
        print("-",e)
    sys.exit(1)

print("PASS: generated dialog script escaping")
