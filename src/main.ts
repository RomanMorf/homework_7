import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/style.scss";

import shortNumber from "@/heplers/shortNumber.filter";

import Loader from "vue-tiktuk-loader";
import Header from "vue-tiktuk-header";

Vue.config.productionTip = false;

Vue.component("Header", Header);
Vue.component("Loader", Loader);

Vue.filter("short", shortNumber);

import firebase from "firebase/app";
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyCFtF-44Pr3hCpgMR7MY6MvwPmfgStkELY",
  authDomain: "tiktuk-api-mock.firebaseapp.com",
  databaseURL: "https://tiktuk-api-mock-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "tiktuk-api-mock",
  storageBucket: "tiktuk-api-mock.appspot.com",
  messagingSenderId: "456081654165",
  appId: "1:456081654165:web:9e1fb7780791f528c2f69c"
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
