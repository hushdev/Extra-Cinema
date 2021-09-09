import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: localStorage.getItem('user-token') || ''
  },
  mutations: {
    setAuthUser(state, user) {
      state.user = user;
    },
    setAuthToken(state, token) {
      state.token = token;
    }

  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null;
    },
    getAuthToken(state){
      return state.token;
    }
  },
  actions: {},
  modules: {},
});
