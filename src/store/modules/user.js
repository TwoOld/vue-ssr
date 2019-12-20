import Vue from 'vue'

const state = {
  count: 108,
  item: {}
}

const mutations = {
  add(state) {
    state.count += 1
  },
  setItem(state, { id, name, age }) {
    Vue.set(state.item, 'id', id)
    Vue.set(state.item, 'name', name)
    Vue.set(state.item, 'age', age)
  },
  initItem(state, item) {
    state.item = item
  }
}

const actions = {
  fetchItem({ commit }) {
    return this.$http.get('/user/info').then(res => {
      console.log(res.data.data)
      commit('initItem', res.data.data)
    }).catch(err => console.log(err))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
