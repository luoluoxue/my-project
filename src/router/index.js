import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import My from '@/views/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})