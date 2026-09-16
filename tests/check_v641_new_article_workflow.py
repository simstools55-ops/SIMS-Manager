from pathlib import Path
import sys
c=(Path(__file__).resolve().parents[1]/'Code.gs').read_text(encoding='utf-8')
checks={
 'menu':".addItem('新記事を作成','sbmOpenNewArticleCreation')" in c,
 'type_modes':"value=\"ADSENSE\"" in c and "value=\"AFFILIATE\"" in c,
 'field_selector':"Creatorへ渡したい情報を選ぶ" in c and "checkGrid" in c,
 'experience':"自分の体験・使用感" in c and "家族・知人など身近な人の体験" in c,
 'reviews':"口コミ・評判として伝えたい内容" in c,
 'affiliate_fields':"アフィリエイトリンク" in c and "紹介商品・販売ページURL" in c,
 'optional_policy':"空欄＝SIMSに任せる" in c and "unspecified_fields:'SIMS_DECIDES'" in c,
 'no_fake_experience':"do_not_invent_personal_experience:true" in c,
 'draft_state':"'NEW_ARTICLE_SETUP'" in c,
 'creator_state':"'NEW_ARTICLE_CREATOR_IN_PROGRESS'" in c,
 'publish_state':"'NEW_ARTICLE_PUBLICATION_PENDING'" in c,
 'resume':"sbmShowNewArticleCreationDialog_(caseId)" in c and "新記事作成（aCreator）" in c,
 'creator_request':"SIMS_ARTICLE_CREATOR_DIRECT_REQUEST_V1" in c,
 'register':"function sbmNewArticleRegisterPublished" in c,
}
bad=[k for k,v in checks.items() if not v]
if bad:
 print('FAIL:',', '.join(bad));sys.exit(1)
print('PASS: v6.4.1 new article creation workflow')
