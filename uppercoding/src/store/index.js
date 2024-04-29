import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 使用 this.$store.state.key
  state: {
    oauth: {},
  },
  // this.$store.commit("key")
  mutations: {
    setState(state, payload = {}) {
      const { key, value } = payload;
      state[key] = value;
    },
  },
  // this.$store.dispatch('key')
  actions: {},
  plugins: [
    createPersistedState({
      key: "upper_coding",
      paths: ["oauth"],
    }),
  ],
});

export default store;
