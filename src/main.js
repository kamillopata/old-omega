import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import * as PARAMS from '../params';

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: `${PARAMS.YOUR_API_KEY}`,
  authDomain: `${PARAMS.YOUR_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${PARAMS.YOUR_PROJECT_ID}.firebaseio.com`,
  projectId: `${PARAMS.YOUR_PROJECT_ID}`,
  storageBucket: `${PARAMS.YOUR_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${PARAMS.YOUR_MESSAGING_SEND_ID}`,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
