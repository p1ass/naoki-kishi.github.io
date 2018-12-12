<template>
  <div class="page-title">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'pageTitle',
  props: ['title'],
  date () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
</style>
