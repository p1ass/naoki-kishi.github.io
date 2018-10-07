<template>
  <div id="app">
    <myHeader></myHeader>
    <transition name="page-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?5bb9b5a1fffc462f83843cf5ac1e02ec" charset="utf-8"></script>

<script>
import myHeader from './components/myHeader'

export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family:"新ゴ L"
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
