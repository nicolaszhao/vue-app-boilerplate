import './polyfills';
import 'config/public-path';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
