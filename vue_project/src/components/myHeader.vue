<template>
  <header>
    <div class = "link">
      <router-link to="/">Top</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width : 100%;
  background-color : rgba(255,255,255,0.0);
  /* border-bottom: 2x solid rgba(200,200,200,0.5); */
  box-shadow : 0px 0px 10px 0px rgba(0,0,0,0.3);
  position: relative;
  z-index: 10;
}

a{
  height: 6vh;
  line-height: 6vh;
  padding : 0 64px;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  /* text-align: center; */
  display: inline-block;
  color : black;
  text-decoration: none;
}

a:hover{
  background-color : rgba(200,200,200,0.3);
}
</style>
