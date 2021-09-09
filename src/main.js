import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/scss/main.scss';
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
