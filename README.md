# 高千穂 神話ツアー LP

`dist/index.html` がLP本体です。`dist` フォルダ全体を静的サイトとして設置できます。

## 申込み先の設定

`dist/config.js` の `applicationUrl` に、実際の申込みフォームURLを設定してください。4か所のCTAに一括反映されます。空欄の間、ボタンは最終セクションへ移動してリンク設定が必要である旨を表示します。申込みの送信は行いません。

## 追加情報

`dist/index.html` の開催概要の直後にコメントがあります。終了予定時刻、集合場所詳細、移動手段、昼食、参加費の内訳、雨天時対応、キャンセルポリシー、申込み後の連絡方法は、主催者の確定情報を受け取ってから追記してください。

## 画像

Asamiのプロフィール画像は提供された原画像を使用しています。森は組み込み画像生成ツールで作成したイメージで、実在の高千穂や神社の写真ではありません。ページ内にAI生成の表記を掲載しています。

生成プロンプト: Premium editorial landscape photograph of an imagined mythic Japanese forest with ancient cedar trees and a moss-covered stone path receding into the woods. Wide composition, natural organic textures, subtle early morning mist and warm sunlight shafts. Deep forest green, ink black shadows, restrained gold highlights. No people, text, logos, watermarks, shrine architecture, specific real shrine, or identifiable Takachiho location.

## 確認

320px・390px・1440px幅の横はみ出し、全9セクション、4か所のCTA、画像読み込み、リンク未設定時の表示、JavaScript構文を確認。モバイル全体のスクリーンショットでレイアウトを確認しています。動きを減らす設定ではアニメーションを無効化します。

SEOタイトル・説明、OGPタイトル・説明・URLを設定済み。別の公開URLを使用する場合は `og:url` も変更してください。

ホストへの公開は実行環境の自動承認によって停止したため、完了していません。
