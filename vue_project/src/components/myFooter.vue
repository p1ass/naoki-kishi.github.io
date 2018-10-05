<template>
  <footer>
    <p>aaa</p>
    <p>bbb</p>
    <p>ccc</p>

  </footer>
</template>

<script>

export default {
  name: 'myFooter',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  width : 100%;
  background-color : rgba(0,0,0,1);
  color : white;
  position: absolute;
  bottom: 0px;
}

p{
  padding : 10px 64px;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  margin:0px;
}

p:hover{
    background-color : rgba(255,255,255,0.5);

}
</style>
