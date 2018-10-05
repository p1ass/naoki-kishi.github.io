<template>
  <header>
    <div class = "link">
      <router-link to="/">Top</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/works">Works</router-link>
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
<style scoped>
header {
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
  /* background:linear-gradient(to left, rgba(148, 115, 221,0.2) 0%, rgba(79, 210, 219,0.2) 100%); */
  /* border-bottom: 2x solid rgba(200,200,200,0.5); */
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
    width: 50%;
    float: left;
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
