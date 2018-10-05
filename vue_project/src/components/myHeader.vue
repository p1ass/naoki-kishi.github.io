<template>
  <header>
    <ul>
      <router-link to="/">Top</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </ul>
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
  background-color : rgba(0,0,0,1);
  top : 0px;
  position: fixed;
}
ul{
  list-style: none;
  margin: 0 auto;
  text-align:center;
}

a{
  padding : 10px 64px;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  color : white;
  text-decoration: none;
}

a:hover{
  background-color : rgba(255,255,255,0.5);
}
</style>
