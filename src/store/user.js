import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const dectectStylist = (email) => email.includes('+stylist');
const detectGroup = (email) => (dectectStylist(email) ? 'stylist' : 'customer');

export default {
  namespaced: true,
  state: {
    uid: null,
    name: null,
    email: null,
    group: null,
  },
  getters: {
    uid(state) {
      return state.uid;
    },
    email(state) {
      return state.email;
    },
    name(state) {
      return state.name;
    },
    group(state) {
      return state.group;
    },
  },
  actions: {
    async register({ commit, getters }, event) {
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(event.email, event.password);
      commit('uid', response.user.uid);
      commit('email', response.user.email);
      commit('name', event.name);
      commit('group', detectGroup(getters.email));
      firebase.database().ref(`users/${getters.uid}`).set({
        uid: getters.uid,
        name: getters.name,
        group: getters.group,
        location: event.location,
        tags: event.tags.split(' '),
      });
    },
    async login({ commit, getters }, event) {
      const response = await firebase.auth()
        .signInWithEmailAndPassword(event.email, event.password);
      commit('uid', response.user.uid);
      commit('email', response.user.email);

      const snapshot = await firebase.database().ref(`users/${getters.uid}`).once('value');
      const user = snapshot.val();
      commit('name', user.name);
      commit('group', user.group);
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit('uid', null);
      commit('name', null);
      commit('email', null);
      commit('group', null);
    },
  },
  mutations: {
    uid(state, uid) {
      state.uid = uid;
    },
    email(state, email) {
      state.email = email;
    },
    name(state, name) {
      state.name = name;
    },
    group(state, group) {
      state.group = group;
    },
  },
};
