<template>
  <div>
    <h1>Detail1</h1>
    <p>hello {{item.name}}</p>
  </div>
</template>

<script>
export default {
  asyncData({ store }) {
    console.log('async data detail', store.state.user.item)

    if (!store.state.user.item.name) {
      return store.dispatch('user/fetchItem')
    }
  },
  computed: {
    item() {
      return this.$store.state.user.item
    }
  },
  beforeCreate() {
    console.log('before create: detail')
  },
  created() {
    console.log('create: detail')
    setTimeout(
      () => this.$store.commit('user/initItem', { name: 'archie' }),
      2000
    )
  },
  beforeMount() {
    console.log('before mount: detail')
  },
  mounted() {
    console.log('mounted: detail', window.__INITIAL_STATE__)
  },
  beforeDestroy() {
    console.log('before destroy: detail')
  },
  destroyed() {
    console.log('destroyed: detail')
  },
  beforeUpdate() {
    console.log('before update: detail')
  },
  updated() {
    console.log('updated: detail')
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: blue;
}
</style>
