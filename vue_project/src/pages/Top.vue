<template>
    <div class='hello'>
      <h1>{{ msg }}</h1>

      <h3>Share</h3>

      <div class = 'share-buttons'>
        <a href='https://twitter.com' target='_blank'>
          <div class='button fa fa-twitter'>
          </div>
        </a>
        <a href='https://facebook.com' target='_blank'>
          <div class='button fa fa-facebook'>
          </div>
        </a>
      </div>
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');

.hello {
  height: 94vh;
  background: linear-gradient(
    to left,
    rgb(148, 115, 221) 0%,
    rgb(51, 191, 219) 100%
  );
  text-align: center;
}

h1 {
  padding-top: 40vh;
  font-size: 50px;
  color: white;
  letter-spacing: 3px;
  font-weight: normal;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  margin: 0;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}

h3 {
  color: white;
  font-weight: normal;
  font-size: 25px;
  margin-top: 200px;
}

.button {
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 100px;
  display: inline-block;
  margin: 20px;
  margin-top:0px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  // cursor: pointer;
}

.button:hover {
  background-color: darken(white, 10%);
}

.fa {
  color: rgba(0, 0, 0,0.4);
  font-size: 40px;
  line-height: 100px;
}

/* タブレット */
@media (max-width: 1000px) {
  .hello {
    height: 88vh;
  }
  h1 {
    padding-top: 30vh;
    font-size: 40px;
  }
}
/* スマートフォン */
@media (max-width: 670px) {
  .hello {
    height: 82h;
    background: linear-gradient(
      to bottom,
      rgb(148, 115, 221) 0%,
      rgb(51, 191, 219) 100%
  );
  }
  h1 {
    padding-top: 10vh;
    font-size: 30px;
  }

  h3{
    margin-top : 70px;
    margin-bottom: 10px
  }
  .button{
    width:30%;

  }
}
</style>
