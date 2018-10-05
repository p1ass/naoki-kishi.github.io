import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'
import Skills from '@/pages/Skills'
import Works from '@/pages/Works'
import Contacts from '@/pages/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
