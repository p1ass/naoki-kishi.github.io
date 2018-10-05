<template>
  <header>
    <div class = "link">
      <router-link to="/">Top</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/github">GitHub</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <div class="clear"></div>
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
<style lang="scss" scoped>

header {
  width: 100%;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 0px;
  z-index: 10;
}

a {
  height: 6vh;
  line-height: 6vh;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  color: black;
  text-decoration: none;
  width: 150px;
  display: inline-block;
}

.clear {
  clear: left;
}
/* タブレット */
@media (max-width: 1000px) {
  a {
    width: 30%;
  }
}

/* スマートフォン */
@media (max-width: 670px) {
  a {
    width: 100%;
  }
}

a:hover {
  background-color: rgba(200, 200, 200, 0.3);
}
</style>
