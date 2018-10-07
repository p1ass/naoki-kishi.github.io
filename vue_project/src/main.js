// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import titleMixin from './util/title'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.mixin(titleMixin)

Vue.use(VueAnalytics, {
  id: 'UA-127036212-1',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
