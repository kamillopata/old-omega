import Vue from 'vue';
import firebase from 'firebase';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import en from './locale/en.json';

const requiredEnvironmentalVariables = [
  process.env.VUE_APP_FIREBASE_WEB_API_KEY,
  process.env.VUE_APP_FIREBASE_PROJECT_ID,
  process.env.VUE_APP_FIREBASE_MESSAGING_SEND_ID,
];

if (requiredEnvironmentalVariables.filter((variable) => !variable).length) {
  console.log('environmental variables', requiredEnvironmentalVariables);
  throw new Error('Empty environment variable');
}

firebase.initializeApp({
  apiKey: `${process.env.VUE_APP_FIREBASE_WEB_API_KEY}`,
  authDomain: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${process.env.VUE_APP_FIREBASE_MESSAGING_SEND_ID}`,
});

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en,
  },
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
