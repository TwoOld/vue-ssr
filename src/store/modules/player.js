import Vue from 'vue'
const state = {
    best: {},
    list: []
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
        return this.$http.get('/player/list').then(res => {
            console.log('player fetch list:', res)
            if (res.code === 0) {
                commit('INIT_LIST', res.data)
                if (res.data.length) {
                    commit('SET_BEST', res.data[0])
                }
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}