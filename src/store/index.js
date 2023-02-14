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
      listproducts: [
          {
              id: 1,
              name: 'T-shirt 1',
              image: "1.webp",
              img : {
                "type": "image",
                "source": "1.webp"
              },
              cart: false
          },
          {
              id: 2,
              name: 'T-shirt',
              image: "1.webp",
              img : {
                "type": "image",
                "source": "1.webp"
              },
              cart: false
          },
          {
              id: 3,
              name: 'T-shirt',
              image: "1.webp",
              img : {
                "type": "image",
                "source": "1.webp"
              },
              cart: false
          },
          {
              id: 4,
              name: 'T-shirt',
              image: "1.webp",
              img : {
                "type": "image",
                "source": "1.webp"
              },
              cart: false
          }
      ]
  },
  getters: {
      doneTodo: state => {
          return state.todolist.filter(todo => todolist.done)
      }
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
      }
  },
  actions: {

  },
  modules: {
  }
})
