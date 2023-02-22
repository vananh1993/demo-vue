import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import listProducts from '../views/listProducts.vue'
import cart from '../views/cart.vue'

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
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
