import firebase from 'firebase/app';
import 'firebase/auth';

const dectectStylist = (email) => email.includes('+stylist');
const detectCategory = (email) => (dectectStylist(email) ? 'stylist' : 'customer');

export default {
  namespaced: true,
  state: {
    uid: null,
    email: null,
    category: null,
  },
  getters: {
    uid(state) {
      return state.uid;
    },
    email(state) {
      return state.email;
    },
    category(state) {
      return state.category;
    },
  },
  actions: {
    async register({ commit }, event) {
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(event.email, event.password);
      commit('user', response.user);
    },
    async login({ commit }, event) {
      const response = await firebase.auth()
        .signInWithEmailAndPassword(event.email, event.password);
      commit('user', response.user);
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit('user', {});
    },
  },
  mutations: {
    user(state, user) {
      state.uid = user.uid;
      state.email = user.email;
      state.category = detectCategory(user.email);
    },
    uid(state, uid) {
      state.uid = uid;
    },
    email(state, email) {
      state.email = email;
    },
    category(state, category) {
      state.category = category;
    },
  },
};
