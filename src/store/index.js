import Vue from 'vue'
import Vuex from 'vuex'
// import { createStore } from 'vuex'
Vue.use(Vuex)
// import axios from "axios";
import products from '../modules/products'
import cart from '../modules/cart'


const store = new Vuex.Store({
  modules: {
    products,
    cart
  }
})
export default store
// window.store = store
