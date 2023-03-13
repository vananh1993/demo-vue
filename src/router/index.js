import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import listProducts from '../views/listProducts.vue';

Vue.use(VueRouter)

const routes = [
 {
      path: '/listProducts',
      name: 'listProducts',
      component: listProducts
  },
  {
    path: '/wheel',
    name: 'wheel',
    component: () => import(/* webpackChunkName: "about" */ '../views/LuckyWheel.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  // },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: () => import(/* webpackChunkName: "cart" */ '../views/cart.vue')
  // },
  // {
  //   path: '/checkout',
  //   name: 'checkout',
  //   component: () => import(/* webpackChunkName: "cart" */ '../views/Checkout.vue')
  // },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: () => import(/* webpackChunkName: "cart" */ '../views/Users.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
