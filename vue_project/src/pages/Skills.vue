<template>
<div class = 'skills-wrapper'>
  <h1>Skills</h1>
  <div class='skills'>
    <div class='skill'>
    </div>
    <div class='skill'>
    </div>
    <div class='skill'>
    </div>
    <div class='skill'>
    </div>
    <div class='skill'>
    </div>
    <div class='skill'>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {}
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.skills-wrapper {
  text-align: center;
}

.skills {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}

.skill {
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0,0.1);
  /* border: 2px solid rgba(79, 210, 219,0.4); */
  border-radius: 30px;
}

@media(max-width:1000px){
  .skill{
    width : 260px;
    height: 260px;
  }
}

h1 {
  font-weight: normal;
}
</style>
