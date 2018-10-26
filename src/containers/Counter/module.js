export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    }
  },
  actions: {
    increment({ commit }, amount) {
      commit('increment', { amount });
    },
    decrement({ commit }, amount) {
      commit('increment', { amount: -amount });
    }
  }
};
