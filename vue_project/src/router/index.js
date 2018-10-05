import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'
import About from '@/pages/About'
import Skills from '@/pages/Skills'
import Works from '@/pages/Works'
import GitHub from '@/pages/GitHub'
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
      path: '/about',
      name: 'About',
      component: About
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
      path: '/github',
      name: 'GitHub',
      component: GitHub
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
