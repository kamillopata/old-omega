import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: {
      namespaced: true,
      state: {
        id: null,
        email: null,
      },
      getters: {
        id(state) {
          return state.id;
        },
        email(state) {
          return state.email;
        },
      },
      actions: {
        async register({ commit }, event) {
          const response = await firebase.auth()
            .createUserWithEmailAndPassword(event.email, event.password);
          commit('id', response.user.uid);
          commit('email', response.user.email);
        },
        async login({ commit }, event) {
          const response = await firebase.auth()
            .signInWithEmailAndPassword(event.email, event.password);
          console.log(response.user);
          commit('id', response.user.uid);
          commit('email', response.user.email);
        },
      },
      mutations: {
        id(state, id) {
          state.id = id;
        },
        email(state, email) {
          state.email = email;
        },
      },
    },
  },
});
