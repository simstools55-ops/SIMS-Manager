from pathlib import Path
import re,json
r=Path(__file__).resolve().parents[1]
def read(p):return (r/p).read_text(encoding='utf-8')
v=read('VERSION').strip().removeprefix('v'); s=read('apps-script/Code.gs'); shared=read('SHARED_VERSION').strip()
assert list(r.rglob('Code.gs'))==[r/'apps-script/Code.gs']
assert f"const SBM_VERSION = '{v}';" in s and f'Current version: {v}' in s
assert "html = html.replace('__MANAGER_VERSION__', SBM_VERSION);" in s
for k in ('version','current_version','starter_display_version'):assert json.loads(read('PRODUCT_IDENTITY.json'))[k]==v
for p in ('README.md','README-FIRST.md','distribution/README-FIRST.md','VERSION_POLICY.md','CHANGELOG.md','COMMIT_MESSAGE.txt',f'RELEASE_NOTES_v{v}.md'):assert v in read(p),p
assert shared==read('shared/VERSION').strip()==json.loads(read('shared/PRODUCT_IDENTITY.json'))['current_version']==json.loads(read('shared/PRODUCT_IDENTITY.json'))['version']
assert f"const SBM_SHARED_VERSION = '{shared}';" in s
assert json.loads(read('apps-script/appsscript.json'))==json.loads(read('distribution/appsscript.json'))
assert 'https://www.googleapis.com/auth/spreadsheets' in json.loads(read('apps-script/appsscript.json'))['oauthScopes']
print('PASS: Manager',v,'/ Shared',shared)
