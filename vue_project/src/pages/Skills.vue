<template>
<div class = 'skills-wrapper'>
  <pageTitle title="Skills"></pageTitle>
  <div class='skills'>
    <skillBox  v-bind:key="skill.term" v-for="skill in skills" v-bind:skill="skill"></skillBox>
  </div>
</div>
</template>

<script>
import pageTitle from "@/components/pageTitle";
import skillBox from "@/components/skillBox";

export default {
  name: "Skills",
  components: {
    pageTitle,
    skillBox
  },
  data() {
    return {
      skills : [
        {name : 'Python',
        content : '私が最も使っている言語です。Django Rest Frameworkを使ったAPI実装やKU休講情報Bot(@KUBotver2)の開発などを行いました。',
        term : '2年'},
        {name : 'C',
        content : '私が初めて学んだ言語です。高校生の時に1年ほど勉強しました。その後、大学の授業で基礎的なニューラルネットワークの実装などを行いました。',
        term : '2年'},
        {name : 'Kotlin',
        content : 'LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースにて使用しました。Spring Bootを用いたサーバーサイドAPIの実装やAndroidクライアントの作成を行いました。',
        term : '3ヶ月'},
        {name : 'HTML & CSS & SCSS',
        content : 'このポートフォリオサイトを作成に当たって勉強しました。基本知識はProgateを使って学びました。',
        term : '1ヶ月'},
        {name : 'JavaScript (ES6)',
        content : 'こちらもポートフォリオサイト作成に当たって勉強しました。Progateを使って学んだ後は分からないところが見つかるたびに調べて勉強しました。',
        term : '2年'},
        {name : 'Ruby',
        content : 'Ruby on Railsを使用したくて勉強しました。Rails Tutorialを一周しつつ基本的な文法を習得しました。',
        term : '1ヶ月'}
      ]
    };
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.skills-wrapper {
  text-align: center;
}

.skills {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}
</style>
