<template>
  <div>
    <h1>Detail</h1>
    <ul>
      <li v-for="item in list" :key="item.player_id">{{ item.player_name }}</li>
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
  }
}
</script>

<style lang="scss" scoped>
</style>