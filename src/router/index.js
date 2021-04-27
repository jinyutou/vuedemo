import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/Chart.vue')
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import('../views/tree/Tree.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/basic/Icon.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/basic/Button.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('../views/basic/Link.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/form/Radio.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../views/form/Checkbox.vue')
  },
  {
    path: '/user/UserList',
    name: 'User',
    component: () => import('../views/user/UserList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
