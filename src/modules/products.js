import axios from "axios";
export default {
    namespaced: true,
    state: {
        data: {},
        products:[]
    },
    getters: {
        // data: state => state.data,
    },
    actions: {
        getProducts({ commit }) {
            commit('getProductData');
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
    },
    mutations: {
        getProductData(state, products) {
            state.products = products;
        }
    }
}


// modules/jokes.js
