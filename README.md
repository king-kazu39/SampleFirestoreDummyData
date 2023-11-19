# SampleFirestoreDummyData

## 事前準備

cloneしてきただけではコマンドを実行できない。  
nodejsのスクリプトで書いているため`npm`コマンドを使えるようにしてください。

※asdfの`.tool-versions`ファイルを置いているので、このファイルに記載のNode.jsのバージョンに合わせるかローカルにインストールしてくるなど準備してください。

**asdfでnodejsをインストール**

asdfコマンドが有効になっていればnodejsをインストールし、
プロジェクトルートでインストールしたnodejsを有効にします。

```
// .tool-versionsファイルがあるプロジェクトルート(以下`ROOT$`と表記)でインストールする
ROOT$ asdf install

// インストールしたnodejsのバージョンを有効にする
ROOT$ asdf local nodejs 21.1.0
```


Firebase Admin SDKのインストールとservice keyの取得が必要なので用意する必要があります。

**Firebase Admin SDKをインストールする**

依存関係を解消するために以下のコマンドを実行し、`node_modules`をインストールする。


```
// npm installでもインストール可能
ROOT$ npm i
```

**ServiceKeyの取得方法**

<img src='https://github.com/king-kazu39/SampleFirestoreDummyData/assets/25321380/93c5bc57-82f3-4019-a7a6-e2c547c14d31'>

<img src='https://github.com/king-kazu39/SampleFirestoreDummyData/assets/25321380/33abb43b-c00d-4c3d-8c6d-e5d5fcf82bd3'>


## スクリプト実行

1. 挿入するデータをjsonファイルで用意する

以下のJSONファイルを参考に`json`フォルダ配下にJSONファイルを作成する。

- [users.json](./json/example/users.json)

2. JSONファイルを用意したら以下のコマンドでダミーデータを作成または削除ができる。

'collectionName'にコレクション名を指定する。  
※インサートする場合はJSONファイルの作成が前提になるので事前にJSONファイルを作成しておくこと。

| command | description |
| --- | --- |
| `npm run insert 'collectionName'` | 事前にJSONファイルを作成する必要がある。指定したコレクション名のJSONファイルをインサートする。事前にJSONファイルを作成する必要がある。 |
| `npm run delete 'collectionName'` | 指定した名前のコレクションを削除する |