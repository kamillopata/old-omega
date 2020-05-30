import firebase from 'firebase/app';
import 'firebase/auth';

export default {
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
};
