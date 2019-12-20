import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export function createStore($http) {
  Vuex.Store.prototype.$http = $http
  return new Vuex.Store({
    modules: {
      user
    }
  })
}
