<template>
  <div>
    <h1>Index!</h1>
    <p>Best {{best}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    best() {
      return this.$store.state.player.best.player_name || '?'
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  background: antiquewhite;
}
</style>