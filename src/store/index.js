import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      result: 10,
      count: 1,
      todolist: [
            { id: 1, text: 'To do 1', done: false },
			{ id: 2, text: 'To do 2', done: false },
			{ id: 3, text: 'To do 3', done: false },
			{ id: 4, text: 'To do 4', done: true }
      ]
  },
  getters: {
      doneTodo: state => {
          return state.todolist.filter(todo => todolist.done)
      }
  },
  mutations: {
      increament (state, payload) {
          state.count += payload.amount
      }
  },
  actions: {
  },
  modules: {
  }
})
