<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter,
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
</style>
