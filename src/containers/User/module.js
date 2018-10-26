import * as api from '../../api';

export default {
  namespaced: true,
  state: {
    id: 0,
    fetching: false,
    data: null,
    error: null
  },
  mutations: {
    fetch(state, payload) {
      state.id = payload.id,
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
    }
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
    }
  }
};
