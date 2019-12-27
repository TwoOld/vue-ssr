import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import player from './modules/player'
import PlayerAPI from '@/api/player'

Vue.use(Vuex)

export function createStore($http) {
    Vuex.Store.prototype.$http = $http
    Vuex.Store.prototype.$player = PlayerAPI($http)
    return new Vuex.Store({
        modules: {
            user,
            player
        }
    })
}