function sbmDoctorFindMergeCompletionHistory_(caseId){
  var rows=sbmRowsAsObjects_(SBM_SHEETS.FEEDBACK_HISTORY)||[];
  for(var i=rows.length-1;i>=0;i--){
    var raw=String(rows[i]['AI改善結果JSON']||'');
    if(!raw)continue;
    try{var o=JSON.parse(raw);if(String(o.merge_completion_case_id||'')===String(caseId))return String(rows[i]['改善履歴ID']||'');}catch(ignoreMergeHistoryParse){}
  }
  return '';
}
function sbmDoctorCompleteMergeUserActions_(caseId,checks){
  caseId=String(caseId||'').trim();checks=checks||{};if(!caseId)throw new Error('CaseIDがありません。');
  var redirectMode=checks.redirectDone===true?'301':(checks.redirectUnavailable===true?'NO_REDIRECT':'');
  if(checks.articlePublished!==true||!redirectMode)throw new Error('統合原稿の公開と、301設定または「301設定不可・検索対象外化」のどちらかを確認してください。');
  var rec=sbmDoctorFindCaseRow_(caseId);if(!rec)throw new Error('対応するCaseIDがSIMSにありません：'+caseId);
  if(String(rec.hm['状態コード']?rec.values[rec.hm['状態コード']-1]:'')!=='MERGE_USER_ACTION_REQUIRED')throw new Error('このCaseはMerge利用者処置待ちではありません。');
  var caseArticleId=String(rec.hm['記事ID']?rec.values[rec.hm['記事ID']-1]:'').trim(),caseArticleUrl=String(rec.hm['記事URL']?rec.values[rec.hm['記事URL']-1]:'').trim(),caseTitle=String(rec.hm['記事タイトル']?rec.values[rec.hm['記事タイトル']-1]:'').trim();
  var ctx=sbmDoctorLoadMergeCompletionContextFromRow_(rec.values,rec.hm),ctxPrimary=ctx&&ctx.primary||{},ctxAbsorbed=ctx&&Array.isArray(ctx.absorbed)?ctx.absorbed:[];
  var primaryId=String(ctxPrimary.articleId||'').trim(),primaryUrl=String(ctxPrimary.articleUrl||'').trim(),primaryTitle=String(ctxPrimary.articleTitle||'').trim();
  var caseIsPrimary=!!((caseArticleId&&primaryId&&caseArticleId===primaryId)||(caseArticleUrl&&primaryUrl&&sbmNormalizeUrl_(caseArticleUrl)===sbmNormalizeUrl_(primaryUrl)));
  var caseIsAbsorbed=ctxAbsorbed.some(function(x){x=x||{};var aid=String(x.articleId||'').trim(),au=String(x.articleUrl||'').trim();return !!((caseArticleId&&aid&&caseArticleId===aid)||(caseArticleUrl&&au&&sbmNormalizeUrl_(caseArticleUrl)===sbmNormalizeUrl_(au)));});
  if(!caseIsPrimary&&!caseIsAbsorbed)throw new Error('Merge完了対象がCase記事と一致しません。統合先または吸収記事として安全に照合できないため、処置完了を停止しました。');
  if(!primaryId&&!primaryUrl)throw new Error('Merge結果から統合先記事を確認できません。処置完了を停止しました。');
  var articleId=primaryId||caseArticleId,articleUrl=primaryUrl||caseArticleUrl,title=primaryTitle||caseTitle;
  try{sbmDoctorEnsureArticleDbRowForMonitoring_(articleId,articleUrl,title);}catch(eRestore){sbmLog_('MergeArticleDbRestore','Warning',String(eRestore));}
  var multi=sbmDoctorMultiMergeMetaFromRec_(rec),next=null;
  // P104-39: reserve/recover the next step before changing absorbed articles.
  if(multi&&multi.currentStep<multi.totalSteps)next=sbmDoctorCreateNextMultiMergeStep_(rec,multi);
  var absorbedResult=sbmDoctorFinalizeMergeAbsorbedArticles_(caseId,ctx,sbmNowText_(),redirectMode);
  // P104-40: an unresolved absorbed article must not advance the Merge step.
  var unresolvedAbsorbed=absorbedResult.filter(function(x){return !x||x.ok!==true;});
  if(unresolvedAbsorbed.length)throw new Error('吸収記事の管理状態を更新できませんでした。Caseを完了せず再実行可能な状態に保ちます：'+unresolvedAbsorbed.map(function(x){return String(x&&x.articleId||x&&x.articleUrl||'不明');}).join(', '));
  if(multi&&multi.currentStep<multi.totalSteps){
    // Create or recover the next step before marking this step completed.
    // A failed next-step save leaves the current Case retryable.
    if(rec.hm['状態コード'])rec.values[rec.hm['状態コード']-1]='MULTI_MERGE_STEP_COMPLETED';if(rec.hm['状態'])rec.values[rec.hm['状態']-1]='複数記事統合 '+multi.currentStep+'/'+multi.totalSteps+' 完了';if(rec.hm['更新日時'])rec.values[rec.hm['更新日時']-1]=sbmNowText_();rec.sheet.getRange(rec.row,1,1,rec.values.length).setValues([rec.values]);
    var absorbedStepOk=absorbedResult.filter(function(x){return x&&x.ok;}).length;
    // Step途中でも、今回吸収した記事の旧Monitoring行は即時に「改善の推移」から除外する。
    try{sbmDoctorRefreshEffectCacheAfterMerge_();}catch(eMultiMergeCache){try{sbmLog_('MergeStepEffectCacheRefresh','Warning',String(eMultiMergeCache));}catch(ignoreMultiMergeCacheLog){}}
    try{sbmFinishUserSheetPresentation_({article:true,effect:true,history:true});}catch(ignoreMultiMergePresentation){}
    return {ok:true,caseId:caseId,articleId:articleId,status:'複数記事統合 '+multi.currentStep+'/'+multi.totalSteps+' 完了',multiMerge:true,currentStep:multi.currentStep,totalSteps:multi.totalSteps,nextStep:next&&next.step||0,nextCaseId:next&&next.caseId||'',nextRequest:next&&JSON.stringify(next.request,null,2)||'',absorbedArchived:absorbedStepOk,message:'複数記事統合のStep '+multi.currentStep+'/'+multi.totalSteps+' を完了として登録しました。\n'+(absorbedStepOk?'今回の吸収記事：'+absorbedStepOk+'件を処理済みにしました。\n':'')+'次は Step '+(multi.currentStep+1)+'/'+multi.totalSteps+' です。\n「未完了の作業を再開」から次のaMerge Packageを開けます。\n最終Stepが完了するまでモニタリングへは移しません。'};
  }
  var feedback={format:'SIMS_FEEDBACK_V2',contract_version:'4.2',article_id:articleId,article_url:articleUrl,completed_at:sbmNowText_(),ai_name:'SIMS Merge',improvement_method:multi?'連続aMerge':'aDoctor→aMerge',summary:(multi?'複数記事の連続統合を完了。':'aDoctor診断に基づく記事統合を実施。')+'統合先記事の公開と'+(redirectMode==='301'?'301リダイレクト設定':'301設定不可ブログでの吸収記事検索対象外化')+'を利用者が確認済み。',publication_result:{change_summary:['Merge統合原稿を公開',redirectMode==='301'?'301リダイレクト設定':'301設定不可・吸収記事を検索改善管理から除外'],public_ok_changes:[],user_decision_changes:[]},recommended_review_days:28,next_action:'remeasure',warnings:[]};
  // P104-44: stable per-Case feedback identity. A retry after history creation must
  // reuse the committed history, even when completed_at differs on the retry.
  feedback.merge_completion_case_id=caseId;
  feedback.completed_at='MERGE-CASE-'+caseId;
  var existingMergeHistory=sbmDoctorFindMergeCompletionHistory_(caseId);
  var registered=existingMergeHistory?{ok:true,alreadyRegistered:true,historyId:existingMergeHistory}:sbmRegisterImprovementFeedback(sbmNormalizeImprovementFeedback_(JSON.stringify(feedback)));
  if(!registered||registered.ok===false)throw new Error('モニタリング登録に失敗しました：'+(registered&&registered.message?registered.message:'不明なエラー'));
  sbmDoctorEnsureMonitoringSync_(articleId,articleUrl);if(rec.hm['状態コード'])rec.values[rec.hm['状態コード']-1]='MONITORING';if(rec.hm['状態'])rec.values[rec.hm['状態']-1]='モニター中';if(rec.hm['改善履歴ID'])rec.values[rec.hm['改善履歴ID']-1]=sbmDoctorLatestHistoryIdForArticle_(articleId,articleUrl);if(rec.hm['再診予定日'])rec.values[rec.hm['再診予定日']-1]=sbmDateAfterDaysText_(28);if(rec.hm['更新日時'])rec.values[rec.hm['更新日時']-1]=sbmNowText_();rec.sheet.getRange(rec.row,1,1,rec.values.length).setValues([rec.values]);
  try{sbmDoctorRemoveCandidateArticle_(articleId,articleUrl);}catch(eRemove){}
  // 新しいMerge履歴ID・改善経路と、吸収記事の管理対象外化を「改善の推移」へ即時反映する。
  try{sbmDoctorRefreshEffectCacheAfterMerge_();}catch(eMergeCache){try{sbmLog_('MergeFinalEffectCacheRefresh','Warning',String(eMergeCache));}catch(ignoreMergeCacheLog){}}
  try{sbmRefreshHome_({light:true});}catch(eSync){sbmLog_('MergeFinalMonitoringLightRefresh','Warning',String(eSync));}
  try{sbmFinishUserSheetPresentation_({article:true,effect:true,history:true,home:true});}catch(ignoreMergePresentation){}
  var absorbedOk=absorbedResult.filter(function(x){return x&&x.ok;}).length;
  return {ok:true,caseId:caseId,articleId:articleId,status:'モニター中',multiMerge:!!multi,currentStep:multi?multi.currentStep:1,totalSteps:multi?multi.totalSteps:1,absorbedArchived:absorbedOk,message:(multi?'複数記事統合の最終Step '+multi.currentStep+'/'+multi.totalSteps+' が完了しました。\n':'aMerge処置を完了として登録しました。\n')+(title?'対象記事：'+title+'\n':'')+'ArticleID：'+articleId+'\n状態：モニター中\n改善経路：'+(multi?'連続aMerge':'aDoctor→aMerge')+'\n7日目・14日目・21日目・28日目の効果測定対象へ登録しました。'+(absorbedOk?'\n今回の吸収記事：'+absorbedOk+'件を「'+(redirectMode==='301'?'301統合済み':'統合済み（リダイレクト不可）')+'」として管理対象外へ移しました。':'')};
}
