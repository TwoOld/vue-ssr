<template>
  <div>
    <h1>Detail</h1>
    <!-- <p>hello {{items.name}}</p> -->
  </div>
</template>

<script>
export default {
  // computed: {
  //   items() {
  //     return this.$store.state.user.items
  //   }
  // },
  beforeCreate() {
    console.log('before create: detail')
  },
  created() {
    console.log('create: detail', this.$store.state)
  },
  beforeMount() {
    console.log('before mount: detail')
  },
  mounted() {
    console.log('mounted: detail')
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
</style>
