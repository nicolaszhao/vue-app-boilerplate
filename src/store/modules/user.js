import * as api from '@/api';

export default {
  namespaced: true,
  state: {
    fetching: false,
    data: {},
    error: null,
  },
  mutations: {
    fetch(state) {
      state.fetching = true;
    },
    update(state, payload) {
      state.fetching = false;
      state.data = payload;
      state.error = null;
    },
    throw(state, payload) {
      state.fetching = false;
      state.error = payload;
    },
  },
  actions: {
    async fetch({ commit }, id) {
      commit('fetch', { id });

      try {
        const data = await api.fetchUser();

        commit('update', data);
      } catch (error) {
        commit('throw', error);
      }
    },
  },
};
