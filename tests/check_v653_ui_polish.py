from pathlib import Path
s=Path('Code.gs').read_text()
assert "💰 収益改善\\n（流入）" in s
assert '経過観察の状況を確認しています' in s
assert '4回の測定完了後、必要な場合だけaDoctor再診へ進みます。' in s
assert "sbmAlert_('経過観察の状況を確認しました'" in s
assert 'aDoctor再診を準備しています</h2>' not in s
print('PASS: v6.5.3 Today revenue label wrapping and observation-status wording')
