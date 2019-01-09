const state = {
  value: "Hello from Vuex!"
};

const getters = {
  value: state => state.value
};

export default {
  namespaced: true,
  state,
  getters
};
