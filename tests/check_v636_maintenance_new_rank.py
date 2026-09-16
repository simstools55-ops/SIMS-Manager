from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
on=c[c.index('function onOpen()'):c.index('/* ========================================================================== *\n * Product 5.10.0 RC8',c.index('function onOpen()'))]
checks={
'no_user_recheck':".addItem('未発芽判定を再確認'" not in on,
'menu_order':on.index(".addItem('サイト設定'")<on.index(".addItem('表示テーマを変更'")<on.index(".addItem('Personal Knowledgeを点検'")<on.index(".addItem('初期設定'"),
'new_rank_insert':c.count("obj['記事ランク']='🆕 新規'")>=2,
'new_rank_existing':"setValue('🆕 新規')" in c,
'preserve_until_gsc':"clicks<=0&&imps<=0)return '🆕 新規';" in c,
}
bad=[k for k,v in checks.items() if not v]
if bad:print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.3.6 maintenance menu and new article rank')
