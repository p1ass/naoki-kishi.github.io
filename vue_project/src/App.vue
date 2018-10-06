<template>
  <div id="app">
    <myHeader></myHeader>
    <transition name="page-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import myHeader from './components/myHeader'

export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style>

#app {
  font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}

body{
  margin : 0px;
}

.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter, .page-fade-leave-to{
  opacity: 0;
}
</style>
