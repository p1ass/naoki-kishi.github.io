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

<style lang="scss" scoped>
.contacts-wrapper{
  text-align: center;
}
</style>
