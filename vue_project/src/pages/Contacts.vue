<template>
<div class = "contacts-wrapper">
  <pageTitle title="Contacts"></pageTitle>
</div>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'Contacts',
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
.contacts-wrapper{
  text-align: center;
}
</style>
