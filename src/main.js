/* eslint-disable arrow-parens */
import Vue from 'vue';
import fastclick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/reset.css';
import './assets/style/iconfont.css';
import http from './api/http';

Vue.prototype.$http = http;
Vue.config.productionTip = false;
fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
