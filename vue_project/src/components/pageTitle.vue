<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'pageTitle',
  props: ['title']
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
</style>
