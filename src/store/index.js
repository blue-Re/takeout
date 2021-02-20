/* 
  Vuex最核心的管理对象store
*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// 1.使用插件
Vue.use(Vuex)

// 2.创建vuex插件中的 store 实例并导出
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

