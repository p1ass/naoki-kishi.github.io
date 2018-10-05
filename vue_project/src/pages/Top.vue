<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Welcome to Naoki Kishi\'s Portfolio Site'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  height: 94vh;
  background:linear-gradient(to left, rgb(148, 115, 221) 0%, rgb(79, 210, 219) 100%);
  text-align: center;
}

h1{
  padding-top:40vh;
  font-size : 50px;
  color:white;
  letter-spacing: 3px;
  font-weight: normal;
  border: 1px solid rgba(255,255,255,1);
  margin:0;
  text-shadow: 0px 0px 30px rgba(0,0,0,0.2);
}

/* タブレット */
@media (max-width: 1000px) {
  .hello{
    height: 88vh;
  }
  h1{
    padding-top:20vh;
    font-size : 40px;
  }
}
/* スマートフォン */
@media (max-width: 670px) {
  .hello{
    height: 76vh;
  }
  h1{
    padding-top:20vh;
    font-size : 30px;
  }
}

</style>
