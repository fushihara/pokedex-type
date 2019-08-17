# ポケモンのタイプの相性の弱点を表示するアプリ

実はnuxtの練習。

# package.jsonのコマンド

- npm run dev 開発用サーバを起動
- npm run build productionとしてhtmlファイルをdistに作成

# データの引用、転載元

- タイプ相性表 https://dic.nicovideo.jp/a/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E8%A4%87%E5%90%88%E3%82%BF%E3%82%A4%E3%83%97%E7%9B%B8%E6%80%A7%E8%A1%A8
- jsonデータ、画像ファイル https://github.com/fanzeyi/pokemon.json/tree/7d21c1bac07d0294014c0e9b33321ba9ab46f571

# 開発メモ

- シングルページ アプリケーション SPA モードで作ってみた。
- 画面遷移とかも無いので簡単な作り。
- firebaseでgoogleアカウントでログインして、履歴を同期出来るようにしたい。
- やっぱりwebアプリを作ると、データをどこに保存するか？と、選択肢が3つ以上あるダイアログをどうやって出すか？に苦労する。
- github pages用のデータを作る手順を再確認して一発で作るようにしたい
