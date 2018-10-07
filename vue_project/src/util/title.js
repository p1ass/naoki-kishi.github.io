export default {
  mounted () {
    let { title } = this.$options
    if (title) {
      title = typeof title === 'function' ? title.call(this) : title
      document.title = `${title} Naoki Kishi's Portfolio`
    }
  }
}
// https: qiita.com/livejam_db/items/a9d8a8cbead668bad18e
