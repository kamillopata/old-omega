import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  namespaced: true,
  state: {
    uid: null,
    email: null,
  },
  getters: {
    uid(state) {
      return state.uid;
    },
    email(state) {
      return state.email;
    },
  },
  actions: {
    async register({ commit }, event) {
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(event.email, event.password);
      commit('uid', response.user.uid);
      commit('email', response.user.email);
    },
    async login({ commit }, event) {
      const response = await firebase.auth()
        .signInWithEmailAndPassword(event.email, event.password);
      commit('uid', response.user.uid);
      commit('email', response.user.email);
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit('uid', null);
      commit('email', null);
    },
  },
  mutations: {
    uid(state, uid) {
      state.uid = uid;
    },
    email(state, email) {
      state.email = email;
    },
  },
};
