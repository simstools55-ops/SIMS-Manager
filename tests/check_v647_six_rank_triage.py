from pathlib import Path
s=Path('Code.gs').read_text(encoding='utf-8')
assert "rankCode==='UNGERMINATED'||rankCode==='SPROUT'" in s
assert "rankCode==='NURTURE'" in s and "改善ナビで改善する" in s
assert "rankCode==='STABLE'" in s and '安定段階です' in s
assert "rankCode==='GROWTH'" in s and '成長段階です' in s
assert "rankCode==='ACE'" in s and 'エース記事です' in s
assert "if(flag==='要改善')return {eligible:true" in s
print('PASS: v6.4.7 six-rank article detail triage')
