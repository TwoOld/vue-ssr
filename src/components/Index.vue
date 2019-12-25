<template>
  <div>
    <h1>Index!</h1>
    <p>Best {{best}}</p>
    <el-button type="primary" @click="reset">reset</el-button>
  </div>
</template>

<script>
export default {
  computed: {
    best() {
      return this.$store.state.player.best.player_name || '?'
    }
  },
  methods: {
    reset() {
      this.$store.commit('player/SET_BEST', { player_name: '' })
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  background: antiquewhite;
}
</style>