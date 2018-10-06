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
  font-family: "Hiragino Kaku Gothic ProN";
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
