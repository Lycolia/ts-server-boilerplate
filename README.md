## これは何？

- TypeScript で Server っぽいのを HotDeploy しながら開発するための Boilerplate
- たぶん必要最低限の環境とサンプルが入ってる、きっと

## 動かし方

| コマンド        | 動作                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| `npm run build` | ビルド                                                                                                         |
| `npm run serve` | ビルドしたのを起動                                                                                             |
| `npm run debug` | デバッグモードで起動<br />ソースコードをビルドしてウォッチ<br />ソース更新を検知すると自動でリビルドして再起動 |

## 設定

### `.vscode/launch.json`

- デバッガの起動設定。`nodemon`のインスペクタはデフォでは`9229`で listen してるっぽい
  - ポート変更は`package.json`の`nodemon --inspect`を`nodemon --inspect=9300`とかにするといける

```json
{
  // Use IntelliSense to learn about possible Node.js debug attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach by Process",
      "protocol": "inspector",
      "port": 9229
    }
  ]
}
```

### `.vscode/settings.json`

- このプロジェクトで使う VSCode の設定

## `package.json`について

### `scripts`

- 書いてあるコマンドを実行してるだけ。書かれている script は`npm run [script name]`で実行される
- 例えば`npm run serve`であれば`node dist/server.js`をしているのと同義
