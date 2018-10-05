<template>
  <div id="app">
    <myHeader></myHeader>
    <transition name="page-fade" appear>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin : 0px;
}

body{
  margin : 0px;
}
.page-fade-enter{
  opacity: 0;
}
.page-fade-enter-active{
  transition: opacity 0.5s;
  transition-delay: 0.5s;
}

.page-fade-leave-top{
  opacity: 0;
}
.page-fade-leave-active{
  transition: opacity 0.4s;
}

</style>
