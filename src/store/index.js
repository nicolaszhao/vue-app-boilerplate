import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import counter from './modules/counter';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    counter,
  },
});

if (module.hot) {
  module.hot.accept([
    './modules/user',
    './modules/counter',
  ], () => {
    store.hotUpdate({
      modules: {
        user,
        counter,
      },
    });
  });
}

export default store;
