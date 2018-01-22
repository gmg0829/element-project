import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import index from '@/view/index'
import table from '@/view/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
