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
              imgUrl: '1.png',
              price: 980
          },
          {
              id: 2,
              title: 'T-shirt',
              imgUrl: '2.png',
              price: 980
          },
          {
              id: 3,
              title: 'T-shirt',
              imgUrl: '3.png',
              price: 980
          },
          {
              id: 4,
              title: 'T-shirt',
              imgUrl: '4.png',
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
      getProductData(state) {
          state.products = products;
      },
      AddItemToCart(state, item) {
          const addedItem = state.cart.find(product => product.id === item.id);
          if (addedItem) {
            addedItem.qty++;
          } else {
            state.cart.push({...item, qty: 1});
          }
          // console.log(state.cart);
      },
      saveItemCart(state, item) {
          commit('saveCart');
      }
  },
  actions: {
      addToCart({ commit }, item) {
          commit("AddItemToCart", item)
      },
      saveCart({ state }) {
          localStorage.setItem('storageCart', JSON.stringify(state.cart))
          // console.log(storageCart);
      },
      getProducts({ commit }) {
        commit('getProductData');
      },
  },
  modules: {
  }
})
