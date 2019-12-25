<template>
  <div>
    <h1>Detail</h1>
    <ul>
      <li
        v-for="item in list"
        :key="item.player_id"
        @click="handleBest(item)"
      >{{ item.player_name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    console.log('async data detail')
    return store.dispatch('player/fetchList')
  },
  computed: {
    list() {
      return this.$store.state.player.list
    }
  },
  methods: {
    handleBest(payload) {
      this.$store.commit('player/SET_BEST', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: aquamarine;
}
li {
  cursor: pointer;
}
</style>