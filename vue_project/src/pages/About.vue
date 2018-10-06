<template>
<div class = "about-wrapper">
  <pageTitle title="About"></pageTitle>
  <div class="self-introduction">
    <table>
      <tbody>
      <tr>
          <th>Name</th>
          <td>岸 直輝 (Naoki Kishi)</td>
        </tr>
        <tr>
          <th>GitHub</th>
          <td><a href="https://github.com/naoki-kishi" target="_blank">naoki-kishi</a></td>
        </tr>
        <tr>
          <th>Twitter</th>
          <td><a href="https://twitter.com/plus_kyoto" target="_blank">@plus_kyoto</a></td>
        </tr>
        <tr>
          <th>Mail</th>
          <td>naokikishi.kyoto[at]gmail.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'About',
  components: {
    pageTitle
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.about-wrapper{
  text-align: center;
}

.self-introduction{
  @include box-shadow;
  width : 800px;
  border-radius: 50px;
  margin: 20px auto;
  color : $text-color;
}

table{
  padding : 50px 0;
  display: inline-block;
  text-align: left;
}

th{
  padding-right: 20px;
  font-weight: normal;
}

td{
  font-size : 20px;
  padding : 5px 0px;
}

a{
  text-decoration: none;
}

/*タブレット*/
@media (max-width : 1000px){
  .self-introduction{
    width : 600px;
    border-radius: 50px;
  }
}

/*スマートフォン*/
@media (max-width : 670px){
  .self-introduction{
    width : 80%;
    border-radius: 50px;
  }

  th{
    display: block;
  }

  td{
    display: block;
    font-size : 16px;
    width : 100%;
  }
}
</style>
