import Vue from 'vue'
import App from './App.vue'
import './quasar'

import Vuex from 'vuex'
import state from "./store/state";
import * as getters from "./store/getters";
import * as mutations from "./store/mutations";
import * as actions from "./store/actions";
import createPersistedState from 'vuex-persistedstate'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  //plugins: [createPersistedState()],
})

new Vue({
  store : store,
  render: h => h(App)
}).$mount('#app')
