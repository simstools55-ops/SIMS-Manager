# SIMS Manager v5.21.35

**最初にこのファイルをお読みください。**  
このZIPは、SIMS Managerを新しいGoogleスプレッドシートへ導入するための利用者向け製品版です。

## ZIPに入っているファイル

- `Code.gs` — SIMS Manager本体
- `appsscript.json` — Google Apps Scriptの権限・実行設定
- `README-FIRST.md` — この導入ガイド

開発用リポジトリや `distribution` フォルダーは必要ありません。このZIPの3ファイルだけで導入します。

## 導入前に用意するもの

- Googleアカウント
- 管理したいサイトを登録しているGoogle Search Consoleへの閲覧権限
- 新しい空のGoogleスプレッドシート

SIMS Managerは、導入したスプレッドシートにサイト管理用のシートを自動作成します。最初は、既存の業務用シートではなく新しい空のスプレッドシートを使用してください。

## 正式な導入手順

### 1．新しいGoogleスプレッドシートを作成する

Google Driveで新しいGoogleスプレッドシートを1つ作成します。ファイル名は、管理するサイトが分かる名前にして構いません。

### 2．Apps Scriptを開く

スプレッドシート上部の **「拡張機能」→「Apps Script」** を開きます。

### 3．`Code.gs`を登録する

Apps Scriptエディタで既存の `Code.gs` を開き、最初から入っているコードをすべて削除します。

このZIPの `Code.gs` をテキストエディタで開き、**内容をすべてコピーしてApps Scriptの `Code.gs` へ貼り付け**、保存します。

### 4．`appsscript.json`を登録する

Apps Script画面左側の **「プロジェクトの設定」** を開き、**「エディタで『appsscript.json』マニフェスト ファイルを表示する」** をオンにします。

エディタへ戻って `appsscript.json` を開き、内容をすべて削除します。このZIPの `appsscript.json` の内容をすべて貼り付け、保存します。

### 5．スプレッドシートを再読み込みする

Apps Scriptを保存したら、元のGoogleスプレッドシートへ戻り、ブラウザを再読み込みします。

上部メニューに **「SIMS Manager」** が表示されれば、本体の導入は完了です。

### 6．初期設定を開始する

スプレッドシート上部の **「SIMS Manager」→「初期設定」** を選びます。

初回はGoogleから権限の確認画面が表示されることがあります。画面の内容を確認し、SIMS Managerを導入したご自身のApps Scriptプロジェクトに対して必要な権限を許可してください。

その後は、SIMS Managerの初回セットアップ画面に表示されるSTEPを上から順番に進めます。

### 7．初回セットアップを完了する

初回セットアップでは、主に次の処理を行います。

1. サイト情報を登録する
2. Google CloudでGoogle Search Console APIの設定を確認する
3. Google Search Consoleとの接続を確認する
4. Search Consoleから記事管理の初回データを作成する
5. 記事タイトルなどの記事情報を補完する
6. セットアップ結果を確認する

画面に **「初回セットアップが完了しました。Homeから日々の改善作業を開始できます。」** と表示されれば、導入完了です。

## 導入後の通常運用

通常は **「SIMS Manager」→「Homeを開く」** から開始します。日々の作業前に **「日次処理を実行」** を行い、その後「今日の改善」や記事診断など必要な作業へ進みます。

通常運用でApps Scriptエディタを開く必要はありません。

## Personal Knowledgeについて

SIMS Managerは、継続利用に必要な利用者固有・サイト固有の情報をGoogle Drive上の `SIMS-Personal-Knowledge` フォルダーへ保存する場合があります。通常はSIMS Managerが自動管理するため、利用者が内容を編集する必要はありません。

接続確認が必要な場合だけ、**「設定・メンテナンス」→「Personal Knowledge接続を確認」** を使用してください。

## 更新するとき

新しいSIMS Manager製品版へ更新する場合は、新版ZIPの案内に従って `Code.gs` と、必要な場合は `appsscript.json` を更新します。既存のスプレッドシートやPersonal Knowledgeを削除・初期化しないでください。

## バージョン確認

この配布版の正式バージョンは **v5.21.21** です。

スプレッドシートでは **「SIMS Manager」→「SIMS Managerについて」** から現在のバージョンを確認できます。

---

SIMS Manager Product Edition  
Version 5.21.21
