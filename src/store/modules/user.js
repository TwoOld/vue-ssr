const state = {
  count: 108,
  items: {}
}

const mutations = {
  add(state) {
    state.count += 1
  },
  setItem(state, item) {
    // Vue.set(state.items, ...item)
    console.log('set item', item)
  }
}

const actions = {
  fetchItem({ commit }) {
    this.$http.get('/user/info').then(res => {
      commit('setItem', res.data.data)
    }).catch(err => console.log(err))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
