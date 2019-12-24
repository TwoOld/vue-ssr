import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            player
        }
    })
}