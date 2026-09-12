from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
start=c.index('function sbmShowNewArticleCreationDialog_')
end=c.index('\nfunction sbmOpenCreatorPublicationRegisterDialog',start)
seg=c[start:end]
checks={
 'single_title':'<h2>新記事を作成</h2>' not in seg and "sbmShowThemedModalDialog_(html,'新記事を作成')" in seg,
 'explicit_uncheck':'if(!articleType){document.querySelectorAll("input[name=articleType]").forEach(function(r){r.checked=false})}' in seg,
 'reveal_step2':'show("stepSelect");renderChecks();' in seg,
 'scroll_step2':'stepSelect").scrollIntoView' in seg,
 'hint':'記事タイプを選ぶと、②「Creatorへ渡したい情報を選ぶ」が下に表示されます。' in seg,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.4.2 new article initial UI')
