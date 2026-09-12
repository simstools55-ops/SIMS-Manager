from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
start=c.index('function sbmShowNewArticleCreationDialog_')
end=c.index('\nfunction sbmOpenCreatorPublicationRegisterDialog',start)
seg=c[start:end]
checks={
 'adsense_onclick':'''value="ADSENSE" onclick="chooseArticleType(\\'ADSENSE\\')"''' in seg,
 'affiliate_onclick':'''value="AFFILIATE" onclick="chooseArticleType(\\'AFFILIATE\\')"''' in seg,
 'transition_fn':'function chooseArticleType(type)' in seg,
 'show_step2':'show("stepSelect");renderChecks();' in seg,
 'scroll':'scrollIntoView({behavior:"smooth",block:"start"})' in seg,
 'resume_same_path':'if(articleType){chooseArticleType(articleType)}' in seg,
 'old_change_removed':'r.onchange=function(){articleType=r.value' not in seg,
}
bad=[k for k,v in checks.items() if not v]
if bad: print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.4.3 new article type transition')
