<template>
<div class = 'tools-wrapper'>
  <pageTitle title='Tools & Frameworks'></pageTitle>
  <div class='tools'>
    <box v-bind:key='tool.term' v-for='tool in tools' v-bind:item='tool'>
      使用歴 : {{tool.term}}
    </box>
  </div>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'

export default {
  name: 'Tools',
  title: 'Tools -',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      tools: [
        {name: 'Django',
          content: 'Django REST Frameworkを使ったバックエンドAPIの実装の経験があります。また、Firebase Authenticationと連携させて認証ありAPIの実装も行いました。',
          term: '6ヶ月'},
        {name: 'Vue.js',
          content: 'ポートフォリオサイト作成のために勉強をしました。.vueファイルを用いた単一コンポーネントやVue Routerを使ったSPAの実装を行いました。',
          term: '1ヶ月'},
        {name: 'Firebase',
          content: '主にFirebase Authenticationを使用したログイン機能の実装を行いました。JWTを使ったサーバーサイドとの連携の実装経験あり。',
          term: '3ヶ月'},
        {name: 'GitHub',
          content: '基本的なgitの使い方を習得しています。また、複数人での共同開発やプルリク駆動開発の経験があります。',
          term: '1年'},
        {name: 'Docker',
          content: 'Dockerやdocker-composeを用いて、コンテナ環境での開発を行っています。',
          term: '6ヶ月'},
        {name: 'Circle CI',
          content: 'Django REST Frameworkで作成したAPIの自動テストを行っています。',
          term: '1ヶ月'}
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.tools-wrapper {
  text-align: center;
}

.tools {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}
</style>
