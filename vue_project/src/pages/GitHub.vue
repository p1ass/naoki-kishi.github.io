<template>
<div class = "github-wrapper">
  <pageTitle title="GitHub"></pageTitle>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'GitHub',
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
<style lang="scss" scoped>

.github-wrapper{
  text-align: center;
}
</style>
