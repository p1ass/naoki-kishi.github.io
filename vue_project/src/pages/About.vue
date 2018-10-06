<template>
<div class = "about-wrapper">
  <pageTitle title="About Me"></pageTitle>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'About',
  components: {
    pageTitle
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about-wrapper{
  text-align: center;
}
</style>
