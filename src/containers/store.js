import Vue from 'vue';
import Vuex from 'vuex';
import counter from './Counter/module';
import user from './User/module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter,
    user
  }
});

if (module.hot) {
  module.hot.accept([
    './Counter/module',
    './User/module'
  ], () => {
    store.hotUpdate({
      modules: {
        counter,
        user
      }
    });
  });
}

export default  store;
