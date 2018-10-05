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
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

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

.page-fade-enter-active{
  animation: fadeIn 1.5s;
}
</style>
