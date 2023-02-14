import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import listProducts from '../views/listProducts.vue'

Vue.use(VueRouter)

const routes = [
 {
      path: '/listProducts',
      name: 'listProducts',
      component: listProducts
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
