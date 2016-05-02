# ホームページリニューアル

## STG環境
http://ichiki.gozaru.jp/

## 階層構造
~~~
 /
　├ dev/
　│　├ **.html
　│　├ _common/
　│　├ css/
　│　├ img/
　│　├ js//
　│　└ pdf/
　├ release/
　│　├ **.html
　│　├ css/
　│　├ img/
　│　├ js//
　│　└ pdf/
　│ gulpfile.js
　│ package.json
　└ README.md
~~~
### 解説
+ dev/
  - _common/: ejsでincludeする用の共通化パーツ群
+ release/: リリースモジュール
+ gulpfile.js: Gulpのタスクが書いてあるファイル
+ package.json: gulpで使用するパッケージが書かれたファイル
+ README.md: これ

## 使ったツール
+ node.js
  - Gulp動かす用
+ npm
  - パッケージマネージャ。node.jsをinstallしたときについてきたやつそのまんま。
+ Gulp
	- ビルド自動化
+ gulp-ejs
	- includeに使用
+ 今回はそんなに凝ったスタイルを当てないので、Sassは使いません

## 環境構築手順 - Macの人向け
### 注意事項
+ node_modulesの階層がすんごい深いので、Win環境だと動かない可能性あります。。

### 環境つくる編
1. gitからリポジトリをチェックアウト
~~~
$ git clone https://github.com/Mitane/ichiki_renewal.git
~~~

2. node.jsのインストール
  + http://qiita.com/sinmetal/items/154e81823f386279b33c

3. node_modulesのインストール
~~~
$ npm install
~~~

### ビルド編
1. Gulpでタスクを実行
~~~
$ gulp build
~~~
  + これでrelease/直下にdestされるはず
