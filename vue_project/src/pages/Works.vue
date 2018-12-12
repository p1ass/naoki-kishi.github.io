<template>
<div class = "works-wrapper">
  <pageTitle title="Works"></pageTitle>
  <div class='works'>
    <box v-bind:key='work.term' v-for='work in works' v-bind:item='work' >
      <a v-bind:href="work.term" target="_blank">URL</a>
    </box>
  </div>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'

export default {
  name: 'Works',
  title: 'Works -',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      works: [
        {
          name: 'えもじっく',
          content:
            'OpenCVの顔認識機能を使って、人の画像を絵文字に変換するWebサービスです。フロントエンドにはNuxt.jsを、バックエンドにはPythonをAWS Lmabda上で使っています。',
          term: 'https://emojic.ch'
        },
        {
          name: 'Portfolio Site',
          content:
            '今までフロントエンドの勉強をしたことがなかったので、勉強のために作成しました。デザインはiPhoneのApp StoreのようなドロップシャドウやInstagramのアイコンのようなグラデーションを意識しました。',
          term: 'https://github.com/naoki-kishi/naoki-kishi.github.io'
        },
        {
          name: 'KU休講情報Bot',
          content:
            '京都大学の休講情報を定期的につぶやくBotです。EC2上でcronを使って動かしています。Pythonで書かれており、休講情報はSeleniumとChrome Driverを使ってスクレイピングで取得しています。',
          term: 'https://github.com/naoki-kishi/KUCancelAnnouncementBot'
        },
        {
          name: 'SHABEL',
          content:
            'LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースで作成したメッセージングアプリです。STOMP over Websocketを使った通信やローカルDBにメッセージを保存して永続化することができます。',
          term: 'https://github.com/line-school2018summer/kyoto-a-client'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.works-wrapper {
  text-align: center;
}

.works {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}

a {
  text-decoration: none;
}
</style>
