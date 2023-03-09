export default {
    namespaced: true,
    state: {
        data: {},
        cart: JSON.parse(localStorage.getItem('storageCart')) || [],
    },
    getters: {
        cart: state => state.cart,
        totalItems: state => state.cart.reduce((acc, item) => acc + item.qty, 0),
        isCart () {
            return state.cart;
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
        getCartData({ commit }) {
            commit('getCartData');
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
    },
    mutations: {
        getCartData(state, cart) {
            state.cart = cart;
            console.log(state.cart);
        },
        addTodo(state, newText) {
            state.todolist.push({
                id: state.todolist.id + 1,
                text: newText,
                done: false
            })
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
    }
}


// modules/jokes.js
