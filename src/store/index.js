import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import actions from './action/action'
import state from './state/state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
	actions,
	mutations
})
