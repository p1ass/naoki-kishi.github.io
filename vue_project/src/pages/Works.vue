<template>
<div class = "works-wrapper">
  <pageTitle title="Works"></pageTitle>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'Works',
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
.works-wrapper{
  text-align: center;
}
</style>
