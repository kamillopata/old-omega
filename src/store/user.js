import firebase from 'firebase/app';
import 'firebase/auth';

const dectectStylist = (email) => email.includes('+stylist');
const detectCategory = (email) => (dectectStylist(email) ? 'stylist' : 'customer');

export default {
  namespaced: true,
  state: {
    uid: null,
    name: null,
    email: null,
    category: null,
  },
  getters: {
    uid(state) {
      return state.uid;
    },
    name(state) {
      return state.name;
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
      await response.user.updateProfile({
        displayName: event.name,
      });
      commit('name', event.name);
    },
    async login({ commit }, event) {
      const responseLogin = await firebase.auth()
        .signInWithEmailAndPassword(event.email, event.password);
      commit('user', responseLogin.user);
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit('user', {});
    },
  },
  mutations: {
    user(state, user) {
      state.uid = user.uid;
      state.name = user.displayName;
      state.email = user.email;
      state.category = detectCategory(user.email);
    },
    uid(state, uid) {
      state.uid = uid;
    },
    name(state, name) {
      state.name = name;
    },
    email(state, email) {
      state.email = email;
    },
    category(state, category) {
      state.category = category;
    },
  },
};
