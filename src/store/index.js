import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios";

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
      checkoutAdresses: JSON.parse(localStorage.getItem('checkoutAdresses')) || [],
      // users: [],
      users:[],
      products:[]
  },
  getters: {
      // products: state => state.products,
      cart: state => state.cart,
      // users: state => state.users,
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
      getProductData(state, products) {
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
      },
      increCart(state, id) {
          // console.log(id);
          const currentItem = state.cart.find(product => product.id === id);
          currentItem.qty++;
      },
      decreCart(state, id) {
          // console.log(id);
          const currentItem = state.cart.find(product => product.id === id);
          if (currentItem.qty > 1) {
               currentItem.qty--;
          } else {
              state.cart = state.cart.filter(el => el.id !== id)
          }
      },
      decreCart2(state, id) {
          // console.log(id);
          const currentItem = state.cart.find(product => product.id === id);
          if (currentItem.qty > 1) {
               currentItem.qty--;
          } else {
              state.cart = state.cart.filter(el => el.id !== id)
          }
      },

      decreCart(state, id) {
        const affectItem = state.cart.find(product => product.id === id);

        affectItem.qty = Math.max(0, affectItem.qty - 1);
        state.cart = state.cart.filter((item) => item.qty > 0);
      },
      deleteCart(state, id) {
          const currentItem = state.cart.find(product => product.id === id);
          state.cart = state.cart.filter(el => el.id !== id)
      },
      SET_USERS(state, users) {
          state.users = users;
      },
      setUsers(state, users) {
          state.users = users;
      },
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
        increCart({ commit }, id) {
          // console.log(id);
          commit("increCart", id);

        },
        decreCart({ commit }, id) {
          commit("decreCart", id);
        },
        deleteCart({ commit }, id) {
          commit("deleteCart", id);
        },
        loadUsers(context) {
          axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res => {
            context.commit('setUsers', res.data);
          })
          .catch(error => {
            console.error(error);
          });
        },
        loadProducts(context) {
          axios.get("/data/products.json")
          .then(res => {
            context.commit('getProductData', res.data);
          })
          .catch(error => {
            console.error(error);
          });
        },
        // async fetchUsers({ commit }) {
        //     try {
        //         const data = await axios.get(
        //         "https://jsonplaceholder.typicode.com/users"
        //     );
        //     commit("SET_USERS", data.data);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
    },
  modules: {
  }
})
