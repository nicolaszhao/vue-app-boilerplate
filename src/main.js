import './pages/polyfills';
import './configs/public-path';
import Vue from 'vue';
import App from './pages/App.vue';
import router from './pages/router';
import store from './pages/store';

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
