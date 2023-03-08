import axios from "axios";
export default {
    state: {
         users:[],
    },
    getters: {

    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        setUsers(state, users) {
            state.users = users;
        },
    },
    actions: {
        loadUsers(context) {
          axios.get("/data/users.json")
          .then(res => {
            context.commit('setUsers', res.data);
          })
          .catch(error => {
            console.error(error);
          });
        },
    }
}
