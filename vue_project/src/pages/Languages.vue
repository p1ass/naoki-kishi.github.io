<template>
<div class = 'languages-wrapper'>
  <pageTitle title='Languages'></pageTitle>
  <div class='languages'>
    <box v-bind:key='language.name' v-for='language in languages' v-bind:item='language'>
      使用歴 : {{language.term}}
    </box>
  </div>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'

export default {
  name: 'Languages',
  title: 'Languages -',
  components: {
    pageTitle,
    box
  },
  data () {
    const yourBirthDay = {
      year: 1998,
      month: 11,
      date: 24
    }

    // Dateインスタンスに変換
    const birthDate = new Date(yourBirthDay.year, yourBirthDay.month - 1, yourBirthDay.date)

    // 文字列に分解
    const y2 = birthDate.getFullYear().toString().padStart(4, '0')
    const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0')
    const d2 = birthDate.getDate().toString().padStart(2, '0')

    const today = new Date()
    const y1 = today.getFullYear().toString().padStart(4, '0')
    const m1 = (today.getMonth() + 1).toString().padStart(2, '0')
    const d1 = today.getDate().toString().padStart(2, '0')
    const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000)

    return {
      languages: [
        {name: 'Python',
          content: '私が一番使っている言語です。Django REST Frameworkを使ったAPI実装やKU休講情報Bot(@KUBotver2)の開発などを行いました。',
          term: '2年'},
        {name: 'C',
          content: '私が初めて学んだ言語です。高校生の時に1年ほど勉強しました。その後、大学の授業で基礎的なニューラルネットワークの実装などを行いました。',
          term: '2年'},
        {name: 'Kotlin',
          content: 'LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースにて使用しました。Spring Bootを用いたサーバーサイドAPIの実装やAndroidクライアントの作成を行いました。',
          term: '3ヶ月'},
        {name: 'HTML & CSS & SCSS',
          content: 'このポートフォリオサイトを作成に当たって勉強しました。基本知識はProgateを使って学びました。',
          term: '1ヶ月'},
        {name: 'JavaScript (ES6)',
          content: 'こちらもポートフォリオサイト作成に当たって勉強しました。Progateを使って学んだ後は分からないところが見つかるたびに調べて勉強しました。',
          term: '1ヶ月'},
        {name: 'Japanese',
          content: '最も自由に扱える言語といって差し支えない実力を持っています。',
          term: '' + age + '年'}
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.languages-wrapper {
  text-align: center;
}

.languages {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}
</style>
