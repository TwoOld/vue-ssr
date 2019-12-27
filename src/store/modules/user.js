import Vue from 'vue'
const state = {
    user_info: {},
    token: ''
}

const mutations = {
    SET_INFO(state, payload) {
        state.user_info = payload
    },
    SET_TOKEN(state, payload) {
        state.token = payload
    },
}

const actions = {
    login({ state, commit }, payload) {
        console.log(payload);

        return this.$http.post('/api/user/login', payload).then(res => {
            console.log('login:', res)
            if (res.code === 0) {
                commit('SET_INFO', res.data)
                commit('SET_TOKEN', res.data.token)
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