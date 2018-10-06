<template>
  <div class='skill'>
    <h2>{{skill.name}}</h2>
    <p class="skill-content">{{skill.content}}</p>
    <p class="term">使用歴 : {{skill.term}}</p>
  </div>
</template>

<script>
export default {
  name: 'skillBox',
  props: ['skill'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.skill {
  @include box-shadow;
  width: 300px;
  height: 300px;
  display: inline-block;
  vertical-align: top;
  margin: 20px;
  border-radius: 30px;
  position: relative;
}

@media (max-width: 1000px) {
  .skill {
    width: 260px;
    height: 300px;
  }
}

h2 {
  font-weight: normal;
  padding : 10px 30px;
  margin : 10px 0;
  display: inline-block;
  border-radius: 10px;
}

.skill-content{
  text-align: left;
  margin: 0 20px;
  word-break:break-all;
  color : $text-color;
}

.term{
  font-weight: normal;
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  text-align: center;
  margin: 20px 0px;
  color : $text-color;
}

</style>
