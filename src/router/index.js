/*
  路由器模块
  */
import Vue from "vue"
import VueRouter from "vue-router"

import Msite from  "../pages/Msite/Msite.vue"
import Search from  "../pages/Search/Search.vue"
import Order from  "../pages/Order/Order.vue"
import Profile from  "../pages/Profile/Profile.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})


