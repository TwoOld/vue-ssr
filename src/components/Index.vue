<template>
  <div>
    <h2>Index1</h2>
    <h3>{{item.name}}</h3>
    <p>num : {{count}}</p>
    <p v-if="count%2">mounted?</p>
    <button @click="$store.commit('user/add')">add</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.user.count
    },
    item() {
      return this.$store.state.user.item
    }
  },
  asyncData({ store, route }) {
    console.log('async data index')
    // 触发 action 后，会返回 Promise
    return store.dispatch('user/fetchItem')
  },
  beforeCreate() {
    console.log('before create: index')
  },
  created() {
    console.log('created: index')
    // this.$store.dispatch('user/fetchItem')
  },
  beforeMount() {
    console.log('before mount: index')
  },
  mounted() {
    console.log('mounted: index', this.$store.state.user)
  },
  beforeDestroy() {
    console.log('before destroy: index')
  },
  destroyed() {
    console.log('destroyed: index')
  },
  beforeUpdate() {
    console.log('before update: index')
  },
  updated() {
    console.log('updated: index')
  }
}
</script>

<style lang="scss" scoped>
</style>
