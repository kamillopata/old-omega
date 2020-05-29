import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

console.log(process.env);

firebase.initializeApp({
  apiKey: `${process.env.VUE_APP_FIREBASE_WEB_API_KEY}`,
  authDomain: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${process.env.VUE_APP_FIREBASE_MESSAGING_SEND_ID}`,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
