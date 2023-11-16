import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home'
import My from '@/views/my'

// const Home = () => import("@/views/home");
// const My = () => import("@/views/my");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/my',
    name: 'my',
    component: My
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
