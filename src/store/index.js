import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
  },
  plugins: [
    createPersistedState(),
  ],
});
