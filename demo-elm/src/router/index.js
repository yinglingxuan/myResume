import Vue from 'vue'
import Router from 'vue-router'
import homes from '@/pages/Homes'
import firsts from '@/pages/FirstHome'
import tow from '@/pages/towHome'
import three from '@/pages/threeHome'
import four from '@/pages/fourHome'
import contact from '@/pages/contactHome'
import production from '@/pages/productionHome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: homes
    },
    {
      path: '/home',
      name: 'home',
      component: homes
    },
    {
      path: '/firsts',
      name: 'firsts',
      component: firsts
    },
    {
      path: '/tow',
      name: 'tow',
      component: tow
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/production',
      name: 'production',
      component: production
    }
  ]
})
