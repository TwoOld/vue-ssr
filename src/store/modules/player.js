import Vue from 'vue'
const state = {
    best: {
        player_name: 'chiu'
    },
    list: [
        { player_id: 1, player_name: 'chiu', player_age: 29 }
    ]
}

const mutations = {
    INIT_LIST(state, payload) {
        state.list = payload
    },
    SET_BEST(state, payload) {
        Object.keys(payload).forEach(k => Vue.set(state.best, k, payload[k]))
    }
}

const actions = {
    fetchList({ commit }) {
        commit('INIT_LIST', [
            { player_id: 1, player_name: 'chiu', player_age: 29 },
            { player_id: 2, player_name: 'james', player_age: 35 },
        ])
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}