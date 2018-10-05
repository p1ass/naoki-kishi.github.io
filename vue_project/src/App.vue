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
import myFooter from './components/myFooter'

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style>

#app {
  font-family: "Hiragino Kaku Gothic ProN";
  text-align: center;
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
