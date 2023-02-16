import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      result: 10,
      count: 1,
      todolist: [
            { id: 1, title: 'To do 1', done: false },
			{ id: 2, title: 'To do 2', done: false },
			{ id: 3, title: 'To do 3', done: false },
			{ id: 4, title: 'To do 4', done: true }
      ],
      cart: JSON.parse(localStorage.getItem('storageCart')) || [],
      products: [
          {
              id: 1,
              title: 'T-shirt 1',
              imgUrl: '1.webp',
              price: 980
          },
          {
              id: 2,
              title: 'T-shirt',
              imgUrl: '1.webp',
              price: 980
          },
          {
              id: 3,
              title: 'T-shirt',
              imgUrl: '1.webp',
              price: 980
          },
          {
              id: 4,
              title: 'T-shirt',
              imgUrl: '1.webp',
              price: 980
          }
      ]
  },
  getters: {
      products: state => state.products,
      cart: state => state.cart
  },
  mutations: {
      incre(state, payload) {
          state.count += payload.amount
      },
      addTodo(state, newText) {
          state.todolist.push({
              id: state.todolist.id + 1,
              text: newText,
              done: false
          })
      },
      getProduct(state) {
          state.products = products;
      },
      addCart(state, item) {

      },
      saveCart(state, item) {

      }
  },
  actions: {

  },
  modules: {
  }
})
